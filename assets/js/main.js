let container_bottom = document.getElementById('container-bottom');
let add_button = document.getElementById('addButton');
// let li = "";
let input_value;

add_button.addEventListener('click', function() {
  if (document.getElementById('input').value.length === 0) {
    alert("Please enter a task");
  }
  else {
    input_value = document.getElementById('input').value
    container_bottom.innerHTML  += `
                                    <li id="item-bar" class="item-bar flex-center spaceBetween">
                                      <span class="item cursive colorCustomPeach">${input_value}</span>
                                      <span class="strikeAndDeleteButton flex-center">
                                        <i id="strike" class="fa fa-minus fa-2x strike colorCustomPeach" onclick="strikeItem()" ></i>
                                        <i id="delete" class="fa fa-trash delete colorCustomPeach onclick="deleteItem()" ></i>
                                      </span>
                                    </li>
                                  `;
                                  
    let item_bar = document.querySelectorAll('.item-bar');
    let deleteItem = document.querySelectorAll('.delete');
    let strikeItem = document.querySelectorAll('.strike');
    let item = document.querySelectorAll('.item');

    for (let i = 0; i < item_bar.length; i++) {
      deleteItem[i].onclick = function() {
        item_bar[i].remove();
      };
      strikeItem[i]. onclick = function() {
        item[i].style.textDecoration = "line-through";
        item[i].style.textDecorationColor = "white";
        item[i].style.textDecorationStyle = "wavy"
      };
    }

   
    //   current_tasks[i].onclick = function () {};
    //     this.parentNode.remove();
    
  }
});
    

    // why is this giving null
    // let deleteItem = document.querySelector('i'); 
    // let strikeItem = document.getElementById('strike');
    // function strikeItem() {
    //   alert('working strike');
    // }
    // function deleteItem() {
    //   alert('working delete');
    // }












