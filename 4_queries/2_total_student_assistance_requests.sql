SELECT students.name as name, COUNT(assistance_requests.student_id) as total_assistances
FROM students
JOIN assistance_requests on students.id = assistance_requests.student_id
GROUP BY name
HAVING name = 'Elliot Dickinson';