document.addEventListener("click", (event) => {console.log("ʘ CLICKED ʘ👀", event.target)})

document.addEventListener("DOMContentLoaded", () => {
    createADish()
    enterToAdd()
})

const addDishButton = document.getElementById("add")
const allDishes = document.getElementById("allDishes")
const inputField = document.getElementById("inputField")

const createADish = () => {
    addDishButton.addEventListener("click", () => {
        if(inputField.value.length == 0){
            alert("Please Enter The Name of a Dish ")
        } else {
            let dish = document.createElement('p')
            dish.classList.add("dish-styling")
            dish.innerHTML += `
                <div class="dish-container">
                    <li>${inputField.value}
                        <button class="delete">
                            <i class="far fa-trash-alt"></i>
                        </button>
                    </li>
                </div>
                `
            allDishes.appendChild(dish)
            inputField.value = ""

            let deleteDishBtn = document.getElementsByClassName("delete");
            for(let i=0; i<deleteDishBtn.length; i++){
                deleteDishBtn[i].addEventListener("click", deleteAddedDish)
            }
            function deleteAddedDish() {
                this.parentNode.remove();
            }
            
        }
    })


}


const enterToAdd = () => {
    inputField.addEventListener("keyup", (e) => {
        if(e.key === 'Enter') 
        addDishButton.click();
    })
}



























    // textColorChanger()
    // backgroundColorChanger()
    // likeBtnEvent()




// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// };

// let testDiv = document.getElementById("test")
// testDiv.innerHTML = `
// <button id="tBtn"> test </button>
// `
// let gettBtn = document.getElementById("tBtn")
//     gettBtn.addEventListener("click", () => {

//         let newText = document.createElement("p")
//         newText.innerText = `
//         FirstName = ${person.firstName}
//         lastName = ${person.lastName}
//         age = ${person.age}
//         eyeColor = ${person.eyeColor}
//         `
//         testDiv.appendChild(newText)
//     })













// const likeBtnEvent = () => {
//     let likeBtn = document.getElementById("testBtn")
//     // console.log(likeBtn)
//     likeBtn.addEventListener("click", () => {
//        let parsedNum = Number(likeBtn.innerText.replace(/[^0-9]/g,''))
//        let newLikes = parsedNum + 1
//        likeBtn.innerText = `❤️: ${newLikes}`
//     })
// }



// const textColor = ["MediumSpringGreen", "lightgreen", "yellow", "yellowgreen", "Aquamarine", "LightCoral", "SkyBlue"]
// const h1Text = document.querySelector("h1")
// const background = document.querySelector("body")

// const textColorChanger = () => {
//         let index = 0
//         const maxIndex = textColor.length
    
//         h1Text.addEventListener("mouseover", () => { 
//             h1Text.style.color = textColor[index++]
//             if(index == maxIndex){
//                 index = 0;
//             }
//         })
// }

// const backgroundColorChanger = () => {
//     let index = 0
//     const maxIndex = textColor.length

//     background.addEventListener("mouseover", () => { 
//         background.style.backgroundColor = textColor[index++]
//         if(index == maxIndex){
//             index = 0;
//         }
//     })
// }




// const h1TextColorChange = () => {
//     const head = document.querySelector('h1');
//     head.addEventListener('mouseover', () => {
//         head.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
//     })
// }










// FOR A TEST PURPOSE
// const changeBackground = () => { document.addEventListener("click", () => {
//     document.body.style.backgroundColor  = "red"
//     })
// }




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