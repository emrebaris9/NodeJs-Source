const fs = require('fs');
const file = 'deepin.mp4';

const ReadStream = fs.createReadStream(file);
const writeStream = fs.createWriteStream('new.mp4');
let progress = 0;

fs.stat(file, (err,data) => {
    const total = data.size;

    ReadStream.on('data', (chunk) => {              // 'data' her data geldiğinde bunu karşılamak için yazıldı, (chunk) bir buffer nesnesi
        progress += chunk.length;
        console.log(Math.round((100*progress)/ total) + '%');   // ilerlemenin yüzdelik gösterimi
    }); 
    
    ReadStream.pipe(writeStream);                   // readstreamden her veri okunduğunda writestream e yazılacak
    writeStream.on('finish', () => {
        console.log(' Yeni dosya oluşturuldu!');
    });
    
});
