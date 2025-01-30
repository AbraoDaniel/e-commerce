export const getCardBrand = (cardNumber: string): string | null => {
  const cleanNumber = cardNumber.replace(/\D/g, ''); // Remove caracteres não numéricos

  const cardRules = [
    { brand: "Visa", regex: /^4\d{12}(\d{3})?$/, length: [13, 16] },
    { brand: "Mastercard", regex: /^(5[1-5]\d{4}|2[2-7]\d{4})\d{10}$/, length: [16] },
    { brand: "American Express", regex: /^3[47]\d{13}$/, length: [15] },
    { brand: "Discover", regex: /^6(?:011|5\d{2}|22\d{1})\d{12}$/, length: [16] },
    { brand: "Elo", regex: /^(5067|4576|4011)\d{12}$/, length: [16] },
    { brand: "Hipercard", regex: /^(38|60)\d{14}$/, length: [16] }
  ];

  const matchedBrand = cardRules.find(rule =>
    rule.regex.test(cleanNumber) && rule.length.includes(cleanNumber.length)
  );

  return matchedBrand ? matchedBrand.brand : null;
};

// Exemplo de uso:
console.log(getCardBrand("4536125254885548")); // "Visa"
console.log(getCardBrand("5255555555554444")); // "Mastercard"
console.log(getCardBrand("378282246310005"));  // "American Express"
