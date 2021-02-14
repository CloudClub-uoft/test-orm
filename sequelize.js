const Sequelize = require('sequelize')
const MemberModel = require('./models/member')
require('dotenv').config()

var sequelize = new Sequelize('fake', process.env.DB_USER, process.env.DB_PASS, {

	host: process.env.DB_HOST,
	dialect: 'mysql',
	define: { timestamps: false }

});

const Member = MemberModel(sequelize, Sequelize)

sequelize.sync({ force: false })
	.then(() => {
		console.log(`Database & tables created!`)
	})

module.exports = {
	Member, sequelize
}

