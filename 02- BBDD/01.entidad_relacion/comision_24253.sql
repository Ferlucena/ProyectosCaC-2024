-- Esto es un comentario de línea

/* Esto es
un comentario 
de bloque */

-- Creamos la base de datos
CREATE SCHEMA mis_usuarios_24253;

-- Nos posicionamos dentro de mis_usuarios
USE mis_usuarios_24253;

-- Creamos la tabla paises
CREATE TABLE Paises(
idPais INT auto_increment primary key,
nombrePais VARCHAR(50) NOT NULL
);

-- Consultamos si la tabla existe
SHOW TABLES;

-- Consultamos la tabla creada con su contenido
SELECT * FROM Paises;

-- Creamos la tabla usuarios
CREATE TABLE Usuarios(
idUsuario INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(50) NOT NULL,
apellido VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL UNIQUE,
dir VARCHAR(50),
telefono VARCHAR(15),
fkPais INT,
FOREIGN KEY (fkPais) REFERENCES Paises(idPais)
);

-- Consultamos la estructura de la tabla usuarios
SELECT * FROM Usuarios;

-- Cambiamos telefono por tel
ALTER TABLE Usuarios CHANGE telefono tel VARCHAR(20);

-- Agregamos columnas a la tabla
ALTER TABLE Usuarios ADD clave VARCHAR(250) NOT NULL;

-- Agregamos una columna en un lugar especifico
ALTER TABLE Usuarios ADD mascota VARCHAR(50) AFTER idUsuario;

-- Borramos columnas que están de más
ALTER TABLE Usuarios DROP COLUMN tel;
ALTER TABLE Usuarios DROP COLUMN mascota;
ALTER TABLE Usuarios DROP COLUMN dir;

-- Carga de datos en tablas con clausulas DML
-- Cargamos en orden la tabla paises
INSERT INTO Paises(nombrePais) VALUES
('argentina'),
('brasil'),
('chile'),
('perú'),
('colombia'),
('uruguay'); 

-- Consultamos la tabla paises
SELECT * FROM Paises;

-- Agregamos el campo fecha nacimiento en usuarios
ALTER TABLE Usuarios ADD fechaNacimiento DATE NOT NULL;

-- Cargamos usuarios dentro de la tabla usuarios
INSERT INTO Usuarios(nombre, apellido, email, clave, fechaNacimiento, fkPais) VALUES
('jose', 'gomez', 'jose@jose.com', 'miclave123', '1987-10-05', 6),
('Juan', 'Perez', 'juan.perez@example.com', 'password123', '1990-01-15', 1),
('Maria', 'DaSilva', 'maria.gomez@example.com', 'securepass', '1985-07-30', 2),
('Carlos', 'Lopez', 'carlos.lopez@example.com', 'mypassword', '1992-11-23', 3),
('Ana', 'Martinez', 'ana.martinez@example.com', 'anotherpass', '1988-05-10', 4),
('Luis', 'Rodriguez', 'luis.rodriguez@example.com', 'newpassword', '1995-03-05', 5),
('Jhon', 'Perez', 'juan2.perez@example.com', 'pa123', '1990-01-15', 1),
('Carlos', 'DaSilva', 'c.gomez@example.com', 'sepass', '1985-07-30', 1),
('Ana', 'Lopez', 'ana.lopez@example.com', 'mypassword', '1992-11-23', 2),
('Luis', 'Martinez', 'luis.martinez@example.com', 'otrapass', '1988-05-10', 4),
('Luisa', 'Rodriguez', 'luisa.rodriguez@example.com', 'nuevapass', '1995-03-05', 4);

-- consultamos la tabla usuarios
SELECT * FROM Usuarios;

-- consultamos apellido, nombre y fecha
SELECT apellido, nombre, fechaNacimiento FROM Usuarios; 

-- consultamos apellido, nombre y fecha con pais 1
SELECT apellido, nombre, fechaNacimiento, fkPais FROM Usuarios; 

-- Consulta en dos tablas
SELECT Usuarios.nombre, Usuarios.apellido, Paises.nombrePais
FROM Usuarios 
JOIN Paises ON Usuarios.fkPais = Paises.idPais;
-- consulta ordenada alf por apellidos
SELECT apellido FROM Usuarios ORDER BY apellido;

