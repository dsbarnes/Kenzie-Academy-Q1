for(i=1; i<=3; i++) {
  // Create a div, with class "bar", and set the width to 100px.
  var newElement = document.createElement("div");
  newElement.className = "bar";
  newElement.style.width = i*100 + "px";

  // Place a text label inside the new div.
  var newText = document.createTextNode("Bar #" + i);
  newElement.appendChild(newText);

  // Put the new div on the page inside the existing element "d1".
  var destination = document.getElementById("d1");
  destination.appendChild(newElement);
}