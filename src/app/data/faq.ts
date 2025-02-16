interface FAQ {
    question: string;
    answer: string;
}

const faq: FAQ[] = [
    { question: "What is your return policy?", answer: "You can return items within 30 days of purchase with a valid receipt." },
    { question: "Do you offer international shipping?", answer: "Yes, we ship to over 50 countries worldwide." },
    { question: "How can I reset my password?", answer: "Click on 'Forgot Password' on the login page and follow the instructions." },
    { question: "Do you have a mobile app?", answer: "Yes, our app is available on both iOS and Android." },
    { question: "Can I track my order?", answer: "Yes, you will receive a tracking number once your order is shipped." },
    { question: "What payment methods do you accept?", answer: "We accept credit/debit cards, PayPal, and UPI payments." },
    { question: "Do you offer discounts for bulk orders?", answer: "Yes, we provide special pricing for bulk purchases. Contact our sales team for more details." },
    { question: "How do I contact customer support?", answer: "You can reach us via email, phone, or live chat on our website." },
    { question: "What are your business hours?", answer: "Our support team is available from 9 AM to 6 PM, Monday to Friday." },
    { question: "Do you provide warranty on your products?", answer: "Yes, all our products come with a 1-year warranty against manufacturing defects." }
];

export default faq;