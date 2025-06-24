var counter = 0;

function increment() {
  counter = counter + 1;
  document.getElementById("count").innerText = counter;
}

function reset() {
    counter = 0;
    document.getElementById("count").innerText = counter;
}