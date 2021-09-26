const { Comment } = require('../models');

const commentData = [{
        comment_text: "Hot water will turn into ice faster than cold water.",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "The strongest muscle in the body is the tongue.",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Ant's take rest for around 8 Minutes in 12 hour period.",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;