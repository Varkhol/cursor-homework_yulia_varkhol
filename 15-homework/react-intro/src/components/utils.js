const randomNumber = (n, m) => {
    const randomNumber = Math.floor(Math.random() * (m - n + 1)) + n;

    return randomNumber;
}

const currentDate = () => {
    const today = new Date();

    return (today.getDate() < 10 ? '0' + today.getDate() : today.getDate()) + '-'  + ((today.getMonth() + 1) < 10 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1)) + '-' + today.getFullYear()+ ' ' + (today.getHours() < 10 ? '0' + today.getHours() : today.getHours()) + ':' + (today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes());
}

export function randomNumberFunc() {
    return randomNumber(5, 100);
};

export function currentDateFunc() {
    return currentDate();
};