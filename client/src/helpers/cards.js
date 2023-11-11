export const generateCards = () => {
    const paths = ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png', '/6.png', '/7.png', '/8.png'];
    const allCards = [...paths, ...paths];

    const shuffledCards = allCards.sort(() => Math.random() - 0.5);
    return shuffledCards.map((path, index) => ({ id: index, path, isFlipped: false, isMatched: false }));
}