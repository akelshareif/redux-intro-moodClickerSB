const mood = document.querySelector('.mood');
const moodBtns = document.querySelectorAll('button');

moodBtns.forEach((btn) => {
    switch (btn.innerText) {
        case 'Happy':
            return btn.addEventListener('click', () => {
                store.dispatch({ type: 'happy', payload: '｡^‿^｡' });
                mood.innerText = store.getState().mood;
            });

        case 'Sad':
            return btn.addEventListener('click', () => {
                store.dispatch({ type: 'sad', payload: '(ಥ﹏ಥ)' });
                mood.innerText = store.getState().mood;
            });

        case 'Angry':
            return btn.addEventListener('click', () => {
                store.dispatch({ type: 'angry', payload: '(╬ಠ益ಠ)' });
                mood.innerText = store.getState().mood;
            });

        case 'Confused':
            return btn.addEventListener('click', () => {
                store.dispatch({ type: 'confused', payload: '(◎_◎;)' });
                mood.innerText = store.getState().mood;
            });

        default:
            //random face
            return btn.addEventListener('click', () => {
                const randomMoods = ['（。ˇ ⊖ˇ）', '╮(╯_╰)╭', 'ε＝（ﾉﾟдﾟ）ﾉ', '༼⁰o⁰；༽'];
                const randMood = randomMoods[Math.floor(Math.random() * 4)];
                store.dispatch({ type: 'random', payload: randMood });
                mood.innerText = store.getState().mood;
            });
    }
});
