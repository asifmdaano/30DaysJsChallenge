// Mouseover event listener to change border color
document.getElementById('task10').addEventListener('mouseover', function(){
    this.style.borderColor = 'red';
});

// Mouseout event listener to reset the border color
document.getElementById('task10').addEventListener('mouseout', function () {
    this.style.borderColor = 'rgb(20, 173, 97)';
});