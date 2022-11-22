const HEALTH = {
    good: {
        value: 4,
        name: 'Good',
    },
    adequate: {
        value: 3,
        name: 'Adequate',
    },
    poor: {
        value: 2,
        name: 'Poor',
    },
    verypoor: {
        value: 1,
        name: 'Very poor',
    },
    dead: {
        value: 0,
        name: 'Asleep forever', // (dead is not nice)
    },
};
const PACE = {
    steady: {
        value: 2,
        name: 'Steady',
    },
    slow: {
        value: 1,
        name: 'Slow',
    },
    stopped: {
        value: 0,
        name: 'Stopped',
    },
};
const OCCUPATION = {
    banker: {
        wealth: 1600,
        weight: 1,
    },
    carpenter: {
        wealth: 800,
        weight: 2,
    },
    farmer: {
        wealth: 400,
        weight: 3,
    },
};
const STORE = {
    yoke: {
        name: 'Yoke--2 oxen',
        price: 20,
        recommendation: 'I recommend 3 yoke',
    },
    clothing: {
        name: 'Clothing',
        price: 10,
        recommendation: 'I recommend 2 sets of clothing per person',
    },
    food: {
        name: 'Food',
        price: 0.02,
        recommendation: 'I recommend 200 pounds per person',
    },
    ammunition: {
        name: 'Box of 20 Bullets',
        price: 2,
        recommendation: '',
    },
    wheel: {
        name: 'Wheel',
        price: 10,
        recommendation: '',
    },
    axle: {
        name: 'Axle',
        price: 10,
        recommendation: '',
    },
    tongue: {
        name: 'Tongue',
        price: 10,
        recommendation: '',
    },
};
const RATIONS = {
    filling: {
        value: 3, // amount of food consumed per person per day
        name: 'Filling',
    },
    meager: {
        value: 2,
        name: 'Meager',
    },
    barebones: {
        value: 1,
        name: 'Bare Bones',
    },
};