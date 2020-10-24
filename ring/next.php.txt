<?php
$users = [];
foreach (glob("/home/*/.ring") as $user) {
	$users[] = basename(dirname($user));
}
sort($users);
$i = array_search($_GET["after"]??"", $users) ?? 0;
$next = $users[$i+1] ?? $users[0];
header("Location: https://tilde.club/~$next");
