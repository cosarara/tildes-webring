<?php
$users = [];
$current = $_GET["current"] ?? "";
foreach (glob("/home/*/.ring") as $path) {
	$user = basename(dirname($path));
	if ($user !== $current) {
		$users[] = $user;
	}
}
$user = $users[array_rand($users)];
header("Location: https://tilde.club/~$user");
