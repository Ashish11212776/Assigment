// 2. Create interactive elements that can store the current color value input an
// array, for later use. Also creates buttons to update the body background
// color to the value of the button text. Color style and events with Dynamic
// Elements DOM.
// Page elements Events and Style Exercise :
// 1. Using JavaScript, create two buttons on the page.
// 2. Add a click event to the first button, that when pressed should list out
// all the stored color values from the holding array. When pressed
// create page elements that have the color value from the holding array,
// and are clickable elements. Once clicked the element should be
// removed from the page.
// 3. The second button should store the color value from the input field into
// a holding array.
// 4. The second button should also create a page element button, that has
// the text content of the input field color value.
// 5. On change of the input value update the background color to match
// the input field value

const colorArray = ['red', 'green'];
const mainPage=document.createElement('div');
mainPage.setAttribute('class','mainPage');
const createElements=(parent,eleType,eleContent,attreibute={})=>{
    const ele=document.createElement(eleType);
    ele.textContent=eleContent;
    parent.appendChild(ele);
    for(const key in attreibute){
        ele.setAttribute(key,attreibute[key]);
    }
    return ele;
};
const inputField = createElements(mainPage, 'input', '', {
  type: 'text',
  id: 'inputField',
  placeholder: 'Enter color',
});document.body.appendChild(mainPage);

 const submitBtn=createElements(mainPage,"button",'submit');
inputField.addEventListener('change',()=>{
    const color=inputField.value;
   submitBtn.addEventListener('click',()=>{
    colorArray.push(color);
    submithandler();
   });

});
const submithandler=()=>{
for(const color of colorArray){
    const colorBtn=createElements(mainPage,'button',color);
    colorBtn.addEventListener('click',()=>{
        document.body.style.backgroundColor=color;
        colorBtn.remove();
    });
};
}
