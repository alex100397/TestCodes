const button = document.querySelector('button');
const items = ['item1', 'item2', 'item3'];

//Implementation 1
button.addEventListener('click', () => {
    items.forEach(item => {
        console.log(item);
    });
})

//Implementation 2
button.addEventListener('click', () => {
    items.forEach(function(item) {
        console.log(item);
    });
})