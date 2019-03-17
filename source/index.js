import './more-javascript/more.js';
import 'normalize.css'; // Note this
import './style/style.sass';
import './style/style.css';

// const saySomething = (something) => {
//     console.log(something); // eslint-disable-line no-console
// };

// saySomething('Something! (index.js)');

const animTextList = document.querySelectorAll('.js-anim-text');
let currentIndex = 0;
// console.log(animTextList);
const shuffleText = () => {
    if (animTextList.length > 0) {
        setInterval(() => {
            if (currentIndex >= animTextList.length) {
                currentIndex = 0;
            }
            for (let i = 0; i < animTextList.length; i++) {
                animTextList[i].classList.add('title-container__anim-text--hide');
            }
            console.log('currenlty hiding ' + currentIndex)
            animTextList[currentIndex].classList.toggle('title-container__anim-text--hide');
            currentIndex++;
        }, 400);
    }
}

shuffleText();