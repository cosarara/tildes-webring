<?php
$users = [];
foreach (glob("/home/*/.ring") as $user) {
	$users[] = basename(dirname($user));
}
sort($users);
$i = array_search($_GET["before"]??"", $users) ?? 0;
$prev = $users[$i-1] ?? $users[count($users)-1];
header("Location: https://tilde.club/~$prev");
