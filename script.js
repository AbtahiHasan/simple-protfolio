//select element
let toggleIcon = document.querySelector('.toggle-icon');
let header = document.querySelector('.header');

toggleIcon.onclick = () => {
    header.classList.toggle("active");
}