
const { User } = require('../models');

const userData = [{
        username: 'BugsBunny',
        password: 'bb1234'

    },
    {
        username: 'JakeFromStateFarm',
        password: 'jake1234'
    },
    {
        username: 'TheMountain',
        password: 'TM1234'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;