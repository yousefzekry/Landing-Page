const orderedList = document.querySelector("ul");
const sections = document.getElementsByTagName("section");
const listItem = document.createElement('li');
let links = null ;
/*creating new List Items in the navBar for every section using document fragments
for higher performance*/
let section = 0;
for (section = 0; section < sections.length; section++) {
    let navbarItem = document.createElement('li');
    let sectionNumber = document.getElementById("section");

    navbarItem.innerHTML =  `<a class='menu__link' nav= section${section+1}> Section ${section+1} </a>`;
    listItem.appendChild(navbarItem);
} ;
 orderedList.appendChild(listItem);
//end of creation of navBar list Items

// function active class & active navbar section 
window.onscroll = function(){
   document.querySelectorAll("section").forEach((active) => {
      let activeLink = listItem.querySelector(`[nav=${active.id}]`)
         if (active.getBoundingClientRect().top >= -400 &&
            active.getBoundingClientRect().top <= 150) {
               activeLink.classList.add("active-link");
               active.classList.add("your-active-class");
         } else {
            activeLink.classList.remove("active-link");
            active.classList.remove("your-active-class");
         }
      });
};

//function to scroll when clicking on the navbar section to scroll to the crosponding section smoothly 
links= document.querySelectorAll("a");
links.forEach((_item, index) => addListener(index))

function addListener(index) {
   links[index].addEventListener('click' , () => {
      sections[index].scrollIntoView({behavior: "smooth"});
   })
}