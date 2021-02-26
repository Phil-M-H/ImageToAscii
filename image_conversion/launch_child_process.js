const { spawn } = require("child_process");
const fs = require('fs');
const debug = 0;
const runImg2Ascii = (img) => {
    return new Promise((resolve, reject) => {
        var resultant_ascii = [];
        const img_to_ascii = spawn("java", ["Img2Ascii"]);
    
        //error in the running of the Img2Ascii program
        img_to_ascii.stderr.on('data', error_data => {
            reject(error_data);
        });
        //error executing the command 'java Img2Ascii'
        img_to_ascii.on("error", error => {
            reject(error);
        });
        //converted ascii
        img_to_ascii.stdout.on('data', data => {
            // console.log(data.toString());
            resultant_ascii.push(data);
        });

        img_to_ascii.on("close", code => {
            resolve(resultant_ascii);
        });
        img_to_ascii.stdin.write(img.buffer);
        img_to_ascii.stdin.end();    
    });
}
if (debug) {
    fs.readFile('hcdev.png', (err, data) => {
        if (err) throw err;
        runImg2Ascii(data);
    });
}
module.exports = {runImg2Ascii};
