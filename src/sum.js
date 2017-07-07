const sum = (...numbers) => numbers.reduce((partialSum, addend) => partialSum + addend, 0);

export default sum;
