"use strict";

$('img').mapster({
  fillColor: 'ffffff',
  strokeColor: 'dddddd',
  fillOpacity: 0.3,
  stroke: true,
  singleSelect: true
});
var Galeria2D = [{
  id: 1,
  pic: ['https://picsum.photos/id/684/600/400', 'https://picsum.photos/id/663/600/500']
}, {
  id: 2,
  pic: ['https://picsum.photos/id/686/600/400', 'https://picsum.photos/id/662/600/400']
}, {
  id: 3,
  pic: ['https://picsum.photos/id/682/600/400', 'https://picsum.photos/id/661/600/400']
}, {
  id: 4,
  pic: ['https://picsum.photos/id/681/600/400', 'https://picsum.photos/id/664/600/400']
}, {
  id: 5,
  pic: ['https://picsum.photos/id/680/600/400', 'https://picsum.photos/id/665/600/400']
}, {
  id: 6,
  pic: ['https://picsum.photos/id/689/600/400', 'https://picsum.photos/id/666/600/400']
}, {
  id: 7,
  pic: ['https://picsum.photos/id/674/600/400', 'https://picsum.photos/id/667/600/400']
}, {
  id: 8,
  pic: ['https://picsum.photos/id/675/600/400', 'https://picsum.photos/id/668/600/400']
}];
var kartalLokalu = [{
  id: 1,
  pic: ['https://picsum.photos/id/651/600/400']
}, {
  id: 2,
  pic: ['https://picsum.photos/id/652/600/400']
}, {
  id: 3,
  pic: ['https://picsum.photos/id/653/600/400']
}, {
  id: 4,
  pic: ['https://picsum.photos/id/654/600/400']
}, {
  id: 5,
  pic: ['https://picsum.photos/id/655/600/400']
}, {
  id: 6,
  pic: ['https://picsum.photos/id/656/600/400']
}, {
  id: 7,
  pic: ['https://picsum.photos/id/657/600/400']
}, {
  id: 8,
  pic: ['https://picsum.photos/id/658/600/400']
}];

function showTable() {
  var test = document.querySelectorAll('map area').forEach(function (item) {
    item.addEventListener('click', function () {
      var A1 = document.querySelector('#oneA');
      var B1 = document.querySelector('#oneB');
      var A2 = document.querySelector('#twoA');
      var B2 = document.querySelector('#twoB');
      var A3 = document.querySelector('#threeA');
      var B3 = document.querySelector('#threeB');
      var A4 = document.querySelector('#fourA');
      var B4 = document.querySelector('#fourB');

      switch (item.alt) {
        case 'house1':
          {
            B1.style.backgroundColor = "white";
            A2.style.backgroundColor = "white";
            B2.style.backgroundColor = "white";
            A3.style.backgroundColor = "white";
            B3.style.backgroundColor = "white";
            A4.style.backgroundColor = "white";
            B4.style.backgroundColor = "white";
            window.location.hash = '#oneA';
            A1.style.backgroundColor = 'lightgrey';
            break;
          }

        case 'house2':
          {
            A1.style.backgroundColor = "white";
            A2.style.backgroundColor = "white";
            B2.style.backgroundColor = "white";
            A3.style.backgroundColor = "white";
            B3.style.backgroundColor = "white";
            A4.style.backgroundColor = "white";
            B4.style.backgroundColor = "white";
            window.location.hash = '#oneB';
            B1.style.backgroundColor = 'lightgrey';
            break;
          }

        case 'house3':
          {
            A1.style.backgroundColor = "white";
            B1.style.backgroundColor = "white";
            B2.style.backgroundColor = "white";
            A3.style.backgroundColor = "white";
            B3.style.backgroundColor = "white";
            A4.style.backgroundColor = "white";
            B4.style.backgroundColor = "white";
            window.location.hash = '#twoA';
            A2.style.backgroundColor = 'lightgrey';
            break;
          }

        case 'house4':
          {
            A1.style.backgroundColor = "white";
            A2.style.backgroundColor = "white";
            B1.style.backgroundColor = "white";
            A3.style.backgroundColor = "white";
            B3.style.backgroundColor = "white";
            A4.style.backgroundColor = "white";
            B4.style.backgroundColor = "white";
            window.location.hash = '#twoB';
            B2.style.backgroundColor = 'lightgrey';
            break;
          }

        case 'house5':
          {
            A1.style.backgroundColor = "white";
            A2.style.backgroundColor = "white";
            B1.style.backgroundColor = "white";
            B2.style.backgroundColor = "white";
            B3.style.backgroundColor = "white";
            A4.style.backgroundColor = "white";
            B4.style.backgroundColor = "white";
            window.location.hash = '#threeA';
            A3.style.backgroundColor = 'lightgrey';
            break;
          }

        case 'house6':
          {
            A1.style.backgroundColor = "white";
            A2.style.backgroundColor = "white";
            B1.style.backgroundColor = "white";
            A3.style.backgroundColor = "white";
            B2.style.backgroundColor = "white";
            A4.style.backgroundColor = "white";
            B4.style.backgroundColor = "white";
            window.location.hash = '#threeB';
            B3.style.backgroundColor = 'lightgrey';
            break;
          }

        case 'house7':
          {
            A1.style.backgroundColor = "white";
            A2.style.backgroundColor = "white";
            B1.style.backgroundColor = "white";
            A3.style.backgroundColor = "white";
            B2.style.backgroundColor = "white";
            B3.style.backgroundColor = "white";
            B4.style.backgroundColor = "white";
            window.location.hash = '#fourA';
            A4.style.backgroundColor = 'lightgrey';
            break;
          }

        case 'house8':
          {
            A1.style.backgroundColor = "white";
            A2.style.backgroundColor = "white";
            B1.style.backgroundColor = "white";
            A3.style.backgroundColor = "white";
            B2.style.backgroundColor = "white";
            B3.style.backgroundColor = "white";
            A4.style.backgroundColor = "white";
            window.location.hash = '#fourB';
            B4.style.backgroundColor = 'lightgrey';
            break;
          }

        default:
          {
            A1.style.backgroundColor = "white";
            A2.style.backgroundColor = "white";
            B1.style.backgroundColor = "white";
            A3.style.backgroundColor = "white";
            B2.style.backgroundColor = "white";
            B3.style.backgroundColor = "white";
            A4.style.backgroundColor = "white";
            B4.style.backgroundColor = "white";
          }
      }
    });
  });
}

function TableBtn() {
  var btn1A = document.querySelectorAll('#oneA td').forEach(function (item) {
    item.addEventListener('click', function () {
      if (item.cellIndex == 7) lightbox(0);
      if (item.cellIndex == 8) popup(0);
    });
  });
  var btn1B = document.querySelectorAll('#oneB td').forEach(function (item) {
    item.addEventListener('click', function () {
      if (item.cellIndex == 7) lightbox(1);
      if (item.cellIndex == 8) popup(1);
    });
  });
  var btn2A = document.querySelectorAll('#twoA td').forEach(function (item) {
    item.addEventListener('click', function () {
      if (item.cellIndex == 7) lightbox(2);
      if (item.cellIndex == 8) popup(2);
    });
  });
  var btn2B = document.querySelectorAll('#twoB td').forEach(function (item) {
    item.addEventListener('click', function () {
      if (item.cellIndex == 7) lightbox(3);
      if (item.cellIndex == 8) popup(3);
    });
  });
  var btn3A = document.querySelectorAll('#threeA td').forEach(function (item) {
    item.addEventListener('click', function () {
      if (item.cellIndex == 7) lightbox(4);
      if (item.cellIndex == 8) popup(4);
    });
  });
  var btn3B = document.querySelectorAll('#threeB td').forEach(function (item) {
    item.addEventListener('click', function () {
      if (item.cellIndex == 7) lightbox(5);
      if (item.cellIndex == 8) popup(5);
    });
  });
  var btn4A = document.querySelectorAll('#fourA td').forEach(function (item) {
    item.addEventListener('click', function () {
      if (item.cellIndex == 7) lightbox(6);
      if (item.cellIndex == 8) popup(6);
    });
  });
  var btn4B = document.querySelectorAll('#fourB td').forEach(function (item) {
    item.addEventListener('click', function () {
      if (item.cellIndex == 7) lightbox(7);
      if (item.cellIndex == 8) popup(7);
    });
  });
}

function hambMenu() {
  var nav = document.querySelector('header');
  var hambMenu = document.createElement('div');
  var hambBtn = document.createElement('div');
  var miniMenu = document.querySelector('.miniMenu');
  var hide = document.querySelectorAll('.miniMenu li');
  hambMenu.classList.add('menu-btn');
  hambBtn.classList.add('menu-btn__burger');

  if (window.innerWidth <= 767) {
    hambMenu.appendChild(hambBtn);
    nav.appendChild(hambMenu);
  }

  var menuOpen = false;
  hambMenu.addEventListener('click', function () {
    if (!menuOpen) {
      hambMenu.classList.add('open');
      miniMenu.classList.add('show');
      menuOpen = true;
    } else {
      hambMenu.classList.remove('open');
      miniMenu.classList.remove('show');
      menuOpen = false;
    }
  });
  hide.forEach(function (item) {
    item.addEventListener('click', function () {
      hambMenu.classList.remove('open');
      miniMenu.classList.remove('show');
    });
  });
}

function lightbox(e) {
  var num = 0;
  var body = document.body; ///Tworzenie elementów

  var div = document.createElement('div');
  var img = document.createElement('img');
  var buttonP = document.createElement('div');
  var buttonN = document.createElement('i');
  var exit = document.createElement('div'); ///Przypisanie klas

  exit.classList.add('exit');
  buttonP.classList.add('fas');
  buttonP.classList.add('fa-arrow-circle-left');
  buttonP.classList.add('btnn');
  buttonN.classList.add('fas');
  buttonN.classList.add('fa-arrow-circle-right');
  buttonN.classList.add('btnn');
  div.classList.add('overlay-slider');
  img.classList.add('frame-slider');
  exit.textContent = 'Zamknij'; ///Wlozenie dodawnie div 

  div.appendChild(exit);
  div.appendChild(buttonP);
  div.appendChild(img);
  div.appendChild(buttonN);
  body.appendChild(div); ///Wczytanie pierwszego obrazu

  img.src = Galeria2D[e].pic[num]; ///przyciski

  buttonP.addEventListener('click', function () {
    if (num === 0) return;
    num--;
    img.src = Galeria2D[e].pic[num];
  });
  buttonN.addEventListener('click', function () {
    if (num === Galeria2D[0].pic.length - 1) return;
    num++;
    img.src = Galeria2D[e].pic[num];
  });
  exit.addEventListener('click', function () {
    div.remove();
  });
}

function popup(e) {
  var num = 0;
  var body = document.body; ///Tworzenie elementów

  var div = document.createElement('div');
  var img = document.createElement('img');
  var exit = document.createElement('div'); ///Przypisanie klas

  exit.classList.add('exit');
  div.classList.add('overlay-slider');
  img.classList.add('frame-slider');
  exit.textContent = 'Zamknij'; ///Wlozenie dodawnie div 

  div.appendChild(exit);
  div.appendChild(img);
  body.appendChild(div); ///Wczytanie pierwszego obrazu

  img.src = kartalLokalu[e].pic[num];
  exit.addEventListener('click', function () {
    div.remove();
  });
} /// Dodanie klasy do kazdej tabli w której znaduje się tekst "zobacz"


document.querySelectorAll('table td').forEach(function (item) {
  if (item.textContent === 'zobacz') item.classList.add('btn');
}); ///zmiana w tabeli "dostępność" z "wolne" na "rezerwacja" zmienia tytuł w podświetleniu domów
// const test2 = document.querySelectorAll('map area');
// document.querySelectorAll('table td').forEach(item1 =>{
//     let x = 0;
//     if(item1.cellIndex > 8){
//         console.log('hej')
//     }
//     if(item1.textContent == 'rezerwacja'){
//         console.log(item1.cellIndex)
//     }
// })
// let index = 0;
//     if(item.textContent=='rezerwacja'){
//         test2[index].title = 'rezerwacja';
//     }
//     else if(item.textContent!='rezerwacja'){
//         test2[index].title = 'wolne';
//     }
//     if(item.cellIndex >= 9) index++;
//     if(item1.rowIndex > 0)
//     console.log(item1.rowIndex);
// if(item.textContent==='rezerwacja'){
//     console.log(item1.rowIndex);
// }

showTable();
hambMenu();
TableBtn();