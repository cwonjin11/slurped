document.addEventListener("click", (event) => {console.log("ʘ CLICKED ʘ👀", event.target)})



let addDishButton = document.getElementById("add")
let dishContainer = document.getElementById("allDishes")
let inputField = document.getElementById("inputField")


const dishApp = () => {
    let dish = document.createElement('p')
    dish.classList.add("dish-styling")
    // dish.innerText = inputField.value
    dish.innerHTML += `
        ${inputField.value}
        <button class="delete" id="delete-Btn">
            <i class="far fa-trash-alt"></i>
        </button>
        `
    dishContainer.appendChild(dish)
    
    inputField.value = ""
    // dish.addEventListener("dblclick", function(){
    //     dishContainer.removeChild(dish)
    // })

    // let deleteDish = document.querySelectorAll(".delete");
    let deleteDishBtn = document.getElementsByClassName("delete");
    
    for(let i=0; i<deleteDishBtn.length; i++){
        deleteDishBtn[i].onclick = function() {
            // dishContainer.removeChild(dish)
            console.log(this.parentNode, "parentNode")
            this.parentNode.remove();
        }
    }

}

addDishButton.addEventListener("click", () => {
    dishApp()
})
inputField.addEventListener("keyup", (e) => {
    if(e.key === 'Enter')
    dishApp()
})

// addDishButton.addEventListener("click", () => {
//     let dish = document.createElement('p')
//     dish.classList.add("dish-styling")
//     // dish.innerText = inputField.value
//     dish.innerHTML += `
//         ${inputField.value}
//         <button class="delete">
//             <i class="far fa-trash-alt"></i>
//         </button>
//         `
//     dishContainer.appendChild(dish)
    
//     inputField.value = ""
//     // dish.addEventListener("dblclick", function(){
//     //     dishContainer.removeChild(dish)
//     // })

//     let deleteDish = document.querySelectorAll(".delete");
//     for(let i=0; i<deleteDish.length; i++){
//         deleteDish[i].onclick = function() {
//             // dishContainer.removeChild(dish)
//             this.parentNode.remove();
//         }
//     }


// })