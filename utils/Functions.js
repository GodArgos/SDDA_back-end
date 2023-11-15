function capitalizeFirstLetter(str) {
    if (typeof str !== 'string') {
        return str;
    }

    const words = str.split(" ");
    const capitalizedWords = words.map((word) => {
        const firstLetter = word.charAt(0).toUpperCase();
        const restOfWord = word.slice(1).toLowerCase(); // Cambia las demás letras a minúsculas
        return firstLetter + restOfWord;
    });
    return capitalizedWords.join(" ");
}

function getActualDate() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}/${month}/${year}`;

    return currentDate;
}

export { capitalizeFirstLetter, getActualDate }