//Variables
//General Variables
const head = document.head;
const body = document.body;

//Main Variables
const main = document.querySelector('main');
const card = document.querySelector('.main__card');
const numberContainer = document.querySelector('.main__card__number-container');
let numberArray = numberContainer.childNodes;
const textContainer = document.querySelector('.main__card__text-container');
let title = document.querySelector('.main__card__text-container__title');
const starContainer = document.querySelector('.main__card__star-container');
let star = document.querySelector('.main__card__star-container__star')
const moonContainer = document.querySelector('.main__card__moon-container');
let moon = document.querySelector('.main__card__moon-container__moon');
let btn = document.querySelector('.main__card__btn-container__btn');

//Functions
const createNumbers = () =>{
    for (let i = 1; i < 6; i++){
        let numbers = document.createElement('LI');
        numbers.innerHTML = i;
        numbers.classList.add('main__card__number-container__numbers');
        numbers.classList.add(`main__card__number-container__number--${i}`);
        numbers.setAttribute('tabindex', i);
        numberContainer.appendChild(numbers);
    }
}

const hoverMoonContainer = () =>{
    moon.style.color = '#fff';
}

const quitMoonContainer = () =>{
    moon.style.color = '#000';
}

const changeToLightMode = () =>{
    //Removing and adding the change btn
    starContainer.style.display = 'none';
    moonContainer.style.display = 'flex';

    //Changing colors
    body.classList.remove('dark-body');
    body.classList.add('light-body');

    card.style.backgroundColor = '#fff';
    card.style.border = '2px solid #000';
    title.style.color = '#000';
    btn.style.border = '2px solid #000';

    numberArray.forEach(element =>{
        element.classList.add('main__card__number-container__numbers--light');
        element.classList.remove('main__card__number-container__numbers--dark');
    });
}

const changeToDarkMode = () =>{
    //Removing and adding the change btn
    starContainer.style.display = 'flex';
    moonContainer.style.display = 'none';

    body.classList.remove('light-body');
    body.classList.add('dark-body');

    card.style.backgroundColor = 'hsl(213, 19%, 18%)';
    card.style.border = '0px';
    title.style.color = '#fff';
    btn.style.border = '0px solid #000';

    numberArray.forEach(element =>{
        element.classList.remove('main__card__number-container__numbers--light');
        element.classList.add('main__card__number-container__numbers--dark');
    });
}

//Calling Functions
createNumbers();

moonContainer.addEventListener('mouseover', hoverMoonContainer);
moonContainer.addEventListener('mouseout', quitMoonContainer);
starContainer.addEventListener('click', changeToLightMode);
moonContainer.addEventListener('click', changeToDarkMode);