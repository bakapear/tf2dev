let fs = require('fs')

let format = {
  cvar: file => {
    let lines = fs.readFileSync(file, 'utf-8').split('\n')
    let out = {}
    for (let i = 0; i < lines.length; i++) {
      let parts = lines[i].split(':', 4)
      if (parts.length !== 4) continue
      let name = parts.shift().trim()
      let value = parts.shift().trim()
      out[name] = value
    }
    return out
  },
  diff: file => {
    let lines = fs.readFileSync(file, 'utf-8').split('\n')
    let out = []
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i]
      if (line.indexOf('( def. ') === -1) continue
      let name = line.match(/"(.*?)"/)[1]
      let value = line.match(/\( def\. "(.*?)"/)[1]
      if (value === '') value = '""'
      else if (value.indexOf(';') >= 0) value = '"' + value + '"'
      out[name] = value
    }
    return out
  }
}

function formatList (list, diffs, out) {
  if (!fs.existsSync(list)) throw new Error(list + ' not found')
  if (!fs.existsSync(diffs)) throw new Error(list + ' not found')
  let LIST = format.cvar(list)

  for (let key in LIST) {
    if (LIST[key] === 'cmd') delete LIST[key]
  }

  delete LIST.sv_cheats
  delete LIST.mat_dxlevel

  let DIFF = format.diff(diffs)
  Object.assign(LIST, DIFF)

  let res = [
    'sv_cheats 1', 'mat_dxlevel 0', '',
    ...Object.entries(LIST).map(x => `${x[0]} ${x[1]}`),
    '', 'sv_cheats 0'
  ]

  fs.writeFileSync(out, res.join('\n'))
}

formatList('cvarlist.txt', 'differences.txt', 'defaults.cfg')
