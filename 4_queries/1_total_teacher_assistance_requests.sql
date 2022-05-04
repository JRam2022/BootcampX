SELECT teachers.name as name, COUNT(assistance_requests.teacher_id) as total_assistances
FROM teachers
JOIN assistance_requests on teachers.id = assistance_requests.teacher_id
GROUP BY name
HAVING name = 'Waylon Boehm';