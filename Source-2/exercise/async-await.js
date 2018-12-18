const user = {id : 10, name: 'emre'};
const friends = [{id : 11, name: 'osman'}, {id: 12, name: 'yavuz'}];

const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(user);
        },1500);
    });
};
const getFriends = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
           resolve(friends);    // hatayı görmek  için resolve ==> reject
        },500);
    });
};
/*
let userId;
getUser().then(function(){
        getFriends().then(function () {
            console.log(user);
            console.log(friends);
        })
});*/

/*promise chain
    getUser().then((user) =>{
        return getFriends(user.id);
    }).then((friends) => {
        console.log(user);
        console.log(friends);

    }); */

// async-await
/* async function asenkronAkis() {
    console.log('işlem başladı...');
    const user = await getUser();
    console.log(user);
    const friends = await  getFriends(user.id);
    console.log(friends);
}
asenkronAkis(); */

    async function asenkronAkis() {
        try{
            const user = await getUser();
            const friends = await  getFriends(user.id);
            console.log(user, friends);
        }catch (error) {
            console.log(error);
        }
    }
asenkronAkis();
