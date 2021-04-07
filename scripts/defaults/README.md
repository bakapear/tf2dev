## TF2 Default Commands Config Generator
Simple script that generates a `defaults.cfg` which sets all variables to their default values when executed.

### Requirements
- NodeJS

### How to use
1. Start TF2 and open up the developer console.
2. Type `cvarlist` and save the output to `cvarlist.txt`
3. Type `differences` and save the output to `differences.txt`
4. Run `node generate.js` and a `defaults.cfg` should pop out!