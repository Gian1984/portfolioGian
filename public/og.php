<?php
// Dynamic Open Graph / Twitter card image generator.
// 1200x630 PNG: white background, logo centered, title + subtitle beneath.
// Query params (optional): ?title=...&subtitle=...
// Drop a TTF at ./fonts/Inter-Bold.ttf (or any .ttf) for custom typography.

header('Content-Type: image/png');
header('Cache-Control: public, max-age=31536000, immutable');

$W = 1200;
$H = 630;

$title    = isset($_GET['title'])    ? trim(substr($_GET['title'], 0, 80))    : 'Gianluca Tiengo';
$subtitle = isset($_GET['subtitle']) ? trim(substr($_GET['subtitle'], 0, 80)) : 'Web Developer';

$im = imagecreatetruecolor($W, $H);
$white = imagecolorallocate($im, 255, 255, 255);
$black = imagecolorallocate($im, 17, 24, 39);       // gray-900
$pink  = imagecolorallocate($im, 236, 72, 153);     // pink-500
$muted = imagecolorallocate($im, 75, 85, 99);       // gray-600

imagefilledrectangle($im, 0, 0, $W, $H, $white);

// Thin pink accent bar at the bottom
imagefilledrectangle($im, 0, $H - 12, $W, $H, $pink);

// --- Logo ---
$logoCandidates = [
    __DIR__ . '/img/logos/logoGianlucaTrasparebte.png',
    __DIR__ . '/img_new.png',
];
$logoH = 220;
$logoY = 90;
foreach ($logoCandidates as $logoPath) {
    if (!is_file($logoPath)) continue;
    $logo = @imagecreatefrompng($logoPath);
    if (!$logo) continue;
    $lw = imagesx($logo);
    $lh = imagesy($logo);
    $ratio = $lh > 0 ? $logoH / $lh : 1;
    $newW = (int) round($lw * $ratio);
    $newH = $logoH;
    imagealphablending($logo, true);
    imagesavealpha($logo, true);
    imagecopyresampled(
        $im, $logo,
        (int) (($W - $newW) / 2), $logoY,
        0, 0,
        $newW, $newH,
        $lw, $lh
    );
    break;
}

// --- Text ---
$fontPaths = [
    __DIR__ . '/fonts/Inter-Bold.ttf',
    __DIR__ . '/fonts/Inter-SemiBold.ttf',
    __DIR__ . '/fonts/DejaVuSans-Bold.ttf',
    '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',
    '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf',
    '/usr/share/fonts/TTF/DejaVuSans-Bold.ttf',
];
$font = null;
foreach ($fontPaths as $p) {
    if (is_file($p)) { $font = $p; break; }
}

$titleY = $logoY + $logoH + 90;
$subY   = $titleY + 70;

if ($font && function_exists('imagettftext')) {
    $titleSize = 72;
    $subSize   = 36;

    $bbox = imagettfbbox($titleSize, 0, $font, $title);
    $titleW = $bbox[2] - $bbox[0];
    imagettftext($im, $titleSize, 0, (int) (($W - $titleW) / 2), $titleY, $black, $font, $title);

    $bbox2 = imagettfbbox($subSize, 0, $font, $subtitle);
    $subW = $bbox2[2] - $bbox2[0];
    imagettftext($im, $subSize, 0, (int) (($W - $subW) / 2), $subY, $muted, $font, $subtitle);
} else {
    // GD bitmap font fallback (always available)
    $f = 5;
    $cw = imagefontwidth($f);
    $ch = imagefontheight($f);
    imagestring($im, $f, (int) (($W - strlen($title) * $cw) / 2), $titleY - $ch, $title, $black);
    imagestring($im, $f, (int) (($W - strlen($subtitle) * $cw) / 2), $subY - $ch, $subtitle, $muted);
}

imagepng($im);
