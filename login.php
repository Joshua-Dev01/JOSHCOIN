<?php
if (empty($_POST["name"])) {
    die("Name is required");
}  
if ( ! filter_Var($_POST["emaill"],  FILTER_VARLIDATE_EMAIL)) {
    die("Valid email is required");
}
print_r($_POST);