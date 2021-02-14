module.exports = (sequelize, type) => {
	const Member = sequelize.define('fakemember', {
		name: {
			type: type.TEXT,
		},
		bio: {
			type: type.TEXT,
		},
		id: {
			type: type.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		email: {
			type: type.TEXT
		}
	}, {
		freezeTableName: true
	})
	
	return Member;
};