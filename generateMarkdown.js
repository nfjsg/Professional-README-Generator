function renderLicenseBadge(license) {
  if (license) {
    // You can generate and return the appropriate badge URL here
    // Example for a license badge URL from shields.io:
    // return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return '';
}
function renderLicenseLink(license) {
  if (license) {
    // You can return a link to the license here
    // Example link for the MIT License:
    // return `[License](https://opensource.org/licenses/MIT)`;
  }
  return '';
}
function renderLicenseSection(license) {
  if (license) {
    // You can return the license section content here
    // Example for the MIT License:
    // return `## License

    // This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).`;
  }
  return '';
}
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

...

${licenseSection}
`;
}
