const cont = document.querySelectorAll('.range-container');    
    
    cont.forEach((element, index) => {        
        element.children[3].value = element.children[1].value;
        element.children[4].value = element.children[2].value;
        
        
        element.children[1].addEventListener("input", () => {
            const minGap = 0;
    
            if(element.children[2].value - element.children[1].value < minGap){
                if(document.activeElement === element.children[1]){
                    element.children[1].value = element.children[2].value - minGap;
                }
                else{
                    element.children[2].value = element.children[1].value + minGap;
                }
            }
            
            element.children[3].value = element.children[1].value;
            element.children[4].value = element.children[2].value;
        })
        
        element.children[2].addEventListener("input", () => {
            const minGap = 0;
    
            if(element.children[2].value - element.children[1].value < minGap){
                if(document.activeElement === element.children[1]){
                    element.children[1].value = element.children[2].value - minGap;
                }
                else{
                    element.children[2].value =parseInt(element.children[1].value) + minGap;
                }
            }
            
            element.children[3].value = element.children[1].value;
            element.children[4].value = element.children[2].value;
        })
        
        element.children[3].addEventListener("input", () => {
            element.children[1].value = element.children[3].value;
            element.children[2].value = element.children[4].value;
        });

        element.children[4].addEventListener("input", () => {
            element.children[1].value = element.children[3].value;
            element.children[2].value = element.children[4].value;
        });
    });