export default function createIcons(projectIcon,counter) {
    counter = counter%10;
    if (counter === 0) {
        projectIcon.src = './utils/icon0.png';
    }
    else if (counter === 1) {
        projectIcon.src = './utils/icon1.png';
    }
    else if (counter === 2) {
        projectIcon.src = './utils/icon2.png';
    }
    else if (counter === 3) {
        projectIcon.src = './utils/icon3.png';
    }
    else if (counter === 4) {
        projectIcon.src = './utils/icon4.png';
    }
    else if (counter === 5) {
        projectIcon.src = './utils/icon5.png';
    }
    else if (counter === 6) {
        projectIcon.src = './utils/icon6.png';
    }
    else if (counter === 7) {
        projectIcon.src = './utils/icon7.png';
    }
    else if (counter === 8) {
        projectIcon.src = './utils/icon8.png';
    }
    else {
        projectIcon.src = './utils/icon9.png';
    }
}