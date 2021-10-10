const { sequelize, Member, Post, Reply } = require('./sequelize')
const faker = require('faker')
var count = 5;
var member_ids = [];

async function createMembers() {
 
  // create some members.
  for (i =0 ;i < count; i++){
    //INSERT  INTO cloudclub.clubmembers VALUES (''.''.'')
    const member = await Member.create({ name: faker.name.findName(), bio: faker.random.words(), email: faker.internet.email()  });
    member_ids.push(member.id);
  }

}

async function createPosts() {
  
  //create some posts and replies.
  for (i =0 ;i < count; i++){    
    const post = await Post.create({ body: faker.random.words(), subject: faker.random.words(), userid: member_ids[i] }); 
    const reply = await Reply.create({ body: faker.random.words(), postid: post.id, userid: member_ids[i] }); 
  }

}


async function createReplies() {
  
  //find replies by a userid  
  for (i =0 ;i < count; i++){    
    const found_reply = await Reply.findAll({where: {userid: member_ids[i]}});
    console.log(found_reply);
  }

}

async function main(){
  await createMembers();
  await createPosts();
  await createReplies();  
};

main();