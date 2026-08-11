/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import { image } from 'qr-image';
import { createWriteStream, writeFile } from 'fs';

const questions = [
    {
        type:'input', 
        name: 'url',
        message: 'Enter a URL: '
    }
];

inquirer.prompt(questions).then((answers) => {
    // console.log(answers.url);
    const url = answers.url
    var x = image(
        url, 
        {type: 'png'}
        );
    x.pipe(createWriteStream('URL_qr.png'));
    writeFile('URL_text.txt', url, (err) => {
        if(err) throw err;
        console.log('The file has been saved.');
    })
    
});