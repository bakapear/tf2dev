## TF2 Default Commands Config Generator
Simple script that generates a `defaults.cfg` which sets all variables to their default values when executed.

### Requirements
- NodeJS

### Generating `defaults.cfg`
1. Start TF2 and open up the developer console.
2. Type `cvarlist` and save the output to `cvarlist.txt`
3. Type `differences` and save the output to `differences.txt`
4. Run `node generate.js` and a `defaults.cfg` should pop out!

### Running `defaults.cfg`
1. Place `defaults.cfg` in your `tf/cfg` directory.
2. Start TF2 and type `exec defaults.cfg` to apply the default values. \<DO THIS TWO TIMES\>
3. Type `differences` and it should only contain no more than 10 commands that cannot be changed to their defaults:
![Preview](https://user-images.githubusercontent.com/13366049/113835007-cc5fa280-978b-11eb-946b-653672ceecb1.png)<br>
Note: When tabbing out of the game, 3 new command changes happen:<br>
![image](https://user-images.githubusercontent.com/13366049/113836052-d7670280-978c-11eb-9d56-883a9a93e4eb.png)
