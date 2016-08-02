var qr = require('node-qr-image');

var qr_svg = qr.image('www.tinabao.com', { type: 'png', size: 1000});
qr_svg.pipe(require('fs').createWriteStream('tinaq.png'));

//var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
