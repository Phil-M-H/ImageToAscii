const image_conversion = require('../image_conversion/launch_child_process');
const fs = require('fs');
// image_conversion.runImg2Ascii(data)
//   .then(ascii_img => {
//       // ascii_img.forEach(data => console.log(data.toString()));
//       // ascii_img.map(data => data.toString());
//       ascii_img.forEach(line_buffer => process.stdout.write(line_buffer.toString()));
//   }).catch(err => {
//       console.log(err);
//   });
function convert(req, res, next) {
    // console.log(Object.keys(req.body).length);
    // console.log(req.body);
    // console.log(typeof(req.file));
    // fs.writeFileSync('without image', req);
    // if (!(req.body.img)) {
    //     throw new Error('request.body.img is not defined');
    // }
    image_conversion.runImg2Ascii(req.file)
        .then(ascii_img => {
            // ascii_img.map(data => data.toString());
            // ascii_img.forEach(line_buffer => process.stdout.write(line_buffer.toString()));
            res.json({ascii: ascii_img});
        })
        .catch(err => console.log(err));
}
module.exports = {
    convert
};