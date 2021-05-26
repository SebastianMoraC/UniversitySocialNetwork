-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-05-2021 a las 22:22:43
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
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(15) NOT NULL,
  `nombre_usuario` varchar(40) NOT NULL,
  `apellido_usuario` varchar(40) NOT NULL,
  `correo_usuario` varchar(40) NOT NULL,
  `password_usuario` varchar(40) NOT NULL,
  `id_tema_interes_usuario` varchar(20) NOT NULL,
  `tipo_usuario` varchar(5) NOT NULL DEFAULT '2',
  `ubicacion_foto_usuario` varchar(50) DEFAULT NULL,
  `universidad_usuario` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nombre_usuario`, `apellido_usuario`, `correo_usuario`, `password_usuario`, `id_tema_interes_usuario`, `tipo_usuario`, `ubicacion_foto_usuario`, `universidad_usuario`) VALUES
(1, 'Jhon ', 'Parra', 'j.prueba@utp.edu.co', '123', '1,3,4', '1', NULL, 'qwe'),
(2, 'Jhon ', 'Parra', 'j.prueba2@utp.edu.co', '123', '1,2,6,7', '2', NULL, 'qwe'),
(3, 'Ana Sofia', 'Beltran Rios', 'anasofia.beltran@utp.edu.co', '12345', '1,3,7', '2', NULL, 'UTP'),
(4, 'Sebastian', 'Mora Carmona', 'sebastian.mora@utp.edu.co', '12345', '8,9', '2', NULL, 'UTP');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
