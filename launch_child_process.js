const { spawn } = require("child_process");
const fs = require('fs');
function runImg2Ascii(img) {
    const img_to_ascii = spawn("java", ["Img2Ascii"]);

    img_to_ascii.stdout.on("data", data => {
        console.log(`stdout ${data}`);
    });
    img_to_ascii.stderr.on("data", data => {
        console.log(`stderr ${data}`);
    });
    img_to_ascii.on("error", error => {
        console.log(`error ${error}`);
    });
    
    img_to_ascii.on("close", code => {
        console.log(`child process exited with code ${code}`);
    });
    img_to_ascii.stdin.write(img);
    img_to_ascii.stdin.end();
    
}
fs.readFile('hcdev.png', (err, data) => {
    if (err) throw err;
    runImg2Ascii(data);
});