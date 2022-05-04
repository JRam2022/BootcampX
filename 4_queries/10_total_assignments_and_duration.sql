SELECT assignments.day as day, COUNT(assignments.name) as number_of_assignments, SUM(assignments.duration) as duration
FROM assignments
GROUP BY day
ORDER BY day ASC;