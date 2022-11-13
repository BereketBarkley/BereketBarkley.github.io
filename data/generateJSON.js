//characters = dataSet
//character_info = data_info
//character_name = schoolName
//characterStats = dataStats
//control alt b to seperate lines
const fs = require('fs');

let dataSet = {};

let peeps_csv = fs.readFileSync('SHSAT_DATA.csv', 'utf8');

let peeps = peeps_csv.split("\n");

peeps.forEach(function(peep) {
  let data_info = peep.split(',');

  let schoolName = data_info[0];

  if(schoolName != "Offer Summary"){
    let dataStats = {};
    dataStats['Native American'] = data_info[1];
    dataStats['Asian'] = data_info[2];
    dataStats['Black'] = data_info[3];
    dataStats['LatinX'] = data_info[4];
    dataStats['White'] = data_info[5];
    dataStats['Multi-Racial'] = data_info[6];
    dataStats['Unknown'] = data_info[7];
    dataStats['total'] = data_info[8];

    dataSet[schoolName] = dataStats;
  }
});

fs.writeFileSync('dataSet.json', JSON.stringify(dataSet), 'utf8');
