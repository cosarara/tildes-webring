% How to join the webring

First, add the following code to your page, replacing YOURUSERNAMEHERE by your username:

```html
<div id="newring" data-self="YOURUSERNAMEHERE">
  [<a id="ring-prev">Previous page</a>]
  [<a id="ring-rand">Random page</a>]
  [<a id="ring-next">Next page</a>]
  <br>
  <a href="/~cosarara/ring_info.html">How to join this webring</a>
</div>
<script src="/~cosarara/ring.js"></script>
```
You may edit the code however you want.
It should work as long as all the ids are kept in place and
`#newring data-self` lists your user.

Then create a `.ring` file in your ~ to be added in the webring:
```
$ touch ~/.ring
```

## How this works:

If you read the source at [ring.js](./ring.js) you will see
it fetches a JSON document from [ring.php](./ring.php) ([source](./ring_src.php)).
That file returns a list with all the tilde users
that have a `.ring` file in their home.
It then looks for the next and previous in the list,
and a random entry on top.
