<?php
/**
 * Configuración de Base de Datos - Hostinger MySQL
 * CETPRO 01 - Módulo de Admisión y Pre-Inscripción
 * 
 * INSTRUCCIONES PARA HOSTINGER:
 * 1. Ingresa a tu hPanel de Hostinger (https://hpanel.hostinger.com).
 * 2. Ve a la sección "Bases de datos" -> "Bases de datos de gestión" / "MySQL".
 * 3. Crea una base de datos y un usuario con su contraseña.
 * 4. Reemplaza los siguientes valores con los datos creados en Hostinger:
 */

// Host de la base de datos (En Hostinger normalmente es 'localhost')
define('DB_HOST', getenv('DB_HOST') ?: 'localhost');

// Nombre de la base de datos (Ejemplo: u123456789_cetpro_db)
define('DB_NAME', getenv('DB_NAME') ?: 'u548094295_cetpro01');

// Usuario de la base de datos (Ejemplo: u123456789_cetpro_user)
define('DB_USER', getenv('DB_USER') ?: 'u548094295_admin');

// Contraseña del usuario de la base de datos
define('DB_PASS', getenv('DB_PASS') ?: 'CETPRO01Abancay%');

// Juego de caracteres recomendado para español y caracteres especiales
define('DB_CHARSET', 'utf8mb4');

// Configuración de zona horaria (Perú / UTC-5)
date_default_timezone_set('America/Lima');

// URL del Webhook de Google Apps Script para Google Sheets
// Pega aquí la URL de la Aplicación Web generada al desplegar en Google Sheets
define('GOOGLE_SHEETS_WEBHOOK_URL', 'https://script.google.com/macros/s/AKfycbxtsSXYcykbY0EQfr3uVBSE20p910p_BQq38T7bw7j7f_a10H0tASjh-lwmIfBQoKJq/exec');

