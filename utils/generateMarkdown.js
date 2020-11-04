// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## DESCRIPTION
  ${data.description}
  ## INSTALLATION
  ${data.installation}
  ## USAGE
  ${data.usage}
  ## LICENSES
  ${data.license}
  ## CONTRIBUTION
  ${data.contributors}

`;
}

module.exports = generateMarkdown;
