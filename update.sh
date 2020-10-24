#!/usr/bin/env bash
set -e
(
        cd ~/public_html || exit 1
        pandoc -s ring_info.md -o ring_info.html -s --template ~/pandoc-template/html
)
(
        cd ~/public_html/ring || exit 1
        cp next.php next.php.txt
        cp prev.php prev.php.txt
        cp rand.php rand.php.txt
)
