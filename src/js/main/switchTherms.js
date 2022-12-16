import refs from '../fetch-service/refs';
refs.switchColor.addEventListener('click', darkMode);


function darkMode () {
    console.log("helo");
    const edit = document.body;
    edit.classList.toggle('dark');
    
}


export {darkMode};