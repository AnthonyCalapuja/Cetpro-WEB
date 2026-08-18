<?php
/**
 * API Endpoint: Registro de Pre-Inscripciones CETPRO 01
 * Recibe datos del formulario React / Next.js y los guarda en Hostinger MySQL
 */

// Encabezados CORS y JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Manejo de solicitudes OPTIONS (Preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Solo permitir solicitudes POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Método no permitido. Se requiere POST.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Obtener los datos JSON enviados en el cuerpo de la petición
$inputRaw = file_get_contents("php://input");
$data = json_decode($inputRaw, true);

if (!$data) {
    // Si no vino por json, intentar con $_POST
    $data = $_POST;
}

if (empty($data)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'No se recibieron datos para procesar la preinscripción.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Sanitizar y extraer campos
$apellidosNombres = isset($data['apellidosNombres']) ? trim(strip_tags($data['apellidosNombres'])) : '';
$tipoDocumento    = isset($data['tipoDocumento']) ? trim(strip_tags($data['tipoDocumento'])) : 'DNI';
$numeroDocumento  = isset($data['numeroDocumento']) ? trim(strip_tags($data['numeroDocumento'])) : '';
$fechaNacimiento  = isset($data['fechaNacimiento']) ? trim($data['fechaNacimiento']) : '';
$edad             = isset($data['edad']) ? trim(strip_tags($data['edad'])) : '';
$genero           = isset($data['genero']) ? trim(strip_tags($data['genero'])) : '';
$correo           = isset($data['correo']) ? filter_var(trim($data['correo']), FILTER_SANITIZE_EMAIL) : '';
$telefono         = isset($data['telefono']) ? trim(strip_tags($data['telefono'])) : '';
$especialidad     = isset($data['especialidad']) ? trim(strip_tags($data['especialidad'])) : '';

// Validaciones obligatorias
$errores = [];

if (empty($apellidosNombres) || strlen($apellidosNombres) < 3) {
    $errores[] = 'Debe ingresar sus apellidos y nombres completos.';
}

if (empty($numeroDocumento)) {
    $errores[] = 'El número de documento es obligatorio.';
} elseif ($tipoDocumento === 'DNI' && !preg_match('/^[0-9]{8}$/', $numeroDocumento)) {
    $errores[] = 'El DNI debe tener exactamente 8 dígitos numéricos.';
}

if (empty($fechaNacimiento)) {
    $errores[] = 'La fecha de nacimiento es obligatoria.';
}

if (empty($genero)) {
    $errores[] = 'Debe seleccionar su género / sexo.';
}

if (empty($correo) || !filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    $errores[] = 'Debe ingresar un correo electrónico válido.';
}

if (empty($telefono) || strlen($telefono) < 6) {
    $errores[] = 'Debe ingresar un número de teléfono o celular válido.';
}

if (empty($especialidad)) {
    $errores[] = 'Debe seleccionar una especialidad de interés.';
}

if (!empty($errores)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Por favor corrige los datos del formulario.',
        'errors'  => $errores
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Obtener IP del postulante
$ipRegistro = $_SERVER['HTTP_CLIENT_IP'] ?? $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'Desconocida';

// Incluir conexión a base de datos
require_once __DIR__ . '/db.php';

try {
    $pdo = getDbConnection();

    // Generar código único de constancia oficial
    // Formato: ADM-2026-XXXXXX
    $codigoConstancia = 'ADM-2026-' . str_pad(mt_rand(100000, 999999), 6, '0', STR_PAD_LEFT);

    // Preparar inserción segura con Prepared Statement (Evita SQL Injection)
    $stmt = $pdo->prepare("
        INSERT INTO preinscripciones (
            codigo_constancia,
            apellidos_nombres,
            tipo_documento,
            numero_documento,
            fecha_nacimiento,
            edad,
            genero,
            correo,
            telefono,
            especialidad,
            estado,
            ip_registro
        ) VALUES (
            :codigo_constancia,
            :apellidos_nombres,
            :tipo_documento,
            :numero_documento,
            :fecha_nacimiento,
            :edad,
            :genero,
            :correo,
            :telefono,
            :especialidad,
            'Pendiente',
            :ip_registro
        )
    ");

    $stmt->execute([
        ':codigo_constancia' => $codigoConstancia,
        ':apellidos_nombres' => $apellidosNombres,
        ':tipo_documento'    => $tipoDocumento,
        ':numero_documento'  => $numeroDocumento,
        ':fecha_nacimiento'  => $fechaNacimiento,
        ':edad'              => $edad,
        ':genero'            => $genero,
        ':correo'            => $correo,
        ':telefono'          => $telefono,
        ':especialidad'      => $especialidad,
        ':ip_registro'       => substr($ipRegistro, 0, 45)
    ]);

    $idInsertado = $pdo->lastInsertId();

    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => '¡Pre-inscripción registrada exitosamente en la base de datos!',
        'codigo'  => $codigoConstancia,
        'id'      => $idInsertado,
        'data'    => [
            'codigoConstancia' => $codigoConstancia,
            'apellidosNombres' => $apellidosNombres,
            'tipoDocumento'    => $tipoDocumento,
            'numeroDocumento'  => $numeroDocumento,
            'fechaNacimiento'  => $fechaNacimiento,
            'edad'             => $edad,
            'genero'           => $genero,
            'correo'           => $correo,
            'telefono'         => $telefono,
            'especialidad'     => $especialidad,
            'fechaRegistro'    => date('d/m/Y H:i:s')
        ]
    ], JSON_UNESCAPED_UNICODE);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Error al registrar la preinscripción en la base de datos.',
        'error_detail' => $e->getMessage()
    ], JSON_UNESCAPED_UNICODE);
}
