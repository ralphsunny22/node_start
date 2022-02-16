//fs module, built-in, asynchronosly, using callbacks

//callbacks runs whn we are done

const { readFile, writeFile } = require('fs');

// readFile('./content/first.txt',(err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     //console.log(result) // <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>
// })

//to avoid getting the buffer, apply 'utf8
// readFile('./content/first.txt', 'utf8', (err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     //console.log(result) // Hello this first text file
// })

//reading multiple files aynchronously in callback
readFile('./content/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result)=> {
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`,
        (err, result) => {
            if(err){
                console.log(err )
                return
            }
        }
        )
    })
})



