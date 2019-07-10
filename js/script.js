/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const listItems = document.getElementsByClassName('student-item');
const page = document.querySelector('.page');
var isFloat = (listItems.length / 10) % 1 !== 0;






/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

function showPage() {
    appendPageLinks();
    const deactivateQueue = [];
    const a = document.getElementsByTagName('a');
    const ul = document.querySelector('.pagination');
    for(let x = 0; x < 10; x++) {
        listItems[x].style.display = 'block';
    }
    a[0].classList.add('active');
    deactivateQueue.push(a[0].textContent);
    ul.addEventListener('click', (e)=> {
        const showEndIndex = parseInt(e.target.textContent + 0);
        if(e.target.nodeName === 'A') {
            if(e.target.textContent == a.length && isFloat) {
               for(let x = showEndIndex - 10; x < listItems.length; x++) {
                listItems[x].style.display = 'block';
                }
            }else {
                for(let x = showEndIndex - 10; x < showEndIndex; x++) {
                    listItems[x].style.display = 'block';
                }
            }
            a[parseInt(e.target.textContent) - 1].classList.add('active');
            deactivateQueue.push(a[parseInt(e.target.textContent) - 1].textContent);
            const hideEndIndex = parseInt(deactivateQueue[0] + 0);
          
            if(deactivateQueue[0] == a.length && isFloat) {
                
               for(let x = hideEndIndex - 10; x < listItems.length; x++) {
                listItems[x].style.display = 'none';
                }
            }else {
                for(let x = hideEndIndex - 10; x < hideEndIndex; x++) {
                    listItems[x].style.display = 'none';
                }
            }
            a[parseInt(deactivateQueue[0] - 1)].classList.remove('active');
            deactivateQueue.shift();
            /*console.log(deactivateQueue);*/
            
            
        }
        
        
    })
}

showPage();

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/


function appendPageLinks() {
    const linkList = document.createElement('ul');
    linkList.classList.add("pagination");
    page.appendChild(linkList);
    
    for(let x = 1; x<=Math.floor(listItems.length / 10); x++) {
        
        const linkListItem = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = x;
        linkListItem.appendChild(a);
        linkList.appendChild(linkListItem);
        
        
        if(x === Math.floor(listItems.length / 10)  && isFloat === true) {
            const linkListItem = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = x + 1;
            linkListItem.appendChild(a);
            linkList.appendChild(linkListItem);
        }
    }
}

/*function appendPageLinks() {
    const linkList = document.createElement('ul');
    linkList.classList.add("pagination");
    page.appendChild(linkList);
    let newLinkIndicator = 1;
    let pageNumber = 0;
    for(let x = 0; x<listItems.length; x++) {
        newLinkIndicator++;
        if(newLinkIndicator === 10 || x === listItems.length - 1) {
            newLinkIndicator = 1;
            pageNumber++;
            const linkListItem = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = pageNumber;
            linkListItem.appendChild(a);
            linkList.appendChild(linkListItem);
            
        }
    }
}*/





// Remember to delete the comments that came with this file, and replace them with your own code comments.