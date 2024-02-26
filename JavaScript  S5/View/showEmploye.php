<?php
include '../Model/employe.php';
include '../Controller/EmployeC.php';

$emp = new Employe("Test","Test","password123","12/09/2000","Test@gmail.com","8798987");
var_dump($emp);
$employeC = new EmployeC();
$employeC->show($emp);
?>