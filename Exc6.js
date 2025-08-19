var record = [
  {
    "Name": "Gibo",
    "Age": 16,
    "SkillSet": [
      { "Skill": "SAP UI5" },
      { "Skill": "SAP HANA" }
    ]
  },
  {
    "Name": "Patrick",
    "Age": 22,
    "SkillSet": [
      { "Skill": "SAP UI5" },
      { "Skill": "SAP HANA" },
      { "Skill": "SAP ABAP" }
    ]
  },
  {
    "Name": "MJ",
    "Age": 24,
    "SkillSet": [
      { "Skill": "SAP HANA" }
    ]
  }
];

function getMostSkills(record) {
  let mostSkills = null;

  record.forEach(person => {
    if (!mostSkills || person.SkillSet.length > mostSkills.SkillSet.length) {
      mostSkills = person;
    }
  });

  return mostSkills;
}

var person = getMostSkills(record);
console.log(person);
