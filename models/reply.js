module.exports = (sequelize, type) => {
    const Reply = sequelize.define('replies', {
        body: {
            type: type.TEXT,
        },
        replyid: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userid: {
            type: type.INTEGER
        },
        postid: { type: type.INTEGER },        
    }, {
        freezeTableName: true
    })

    return Reply;
};