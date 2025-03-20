const promiseObj=new Promise((resolve,reject)=>{
    setTimeout(() => {
        const x =10;
        if(x >= 10){
            resolve(100);
        }else
        {
            reject('value less than 10')
        }
    }, 1000);
})