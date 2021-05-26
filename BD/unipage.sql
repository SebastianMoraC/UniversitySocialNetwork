-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-05-2021 a las 21:48:41
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 7.4.19

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
(5, 2, 'La comida Italiana', 'Entre los platos mÃ¡s famosos de la pasta, estÃ¡ la lasagna, los raviolis, el espagueti, los tallarines preparados con mariscos, carne y verduras, sazonados con salsas como la boloÃ±esa, carbonara, napolitana y puttanesca.', '5', 3, '1,3', 'https://www.aviatur.com/blog/gastronomia/tour-gastronomico-por-roma#:~:text=Entre%20los%20platos%20m%C3%A1s%20famosos,%2C%20carbonara%2C%20napolitana%20y%20puttanesca.', '../imgs_posts/imgPost_5.jpeg'),
(6, 2, 'La comida EspaÃ±ola', 'La gastronomÃ­a o cocina espaÃ±ola son los platos, ingredientes, tÃ©cnicas y toda la tradiciÃ³n culinaria que se practica en EspaÃ±a. Cocina de origen que oscila entre el estilo rural y el costero, representa una diversidad fruto de muchas culturas, asÃ­ c', '5', 4, '2', 'https://es.wikipedia.org/wiki/Gastronom%C3%ADa_de_Espa%C3%B1a', '../imgs_posts/imgPost_6.jpeg'),
(7, 3, 'los libros de matematicas son ', 'jejejejjejej I love math', '1', 0, NULL, 'www.google.co', '../imgs_posts/imgPost_7.jpeg'),
(8, 3, 'fisica cuantica... el mañana ', 'fisica cuantica...lo mejor', '1', 0, NULL, 'www.google.co', '../imgs_posts/imgPost_8.jpeg'),
(9, 3, 'arte modernista el nuevo picas', 'se llego el nuevo arte', '2', 0, NULL, 'www.google.co', '../imgs_posts/imgPost_9.jpeg'),
(10, 3, 'soporte whatsapp', 'el mejor soporte para cuentas de whatsapp', '2', 0, NULL, 'www.google.co', '../imgs_posts/imgPost_10.jpeg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reg_pedidos`
--

CREATE TABLE `reg_pedidos` (
  `id_pedido` int(11) NOT NULL,
  `id_venta` int(11) NOT NULL,
  `comprador_id_usuario` varchar(1) NOT NULL,
  `cantidad_pedido` varchar(3) NOT NULL,
  `lugar_envio_pedido` varchar(200) NOT NULL,
  `fecha_pedido` date NOT NULL,
  `valor_Total` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reg_pedidos`
--

INSERT INTO `reg_pedidos` (`id_pedido`, `id_venta`, `comprador_id_usuario`, `cantidad_pedido`, `lugar_envio_pedido`, `fecha_pedido`, `valor_Total`) VALUES
(1, 2, '2', '4', '', '2021-05-25', '400000'),
(2, 1, '2', '2', 'UTP 2', '2021-05-25', '10000'),
(3, 2, '2', '3', 'UTP 2', '2021-05-25', '300000'),
(4, 1, '3', '3', 'mi casa', '2021-05-25', '15000'),
(5, 2, '3', '6', 'utp', '2021-05-25', '600000'),
(6, 3, '3', '1', 'mi casa', '2021-05-25', '2000');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reporte`
--

CREATE TABLE `reporte` (
  `id_reporte` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_post` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resenias`
--

CREATE TABLE `resenias` (
  `id_resenia` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `resenia` varchar(128) NOT NULL,
  `id_post` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `resenias`
--

INSERT INTO `resenias` (`id_resenia`, `id_usuario`, `resenia`, `id_post`) VALUES
(1, 2, 'Rica!', 5),
(2, 2, 'Muy buena!', 6),
(3, 3, 'q ricooo!!!', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `temas`
--

CREATE TABLE `temas` (
  `id_tema` int(11) NOT NULL,
  `nombre_tema` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `temas`
--

INSERT INTO `temas` (`id_tema`, `nombre_tema`) VALUES
(1, 'Tecnologia'),
(2, 'Biologia'),
(3, 'Gastronomia'),
(4, 'Arte'),
(5, 'Ciencia'),
(6, 'Astronomia'),
(7, 'Economia'),
(8, 'Social y Cultural'),
(9, 'Bienestar');

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
(1, 'Jhon ', 'Parra', 'j.prueba@utp.edu.co', '123', '1,', '1', NULL, 'qwe'),
(2, 'Jhon ', 'Parra', 'j.prueba2@utp.edu.co', '123', '1,2', '2', NULL, 'qwe'),
(3, 'Ana Sofia', 'Beltran Rios', 'anasofia.beltran@utp.edu.co', '12345', '1', '2', NULL, 'UTP'),
(4, 'Sebastian', 'Mora Carmona', 'sebastian.mora@utp.edu.co', '12345', '8,9', '2', NULL, 'UTP');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta`
--

CREATE TABLE `venta` (
  `id_venta` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `titulo_venta` varchar(50) NOT NULL,
  `descripcion_venta` varchar(256) NOT NULL,
  `estadoDispo_venta` varchar(30) DEFAULT NULL,
  `precio_venta` varchar(7) NOT NULL,
  `ubicacion_foto_venta` varchar(50) DEFAULT NULL,
  `ubicacion_vendedor` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `venta`
--

INSERT INTO `venta` (`id_venta`, `id_usuario`, `titulo_venta`, `descripcion_venta`, `estadoDispo_venta`, `precio_venta`, `ubicacion_foto_venta`, `ubicacion_vendedor`) VALUES
(1, 2, 'Empanada', 'Carne de ayer', 'D', '5000', '../imgs_product/imgProduct_1.jpeg', 'UTP'),
(2, 2, 'Planeta De Naruto', 'Planeta de juguete con todos los poderes', 'Disponible', '100000', '../imgs_product/imgProduct_2.jpeg', 'UTP'),
(3, 3, 'Flores', 'muy hermosas flores para regalar', 'disponible', '2000', '../imgs_product/imgProduct_3.jpeg', 'mi casa');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id_post`);

--
-- Indices de la tabla `reg_pedidos`
--
ALTER TABLE `reg_pedidos`
  ADD PRIMARY KEY (`id_pedido`);

--
-- Indices de la tabla `reporte`
--
ALTER TABLE `reporte`
  ADD PRIMARY KEY (`id_reporte`);

--
-- Indices de la tabla `resenias`
--
ALTER TABLE `resenias`
  ADD PRIMARY KEY (`id_resenia`);

--
-- Indices de la tabla `temas`
--
ALTER TABLE `temas`
  ADD PRIMARY KEY (`id_tema`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Indices de la tabla `venta`
--
ALTER TABLE `venta`
  ADD PRIMARY KEY (`id_venta`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `post`
--
ALTER TABLE `post`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `reg_pedidos`
--
ALTER TABLE `reg_pedidos`
  MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `reporte`
--
ALTER TABLE `reporte`
  MODIFY `id_reporte` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `resenias`
--
ALTER TABLE `resenias`
  MODIFY `id_resenia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `temas`
--
ALTER TABLE `temas`
  MODIFY `id_tema` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `venta`
--
ALTER TABLE `venta`
  MODIFY `id_venta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
