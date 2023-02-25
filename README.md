# README Generator - WC11

## Description

It is a very rare person who enjoys making README's. This repo of code aims to take away some of the pain when creating them by having the template ready to go.
README's are crucial to a third party being able to understand someones code and it is the hope that taking some of the load of off the user they are more likely to have complete and detailed notes.

Using the inquirer node module the user is asked a series of question and on completion their answers are used to build the README. The README will still need some 
finishing touches like screenshots but it gets the user 70% of the way their.

The reason it was undertaken was under the instruction of Trilogy Education for their weekly challenge (number 11). 

## Installation

This repo require Node JS. It uses both the Inquirer and FS modules.

## Usage

To initiate the code please enter - node index.js - into your command line.

You will then be asked a series of questions and these will form the basis of your new README. Error catching is included to stop you from skipping any sections. If the section is not applicable to your project just enter N/A.

<br>

<img src="./screenshots/Screenshot 2023-02-25 212855.png" alt="screenshot showing questions" width="600">

*Screen shot showing the questions being asked to generate the README*

<br>

Please note that the license question has a defualt value of 'MIT'.

On completion a newly generated README can be found in the codes repo. The README will be generated using the projects title to ensure the code does not overwrite any existing README's in the folder.

<br>

<img src="./screenshots/Screenshot 2023-02-25 213434.png" alt="screenshot showing generated README" width="250">

*Screen shot showing the generated README*

<br>

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.