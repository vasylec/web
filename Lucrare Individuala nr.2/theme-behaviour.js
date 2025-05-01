const theme_button = document.querySelector('.theme');
        
        
        
// localStorage.setItem('theme','dark');



if(localStorage.getItem('theme') != null){
    if(localStorage.getItem('theme') == 'dark'){
        theme_button.classList.add('fa-moon');
        theme_button.classList.remove('fa-sun');
    }
    else if(localStorage.getItem('theme') == 'light'){
        theme_button.classList.remove('fa-moon');
        theme_button.classList.add('fa-sun');
    }        
}





theme_button.addEventListener("click", ()=> {
    if(theme_button.classList.contains("fa-moon")){
        theme_button.classList.remove('fa-moon');
        theme_button.classList.add('fa-sun');

        localStorage.setItem('theme','light');

    }
    else{
        theme_button.classList.add('fa-moon');
        theme_button.classList.remove('fa-sun');
        
        localStorage.setItem('theme','dark');
    }
    console.log(localStorage.getItem('theme'));
});


        
        
