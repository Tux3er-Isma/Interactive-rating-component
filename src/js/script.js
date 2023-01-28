//Variables
//General Variables
const head = document.head;
const body = document.body;
const a = document.querySelectorAll('a');

//Main Variables
//Card Variables
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

//Submited Variables
const submit = document.querySelector('.main__submit');
const selectedContainer = document.querySelector('.main__submit__selected-container');
let selected = document.querySelector('.main__submit__selected-container__text');
let submitTitle = document.querySelector('.main__submit__text-container__title');
let arrowLeft = document.querySelector('.main__submit__return');

//Foter Variables
const footer = document.querySelector('.footer');
const tux3er = document.querySelector('.footer__tux3er');
const authorInformation = document.querySelector('.footer__information-container');

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

    submit.style.backgroundColor = '#fff';
    submit.style.border = '2px solid #000';
    submitTitle.style.color = '#000';
    selectedContainer.style.backgroundColor = '#fff';
    selectedContainer.style.border = '2px solid #000';
    arrowLeft.style.color = '#000';

    //Footer
    authorInformation.style.border = '1px solid #999'
    authorInformation.style.backgroundColor = '#fff';
    authorInformation.style.color = '#000';
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

    submit.style.backgroundColor = 'hsl(213, 19%, 18%)';
    submit.style.border = '0px';
    submitTitle.style.color = '#fff';
    selectedContainer.style.backgroundColor = 'hsl(203, 19%, 25%)';
    selectedContainer.style.border = '0px';
    arrowLeft.style.color = '#fff';

    //Footer
    authorInformation.style.border = '1px solid #999'
    authorInformation.style.backgroundColor = '#000';
    authorInformation.style.color = '#fff';
};

const submitOpinion = () =>{
    card.style.display = 'none';
    submit.style.display = 'flex';
}

const returnToCard = () =>{
    card.style.display = 'block';
    submit.style.display = 'none';
}

//Calling Functions
createNumbers();

moonContainer.addEventListener('mouseover', hoverMoonContainer);
moonContainer.addEventListener('mouseout', quitMoonContainer);
starContainer.addEventListener('click', changeToLightMode);
moonContainer.addEventListener('click', changeToDarkMode);

numberArray.forEach(element =>{
    element.addEventListener('click', () =>{
        selected.innerHTML = `You selected ${element.innerHTML} out of 5`;
    })
})

btn.addEventListener('click', submitOpinion);
arrowLeft.addEventListener('click', returnToCard);

console.log(a);