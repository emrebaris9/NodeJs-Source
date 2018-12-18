// promises
const func =(sayi) => {
    return new Promise((resolve, reject) => {
        if (sayi === 4)
            resolve("Okay");
         else reject("Problem!");
    })
};
    func(4).then((data)=>{
       console.log(data);
       return 1;
    })
    .then((data)=>{
        console.log(data);
        return 2;
    }).then((data)=>{
        console.log(data);
        return data+'low';
    }).then((data)=>{
       console.log(data);
    }).catch((error) => {
        console.log(error)
    });
