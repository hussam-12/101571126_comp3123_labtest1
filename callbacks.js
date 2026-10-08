const resolvedPromise = () => {
    return new Promise((resolve)=>{
    setTimeout(() => {
        let success = {message : 'resolved Promise!' };
        resolve(success);
    }, 500);
});
}
const rejectedPromise = () =>{
    return new Promise ((reject) =>{
    setTimeout(() => {
        try{
            throw new Error('error: rejected Promise');
        }catch (e){
            console.log(e)
        }
    }, 500);
});
};
resolvedPromise()
    .then(success => console.log(success))
    .catch(error => console.log(error))
rejectedPromise()
    .then(Error)   
    