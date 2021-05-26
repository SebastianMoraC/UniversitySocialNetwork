-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-05-2021 a las 16:53:07
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
(18, 3, 'soporte whatsapp', 'ayudo a gente con problemas con el whatsapp', '3', 0, '16,1', 'http://www.google.com.co/', '../imgs_posts/imgPost_18.jpeg'),
(19, 3, 'asesoria matematicas', 'julio profe y yo ayudamos', '1', 0, '2', 'https://youtu.be/eTvPWCLdGlo', '../imgs_posts/imgPost_19.jpeg'),
(20, 3, 'ciencia maestra', 'proyectos de tesis gratis!!!', '5', 0, '3', 'no hay', '../imgs_posts/imgPost_20.jpeg');

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
(1, 2, 'Es mejor Telegram :p', 18),
(2, 2, 'Pase todas las mates con ese señor :v', 19),
(3, 2, 'No sirve el enlace', 20);

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
(1, 'Jhon ', 'Parra', 'j.prueba@utp.edu.co', '123', '1,', '2', NULL, 'qwe'),
(2, 'Jhon ', 'Parra', 'j.prueba2@utp.edu.co', '123', '1,2', '2', NULL, 'qwe'),
(3, 'Ana Sofia', 'Beltran Rios', 'anasofia.beltran@utp.edu.co', '12345', '1', '2', NULL, 'UTP');

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
(3, 3, 'flores', 'muy hermosas flores para regalar', 'disponible', '2000', '../imgs_product/imgProduct_3.jpeg', 'mi casa');

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
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `reg_pedidos`
--
ALTER TABLE `reg_pedidos`
  MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
  MODIFY `id_usuario` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `venta`
--
ALTER TABLE `venta`
  MODIFY `id_venta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
