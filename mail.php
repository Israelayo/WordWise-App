<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    echo "Thank you, $name! PHP is working! We received your message and will notify you at $email.";
} else {
    echo "Form not submitted correctly.";
}
?>