<?php
/**
 * Conexión PDO a MySQL con Manejo de Errores y Auto-Creación de Tabla
 * CETPRO 01
 */

require_once __DIR__ . '/config.php';

function getDbConnection() {
    static $pdo = null;

    if ($pdo !== null) {
        return $pdo;
    }

    $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
        PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES " . DB_CHARSET
    ];

    try {
        $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
        
        // Auto-creación de la tabla preinscripciones si no existe aún
        ensureTableExists($pdo);
        
        return $pdo;
    } catch (PDOException $e) {
        // Enviar error limpio en formato JSON si no se puede conectar
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Error de conexión con la base de datos de Hostinger. Verifica las credenciales en config.php.',
            'error_detail' => $e->getMessage()
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }
}

function ensureTableExists($pdo) {
    $sql = "CREATE TABLE IF NOT EXISTS preinscripciones (
        id INT AUTO_INCREMENT PRIMARY KEY,
        codigo_constancia VARCHAR(50) NOT NULL UNIQUE,
        apellidos_nombres VARCHAR(150) NOT NULL,
        tipo_documento VARCHAR(30) NOT NULL,
        numero_documento VARCHAR(20) NOT NULL,
        fecha_nacimiento DATE NOT NULL,
        edad VARCHAR(20) NOT NULL,
        genero VARCHAR(20) NOT NULL,
        correo VARCHAR(100) NOT NULL,
        telefono VARCHAR(30) NOT NULL,
        especialidad VARCHAR(150) NOT NULL,
        estado VARCHAR(20) DEFAULT 'Pendiente',
        ip_registro VARCHAR(45) NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_dni (numero_documento),
        INDEX idx_codigo (codigo_constancia),
        INDEX idx_especialidad (especialidad)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;";

    $pdo->exec($sql);
}
