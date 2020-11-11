-- Creates database and table
DROP DATABASE IF EXISTS low0t9mpmy1vclvh;
CREATE DATABASE low0t9mpmy1vclvh;
USE low0t9mpmy1vclvh;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);