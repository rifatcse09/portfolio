<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Send the form from the site.']);
    exit;
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$host = preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST'] ?? '') ?? '';
if ($origin !== '') {
    $originHost = parse_url($origin, PHP_URL_HOST);
    if (!is_string($originHost) || strcasecmp($originHost, $host) !== 0) {
        http_response_code(403);
        echo json_encode(['ok' => false, 'error' => 'This form only accepts notes from this site.']);
        exit;
    }
}

$raw = file_get_contents('php://input');
$data = json_decode($raw === false ? '' : $raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'The note could not be read.']);
    exit;
}

$name = trim((string) ($data['name'] ?? ''));
$email = trim((string) ($data['email'] ?? ''));
$message = trim((string) ($data['message'] ?? ''));
$honeypot = trim((string) ($data['company'] ?? ''));
$started = (int) ($data['started'] ?? 0);

if ($honeypot !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

if ($started > 0 && (int) (microtime(true) * 1000) - $started < 1500) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Wait a moment, then send it again.']);
    exit;
}

$length = static function (string $value): int {
    return function_exists('mb_strlen') ? mb_strlen($value) : strlen($value);
};

if ($length($name) < 2 || $length($name) > 80 || preg_match('/[\r\n]/', $name)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Add your name.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/', $email) || $length($email) > 120) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Add a valid email so I can reply.']);
    exit;
}

if ($length($message) < 10 || $length($message) > 4000) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Write a short note about the project.']);
    exit;
}

if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}

$now = time();
$recent = array_values(array_filter(
    $_SESSION['contact_notes'] ?? [],
    static fn ($sentAt) => is_int($sentAt) && $now - $sentAt < 3600
));
if (count($recent) >= 5) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'Too many notes from this browser. Email me instead.']);
    exit;
}

$page = trim((string) ($data['page'] ?? ''));
if ($page === '' || preg_match('/[\r\n]/', $page) || !preg_match('#^https://rifatul\.site(/|$)#', $page)) {
    $page = 'https://rifatul.site/';
}

$to = 'rifatul.dev@gmail.com';
$subject = 'Project note from rifatul.site';
$body = "Website: https://rifatul.site\nPage: {$page}\nName: {$name}\nEmail: {$email}\n\n{$message}\n";
$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Reply-To: ' . $email,
]);

$sent = mail($to, $subject, $body, $headers);
if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'The note did not send. Email rifatul.dev@gmail.com.']);
    exit;
}

$recent[] = $now;
$_SESSION['contact_notes'] = $recent;

echo json_encode(['ok' => true]);
