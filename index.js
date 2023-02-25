import inquirer from 'inquirer';
import fs from 'fs';

const generateMarkDown = (answers, licenseBadge) => 

`# **${answers.project_title}** ${licenseBadge}

## Description 

---

<p> ${answers.project_description}<p>
<br>

## Table of contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
<br>

## Installation <a id="installation"></a> 

---

<p> ${answers.installation}<p>
<br>

## Usage <a id="usage"></a> 

---

<p> ${answers.usage}<p>
<br>

## License <a id="license"></a> 

---

<p>Please note the license of this code is ${answers.license}<p>
<br>

## Contributing <a id="contributing"></a> 

---

<p> ${answers.contributors}<p>
<br>

## Tests <a id="tests"></a> 

---

<p> ${answers.tests}<p>
<br>

## Questions <a id="questions"></a> 

---

<p>Any question please feel free to send me an email ${answers.email_contact}

<p>Or find me using my github page <a href="https://github.com/${answers.github_contact}">${answers.github_contact}</a></p>`


//array of question object that the user will be asked
//question layout:
//type - determines the type of input you are trying to gather
//message - this is the questions that the user will be asked
//name - this is the tag given to the question to allow you to grab the user input later
//validate - error catching - if the user enters something you are not expecting 

const questions = [   

    {type: 'input',
    message:'Please enter your project title',
    name:'project_title',
    validate: (input) => {
        if (input == ''){
        return 'Oops looks like you didnt enter a title. Please enter your project title'
        }
        else {return true}}
    },

    
    {type: 'input',
    message:'Can you tell us what your project is about?',
    name:'project_description',
    validate: (input) => {
        if (input == ''){
        return 'Oops looks like you didnt enter a anything. Please enter a description'
        }
        else {return true}}
    },

    {type: 'input',
    message:'Do you need to install anything to use this code?',
    name:'installation',
    validate: (input) => {
        if (input == ''){
        return 'Oops looks like you didnt enter a anything.'
        }
        else {return true}}
    },

    {type: 'input',
    message:'How should this code be used/what is it for?',
    name:'usage',
    validate: (input) => {
        if (input == ''){
        return 'Oops looks like you didnt enter a anything.'
        }
        else {return true}}
    },

    {type: 'list',
    message:'What license does this code need?',
    name:'license',
    choices:['MIT', 'Apache 2.0', 'Unlicense', 'BSD 3'],
    default:'MIT',
    },

    {type: 'input',
    message:'Who helped make this code possible?',
    name:'contributors',
    validate: (input) => {
        if (input == ''){
        return 'Oops looks like you didnt enter a anything.'
        }
        else {return true}}
    },

    {type: 'input',
    message:'What test should be run on the code?',
    name:'tests',
    validate: (input) => {
        if (input == ''){
        return 'Oops looks like you didnt enter a anything.'
        }
        else {return true}}
    },

    {type: 'input',
    message:'Give your github user name so people can contact you',
    name:'github_contact',
    validate: (input) => {
        if (input == ''){
        return 'Oops looks like you didnt enter a anything.'
        }
        else {return true}}
    },

    {type: 'input',
    message:'Give your email so people can contact you',
    name:'email_contact',
    validate: (input) => {
        if (input == ''){
        return 'Oops looks like you didnt enter a anything.'
        }
        else {return true}}
    },
]

//console log for user experiance
console.log('\n------Lets make a README together!------\n')

//prompt used to generate question in the CLI
inquirer
.prompt(questions)
.then(answers => {

    console.log('----------------------------------------')
    console.log(answers);

    let licenseBadge = ''

    switch(answers.license) {
        case 'MIT':
            licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            
        break;

        case 'Apache 2.0':
            licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            
        break;

        case 'Unlicense':
            licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
            
        break;

        case 'BSD 3':
            licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
            
        break;

        default:
            console.log('Not sure how this happened?')
    }
    


    const markDownTemplate = generateMarkDown(answers, licenseBadge)

    fs.writeFile(`${answers.project_title}-README.md`, markDownTemplate , (error) => {
        return error
        ? console.log(error)
        : console.log('\nSuccess - Happy Coding!\n----------------------------------------')
    })
})

.catch((error) => {
    if (error.isTtyError) {
        console.log('Could not be rendered in the current environment')
    } else {
        console.log('Something else went wrong')
    }
})

