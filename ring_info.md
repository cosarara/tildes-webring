% How to join the webring

This webring can be joined by any user on [tilde.club](https://tilde.club).

First, add the following code to your page, replacing YOURUSERNAMEHERE by your username (no ~):

```html
<div id="newring">
  [<a href="/~cosarara/ring/prev.php?before=YOURUSERNAMEHERE">Previous page</a>]
  [<a href="/~cosarara/ring/rand.php?current=YOURUSERNAMEHERE">Random page</a>]
  [<a href="/~cosarara/ring/next.php?after=YOURUSERNAMEHERE">Next page</a>]
  <br>
  <a href="/~cosarara/ring_info.html">How to join this webring</a>
</div>
```
You may edit the code however you want.
It should work as long as the URLs are kept in place and have your user in them.

Then create a `.ring` file in your ~ to be added in the webring:
```
$ touch ~/.ring
```

## Why another webring?

I was not satisfied with the
[old webring](http://tilde.club/~harper/join.html)
because it only had a "random" link, no next or previous.
The buttons at the sides were just "Click to join" buttons.

## How does this work?

Only users with a `.ring` file in their ~ are included.
See the source for each file:

* [prev.php](/~cosarara/ring/prev.php.txt)
* [next.php](/~cosarara/ring/next.php.txt)
* [rand.php](/~cosarara/ring/rand.php.txt)

You should be able to copy these to your own `public_html`
directory, if you want.

-----------

<style>
#newring { margin-bottom: 20px; padding: 3px;
	border: 1px solid black; }
#newring p { margin: 0; text-align: center; }
</style>

<div id="newring">
  [<a href="/~cosarara/ring/prev.php?before=cosarara">Previous page</a>]
  [<a href="/~cosarara/ring/rand.php?current=cosarara">Random page</a>]
  [<a href="/~cosarara/ring/next.php?after=cosarara">Next page</a>]
  <br>
  <a href="/~cosarara/ring_info.html">How to join this webring</a>
</div>

[back to the homepage](/~cosarara/)
