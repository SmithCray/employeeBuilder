DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
  id INT PRIMARY KEY NOT NULL,
  names VARCHAR(100) NOT NULL
);

CREATE TABLE roles(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  salary INT, 
  department_id INT NOT NULL
);

CREATE TABLE employee(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
first_name VARCHAR(100) NOT NULL,
last_name VARCHAR(100) NOT NULL,
role_id INT,
manager_id INT
);





