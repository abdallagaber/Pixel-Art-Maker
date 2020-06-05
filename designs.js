// Select color input
function addColor() {
    var td = document.getElementsByTagName("td");
    for (var c = 0; c < td.length; c++) {
        td[c].addEventListener("click", function(Event) {
            var Color = Event.target;
            Color.style.backgroundColor = document.getElementById("colorPicker").value;
        });
    }
}
// When size is submitted by the user, call makeGrid()

function makeGrid() {
    var Grid = document.getElementById("pixelCanvas");
    Grid.innerHTML = "";
    var Height = document.getElementById("inputHeight").value;
    var Width = document.getElementById("inputWidth").value;
    var Table = "";

    for (var h = 0; h < Height; h++) {
        Table += "<tr>";
        for (var w = 0; w < Width; w++) {
            Table += "<td></td>";
        }
        Table += "</tr>";
    }

    Grid.innerHTML = Table;
    addColor();
}