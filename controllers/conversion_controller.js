const image_conversion = require('../image_conversion/launch_child_process');
// image_conversion.runImg2Ascii(data)
//   .then(ascii_img => {
//       // ascii_img.forEach(data => console.log(data.toString()));
//       // ascii_img.map(data => data.toString());
//       ascii_img.forEach(line_buffer => process.stdout.write(line_buffer.toString()));
//   }).catch(err => {
//       console.log(err);
//   });
function convert(req, res, next) {
    image_conversion.runImg2Ascii(data)
        .then(ascii_img => {
            // ascii_img.map(data => data.toString());
            ascii_img.forEach(line_buffer => process.stdout.write(line_buffer.toString()));
            res.json({ascii: ascii_img});
        })
        .catch(err => console.log(err));
}
module.exports = {
    convert
};