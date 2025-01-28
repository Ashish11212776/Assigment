
const btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", async () => {
  const response = await fetch('/Data.json');
  const data = await response.json(); 
  document.getElementById('output').innerHTML = JSON.stringify(data, null, 2); // Display data
});



const btn2Handeler=async()=>{
  
 try {
    const data=await fetch("/Data.json");
    if (!data.ok) {
      throw new Error('Network response was not ok');
    }
    const jsonData=await data.json();
   document.getElementById('output').innerHTML = JSON.stringify(jsonData, null, 2);
 } catch (error) {
     console.error('Error fetching the file:', error);
 }
};
const btn2=document.querySelector(".btn2");
btn2.addEventListener("click",btn2Handeler);

//for 3rd button
const paths=["/Data copy.json","/Data.json"];
const btn3=document.querySelector(".btn3");
btn3.addEventListener("click", async () => {
  try {
    const responses = await Promise.all(paths.map(path => fetch(path))); // Fetch all files
    const data = await Promise.all(responses.map(response => response.json())); // Parse all JSON data
    // Display all data from all files
    document.getElementById('output').innerHTML = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error("Error fetching multiple files:", error);
  }
});


