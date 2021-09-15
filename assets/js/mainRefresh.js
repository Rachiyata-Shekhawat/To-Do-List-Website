// while deleting it throws error of undefined
// while striking it starts actioning the next item
// add event at enter
// save decoration style after refresh
// text-decoration-thickness

/********************************* *********************************/

let container_bottom = document.getElementById('container-bottom');
let addButton = document.getElementById("addButton");
let input = document.getElementById("input");

//it will call show() so that data is not lost at refresh
show();

//it will be called when add button is clicked
addButton.addEventListener('click',function() {
  //if input text is having any data then this will work
  if(input.value.trim() != 0) {
    
    //storing input data in a variable
    let new_item = input.value;

    // if there is no data in local storage then we are creating an array
    if (localStorage.getItem('data') == null) {
      localStorage.setItem('data', '[]');
    }

    // adding local storage data in a array
    let input_values = JSON.parse(localStorage.getItem('data'));

    //adding new items to array
    input_values.push(new_item);

    //save the updated array into local storage
    localStorage.setItem('data',JSON.stringify(input_values));
  } 

  //if input data is blank then this will work
  else {
    alert('Please enter a task');
  }

  show();
});

//show functionality
function show() {
  let li ="";
  if(localStorage.getItem('data') != null) {
    // adding local storage data in a array
    let input_values = JSON.parse(localStorage.getItem('data'));
    input_values.forEach((element,index) => {
      li += `
              <li id="item-bar" class="item-bar flex-center spaceBetween">
                <span class="item cursive colorCustomPeach">${element}</span>
                <span class="strikeAndDeleteButton flex-center">
                  <i id="strike" class="fa fa-minus fa-2x strike colorCustomPeach" onclick="strikeFn(${index})" ></i>
                  <i id="delete" onclick="deleteFn(${index})" class="fa fa-trash delete colorCustomPeach"></i>
                </span>
              </li> 
            `;
    });//for each ending here
    container_bottom.innerHTML = li;
  }//if ending
}

// delete functionality
function deleteFn(index) {
  // alert("working");
  let item_bar = document.getElementsByClassName('item-bar');
  item_bar[index].remove();
  
  let input_values = JSON.parse(localStorage.getItem('data'));
  input_values.splice(index,1);
  localStorage.setItem('data',JSON.stringify(input_values)); 
}



// strike functionality
function strikeFn(index) {
  let item = document.getElementsByClassName('item');
  item[index].style.textDecorationLine = "line-through"; 
  item[index].style.textDecorationColor = "white";
  item[index].style.textDecorationStyle = "wavy";

}

