const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
function loweCaseWords(mixedArray){
    return new Promise((resolve,reject) => {
        try {
            const result = mixedArray
            .filter((position) => typeof position === 'string')
            .map((word) => word.toLowerCase());
            resolve(result);

        }catch(error){
            reject(error)
        }

    });
}
loweCaseWords(mixedArray)
    .then(mixedArray => console.log(mixedArray))
    .catch(error => console.log(error.message));