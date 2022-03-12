document.addEventListener("click", (event) => {console.log("ʘ CLICKED ʘ👀", event.target)})

document.addEventListener("DOMContentLoaded", () => {

    createADish()
    enterToAdd()
    // changeBackground()
})




const changeBackground = () => { document.addEventListener("click", () => {
    document.body.style.backgroundColor  = "red"
    })
}

let addDishButton = document.getElementById("add")
let dishContainer = document.getElementById("allDishes")
let inputField = document.getElementById("inputField")

const createADish = () => {
    addDishButton.onclick = () => {
        
        if(inputField.value.length == 0){
            alert("Please Enter the Name of a dish ")
        } else {
            let dish = document.createElement('p')
            dish.classList.add("dish-styling")
            dish.innerHTML += `
                <li>${inputField.value}
                    <button class="delete">
                        <i class="far fa-trash-alt"></i>
                    </button>
                </li>
                `
            dishContainer.appendChild(dish)
            inputField.value = ""

            
            let deleteDishBtn = document.getElementsByClassName("delete");
            for(let i=0; i<deleteDishBtn.length; i++){
                deleteDishBtn[i].addEventListener("click", deleteAddedDish)
            }
            function deleteAddedDish() {
                this.parentNode.remove(); // remove parent, since button is child
            }
            
        }
    }


}


const enterToAdd = () => {
    inputField.addEventListener("keyup", (e) => {
        if(e.key === 'Enter') 
        addDishButton.click();
    })
}






// Not using anymore ==> deleteAddedDish function added
    // deleteDishBtn[i].onclick = function() {
    //     console.log(this.parentNode,"this")
    //     this.parentNode.remove();
    // }

/// click to add not using anymore since onclick function added
// const clickToAdd = () => {
//     addDishButton.addEventListener("click", () => {
//         dishApp()
//     })
// }




//double click to delete. NOT using anymore
  // dish.addEventListener("dblclick", function(){
    //     dishContainer.removeChild(dish)
    // })

    // let deleteDish = document.querySelectorAll(".delete");




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