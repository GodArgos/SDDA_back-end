function capitalizeFirstLetter(str) {
    const words = str.split(" ");
    const capitalizedWords = words.map((word) => {
        const firstLetter = word.charAt(0).toUpperCase();
        const restOfWord = word.slice(1).toLowerCase(); // Cambia las demás letras a minúsculas
        return firstLetter + restOfWord;
    });
    return capitalizedWords.join(" ");
}

export { capitalizeFirstLetter }