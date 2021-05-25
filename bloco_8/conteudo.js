const wakeUp = () => console.log('Acordando!!');
const drinkCoffe = () => console.log('Bora tomar café!!');
const sleep = () => console.log('Partiu dormir!!');

const doingThings = (callback) => {
    return callback();
}

doingThings(sleep);