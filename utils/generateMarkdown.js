// Function that returns a license badge based on which license is passed in. If there is no license, it returns an empty string
function renderLicenseBadge(license) {
  var badge = "";
  if (license) {
    badge = `[![License: ${license}](https://img.shields.io/badge/License-${encodeURI(license)}-blue.svg)](${renderLicenseLink(license)})`;
  }
  return badge;

}
// Function that returns the license link. If there is no license, it return an empty string.
function renderLicenseLink(license) {
  var link = "";
  if (license) {
    link = `https://opensource.org/licenses/${encodeURI(license)}`
  }
  return link;
}

// Function that returns the license section of README. If there is no license, it returns an empty string.
function renderLicenseSection(license) {
  var section = "";
  if (license) {
    section = `Licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  }
  return section;
}

// Function that generates markdown for README file
function generateMarkdown(data) {
  const content = `
  # ${data.title}  
  ${renderLicenseBadge(data.licenseType)} 
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  ## Installation
  ${data.installInstructions}
  
  ## Usage
  \'''bash
    ${data.appUsage}
  \'''
  
  ## License
  Copyright (c) ${data.gitHubUser}. All rights reserved.
  ${renderLicenseSection(data.licenseType)} 
  
  ## How to Contribute
  ${data.howToContribute}
  ## Tests  
  ${data.testInstructions}
  ## Questions?
  GitHub [${data.gitHubUser}](https://github.com/${data.gitHubUser})
  How to reach me with additional questions ? - [${data.userEmail}](mailto://${data.userEmail})

  _This README was generated with ❤️ using the Markdown CLI Generator by MichaelAdamGroberman (https://github.com/MichaelAdamGroberman/GitHub-Repo-CLI-Markdown-Generator-) 🔥_ `;

  return content;
}

module.exports = generateMarkdown;