-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-05-2021 a las 00:15:10
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
-- Estructura de tabla para la tabla `categorias_venta`
--

CREATE TABLE `categorias_venta` (
  `id_categoria` int(11) NOT NULL,
  `nombre_categoria` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(1, 1, 'prueba de psot', 'Como se mencionó anteriormente, si no se especifica una clave, se toma el máximo de los índices integer existentes, y la nueva clave será ese valor máximo más 1 (aunque al menos 0). ', '1', 14, '0,1,2,3,4,5,6,7,8,9,10,11,14', 'http://localhost/TrabajoIngSotf/UniversitySocialNetwork/html/foro.html', NULL),
(2, 1, 'prueba de post 2', 'Como se mencionó anteriormente, si no se especifica una clave, se toma el máximo de los índices integer existentes, y la nueva clave será ese valor máximo más 1 (aunque al menos 0). ', '1', 5, '12', 'http://localhost/TrabajoIngSotf/UniversitySocialNetwork/html/foro.html', NULL),
(3, 1, 'prueba de post 2', 'Como se mencionó anteriormente, si no se especifica una clave, se toma el máximo de los índices integer existentes, y la nueva clave será ese valor máximo más 1 (aunque al menos 0). ', '5', 7, NULL, 'http://localhost/TrabajoIngSotf/UniversitySocialNetwork/html/foro.html', NULL),
(10, 1, 'prueba de post con imagen', 'Día de la Tierra: 10 datos fascinantes sobre nuestro planeta', '1', 0, NULL, 'https://www.bbc.com/mundo/noticias-52369218', '../imgs_posts/imgPost_10.jpeg'),
(11, 1, 'prueba de post con imagen2', 'Día de la Tierra: 10 datos fascinantes sobre nuestro planeta', '2', 0, '15', 'https://www.bbc.com/mundo/noticias-52369218', '../imgs_posts/imgPost_11.jpeg'),
(13, 3, 'Ana Sofia Beltran', 's', '1', 0, NULL, 'www.google.co', '../imgs_posts/imgPost_13.jpeg'),
(14, 2, 'publicacion3', 'aaaaaa', '2', 0, NULL, 'www.edu.co', '../imgs_posts/imgPost_14.jpeg'),
(15, 1, '', '', '', 0, NULL, '', NULL),
(16, 1, '', '', '', 0, NULL, '', NULL),
(17, 1, '', '', '', 0, '13', '', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reg_pedidos`
--

CREATE TABLE `reg_pedidos` (
  `id_pedido` int(11) NOT NULL,
  `id_venta` int(11) NOT NULL,
  `comprador_id_usuario` varchar(1) NOT NULL,
  `cantidad_pedido` varchar(3) NOT NULL,
  `fecha_pedido` date NOT NULL
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
(1, 1, '1', 1),
(2, 1, 'prueba comentario 1', 1),
(3, 1, 'prueba comentario 1', 1),
(4, 1, 'prueba comentario 1', 1),
(5, 1, 'prueba comentario 1', 1),
(6, 1, 'prueba comentario 1', 1),
(7, 1, 'prueba comentario 1', 1),
(8, 1, '1', 1),
(9, 1, '2', 1),
(10, 1, '2', 1),
(11, 1, '2', 1),
(12, 1, 'Prueba de comentario en el post 2', 2),
(13, 3, 'nuevo comentario', 17),
(14, 3, 'añado otro comentario', 1),
(15, 3, 'corazon de melon', 11);

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
  `categoria` varchar(2) NOT NULL,
  `estadoDispo_venta` varchar(1) NOT NULL,
  `precio_venta` varchar(7) NOT NULL,
  `ubicacion_foto_venta` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias_venta`
--
ALTER TABLE `categorias_venta`
  ADD PRIMARY KEY (`id_categoria`);

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
-- AUTO_INCREMENT de la tabla `categorias_venta`
--
ALTER TABLE `categorias_venta`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `post`
--
ALTER TABLE `post`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `reg_pedidos`
--
ALTER TABLE `reg_pedidos`
  MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `resenias`
--
ALTER TABLE `resenias`
  MODIFY `id_resenia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

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
  MODIFY `id_venta` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
