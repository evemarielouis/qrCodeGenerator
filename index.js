// add packages to our file
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

//step 1: ask for user input
// then output it as an url

inquirer 
.prompt([{ // its a question object 
    message: "Enter your link to generate a QR code !", // the question to print
    name: "URL", // determine the type of the user input :  the name to use when storing the answer in the answers hash.
    }]) // returns a promise 

// step 2: generating a qrcode image for our url

.then((answers) => { // this is the question's answer
    console.log(URL); // testing that the user input is read! if it works, we can get rid of that line
    const url = answers.URL // answers is another object. we go get the URL part and put it inside a new variable
    var qr_png = qr.image(url, {type: 'png'}); // thanks to the qr-image package: we define a user input (url, which
    // stored inside the url var. we define extension for our generated qr code (png)
    qr_png.pipe(fs.createWriteStream("qr_code.png")); // create a file with a QR code image in .png format

    // step 3: save our user input
    fs.writeFile("URL.txt", url, (err) => { // create .txt file with default fs node -> fs.writeFile(file, data, callback)
        if (err) throw err;
        console.log("The file has been saved!"); 
    })
})

.catch((error) => { // error log, which we have left empty here
    if (err.isTtyError) {
    // prompt couldn't be rendered in the current environment 
    } else {
     // something else went wrong
    }
});


