const GREETING = 'Hello world!';

const GREETINGS = [
    "Hello docker world",
    "Hello world",
    "Nice to see you again"
]

module.exports = async (req, res) => {
    let randIndex = Math.floor(Math.random() * GREETINGS.length)
    res.send({
        greeting: GREETINGS[randIndex],
    });
};
