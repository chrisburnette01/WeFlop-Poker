const suits = ['H', 'D', 'C', 'S'];

const isCard = (variant) => {
    if (!suits.includes(variant[0])) return false;
    let value = parseInt(variant.substring(1));
    if (value < 0 || value > 13) return false;  
    return true;
};

export default isCard;
