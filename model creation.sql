CREATE SCHEMA IF NOT EXISTS `tomas-service`;

CREATE TABLE IF NOT EXISTS `tomas-service`.`data` (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    userId INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    postalCode VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    ucoQuantity BOOLEAN NOT NULL,
    ucoDestinatary VARCHAR(255) NOT NULL,
    date VARCHAR(255) NOT NULL,
    digitalSignature VARCHAR(255) NOT NULL
);

CREATE TABLE  IF NOT EXISTS `tomas-service`.livetracking (
    id INT PRIMARY KEY AUTO_INCREMENT,
    userId INT NOT NULL,
    origin VARCHAR(255) NOT NULL,
    destination VARCHAR(255) NOT NULL,
    product VARCHAR(255) NOT NULL,
    estimatedArrival TIMESTAMP NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE  IF NOT EXISTS `tomas-service`.user (
    id SERIAL PRIMARY KEY ,
    name VARCHAR(255) NOT NULL,
    document VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create a foreign key constraint for the OneToOne relationship with the "Data" model
ALTER TABLE `tomas-service`.user
ADD CONSTRAINT fk_user_data
FOREIGN KEY (dataId) REFERENCES data(id)
ON DELETE CASCADE;

-- Create a foreign key constraint for the OneToMany relationship with the "LiveTracking" model
ALTER TABLE livetracking
ADD CONSTRAINT fk_user_livetracking
FOREIGN KEY (userId) REFERENCES user(id)
ON DELETE CASCADE;

DROP TABLE `tomas-service`.user;
DROP TABLE `tomas-service`.livetracking;
DROP TABLE `tomas-service`.data;

SELECT * FROM LiveTracking;

DESCRIBE livetracking;

