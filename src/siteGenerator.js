//character_info = school_info
//character_template = school_template
const fs = require('fs');
const ejs = require('ejs');

let school_info = JSON.parse(fs.readFileSync('../data/dataSet.json', 'utf8'));
let other_info = JSON.parse(fs.readFileSync('../data/otherSet.json', 'utf8'));
let index_template = fs.readFileSync('views/index.ejs', 'utf8');
let school_template = fs.readFileSync('views/school.ejs', 'utf8');
let summary_template = fs.readFileSync('views/summary.ejs', 'utf8');
let about_template = fs.readFileSync('views/about.ejs', 'utf8');

/*
  1) Generate a web page for each character
  2) Keep track of the link for index.html
*/
for (school in school_info) {
  school_info[school].link = getBetterFileName(school);
  let school_html = ejs.render(school_template, {
    filename: __dirname + '/views/school.ejs',
    stats: school_info[school],
    name: school
  });
  fs.writeFileSync('../public/' + school_info[school].link + '.html', school_html, 'utf8');
}

for (other in other_info) {
  other_info[other].link = getBetterFileName(other);
  let summary_html = ejs.render(summary_template, {
    filename: __dirname + '/views/summary.ejs',
    stats: other_info[other],
    name: other
  });
  fs.writeFileSync('../public/' + other_info[other].link + '.html', summary_html, 'utf8');
}

/*
  1) Generate an index page of all characters
*/
let index_html = ejs.render(index_template, {
  filename: __dirname + '/views/index.ejs',
  school_data: school_info,
  other_data: other_info
});

let about_html = ejs.render(about_template, {
  filename: __dirname + '/views/about.ejs',
  data: school_info
});

fs.writeFileSync('../public/index.html', index_html, 'utf8');
fs.writeFileSync('../public/about.html', about_html, 'utf8');

function getBetterFileName(schoolName) {
  let betterFileName = schoolName.split(" ").join("_");
  betterFileName = betterFileName.split(".").join("");
  betterFileName = betterFileName.split("(").join("");
  betterFileName = betterFileName.split(")").join("");
  return betterFileName;
}
