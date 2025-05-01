const ul = document.querySelector('.filter').querySelectorAll('li');
ul.forEach((element) => {
    const divs = element.querySelectorAll('div');
    
    divs[0].addEventListener("click", () => {            
        const i = divs[0].getElementsByTagName('i')[0];

        if(i.classList.contains('fa-circle-chevron-down')){
            divs[1].style.display = 'block';
            i.classList.add('fa-circle-xmark');
            i.classList.remove('fa-circle-chevron-down');
        }
        else{
            divs[1].style.display = 'none';
            i.classList.add('fa-circle-chevron-down');
            i.classList.remove('fa-circle-xmark');
        }            
    });
});