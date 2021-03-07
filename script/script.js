$('img').mapster( { 
    fillColor: 'ffffff',
    strokeColor: 'dddddd',
    fillOpacity: 0.3, 
    stroke: true, 
    singleSelect: true
	});

const Galeria2D = [
    {
    id: 1,
    pic: ['https://picsum.photos/id/684/600/400','https://picsum.photos/id/663/600/500']
    },
    {
    id: 2,
    pic: ['https://picsum.photos/id/686/600/400','https://picsum.photos/id/662/600/400']
    },
    {
    id: 3,
    pic: ['https://picsum.photos/id/682/600/400','https://picsum.photos/id/661/600/400']
    },
    {
    id: 4,
    pic: ['https://picsum.photos/id/681/600/400','https://picsum.photos/id/664/600/400']
    },
    {
    id: 5,
    pic: ['https://picsum.photos/id/680/600/400','https://picsum.photos/id/665/600/400']
    },
    {
    id: 6,
    pic: ['https://picsum.photos/id/689/600/400','https://picsum.photos/id/666/600/400']
    },
    {
    id: 7,
    pic: ['https://picsum.photos/id/674/600/400','https://picsum.photos/id/667/600/400']
    },
    {
    id: 8,
    pic: ['https://picsum.photos/id/675/600/400','https://picsum.photos/id/668/600/400']
    },
];
const kartalLokalu = [
    {
    id: 1,
    pic: ['https://picsum.photos/id/651/600/400']
    },
    {
    id: 2,
    pic: ['https://picsum.photos/id/652/600/400']
    },
    {
    id: 3,
    pic: ['https://picsum.photos/id/653/600/400']
    },
    {
    id: 4,
    pic: ['https://picsum.photos/id/654/600/400']
    },
    {
    id: 5,
    pic: ['https://picsum.photos/id/655/600/400']
    },
    {
    id: 6,
    pic: ['https://picsum.photos/id/656/600/400']
    },
    {
    id: 7,
    pic: ['https://picsum.photos/id/657/600/400']
    },
    {
    id: 8,
    pic: ['https://picsum.photos/id/658/600/400']
    },
];

function showTable(){
    const test = document.querySelectorAll('map area').forEach(item => {item.addEventListener('click',()=>{
        const A1 = document.querySelector('#oneA');
        const B1 = document.querySelector('#oneB');
        const A2 = document.querySelector('#twoA');
        const B2 = document.querySelector('#twoB');
        const A3 = document.querySelector('#threeA');
        const B3 = document.querySelector('#threeB');
        const A4 = document.querySelector('#fourA');
        const B4 = document.querySelector('#fourB');
        
            switch(item.alt){
        
            case 'house1': {
                B1.style.backgroundColor = "white"
                A2.style.backgroundColor = "white"
                B2.style.backgroundColor = "white"
                A3.style.backgroundColor = "white"
                B3.style.backgroundColor = "white"
                A4.style.backgroundColor = "white"
                B4.style.backgroundColor = "white"
                window.location.hash = '#oneA';
                A1.style.backgroundColor = 'lightgrey';
                break;
            }
            case 'house2': {
                A1.style.backgroundColor = "white"
                A2.style.backgroundColor = "white"
                B2.style.backgroundColor = "white"
                A3.style.backgroundColor = "white"
                B3.style.backgroundColor = "white"
                A4.style.backgroundColor = "white"
                B4.style.backgroundColor = "white"
                window.location.hash = '#oneB';
                B1.style.backgroundColor = 'lightgrey';
                break;
            }
            case 'house3': {
                A1.style.backgroundColor = "white"
                B1.style.backgroundColor = "white"
                B2.style.backgroundColor = "white"
                A3.style.backgroundColor = "white"
                B3.style.backgroundColor = "white"
                A4.style.backgroundColor = "white"
                B4.style.backgroundColor = "white"
                window.location.hash = '#twoA';
                A2.style.backgroundColor = 'lightgrey';
                break;
            }
            case 'house4': {
                A1.style.backgroundColor = "white"
                A2.style.backgroundColor = "white"
                B1.style.backgroundColor = "white"
                A3.style.backgroundColor = "white"
                B3.style.backgroundColor = "white"
                A4.style.backgroundColor = "white"
                B4.style.backgroundColor = "white"
                window.location.hash = '#twoB';
                B2.style.backgroundColor = 'lightgrey';
                break;
            }
            case 'house5': {
                A1.style.backgroundColor = "white"
                A2.style.backgroundColor = "white"
                B1.style.backgroundColor = "white"
                B2.style.backgroundColor = "white"
                B3.style.backgroundColor = "white"
                A4.style.backgroundColor = "white"
                B4.style.backgroundColor = "white"
                window.location.hash = '#threeA';
                A3.style.backgroundColor = 'lightgrey';
                break;
            }
            case 'house6': {
                A1.style.backgroundColor = "white"
                A2.style.backgroundColor = "white"
                B1.style.backgroundColor = "white"
                A3.style.backgroundColor = "white"
                B2.style.backgroundColor = "white"
                A4.style.backgroundColor = "white"
                B4.style.backgroundColor = "white"
                window.location.hash = '#threeB';
                B3.style.backgroundColor = 'lightgrey';
                break;
            }
            case 'house7': {
                A1.style.backgroundColor = "white"
                A2.style.backgroundColor = "white"
                B1.style.backgroundColor = "white"
                A3.style.backgroundColor = "white"
                B2.style.backgroundColor = "white"
                B3.style.backgroundColor = "white"
                B4.style.backgroundColor = "white"
                window.location.hash = '#fourA';
                A4.style.backgroundColor = 'lightgrey';
                break;
            }
            case 'house8': {
                A1.style.backgroundColor = "white"
                A2.style.backgroundColor = "white"
                B1.style.backgroundColor = "white"
                A3.style.backgroundColor = "white"
                B2.style.backgroundColor = "white"
                B3.style.backgroundColor = "white"
                A4.style.backgroundColor = "white"
                window.location.hash = '#fourB';
                B4.style.backgroundColor = 'lightgrey';
                break;
            }
            default: {
                A1.style.backgroundColor = "white"
                A2.style.backgroundColor = "white"
                B1.style.backgroundColor = "white"
                A3.style.backgroundColor = "white"
                B2.style.backgroundColor = "white"
                B3.style.backgroundColor = "white"
                A4.style.backgroundColor = "white"
                B4.style.backgroundColor = "white"
            }
            }
        
        })})
}


function TableBtn(){
    const btn1A = document.querySelectorAll('#oneA td').forEach(item =>{item.addEventListener('click',()=>{
        if(item.cellIndex == 7) lightbox(0);
        if(item.cellIndex == 8) popup(0);
    })})
    const btn1B = document.querySelectorAll('#oneB td').forEach(item =>{item.addEventListener('click',()=>{
        if(item.cellIndex == 7) lightbox(1);
        if(item.cellIndex == 8) popup(1);
    })})
    const btn2A = document.querySelectorAll('#twoA td').forEach(item =>{item.addEventListener('click',()=>{
        if(item.cellIndex == 7) lightbox(2);
        if(item.cellIndex == 8) popup(2);
    })})
    const btn2B = document.querySelectorAll('#twoB td').forEach(item =>{item.addEventListener('click',()=>{
        if(item.cellIndex == 7) lightbox(3);
        if(item.cellIndex == 8) popup(3);
    })})
    const btn3A = document.querySelectorAll('#threeA td').forEach(item =>{item.addEventListener('click',()=>{
        if(item.cellIndex == 7) lightbox(4);
        if(item.cellIndex == 8) popup(4);
    })})
    const btn3B = document.querySelectorAll('#threeB td').forEach(item =>{item.addEventListener('click',()=>{
        if(item.cellIndex == 7) lightbox(5);
        if(item.cellIndex == 8) popup(5);
    })})
    const btn4A = document.querySelectorAll('#fourA td').forEach(item =>{item.addEventListener('click',()=>{
        if(item.cellIndex == 7) lightbox(6);
        if(item.cellIndex == 8) popup(6);
    })})
    const btn4B = document.querySelectorAll('#fourB td').forEach(item =>{item.addEventListener('click',()=>{
        if(item.cellIndex == 7) lightbox(7);
        if(item.cellIndex == 8) popup(7);
    })})
}
function hambMenu(){
    const nav = document.querySelector('header');
    const hambMenu = document.createElement('div');
    const hambBtn = document.createElement('div');
    const miniMenu = document.querySelector('.miniMenu');
    const hide = document.querySelectorAll('.miniMenu li');
    
    hambMenu.classList.add('menu-btn');
    hambBtn.classList.add('menu-btn__burger');
    
    
    if(window.innerWidth <= 767){
        hambMenu.appendChild(hambBtn);
        nav.appendChild(hambMenu);
    }
    
    let menuOpen = false;
    
    hambMenu.addEventListener('click', () => {
        if(!menuOpen) {
            hambMenu.classList.add('open');
            miniMenu.classList.add('show');
          menuOpen = true;
        } else {
            hambMenu.classList.remove('open');
            miniMenu.classList.remove('show');
          menuOpen = false;
        }
      });
      hide.forEach(item =>{item.addEventListener('click',()=>{
        hambMenu.classList.remove('open');
        miniMenu.classList.remove('show');
    })})
    }

function lightbox(e){
    let num = 0;
    const body = document.body;
    ///Tworzenie elementów
    const div = document.createElement('div');
    const img = document.createElement('img');
    const buttonP = document.createElement('div');
    const buttonN = document.createElement('i');
    const exit = document.createElement('div');

    ///Przypisanie klas
    exit.classList.add('exit');
    buttonP.classList.add('fas');
    buttonP.classList.add('fa-arrow-circle-left');
    buttonP.classList.add('btnn');
    buttonN.classList.add('fas');
    buttonN.classList.add('fa-arrow-circle-right');
    buttonN.classList.add('btnn');
    div.classList.add('overlay-slider');
    img.classList.add('frame-slider');
    exit.textContent = 'Zamknij';
    
    ///Wlozenie dodawnie div 
    div.appendChild(exit);
    div.appendChild(buttonP);
    div.appendChild(img);
    div.appendChild(buttonN);
    body.appendChild(div);

    ///Wczytanie pierwszego obrazu
    img.src = Galeria2D[e].pic[num];
    
    ///przyciski
    buttonP.addEventListener('click',()=>{
        if(num===0) return;
        num--;
        img.src = Galeria2D[e].pic[num];
    })
    buttonN.addEventListener('click',()=>{
        if(num===Galeria2D[0].pic.length-1)return;
        num++;
        img.src = Galeria2D[e].pic[num];
    })
        
    exit.addEventListener('click',()=>{
        div.remove();
    })
}
function popup(e){
    let num = 0;
    const body = document.body;
    ///Tworzenie elementów
    const div = document.createElement('div');
    const img = document.createElement('img');
    const exit = document.createElement('div');

    ///Przypisanie klas
    exit.classList.add('exit');
    div.classList.add('overlay-slider');
    img.classList.add('frame-slider');
    exit.textContent = 'Zamknij';
    
    ///Wlozenie dodawnie div 
    div.appendChild(exit);
    div.appendChild(img);
    body.appendChild(div);

    ///Wczytanie pierwszego obrazu
    img.src = kartalLokalu[e].pic[num];
       
    exit.addEventListener('click',()=>{
        div.remove();
    })

}
/// Dodanie klasy do kazdej tabli w której znaduje się tekst "zobacz"
document.querySelectorAll('table td').forEach(item =>{
    if(item.textContent === 'zobacz') item.classList.add('btn');
})
let a = 0;
///zmiana w tabeli "dostępność" z "wolne" na "rezerwacja" zmienia tytuł w podświetleniu domów
const mapka = document.querySelectorAll('map area');
const a1 = document.querySelectorAll('#oneA td');
const a2 = document.querySelectorAll('#oneB td');
const a3 = document.querySelectorAll('#twoA td');
const a4 = document.querySelectorAll('#twoB td');
const a5 = document.querySelectorAll('#threeA td');
const a6 = document.querySelectorAll('#threeB td');
const a7 = document.querySelectorAll('#fourA td');
const a8 = document.querySelectorAll('#fourB td');

if(a1[4].textContent === 'rezerwacja') mapka[0].title = 'rezerwacja';
if(a2[4].textContent === 'rezerwacja') mapka[1].title = 'rezerwacja';
if(a3[4].textContent === 'rezerwacja') mapka[2].title = 'rezerwacja';
if(a4[4].textContent === 'rezerwacja') mapka[3].title = 'rezerwacja';
if(a5[4].textContent === 'rezerwacja') mapka[4].title = 'rezerwacja';
if(a6[4].textContent === 'rezerwacja') mapka[5].title = 'rezerwacja';
if(a7[4].textContent === 'rezerwacja') mapka[6].title = 'rezerwacja';
if(a8[4].textContent === 'rezerwacja') mapka[7].title = 'rezerwacja';


showTable();
hambMenu();
TableBtn();


