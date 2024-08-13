# PruebaTecnica_CardonaClaudia
Este es el código fuente de mi prueba técnica de Node JS y Typescript 
Codigo para crear la base de datos, fue creada en mysql
CREATE DATABASE Students;


CREATE TABLE student (
  id INT AUTO_INCREMENT PRIMARY KEY,
  studentName VARCHAR(255) NOT NULL,
  birthDate DATE NOT NULL,
  fatherName VARCHAR(255),
  motherName VARCHAR(255),
  grade VARCHAR(10),
  section VARCHAR(10),
  admissionDate DATE
);

