import 'normalize.css';
import './style/style.sass';
import './style/style.css';

const animTextList = document.querySelectorAll('.js-anim-text');
let currentIndex = 0;
const shuffleText = () => {
    if (animTextList.length > 0) {
        setInterval(() => {
            if (currentIndex >= animTextList.length) {
                currentIndex = 0;
            }
            for (let i = 0; i < animTextList.length; i++) {
                animTextList[i].classList.add('title-container__anim-text--hide');
            }
            animTextList[currentIndex].classList.toggle('title-container__anim-text--hide');
            currentIndex++;
        }, 400);
    }
}

shuffleText();