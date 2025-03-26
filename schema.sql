
-- @block create starbucks_coffee_shop table
CREATE TABLE starbucks_coffee_shop (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(255) NOT NULL,
  postal_code VARCHAR(255) NOT NULL,
  longitude DECIMAL(9, 6),
  latitude DECIMAL(9, 6),
  phone_number VARCHAR(15) NOT NULL,
  email VARCHAR(255) NOT NULL
);

-- @block insert data into starbucks_coffee_shop
INSERT INTO starbucks_coffee_shop (name, address, city, state, postal_code, longitude, latitude, phone_number, email)
VALUES
(
  'Starbucks - Paradigm Mall',
  'Paradigm Mall GB, 01A & 16, Jalan SS 7/26a, SS7',
  'Petaling Jaya',
  'Selangor',
  '47301',
  3.105055,
  101.596566,
  '0378867076',
  'customer@starbucks.com.my'
);



