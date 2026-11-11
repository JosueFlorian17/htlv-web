<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Metodo no permitido']);
    exit;
}

// Obtener payload JSON o POST directo
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

if (empty($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Datos vacios']);
    exit;
}

$date = date('Y-m-d H:i:s');
$ip = $_SERVER['REMOTE_ADDR'] ?? 'Desconocida';
$tipo = isset($data['tipo']) ? trim($data['tipo']) : 'Consulta General';

// Carpeta privada fuera del acceso web público si es posible, o protegida en directorio actual
$storageDir = __DIR__ . '/../data_consultas';
if (!is_dir($storageDir)) {
    @mkdir($storageDir, 0755, true);
}
// Fallback si no tiene permisos fuera de htlvnetwork.org
if (!is_dir($storageDir) || !is_writable($storageDir)) {
    $storageDir = __DIR__ . '/data_consultas';
    if (!is_dir($storageDir)) {
        @mkdir($storageDir, 0755, true);
        @file_put_contents($storageDir . '/.htaccess', "Deny from all\n");
    }
}

$txtFile = $storageDir . '/consultas_recibidas.txt';

$entry = "=================================================================\n";
$entry .= "FECHA: " . $date . " | IP: " . $ip . "\n";
$entry .= "TIPO: " . $tipo . "\n";

foreach ($data as $key => $val) {
    if (is_array($val)) {
        $val = json_encode($val, JSON_UNESCAPED_UNICODE);
    }
    $entry .= strtoupper($key) . ": " . trim($val) . "\n";
}
$entry .= "=================================================================\n\n";

$saved = @file_put_contents($txtFile, $entry, FILE_APPEND | LOCK_EX);

if ($saved !== false) {
    echo json_encode(['success' => true, 'message' => 'Consulta guardada correctamente']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'No se pudo guardar la consulta']);
}
?>
