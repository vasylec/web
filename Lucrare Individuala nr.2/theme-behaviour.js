const theme_button = document.querySelector('.theme');
        
        
        
// localStorage.setItem('theme','dark');



if(localStorage.getItem('theme') != null){
    if(localStorage.getItem('theme') == 'dark'){
        theme_button.classList.add('fa-moon');
        theme_button.classList.remove('fa-sun');

        setLight();
    }
    else if(localStorage.getItem('theme') == 'light'){
        theme_button.classList.remove('fa-moon');
        theme_button.classList.add('fa-sun');

        setDark();
    }        
}





theme_button.addEventListener("click", ()=> {
    if(theme_button.classList.contains("fa-moon")){
        theme_button.classList.remove('fa-moon');
        theme_button.classList.add('fa-sun');
        localStorage.setItem('theme','light');


        setDark();


    }
    else{
        theme_button.classList.add('fa-moon');
        theme_button.classList.remove('fa-sun');
        localStorage.setItem('theme','dark');

        setLight();
    }
    console.log(localStorage.getItem('theme'));
});



function setDark(){
    document.querySelector('body').style.backgroundColor = '#141414';
    document.querySelector('body').style.color = 'white';

    // document.querySelectorAll('li i').forEach(element => {
    //     element.style.color = 'gray';
    // });

    document.querySelectorAll('.content button').forEach(element => {
        element.style.backgroundColor = '#141414';
        element.style.color = 'white';
        element.style.borderColor = 'gray';

        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = 'red';
        })

        element.addEventListener("mouseout", () => {
            element.style.backgroundColor = "initial";
        });
    });

    document.querySelectorAll('input[type="button"]').forEach(element => {
        element.style.backgroundColor = 'gray';
    });

    try {
        document.querySelector('.deleteButton button').style.backgroundColor = '#141414';
    } catch (error) {
    }
    
    try {
        document.querySelector('.checkout button').style.backgroundColor = '';
        document.querySelector('.checkout>div').style.backgroundColor = '#141414';
        document.querySelector('.checkout>div').style.borderColor = 'gray';
    } catch (error) {
    }


}

function setLight(){
    document.querySelector('body').style.backgroundColor = '';
    document.querySelector('body').style.color = '';

    document.querySelectorAll('li i').forEach(element => {
        element.style.color = '';
    });

    document.querySelectorAll('.content button').forEach(element => {
        element.style.backgroundColor = '';
        element.style.color = '';
        element.style.borderColor = '';

        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = '';
        })

        element.addEventListener("mouseout", () => {
            element.style.backgroundColor = "";
        });
    });

    try {
        document.querySelector('.deleteButton button').style.backgroundColor = '';
    } catch (error) {
        
    }

    try {
        document.querySelector('.checkout button').style.backgroundColor = '';
        document.querySelector('.checkout>div').style.backgroundColor = '';
        document.querySelector('.checkout>div').style.borderColor = '';
    } catch (error) {
    }


}

        
function prevNextButton(){
    if(localStorage.getItem('theme') != null){
        if(localStorage.getItem('theme') == 'dark'){
            setLight();
        }
        else if(localStorage.getItem('theme') == 'light'){
            setDark();
        }        
    }
}
