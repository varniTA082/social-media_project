const ADJECTIVES = [
    'boundless',
    'plausible',
    'sleepy',
    'electronic',
    'dangerous',
    'slim',
    'purple',
    'enthusiastic',
    'outstanding',
    'puzzled',
    'brainy',
]

const OBJECTS = [
    'puddle',
    'piano',
    'window',
    'bowl',
    'socks',
    'brocolli',
    'chalk',
    'triangle',
    'house',
    'aster',
    'poppy'
]

function genRandomUsername() {
    const adj = ADJECTIVES[Math.floor(Math.random() * 11)]
    const obj = OBJECTS[Math.floor(Math.random() * 11)]
    return `${adj}-${obj}`
}

module.exports = {
    genRandomUsername
}