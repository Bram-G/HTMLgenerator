const fs = require("fs");
const inquirer = require("inquirer");

const generateHtml = (username, location, github, linkedIn) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./stylesheet.css">
        <title>Document</title>
    </head>
    <body>
        <div>
                <div id = "box1"> 
                    <h1 id="name">Hi, My Name is ${username} </h1> 
                </div>
                <div id = "box2"> 
                    <h2 id="location"> I currently live in ${location} </h2> 
                </div>
                <div id = "box3"> 
                    <h2 id="github"> Here is a link to my GitHub profile: <a href="${github}" target="_blank"> GitHub </a> </h2> 
                </div>
                <div id = "box4"> 
                    <h2 id="linkedin"> Here is a link to my LinkedIn profile: <a href="${linkedIn}" target="_blank"> LinkedIn </a> </h2> 
                </div>
    
            </div>
    
        </div>
    </body>
    </html>
    `;
};

inquirer.prompt(
    [
        {
            type: "input",
            message: "What is your name?",
            name: "username",
        },
        {
            type: "input",
            message: "Where are you located?",
            name: "location",
        },
        {
            type: "input",
            message: "What is your github link?",
            name: "github",
        },
        {
            type: "input",
            message: "What is your LinkedIn profile link?",
            name: "linkedIn",
        },
    ]).then((response) => {
        console.log(response)
            // json.stringify(response),
            // username = response.username,
            // console.log(username),
            fs.writeFile(
                "index.html",
                generateHtml(
                    response.username,
                    response.location,
                    response.github,
                    response.linkedIn
                ),
                (err) => {
                    if (err) {
                        throw err;
                    }
                }
            );
    });

