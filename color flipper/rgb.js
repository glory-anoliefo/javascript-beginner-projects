//create variables to hold our values

const range = (end, start = 0, step = 3) =>
  Array.from(
    {
      length: Math.ceil((end - start) / step),
    },
    (_, i) => i * step + start
  );
const numbers = range(256); //initalize array with a numeric range

console.log(numbers);



//write function to concatenate the rgb values
function colorFLipper() {
  //define variable for rgb
  const red = Math.floor(Math.random() * numbers.length);
  const green = Math.floor(Math.random() * numbers.length);
  const blue = Math.floor(Math.random() * numbers.length);

  console.log(red);
  console.log(green);
  console.log(blue);

  const color = "rgb(" + red + "," + green + "," + blue + ")"; //concatenate rgb values or use template literals -> (const color = `rgb(${red}, ${green}, ${blue})`;)
  
  document.body.style.backgroundColor = color;
  document.getElementById('color').innerHTML = color;
}
//create variable to get button element
const btn = document.getElementById("btn");
//Add event listener to button
btn.addEventListener("click", colorFLipper);

//add the function to button event
