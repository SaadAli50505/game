function submitData() {
  var p1 = document.getElementById("input-name-1").value;
  var p2 = document.getElementById("input-name-2").value;

  var sum1 = p1.concat("&");
  var sum2 = sum1.concat(p2);

  localStorage.setItem("link", sum2);
}
alert(`This game is design for PC & Laptop`);
