
import {personInfo} from "./data.js";

const uiShow =() => {
    const rootElement  = document.getElementById('rootElement')
const boxElement = document.createElement('div')
boxElement.classList.add('boxItem')
rootElement.append(boxElement)


const personList = document.createElement('div')
personList.classList.add('person-list')
const title = document.createElement('h3')

boxElement.appendChild(personList)
boxElement.insertAdjacentElement('afterbegin',title)


title.textContent="5 Birthdays Today"


const clearBtn = document.createElement('button')
clearBtn.textContent = 'Clear All'
clearBtn.classList.add('clear-btn')
boxElement.insertAdjacentElement('beforeend',clearBtn)


for (let i = 0; i < personInfo.length; i++) {
   const listItem = document.createElement('div')
   listItem.classList.add('person-item')
   personList.appendChild(listItem)
 

   const personImg = document.createElement('img')
   listItem.appendChild(personImg)
   personImg.classList.add('person-img')
    personImg.src = personInfo[i].image

   const personDetail = document.createElement('div')
   personDetail.classList.add('person-detail')
   listItem.appendChild(personDetail)


   const personName = document.createElement('div')
   personName.classList.add('person-name')
   personDetail.appendChild(personName)
   personName.textContent = personInfo[i].name;

   const personAge = document.createElement('div')
   personAge.classList.add('person-age')
   personDetail.appendChild(personAge)

   personAge.textContent = personInfo[i].age;

}

clearBtn.addEventListener('click',function(){
    personList.innerHTML = ""
    clearBtn.textContent = "Deletion completed"
    clearBtn.style.pointerEvents = "none"
})

}

export {uiShow}