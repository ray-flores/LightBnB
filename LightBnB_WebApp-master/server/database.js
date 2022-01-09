// const properties = require('./json/properties.json');
// const users = require('./json/users.json');

const { Pool } = require('pg')

const pool = new Pool({
  user: 'vagrant',
  host: 'localhost',
  database: 'lightbnb',
  password: '123'
});

console.log('YAY');

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */

const getUserWithEmail = function(email) {
  return pool
    .query(`SELECT *    
    FROM users
    WHERE email = $1;`, [email])
    .then((result) => {
      //console.log(result.rows);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
}
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  return pool
    .query(`SELECT *    
    FROM users
    WHERE id = $1;`, [id])
    .then((result) => {
      //console.log(result.rows);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
}
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser =  function(user) {
  return pool
    .query(`
    INSERT INTO users (
    name, email, password) 
    VALUES (
    $1, $2, $3) 
    RETURNING *;`, [user.name, user.email, user.password])
    .then((result) => {
      console.log(result.rows[0]);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
}
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {
  return pool
    .query(`
    SELECT *
    FROM reservations
    JOIN users ON users.id = guest_id
    JOIN properties ON properties.id = property_id
    JOIN property_reviews ON property_reviews.property_id = properties.id
    WHERE users.id = $1
    GROUP BY users.id, reservations.id, properties.id, property_reviews.id
    LIMIT $2;`, [guest_id, limit])
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
}
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */

const getAllProperties = (options, limit = 10) => {

  const defaults = {
    user_id: options.user_id,
    city: '%',
    min_price: options.minimum_price_per_night ? options.minimum_price_per_night : 0 ,
    max_price: 1000000 || options.maximum_price_per_night, // do same as above ^^
    min_rating: options.minimum_rating 
  };
  console.log(defaults);
  const queryParams = [defaults.city, defaults.min_price * 100, defaults.max_price * 100, defaults.min_rating, limit];

  if (options.city) {
    let text = options.city;
    let result = text.substring(1);
    queryParams.splice(0, 1, `%${result}%`);
  }

  if (options.user_id) {
    queryParams.push(defaults.user_id);
  }

  //name var and store line 150 

  let queryString = `
  SELECT properties.*, AVG(property_reviews.rating) AS average_rating
  FROM properties
  JOIN property_reviews ON property_id = properties.id
  WHERE city LIKE $1
  AND cost_per_night > $2
  AND cost_per_night < $3 
  AND properties.owner_id = 1
  GROUP BY properties.id
  HAVING AVG(property_reviews.rating) > $4
  ORDER BY properties.cost_per_night
  LIMIT $5;
  `;

  // if (options.owner_id) {

  // }

  // if (options.minimum_price_per_night) {
  //   queryParams.push(options.minimum_price_per_night);
  //   queryString += `AND properties.cost_per_night >= $${queryParams.length}`
  // }

  // if (options.maximum_price_per_night) {
  //   queryParams.push(options.maximum_price_per_night);
  //   queryString += `AND properties.cost_per_night <= $${queryParams.length}`
  // }

  // if (options.minimum_rating) {
  //   queryParams.push(options.minimum_rating);
  //   queryString += `HAVING AVG(properties.rating) >= $${queryParams.length}`
  // }

  // queryParams.push(limit);
  // queryString += `
  // GROUP BY properties.id
  // ORDER BY cost_per_night
  // LIMIT $${queryParams.length};
  // `;

  console.log(queryString, queryParams);

  return pool
  .query(queryString, queryParams) //.then((result) => result.rows) USES IMPLIED RETURN
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {

  const queryString = `
  INSERT INTO properties (owner_id, title, description,
  thumbnail_photo_url, cover_photo_url, cost_per_night,
  street, city, province, post_code, country, parking_spaces,
  number_of_bathrooms, number_of_bedrooms) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
  $11, $12, $13, $14)
  RETURNING *;
  `;

  const queryParams = [property.owner_id, property.title, property.description, property.thumbnail_photo_url,
  property.cover_photo_url, property.cost_per_night, property.street, property.city, property.province, property.post_code,
  property.country, property.parking_spaces, property.number_of_bathrooms, property.number_of_bedrooms];

  return pool
  .query(queryString, queryParams) //.then((result) => result.rows) USES IMPLIED RETURN
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });

}
exports.addProperty = addProperty;

