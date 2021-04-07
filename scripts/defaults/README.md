## TF2 Default Commands Config Generator
Simple script that generates a `defaults.cfg` which sets all variables to their default values when executed.

### Requirements
- NodeJS
- 

### Generating a proper `defaults.cfg`
1. Start TF2 and open up the developer console.
2. Execute `con_logfile cvarlist.txt; cvarlist; con_logfile ""`. This will create the file `cvarlist.txt` in your tf directory.
3. Move the file to this directory and run `node generate.js` in cmd. A `defaults.cfg` will be generated.
4. Move the config to `tf/cfg` and execute it in-game with `exec defaults`.
5. Execute `con_logfile differences.txt; differences; con_logfile ""`. This will create the file `differences.txt` in your tf directory.
6. Move the file to this directory again and run `node generate.js` one more time. The final `defaults.cfg` will be generated.

After executing `defaults.cfg`, running the `differences` command should only contain no more than 10 commands (+dxlevel) that cannot be changed to their defaults:
![Preview](https://user-images.githubusercontent.com/13366049/113836852-8b688d80-978d-11eb-9ee9-e61d24f16c6d.png)<br>
Note: When tabbing out of the game, 3 new command changes happen:<br>
![Preview](https://user-images.githubusercontent.com/13366049/113837091-c965b180-978d-11eb-86b8-c2a36b92d0d0.png)


