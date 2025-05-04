    window.pag = 1;
    let maxPag = calcMaxPag();
    const prev = document.querySelector('#prev');
    const next = document.querySelector('#next');
    const p = document.querySelector('.pag p');

    const wlist =  getWishListItems();
    const clist = getCartListItems();
   
    function getWishListItems(){
        if(localStorage.getItem('wishlist') == null){
            return [];
        }
        else{
            return JSON.parse(localStorage.getItem('wishlist'));
        }
    }

    function getCartListItems(){
        if(localStorage.getItem('cartlist') == null){
            return [];
        }
        else{
            return JSON.parse(localStorage.getItem('cartlist'));
        }
    }

    function setPag(n){
        pag = n;
        p.textContent = pag;
    }

    function calcMaxPag(){
        if(filteredItems.length == 0){
            return Math.ceil(items.length/20);
        }
        else{
            return Math.ceil(filteredItems.length/20);
        }
    }

    function render(){
        maxPag = calcMaxPag();

        next.style.display = 'inline-block';
        prev.style.display = 'inline-block';
        if(pag == 1){
            prev.style.display = 'none';
        }
        
        if(pag == maxPag ){
            next.style.display = 'none';
        }
        
        if(maxPag == 1){
            next.style.display = 'none';
            prev.style.display = 'none';
        }
        
        
        productList.innerHTML = '';

        if(filteredItems.length == 0 && searchedItems.length == 0){
            items.forEach((element, index) => {
                if(index >= getPageRange(pag, 20).start && index <= getPageRange(pag, 20).end){
                    const div = document.createElement('div');
                    const buttonDiv = document.createElement('div');
                    const img = document.createElement('img');
                    const h4 = document.createElement('h4');
                    const p = document.createElement('p');
                    const button = document.createElement('button');
                    const button2 = document.createElement('button');
                    
                    const popup = document.getElementById('popup');
                    const closeBtn = document.getElementById('close-popup');

                    img.addEventListener('click', () => {
                        popup.style.display = 'flex';
                        const popupDescImg = document.querySelector('.popup-desc img');
                        const popupDescContent = document.querySelector('.popup-desc div');
    
                        
                        popupDescImg.src = element.img;
                        popupDescContent.innerHTML = 
                        `<p>Model: <span>${element.name}</span></p>`+
                            `<p>Producător: <span>${element.prod}</span></p>`+
                            `<p>Brand: <span>${element.brand}</span></p>`+
                            `<p>Memorie: <span>${element.mem}</span></p>`+
                            `<p>Frecvența procesor: <span>${element.mem_mhz}</span></p>`+
                            `<p>Rezoluție maximă: <span>${element.resolution}</span></p>`+
                            `<p>Conecțiuni: <span>${element.connection}</span></p>`+
                            `<p>PSU recomandat: <span>${element.psu}</span></p>`+
                            `<p>Număr ventilatoare: <span>${element.v}</span></p>`+
                            `<p>Lungime: <span>${element.l}</span> cm</p>`+
                            `<br>`+
                            `<p>Pret: <span>${element.price}</span> lei</p>`+
                            `<br>`+
                            `<button>În coș</button>`

                        document.querySelector('.popup-title h4').textContent = element.title;
                    });

                    closeBtn.addEventListener('click', ()=> {
                        popup.style.display = 'none';
                    });

                    button.addEventListener('click', () => {
                        let k = false;
                        
                        clist.forEach((el) => {
                            if(JSON.stringify(el) == JSON.stringify(element)){
                                k = true;
                            }
                        });
                        
                        
                        if(k == false){
                            clist.push(element);
                            localStorage.setItem('cartlist', JSON.stringify(clist));
                        }                        
                    });

                    button2.addEventListener('click', () => {
                        let k = false;
                        
                            wlist.forEach((el) => {
                                if(JSON.stringify(el) == JSON.stringify(element)){
                                    k = true;
                                }
                        });
                        
                        
                        if(k == false){
                            wlist.push(element);
                            localStorage.setItem('wishlist', JSON.stringify(wlist));
                        }                        
                    });
                
                    img.src = element.img;
                    h4.textContent = element.title;
                    p.innerHTML = element.price + ' <span>lei</span>';
                    button.textContent = 'În coș';
                    button2.innerHTML = '<i class="fa-solid fa-heart"></i>';
                    button2.classList.add('addToWishList');
                
                    buttonDiv.appendChild(button);
                    buttonDiv.appendChild(button2);
                    
                    div.appendChild(img);
                    div.appendChild(h4);
                    div.appendChild(p);
                    div.appendChild(buttonDiv);

                    
                
                    productList.append(div);
                }
            });
        }
        else if(searchedItems.length == 0){
            filteredItems.forEach((element, index) => {
                if(index >= getPageRange(pag, 20).start && index <= getPageRange(pag, 20).end){
                    const div = document.createElement('div');
                    const buttonDiv = document.createElement('div');
                    const img = document.createElement('img');
                    const h4 = document.createElement('h4');
                    const p = document.createElement('p');
                    const button = document.createElement('button');
                    const button2 = document.createElement('button');
                    
                    const popup = document.getElementById('popup');
                    const closeBtn = document.getElementById('close-popup');

                    img.addEventListener('click', () => {
                        popup.style.display = 'flex';
                        const popupDescImg = document.querySelector('.popup-desc img');
                        const popupDescContent = document.querySelector('.popup-desc div');
    
                        
                        popupDescImg.src = element.img;
                        popupDescContent.innerHTML = 
                        `<p>Model: <span>${element.name}</span></p>`+
                            `<p>Producător: <span>${element.prod}</span></p>`+
                            `<p>Brand: <span>${element.brand}</span></p>`+
                            `<p>Memorie: <span>${element.mem}</span></p>`+
                            `<p>Frecvența procesor: <span>${element.mem_mhz}</span></p>`+
                            `<p>Rezoluție maximă: <span>${element.resolution}</span></p>`+
                            `<p>Conecțiuni: <span>${element.connection}</span></p>`+
                            `<p>PSU recomandat: <span>${element.psu}</span></p>`+
                            `<p>Număr ventilatoare: <span>${element.v}</span></p>`+
                            `<p>Lungime: <span>${element.l}</span> cm</p>`+
                            `<br>`+
                            `<p>Pret: <span>${element.price}</span> lei</p>`+
                            `<br>`+
                            `<button>În coș</button>`

                        document.querySelector('.popup-title h4').textContent = element.title;
                    });

                    closeBtn.addEventListener('click', ()=> {
                        popup.style.display = 'none';
                    });

                    
                    button2.addEventListener('click', () => {
                        console.log('go');
                        
                        let k = false;
                        
                            wlist.forEach((el) => {
                                if(JSON.stringify(el) == JSON.stringify(element)){
                                    k = true;
                                }
                        });
                        
                        
                        if(k == false){
                            wlist.push(element);
                            localStorage.setItem('wishlist', JSON.stringify(wlist));
                        }                        
                    });
                
                    img.src = element.img;
                    h4.textContent = element.title;
                    p.innerHTML = element.price + ' <span>lei</span>';
                    button.textContent = 'În coș';
                    button2.innerHTML = '<i class="fa-solid fa-heart"></i>';
                    button2.classList.add('addToWishList');
                
                    buttonDiv.appendChild(button);
                    buttonDiv.appendChild(button2);
                    
                    div.appendChild(img);
                    div.appendChild(h4);
                    div.appendChild(p);
                    div.appendChild(buttonDiv);

                    
                
                    productList.append(div);
                }
            });
        }
        else if(filteredItems.length == 0){
            searchedItems.forEach((element, index) => {
                if(index >= getPageRange(pag, 20).start && index <= getPageRange(pag, 20).end){
                    const div = document.createElement('div');
                    const buttonDiv = document.createElement('div');
                    const img = document.createElement('img');
                    const h4 = document.createElement('h4');
                    const p = document.createElement('p');
                    const button = document.createElement('button');
                    const button2 = document.createElement('button');
                    
                    const popup = document.getElementById('popup');
                    const closeBtn = document.getElementById('close-popup');

                    img.addEventListener('click', () => {
                        popup.style.display = 'flex';
                        const popupDescImg = document.querySelector('.popup-desc img');
                        const popupDescContent = document.querySelector('.popup-desc div');
    
                        
                        popupDescImg.src = element.img;
                        popupDescContent.innerHTML = 
                        `<p>Model: <span>${element.name}</span></p>`+
                            `<p>Producător: <span>${element.prod}</span></p>`+
                            `<p>Brand: <span>${element.brand}</span></p>`+
                            `<p>Memorie: <span>${element.mem}</span></p>`+
                            `<p>Frecvența procesor: <span>${element.mem_mhz}</span></p>`+
                            `<p>Rezoluție maximă: <span>${element.resolution}</span></p>`+
                            `<p>Conecțiuni: <span>${element.connection}</span></p>`+
                            `<p>PSU recomandat: <span>${element.psu}</span></p>`+
                            `<p>Număr ventilatoare: <span>${element.v}</span></p>`+
                            `<p>Lungime: <span>${element.l}</span> cm</p>`+
                            `<br>`+
                            `<p>Pret: <span>${element.price}</span> lei</p>`+
                            `<br>`+
                            `<button>În coș</button>`

                        document.querySelector('.popup-title h4').textContent = element.title;
                    });

                    closeBtn.addEventListener('click', ()=> {
                        popup.style.display = 'none';
                    });

                    
                    button2.addEventListener('click', () => {
                        console.log('go');
                        
                        let k = false;
                        
                            wlist.forEach((el) => {
                                if(JSON.stringify(el) == JSON.stringify(element)){
                                    k = true;
                                }
                        });
                        
                        
                        if(k == false){
                            wlist.push(element);
                            localStorage.setItem('wishlist', JSON.stringify(wlist));
                        }                        
                    });
                
                    img.src = element.img;
                    h4.textContent = element.title;
                    p.innerHTML = element.price + ' <span>lei</span>';
                    button.textContent = 'În coș';
                    button2.innerHTML = '<i class="fa-solid fa-heart"></i>';
                    button2.classList.add('addToWishList');
                
                    buttonDiv.appendChild(button);
                    buttonDiv.appendChild(button2);
                    
                    div.appendChild(img);
                    div.appendChild(h4);
                    div.appendChild(p);
                    div.appendChild(buttonDiv);

                    
                
                    productList.append(div);
                }
            })
        }
        else{
            const filtered_searchedItems = filteredItems.filter(obj1 => 
                searchedItems.some(obj2 => JSON.stringify(obj1) === JSON.stringify(obj2))
            );

            filtered_searchedItems.forEach((element, index) => {
                if(index >= getPageRange(pag, 20).start && index <= getPageRange(pag, 20).end){
                    const div = document.createElement('div');
                    const buttonDiv = document.createElement('div');
                    const img = document.createElement('img');
                    const h4 = document.createElement('h4');
                    const p = document.createElement('p');
                    const button = document.createElement('button');
                    const button2 = document.createElement('button');
                    
                    const popup = document.getElementById('popup');
                    const closeBtn = document.getElementById('close-popup');

                    img.addEventListener('click', () => {
                        popup.style.display = 'flex';
                        const popupDescImg = document.querySelector('.popup-desc img');
                        const popupDescContent = document.querySelector('.popup-desc div');
    
                        
                        popupDescImg.src = element.img;
                        popupDescContent.innerHTML = 
                        `<p>Model: <span>${element.name}</span></p>`+
                            `<p>Producător: <span>${element.prod}</span></p>`+
                            `<p>Brand: <span>${element.brand}</span></p>`+
                            `<p>Memorie: <span>${element.mem}</span></p>`+
                            `<p>Frecvența procesor: <span>${element.mem_mhz}</span></p>`+
                            `<p>Rezoluție maximă: <span>${element.resolution}</span></p>`+
                            `<p>Conecțiuni: <span>${element.connection}</span></p>`+
                            `<p>PSU recomandat: <span>${element.psu}</span></p>`+
                            `<p>Număr ventilatoare: <span>${element.v}</span></p>`+
                            `<p>Lungime: <span>${element.l}</span> cm</p>`+
                            `<br>`+
                            `<p>Pret: <span>${element.price}</span> lei</p>`+
                            `<br>`+
                            `<button>În coș</button>`

                        document.querySelector('.popup-title h4').textContent = element.title;
                    });

                    closeBtn.addEventListener('click', ()=> {
                        popup.style.display = 'none';
                    });

                    button2.addEventListener('click', () => {
                        console.log('go');
                        
                        let k = false;
                        
                            wlist.forEach((el) => {
                                if(JSON.stringify(el) == JSON.stringify(element)){
                                    k = true;
                                }
                        });
                        
                        
                        if(k == false){
                            wlist.push(element);
                            localStorage.setItem('wishlist', JSON.stringify(wlist));
                        }                        
                    });
                
                    img.src = element.img;
                    h4.textContent = element.title;
                    p.innerHTML = element.price + ' <span>lei</span>';
                    button.textContent = 'În coș';
                    button2.innerHTML = '<i class="fa-solid fa-heart"></i>';
                    button2.classList.add('addToWishList');
                
                    buttonDiv.appendChild(button);
                    buttonDiv.appendChild(button2);
                    
                    div.appendChild(img);
                    div.appendChild(h4);
                    div.appendChild(p);
                    div.appendChild(buttonDiv);

                    
                
                    productList.append(div);
                }
            })
        }

    }

    function getPageRange(pagina, elementePerPagina) {
        const start = (pagina - 1) * elementePerPagina + 1;
        const end = pagina * elementePerPagina;
        return { start, end };
    }

    prev.addEventListener('click', () => {
        pag--;
        render();
        p.textContent = pag;
        window.scrollTo({ top: 0, behavior: "smooth" });
        prevNextButton();
    });
    
    
    next.addEventListener('click', () => {
        pag++;
        render();
        p.textContent = pag;
        window.scrollTo({ top: 0, behavior: "smooth" });

        prevNextButton();
    });

    render();


    