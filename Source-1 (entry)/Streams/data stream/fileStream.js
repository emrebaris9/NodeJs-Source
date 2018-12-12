var fs = require('fs')

fs.readFile('dosya.txt', "utf8", function (hata, data) {
    if (hata) {
        throw hata;
    }
    console.log(data.toString());
});

fs.writeFile('dosya2.txt', "Yunus ", function (hata) {
    if (hata) {
        throw hata;
    }
    console.log("Yazildi");
});

fs.appendFile('dosya2.txt', "Emre Baris", function (hata) {
    if (hata) {
        throw hata;
    }
    console.log("Eklendi");
});

// fs.unlink('dosya2.txt', function (hata) {
//     if (hata) {
//         throw hata;
//     }
//     console.log("Silindi");
// });     