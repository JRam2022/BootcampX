const { Pool } = require('pg');


const pool = new Pool ({
  user: 'vagrant',
  password: '',
  host: 'localhost',
  database: 'bootcampx'
});
const argv = process.argv.slice(2)
console.log(argv)
pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE '%${argv[0]}%'
ORDER BY teacher;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort}: ${user.teacher}`);
  })
});