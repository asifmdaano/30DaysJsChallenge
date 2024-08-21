// Click event listener to change paragraph text
document.getElementById('changeTextButton').addEventListener('click', () => {
    // select the element.
    const paragraph = document.getElementById('task9');

    // change the content of the element.
    paragraph.textContent = "this is new text.";
});

