const { Post } = require('../models');

const postData = [{
        title: 'Random Fact 1',
        content: 'Comment a random fact',
        user_id: 1

    },
    {
        title: 'Random Fact 2',
        content: 'Comment a random fact',
        user_id: 2
    },
    {
        title: 'Random Fact 3',
        content: 'Comment a random fact',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;