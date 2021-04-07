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
![image](https://user-images.githubusercontent.com/13366049/113836852-8b688d80-978d-11eb-9ee9-e61d24f16c6d.png)<br>
Note: When tabbing out of the game, 3 new command changes happen:<br>
![image](https://user-images.githubusercontent.com/13366049/113837091-c965b180-978d-11eb-86b8-c2a36b92d0d0.png)


