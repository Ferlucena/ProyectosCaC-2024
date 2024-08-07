-- Esto es un comentario de línea

/* Esto es 
un comentario
de bloque */

-- creamos la base de datos
create database mis_usuarios_24257; 

-- Visualizamos la bd
SHOW DATABASES;

-- Nos posicionamos dentro de mis_usuarios
USE mis_usuarios_24257;

-- Creacion de la tabala Paises
CREATE TABLE Paises(
idPais INT AUTO_INCREMENT PRIMARY KEY,
nombrePais VARCHAR(50) NOT NULL
);

-- Visualizamos la tabla
SHOW TABLES;

-- Inspeccionamos la tabla
SELECT * FROM Paises;

-- Creamos la tabla usuarios
CREATE TABLE Usuarios(
idUsuario INT auto_increment primary key,
nombre varchar(50) not null, 
apellido varchar(50) not null,
email varchar(50) not null unique,
dir varchar(50),
telefono varchar(20),
-- diseño de la clave foránea
fkPais int,
foreign key (fkPais) references Paises(idPais)
);

-- Inspeccionar tabla
SELECT * FROM Usuarios;

-- Como cargamos otras columnas en una tabla
ALTER TABLE Usuarios ADD clave varchar(100) not null;
alter table Usuarios add fechaNacimiento date not null;

-- borramos columnas
alter table Usuarios drop column dir;
alter table Usuarios drop column telefono;

-- Cargamos la tabla paises
INSERT INTO Paises(nombrePais) VALUE 
("argentina"),
('brasil'),
('chile'),
('perú'),
('colombia'),
('uruguay');

-- consultamos paises
select * from paises;

-- Cargamos la tabla de los usuarios
INSERT INTO Usuarios (nombre, apellido, email, clave, fechaNacimiento, fkPais) VALUES
('juan', 'dhoe', 'juan@juan.com', 'miclave123', '1990-10-5', 1);









 