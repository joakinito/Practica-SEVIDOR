<?php
require_once('../conexion/Conexion.php');
require_once('../Consulta\Consulta.php');

$conexion = new Conexion("localhost", "root", "qwerty.1234", "monfab", 3309);
$consulta = new Consulta($conexion);

$id = isset($_GET['id']) ? $_GET['id'] : null;

echo $consulta->eliminarElemento($id);
