
const listItems = document.getElementsByClassName('student-item');
const page = document.querySelector('.page');
var isFloat = (listItems.length / 10) % 1 !== 0;


function showPage() {
    appendPageLinks();
    const deactivateQueue = [];
    const a = document.getElementsByTagName('a');
    const ul = document.querySelector('.pagination');
    for(let x = 10; x < listItems.length; x++) { /*This is the js I use to hide list items on the page load. On refresh there is an unsightly flash of 
                                                   the hidden list items that I would like to eliminate*/
        listItems[x].style.display = 'none';
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
            
        }
        
        
    })
}

showPage();


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
