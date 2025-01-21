const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length <= 1) throw new Error('Cannot load the database');

    const header = lines.shift().split(',');
    const fieldIndex = header.indexOf('field');
    const firstNameIndex = header.indexOf('firstname');

    if (fieldIndex === -1 || firstNameIndex === -1) {
      throw new Error('Cannot load the database');
    }

    const students = {};
    let totalStudents = 0;

    for (const line of lines) {
      const fields = line.split(',');

      if (fields.length < header.length) continue;
      const field = fields[fieldIndex].trim();
      const firstname = fields[firstNameIndex].trim();

      if (!field || !firstname) continue;

      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstname);
      totalStudents++;
    }

    console.log(`Number of students: ${totalStudents}`);
    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    console.log(error);
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;