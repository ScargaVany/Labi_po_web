<?php


require "./php/model/connect.php";
require "./php/model/category.php";
require "./php/model/post.php";
require "./php/model/Url.php";


$db = db_connnect('localhost', 'root', '', 'Lab10');
$url = check_url();
$category_url = $url[0] ?? false;

Post::$db = $db;

$categories = category::getAll($db);
$posts = Post::getSortCategory($category_url, $db);

?>