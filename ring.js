// see https://tilde.club/~cosarara/ring-info.html
document.addEventListener('DOMContentLoaded', function() {
  const el = document.getElementById("newring");
  const prev = document.getElementById("ring-prev");
  const next = document.getElementById("ring-next");
  const rand = document.getElementById("ring-rand");
  fetch('/~cosarara/ring.php')
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp);
      const l = resp.length;
      const i = resp.indexOf(el.getAttribute("data-self"));
      prev.setAttribute("href", resp[i-1] ?? resp[l-1]);
      next.setAttribute("href", resp[i+1] ?? resp[0]);
      rand.setAttribute("href", resp[Math.floor(Math.random()*l)]);
    })
    .catch(error => {
      console.log(error);
      el.textContent = "Error loading webring: "+error;
    });
}, false);
