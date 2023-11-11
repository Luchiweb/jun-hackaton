export const generateCards = () => {
    const symbols = ['🥰', '👶🏼', '🦄', '💌', '🎀', '🧸', '👨‍👩‍👧‍👧', '🏡'];
    const allCards = [...symbols, ...symbols];

    const shuffledCards = allCards.sort(() => Math.random() - 0.5);
    return shuffledCards.map((symbol, index) => ({ id: index, symbol, isFlipped: false, isMatched: false }));
}