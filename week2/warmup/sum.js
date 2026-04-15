
export default function sum(numbers) {
    let validNumbers = true;
    numbers.forEach(n => {
        if (isNaN(n)) {
            validNumbers = false;
        }
    });

    if (!validNumbers) {
        throw new Error('numbers must be all Number type');
    }

    return numbers.reduce((a, b) => {
        return a + b;
    }, 0);
}