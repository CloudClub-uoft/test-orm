const Sequelize = require('sequelize')
const MemberModel = require('./models/member')
const PostModel = require('./models/post')
const ReplyModel = require('./models/reply')
require('dotenv').config()

var sequelize = new Sequelize('cloudclub', 'root', null, {

	logging: console.log,
	dialect: 'mysql',
	define: { timestamps: false }

});

const Member = MemberModel(sequelize, Sequelize)
const Post = PostModel(sequelize, Sequelize);
const Reply = ReplyModel(sequelize, Sequelize);

sequelize.sync({ force: false })
	.then(() => {
		console.log(`Tables initalised!`)
	})

module.exports = {
 Reply, Post, Member, sequelize
}

