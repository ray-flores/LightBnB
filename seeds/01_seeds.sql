

INSERT INTO users (name, email, password) VALUES ('Eva Stanley','sebastianguerra@ymail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO users (name, email, password) VALUES ('Louisa Meyer','jacksonrose@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO users (name, email, password) VALUES ('Dominic Parks','victoriablackwell@outlook.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO users (name, email, password) VALUES ('Sue Luna','jasonvincent@gmx.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO users (name, email, password) VALUES ('Harry Potter','snape@gmx.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active) VALUES (1, 'Speed lamp', 'description', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg', 930.61, 6, 4, 8, 'Canada', '536 Namsub Highway', 'Sotboske', 'Quebec', '28142', true);
INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active) VALUES (1, 'Hogwarts', 'description', 'https://images.pexels.com/photos/2086677/pexels-photo-2086677.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg', 1000.00, 8, 200, 100, 'United Kingdom', '1 Whomping Willow Lane', 'Hogsmeade', 'Oxfordshire', '90210', true);
INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active) VALUES (2, 'Durmstrang', 'description', 'https://images.pexels.com/photos/2086678/pexels-photo-2086678.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg', 200.00, 1, 2, 3, 'Russia', '123 Putin Street', 'Moscow', 'Hague', '132500', true);
INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active) VALUES (4, 'Beauxbatons', 'description', 'https://images.pexels.com/photos/2086679/pexels-photo-2086679.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg', 400.00, 10, 20, 30, 'France', '456 Rue Lacroix', 'Paris', 'Printemps', '309991', true);
INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active) VALUES (5, 'Privet', 'description', 'https://images.pexels.com/photos/2086680/pexels-photo-2086680.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg', 100, 3, 2, 1, 'Canada', '4 Privet Drive', 'Hamilton', 'Ontario', 'M5S1K9', true);

INSERT INTO reservations (start_date, end_date, property_id, guest_id) VALUES ('2018-09-11', '2018-09-26', 2, 3);
INSERT INTO reservations (start_date, end_date, property_id, guest_id) VALUES ('2019-01-04', '2019-02-01', 2, 2);
INSERT INTO reservations (start_date, end_date, property_id, guest_id) VALUES ('2021-10-01', '2021-10-14', 1, 4);
INSERT INTO reservations (start_date, end_date, property_id, guest_id) VALUES ('2014-10-21', '2014-10-21', 3, 5);
INSERT INTO reservations (start_date, end_date, property_id, guest_id) VALUES ('2016-07-17', '2016-08-01', 3, 4);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message) VALUES (2, 5, 1, 3, 'messages');
INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message) VALUES (1, 4, 2, 4, 'messages');
INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message) VALUES (3, 3, 3, 4, 'messages');
INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message) VALUES (4, 2, 4, 4, 'messages');
INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message) VALUES (5, 1, 5, 5, 'messages');

