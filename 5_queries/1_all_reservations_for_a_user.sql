
SELECT reservations.*, properties.*, AVG(property_reviews.rating) AS average_rating
FROM users
JOIN properties ON owner_id = users.id
JOIN reservations ON reservations.property_id = properties.id
JOIN property_reviews ON property_reviews.property_id = reservations.property_id
WHERE end_date < now()::date
AND reservations.guest_id = 1
GROUP BY reservations.id, properties.id
ORDER BY start_date ASC
LIMIT 10;
