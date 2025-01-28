const slidesData =[
  {
    "name": "Sunset Beach",
    "imgUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "description": "A beautiful beach with stunning sunsets and golden sands."
  },
  {
    "name": "Mountain View",
    "imgUrl": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    "description": "A breathtaking view of the mountains with lush greenery."
  },
  {
    "name": "City Lights",
    "imgUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "description": "A vibrant cityscape illuminated by colorful lights at night."
  }
]


const slider = document.querySelector("#slider");

const adder = () => {
  slidesData.forEach((slide, index) => {
    const slideElement = document.createElement("div");
    slideElement.setAttribute("class", "slide");
    if (index == 0) {
      slideElement.classList.add("active");
    }
    slideElement.innerHTML = `
         <h2>${slide.name}</h2>
      <img src="${slide.imgUrl}" alt="${slide.name}">
      <p>${slide.description}</p>
    `;
    slider.appendChild(slideElement);
  });
  document.querySelector("#next").addEventListener("click",()=>mover("next"));
   document.querySelector("#prev").addEventListener("click",()=>mover("prev"));
};

const mover=(direction)=>{
    const current=document.querySelector(".slide.active");
    let newActive;
    if(direction==="next"){
       newActive=current.nextElementSibling || slider.firstElementChild;
    }else if(direction==="prev"){
        newActive=current.previousElementSibling || slider.lastElementChild;
    }
    current.classList.remove("active");
    newActive.classList.add("active");
}

document.addEventListener("DOMContentLoaded",adder);