/*
  1 - get the Navigation Bar by ID " navBar " .
  2 - create unordered list ,and set an ID " navList " .
  3 - add the unordered list to Navigation Bar.
*/
const navBar = document.querySelector('#navBar');
const uList = document.createElement('ul'); 
uList.setAttribute('id','navList');
navBar.appendChild(uList);


/*
  1 - get the unordered list By ID " navList " .
  2 - create for loop,which will create list of Items and set Class,value and text for each .
  3 - add the item to unordered list.
*/
const uListSelected = document.querySelector('#navList');

for (let i=1; i<=4;i++){
  const listItm = document.createElement('li'); 
  listItm.className='listItem';
  listItm.setAttribute('value',`sec${i}`);
  listItm.innerText=`Section ${i}`;
  uListSelected.appendChild(listItm);
};

/*
  1 - get all elements which have className "listItem", which are Navigation bar items.
  2 - add Event Listener('click') for all items,once item clicked it will get the value and a
      assign it to the section then scroll to that section.
*/
const listOfLinks = document.querySelectorAll('.listItem');

for (const link of listOfLinks){
  link.addEventListener('click',function(){
    let theValue = link.getAttribute('value');
    let theSection = document.getElementById(theValue);
    theSection.scrollIntoView({behavior:'smooth'});
  });
};

/*
  1 - this function used to follow which Item is active in the viewport by passing the section as argument .
*/
function areActive(sectionElement){
  for(const link of listOfLinks){
    const linkValue = link.getAttribute('value');
    const sectionElementID = sectionElement.getAttribute('id');
    
    if( linkValue === sectionElementID){
      link.classList.add('activeItem');
    }
    else{
      link.classList.remove('activeItem');
    }
  };
};



/*
  1 - get all elements which have className "section", which are the 4 sections.
  2 - add Event Listener('scroll') to detect  which section is appear in the viewport.
  3 - if the section in the viewport ,then pass the section to function to highlight which item in navigation bar is active. 
*/

const listOfSections = document.querySelectorAll('.section');

function activeListItem(){
  for (const theSection of listOfSections) {
    const rect = theSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      areActive(theSection);
    }
  };
};

document.addEventListener('scroll',activeListItem);
