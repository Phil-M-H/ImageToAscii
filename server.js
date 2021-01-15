const image_conversion = require('./image_conversion/launch_child_process');
const fs = require('fs');

fs.readFile('hcdev.png', (err, data) => {
    if (err) throw err;
    image_conversion.runImg2Ascii(data);
});
