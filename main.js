function canvasClicked(canvasNumber) {
    console.log("field numder")
}

function cellClicked(row, col) {
    console.log("row numder", row)
    console.log("col numder", col)
    var img = document.getElementById('container').children[row].children[col].getElementsByClassName('field')
    img.src = "img/o.svg"
}

// $('div').click(function(evt)
// {
//     // var currentId = this
//     // currentId.sr
// }
// )