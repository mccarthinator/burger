create database burgerDB;

use burgerDB;

CREATE TABLE burgers(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(255) NOT NULL,
devoured BOOLEAN NOT NULL,
date TIMESTAMP NOT NULL,
PRIMARY KEY (id)
);