import inquirer from 'inquirer';
import fs from 'fs';

const generateMarkDown = (UserInput) =>

JSON.stringify(UserInput)

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

]

//console log for user experiance
console.log('------Lets make a README together!------')

//prompt used to generate question in the CLI
inquirer
.prompt(questions)
.then(answers => {
    console.log(answers);

    const markDownTemplate = generateMarkDown(answers)

    fs.writeFile(`${answers.project_title}.md`, markDownTemplate , (error) => {
        return error
        ? console.log(error)
        : console.log('success')
    })
})

.catch((error) => {
    if (error.isTtyError) {
        console.log('Could not be rendered in the current environment')
    } else {
        console.log('Something else went wrong')
    }
})

