-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-05-2021 a las 05:39:32
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `unipage`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `post`
--

CREATE TABLE `post` (
  `id_post` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `nombre_post` varchar(30) NOT NULL,
  `descripcion_post` varchar(256) NOT NULL,
  `tema_categoria` varchar(2) NOT NULL,
  `cont_likes_post` int(8) NOT NULL DEFAULT 0,
  `id_resenias` varchar(50) DEFAULT NULL,
  `enlace_post` varchar(300) NOT NULL,
  `ubicacion_foto_post` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `post`
--

INSERT INTO `post` (`id_post`, `id_usuario`, `nombre_post`, `descripcion_post`, `tema_categoria`, `cont_likes_post`, `id_resenias`, `enlace_post`, `ubicacion_foto_post`) VALUES
(1, 1, 'prueba de psot', 'Como se mencionó anteriormente, si no se especifica una clave, se toma el máximo de los índices integer existentes, y la nueva clave será ese valor máximo más 1 (aunque al menos 0). ', '1', 0, NULL, 'http://localhost/TrabajoIngSotf/UniversitySocialNetwork/html/foro.html', NULL),
(2, 1, 'prueba de post 2', 'Como se mencionó anteriormente, si no se especifica una clave, se toma el máximo de los índices integer existentes, y la nueva clave será ese valor máximo más 1 (aunque al menos 0). ', '1', 0, NULL, 'http://localhost/TrabajoIngSotf/UniversitySocialNetwork/html/foro.html', NULL),
(3, 1, 'prueba de post 2', 'Como se mencionó anteriormente, si no se especifica una clave, se toma el máximo de los índices integer existentes, y la nueva clave será ese valor máximo más 1 (aunque al menos 0). ', '5', 0, NULL, 'http://localhost/TrabajoIngSotf/UniversitySocialNetwork/html/foro.html', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id_post`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `post`
--
ALTER TABLE `post`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
