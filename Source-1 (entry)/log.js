var log = {        // ilk modül yazımı
    information: function (info) {
        console.log("Information: " + info)
    },
    fault: function (fault) {
        console.log("Fault: " + fault)
    }
};

module.exports = log