<?php
/**
 * Test de Conexión a Base de Datos en Hostinger
 * Visita: https://tudominio.com/api/test_db.php
 */

header("Content-Type: application/json; charset=UTF-8");
require_once __DIR__ . '/config.php';

$response = [
    'test_status' => 'Iniciando prueba de conexión...',
    'timestamp'   => date('Y-m-d H:i:s'),
    'config'      => [
        'host'     => DB_HOST,
        'database' => DB_NAME,
        'user'     => DB_USER,
        'charset'  => DB_CHARSET
    ]
];

try {
    $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ];

    $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
    
    // Consultar versión de MySQL / MariaDB
    $versionStmt = $pdo->query("SELECT VERSION() as version");
    $version = $versionStmt->fetch()['version'];

    // Verificar tabla preinscripciones
    $tableCheck = $pdo->query("SHOW TABLES LIKE 'preinscripciones'");
    $tableExists = $tableCheck->rowCount() > 0;

    $totalInscritos = 0;
    if ($tableExists) {
        $countStmt = $pdo->query("SELECT COUNT(*) as total FROM preinscripciones");
        $totalInscritos = $countStmt->fetch()['total'];
    }

    $response['success'] = true;
    $response['test_status'] = '¡Conexión exitosa a la base de datos de Hostinger!';
    $response['mysql_version'] = $version;
    $response['tabla_preinscripciones_existe'] = $tableExists;
    $response['total_postulantes_registrados'] = (int)$totalInscritos;

} catch (PDOException $e) {
    http_response_code(500);
    $response['success'] = false;
    $response['test_status'] = 'Error al conectar con la base de datos';
    $response['error_mensaje'] = $e->getMessage();
    $response['sugerencia'] = 'Verifica que el nombre de la base de datos, usuario y contraseña en public/api/config.php coincidan exactamente con los de tu hPanel de Hostinger.';
}

echo json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
