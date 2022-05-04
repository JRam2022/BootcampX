SELECT cohorts.name, SUM(completed_at - started_at) as cohort_assistance_duration
FROM assistance_requests 
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = cohort_id
GROUP BY cohorts.name
ORDER BY cohort_assistance_duration ASC;