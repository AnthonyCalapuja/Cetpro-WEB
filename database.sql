-- ==========================================================
-- CETPRO 01 - Estructura de Base de Datos para Admisiones
-- Compatible con MySQL 5.7+, MySQL 8.0+ y MariaDB en Hostinger
-- ==========================================================

-- 1. Crear tabla de preinscripciones
CREATE TABLE IF NOT EXISTS `preinscripciones` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `codigo_constancia` VARCHAR(50) NOT NULL,
  `apellidos_nombres` VARCHAR(150) NOT NULL,
  `tipo_documento` VARCHAR(30) NOT NULL,
  `numero_documento` VARCHAR(20) NOT NULL,
  `fecha_nacimiento` DATE NOT NULL,
  `edad` VARCHAR(20) NOT NULL,
  `genero` VARCHAR(20) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `telefono` VARCHAR(30) NOT NULL,
  `especialidad` VARCHAR(150) NOT NULL,
  `estado` VARCHAR(20) DEFAULT 'Pendiente',
  `ip_registro` VARCHAR(45) DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_codigo_constancia` (`codigo_constancia`),
  KEY `idx_numero_documento` (`numero_documento`),
  KEY `idx_especialidad` (`especialidad`),
  KEY `idx_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ==========================================================
-- Consultas útiles para administración:
-- ==========================================================

-- Ver todas las preinscripciones ordenadas por fecha reciente:
-- SELECT * FROM preinscripciones ORDER BY created_at DESC;

-- Ver cantidad de postulantes por especialidad:
-- SELECT especialidad, COUNT(*) as total_postulantes 
-- FROM preinscripciones 
-- GROUP BY especialidad;

-- Buscar postulante por DNI:
-- SELECT * FROM preinscripciones WHERE numero_documento = '12345678';
