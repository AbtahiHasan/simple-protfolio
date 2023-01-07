//select element
let toggleIcon = document.querySelector('.toggle-icon');
let navlink = document.querySelector('.navlink');

toggleIcon.onclick = () => {
    navlink.classList.toggle("active");
}