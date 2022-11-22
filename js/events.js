// type variable that indicates what event affects:  0 = health, 1 = food, 2 = inventory, 3 = pace
// some events could affect more than one, no water -- health and inventory (oxen)

const EVENTS = {
    cholera: {
        proability: 0.0, // will want to expand to make probility a function of location
        type: 0,
        name: 'Cholera',
    },
    dyenstery: {
        proability: 0.0,
        type: 0,
        name: 'Dysentery',
    },
    Measles: {
        proability: 0.0,
        type: 0,
        name: 'Measles',
    },
    exhaustion: {
        proability: 0.0,
        type: 0,
        name: 'Exhaustion',
    },
    snakebite: {
        proability: 0.0,
        type: 0,
        name: 'Snake Bite',
    },
    brokenarm: {
        proability: 0.0,
        type: 0,
        name: 'Broken Arm',
    },
    brokenleg: {
        proability: 0.0,
        type: 0,
        name: 'Broken Leg',
    },
    nowater: {
        proability: 0.0,
        type: 0, // also could affect inventory
        name: 'No Water',
    },
    badwater: {
        proability: 0.0,
        type: 0,
        name: 'Bad Water',
    },
    theft: {
        proability: 0.0,
        type: 2,
        name: 'Thief Steals...',
        item: '', //will need a way to randomly choose an item from inventory
    },
    lost: {
        proability: 0.0,
        type: 3,
        name: 'You Have the Lost Trail',
    },
    brokenwheel: {
        proability: 0.0,
        type: 2, // also could affect pace if don't have spare
        name: 'Wheel Broke',
    },
    nograss: {
        proability: 0.0,
        name: 'No Grass for Oxen',
    },
    oxsick: {
        proability: 0.0,
        type: 3, 
        name: 'Ox is Sick',
    },
    oxwander: {
        proability: 0.0,
        type: 2, // also could affect pace if don't have spare
        name: 'Ox Has Wandered Off',
    },
    wildfruit: {
        proability: 0.0,
        type: 2, // also could affect health if out of food
        name: 'You Found Wild Fruit',
    },
    indianshelp: {
        proability: 0.0,
        type: 2, // also could affect health if out of food
        name: 'Indians Help Find Food',
    },
};