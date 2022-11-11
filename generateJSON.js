const fs = require('fs');//imports file

let characters = {};//creates object

let peeps_csv = fs.readFileSync('Characters.csv', 'utf8');//just puts file into variable

let peeps = peeps_csv.split("\n");//splits data into rows

peeps.forEach(function(peep) {//in each of these rows do this
  let character_info = peep.split(';');

  let character_name = character_info[1];

  if(character_name!="Name"){//access name and changes it
    let characterStats = {};
    characterStats['gender'] = character_info[2];
    characterStats['house'] = character_info[4];
    characterStats['species'] = character_info[7];
    if (character_info[12])
      characterStats['skills'] = character_info[12].split('|');
    else {
      characterStats['skills'] = [];
    }

    characters[character_name]=characterStats; //implements the changes of characterStats
  }
});

fs.writeFileSync('potter.json', JSON.stringify(characters), 'utf8'); //writes a text file that will override the existing one

//call back is a procedure that is passed - funtion for loop
