// Task 1

// let newWindow = window.open("", "", "width=300,height=300");

// setTimeout(() => {
//     newWindow.resizeTo(500, 500);
// }, 2000);

// setTimeout(() => {
//     newWindow.moveTo(200, 200);
// }, 4000);

// setTimeout(() => {
//     newWindow.close();
// }, 6000);

// Task 2

// function changeCSS() {
//     let paragraph = document.getElementById('text');
//     paragraph.style.color = 'orange';
//     paragraph.style.fontSize = '20px';
//     paragraph.style.fontFamily = 'Comic Sans MS';
// }

// document.getElementById('changeStyleButton').addEventListener('click', changeCSS);

// Task 3

// document.getElementById('button1').addEventListener('click', function() {
//     document.body.style.backgroundColor = 'blue';
// });

// document.getElementById('button2').addEventListener('dblclick', function() {
//     document.body.style.backgroundColor = 'pink';
// });

// const button3 = document.getElementById('button3');
// button3.addEventListener('mousedown', function() {
//     document.body.style.backgroundColor = '#6F4E37'
// });
// button3.addEventListener('mouseup', function() {
//     document.body.style.backgroundColor = 'white';
// });

// const link = document.getElementById('link');
// link.addEventListener('mouseover', function() {
//     document.body.style.backgroundColor = 'yellow';
// });
// link.addEventListener('mouseout', function() {
//     document.body.style.backgroundColor = 'white';
// });

// Task 4

// const button = document.getElementById('actionButton');
// const message = document.getElementById('message');

  
//         button.addEventListener('click', function() {
//             message.textContent = "I was pressed!";
//         });

        
//         button.addEventListener('mouseover', function() {
//             message.textContent = "Mouse on me!";});

//         button.addEventListener('mouseout', function() {
//             message.textContent = "Mouse is not on me!";});

// Task 5 

// function updateDimensions() {
//     const width = window.innerWidth;
//     const height = window.innerHeight;
//     const dimensionsDiv = document.getElementById('dimensions');
//     dimensionsDiv.textContent = `Width: ${width}px, Height: ${height}px`;
// }

// updateDimensions();

// window.addEventListener('resize', updateDimensions);