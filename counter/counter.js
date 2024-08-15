//set initial count
let count = 0;

//select value of counter and buttons
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn"); //when you console.log, you would notice the nodeList and now we can use forEach() method so that we can call a function for each element in this nodelist

//set forEach method for each buttons to implement what each button do and add event listener to buttons
buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});

//set count to span value

//use loop to implement counting
//start at count value
//increment by 1
