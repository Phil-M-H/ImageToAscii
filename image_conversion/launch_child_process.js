const { spawn } = require("child_process");
const fs = require('fs');
const debug = 0;
const runImg2Ascii = (img) => {
    var resultant_ascii = [];
    const img_to_ascii = spawn("java", ["Img2Ascii"]);

    // img_to_ascii.stdout.pipe(process.stdout);
    img_to_ascii.stderr.pipe(process.stderr);   //error in the running of the Img2Ascii program
    img_to_ascii.stdout.on('data', data => {
        resultant_ascii.push(data);
    });
    img_to_ascii.on("error", error => {         //error executing the command 'java Img2Ascii'
        console.log(`error launching java program: ${error}`);
    });
    //&& & \n &
    img_to_ascii.on("close", code => {
        // console.log(`child process exited with code ${code}`);
        // console.log(resultant_ascii.length);
        // resultant_ascii.forEach(line => {
        //     process.stdout.write(line.toString());
        // });
    });
    img_to_ascii.stdin.write(img);
    img_to_ascii.stdin.end();
    
}
if (debug) {
    fs.readFile('hcdev.png', (err, data) => {
        if (err) throw err;
        runImg2Ascii(data);
    });
}
module.exports = {runImg2Ascii};
