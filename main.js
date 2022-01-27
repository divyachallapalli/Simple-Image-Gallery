const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageAry=['pic1','pic2','pic3','pic4','pic5'];

/* Looping through images */
imageAry.forEach(img=> {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/'+img+'.jpg');
    thumbBar.appendChild(newImage);
})

thumbBar.addEventListener('click',e=>{
    displayedImage.setAttribute('src',e.target.getAttribute('src'));
})

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',e=>{
    if(btn.getAttribute('class') == 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }else{
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})
