const { Pool } = require('pg');


const pool = new Pool ({
  user: 'vagrant',
  password: '',
  host: 'localhost',
  database: 'bootcampx'
});
const argv = process.argv.slice(2)
const cohortName = argv[0]
const limit = argv[1] || 5;
const values = [`%${cohortName}%`, limit];
pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
ORDER BY teacher
LIMIT $2;
`, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort}: ${user.teacher}`);
  })
});