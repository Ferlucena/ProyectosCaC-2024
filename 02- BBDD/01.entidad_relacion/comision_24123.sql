-- Creamos la base de datos
CREATE DATABASE my_web;
-- Nos posicionamos dentro de my_web
use my_web;

-- Creación de la tabla Paises
CREATE TABLE Paises (
idPais INT AUTO_INCREMENT PRIMARY KEY,
nombrePais VARCHAR(100) NOT NULL
);

-- Creación de la tabla Usuarios
CREATE TABLE Usuarios (
idUsuario INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(45) NOT NULL,
apellido VARCHAR(45) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
dir VARCHAR(100),
telefono VARCHAR (20),
idPais INT,
FOREIGN KEY (idPais) REFERENCES Paises(idPais)
);

-- Consultamos las tablas existentes
SHOW TABLES;

-- Consultas a la tabla usuario
SELECT * FROM Usuarios;

-- **** AGREGAMOS COLUMNAS A LA TABLA ****
-- Agregamos las columnas a la tabla Usuarios
ALTER TABLE Usuarios ADD clave VARCHAR(255) NOT NULL;
ALTER TABLE Usuarios ADD fechaNacimiento DATE NOT NULL;


-- CAMBIAMOS telefono por tel
ALTER TABLE `Usuarios` CHANGE `telefono` `tel` VARCHAR(15);

-- AGREGAMOS LUEGO DE
ALTER TABLE `Usuarios` ADD `localidad` VARCHAR(50) NULL AFTER `idPais`;

-- *** BORRAMOS ALGUNOS CAMPOS ***
ALTER TABLE Usuarios DROP COLUMN localidad;
ALTER TABLE Usuarios DROP COLUMN dir;
ALTER TABLE Usuarios DROP COLUMN tel;

-- Cláusulas DML (manipulacion)
/*Paso 3: Insertar Datos en las Tablas*/
-- Inserción de datos en la tabla Paises
INSERT INTO Paises (nombrePais) VALUES
('Argentina'),
('Brasil'),
('Chile'),
('Perú'),
('Colombia'),
('Uruguay');

-- Inserción de datos en la tabla Usuarios
INSERT INTO Usuarios (nombre, apellido, email, clave, fechaNacimiento, idPais) VALUES
('Juan', 'Perez', 'juan.perez@example.com', 'password123', '1990-01-15', 1),
('Maria', 'DaSilva', 'maria.gomez@example.com', 'securepass', '1985-07-30', 2),
('Carlos', 'Lopez', 'carlos.lopez@example.com', 'mypassword', '1992-11-23', 3),
('Ana', 'Martinez', 'ana.martinez@example.com', 'anotherpass', '1988-05-10', 4),
('Luis', 'Rodriguez', 'luis.rodriguez@example.com', 'newpassword', '1995-03-05', 5),
('Jhon', 'Perez', 'juan.perez2@example.com', 'pa123', '1990-01-15', 1),
('Carlos', 'DaSilva', 'c.gomez@example.com', 'sepass', '1985-07-30', 1),
('Ana', 'Lopez', 'ana.lopez@example.com', 'mypassword', '1992-11-23', 2),
('Luis', 'Martinez', 'luis.martinez@example.com', 'otrapass', '1988-05-10', 4),
('Luisa', 'Rodriguez', 'luisa.rodriguez@example.com', 'nuevapass', '1995-03-05', 4);