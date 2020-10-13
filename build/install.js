/**
 * Automated theme configuration
 */

'use strict';

const inquirer = require('inquirer'),
    { exec } = require('child_process'),
    chalk = require('chalk'),
    download = require('download-git-repo'),
    replace = require('replace-in-file');

console.log(chalk.yellow.bold("MasterFlex has been installed. Just a few more steps to start coding."));

async function startTheme() {
    const questions = [
    {
        type: 'input',
        name: 'themeName',
        message: 'What is the name of your theme? (Example: MasterFlexWP)',
    },
    {
        type: 'input',
        name: 'themeNamespace',
        message: 'What is the namespace of your theme? (Example: masterflex)',
    },
    {
        type: 'input',
        name: 'themeLocalUrl',
        message: 'What is your local URL for this install? (Example: https://localhost/masterflex)',
    },
    ];
    try {
        const answers = await inquirer.prompt(questions);
        const themeSetup = await Promise.all ([
          changeThemeName(answers.themeName),
          changeNamespace(answers.themeNamespace),
          changeLocalUrl(answers.themeLocalUrl)
    ])
        console.log(chalk.green.bold("Install successful! Run 'npm run start' to get started."));
    } catch(error) {
        console.log("Error");
    }
};
  
startTheme();

// Sets the Theme Name in style.css
function changeThemeName(themeName) {
    if(themeName == "") {
        console.log(chalk.magenta.bold('Theme Name not changed.'));
        return;
    }
    const options = {
        files: 'style.css',
        from: /Theme Name: .{1,}/g,
        to: `Theme Name: ${themeName}`,
    };
    try {
        const changes = replace.sync(options);
        console.log(chalk.magenta.bold('Theme Name updated in: ') + ('style.css'));
    }
    catch (error) {
        console.error('Error occurred:', error);
    }
}

function changeNamespace(themeNamespace) {
    if(themeNamespace == "") {
        console.log(chalk.magenta.bold('Namespace not changed.'));
        return;
    }
        const nameSpace = themeNamespace.toLowerCase().split(' ').join('_');
        const options = {
            files: ['style.css', '**/*.php', 'package.json'],
            from: /myfirsttheme/g,
            to: nameSpace,
    };
    try {
        const changes = replace.sync(options);
        console.log(chalk.magenta.bold('Namespace & Text Domain updated in:'), changes.join(', '));
    }
    catch (error) {
        console.error('Error occurred:', error);
    }
}

function changeLocalUrl(themeLocalUrl) {
    if(themeLocalUrl == "") {
        console.log(chalk.magenta.bold('Local URL was not chnanged.'));
        return;
    }
    const options = {
        files: 'gulpfile.babel.js',
        from: /proxy: .{1,}/g,
        to: `proxy: "${themeLocalUrl}"`,
    };
    try {
        const changes = replace.sync(options);
        console.log(chalk.magenta.bold('Local URL updated in: gulpfile.babel.js'));
    }
    catch (error) {
        console.error('Error occurred:', error);
    }
}