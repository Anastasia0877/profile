<?php
$to = "your@email.com"; //нужный email

// Получаем данные из формы
$firstName = htmlspecialchars($_POST['first-name']);
$lastName  = htmlspecialchars($_POST['last-name']);
$email     = htmlspecialchars($_POST['email']);
$phone     = htmlspecialchars($_POST['phone']);
$message   = htmlspecialchars($_POST['info']);

// Тема письма
$subject = "Нова заявка з сайту";

// Текст письма
$body = "
<b>Імʼя:</b> $firstName<br>
<b>Прізвище:</b> $lastName<br>
<b>Email:</b> $email<br>
<b>Телефон:</b> $phone<br>
<b>Важлива інформація:</b><br>$message
";

// Заголовки
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: <$email>" . "\r\n";

// Отправка
$success = mail($to, $subject, $body, $headers);

// Перенаправление после отправки
if ($success) {
    header("Location: thank-you.html"); // файл thank-you.html
    exit();
} else {
    echo "Сталася помилка при надсиланні форми. Спробуйте ще раз.";
}
?>
