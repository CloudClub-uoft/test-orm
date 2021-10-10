module.exports = (sequelize, type) => {
	const Post = sequelize.define('forum', {
		body: {
			type: type.TEXT,
		},				    
		postid: {
			type: type.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		userid: {
			type: type.INTEGER
		},
		subject: { type: type.TEXT }
	}, {
		freezeTableName: true
	})
	
	return Post;
};