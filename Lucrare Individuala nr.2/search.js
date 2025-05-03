    const submit = document.querySelector('.fa-solid.fa-magnifying-glass');    
    const input = document.querySelector('.search-bar input');        


    window.searchedItems = [];

    submit.addEventListener('click', () => {
        console.log(input.value);
    });
    
    input.addEventListener('keydown', (event) => {
        if(event.key === "Enter"){
            
            searchedItems = items.filter(p => 
                p.title.toLowerCase().includes(input.value.toLowerCase())
            )

            setPag(1);
            render();
        }
    })