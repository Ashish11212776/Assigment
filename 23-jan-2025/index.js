// 1. Dynamically create page buttons that can be used to count totals separately.
// Create a button to output all the result totals. Only using JavaScript NO
// HTML elements
// Dynamic Page counters with JavaScript :
// 1. Create a global object to set the number of buttons to be created
// 2. Create a main page element that will contain all the new elements
// 3. Create a function to create page elements, adding the element type to
// a parent object. Include a parameter in the function for the inner
// content of the element.
// 4. Loop through and create all the buttons, set a default total of 0 for
// each one. On click create a function that will update and output the
// current value of this element total. You can add styling to the buttons
// 5. Add a class of “btn” to each new button so that they can be
// distinguished from the main total tally button. Create a button that
// will output all the current button total results.
// 6. When the tally button is clicked create a function that will select all the
// elements with a class of “btn” and loop through them.
// 7. For each element with the class of “btn” create a new list item
// element, output that into an unordered list on the main page. The list
// item contents should show the element total and the element
// textContent. You can also select the style to match the button style
// property values.

const numbreOfButtons={  //1
  button1: '0',
  button2: '0',
  button3: '0',
};

const mainPage=document.createElement('div'); //2
mainPage.setAttribute('id','mainPage');
document.body.appendChild(mainPage);

const createElements=(parent,eleType,eleContent)=>{
    const ele=document.createElement(eleType);
    ele.textContent=eleContent;
    parent.appendChild(ele);
    return ele;
}
for(const [key,value] of Object.entries(numbreOfButtons)){  //3
    const btn=createElements(mainPage,'button',` ${key}: ${value}`);
    btn.setAttribute('class','btn');
    btn.setAttribute('id',`btn${key+1}`);
    //dout
    btn.addEventListener('click', () => {
        numbreOfButtons[key]++;
        btn.textContent = `${key}: ${numbreOfButtons[key]}`;
      });
};
//output button
let sum=0;
const outputBtn=createElements(mainPage,'button',`Output:${sum}`);
outputBtn.addEventListener('click',()=>{
    sum=0;
    for(const [key,value] of Object.entries(numbreOfButtons)){
        sum+=parseInt(numbreOfButtons[key]);
        outputBtn.textContent=`Output:${sum}`;
    }
});
 //creating tally button
    const tallyBtn=createElements(mainPage,'button','Tally');
    tallyBtn.setAttribute('class','tally');
    tallyBtn.addEventListener('click',()=>{
        const data=document.getElementsByClassName('btn');
        const ul=document.createElement('ul');
        mainPage.appendChild(ul);
        for(const key of data){
            const li=document.createElement('li');
            li.textContent=`${key.textContent}`;
            ul.appendChild(li);
        }
        
    })