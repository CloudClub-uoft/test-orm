const { sequelize, Member } = require('./sequelize')
const faker = require('faker')


// for (i = 0 ; i < 10; i++){

//   Member.create({name: 'Eminem', bio: 'Hacker', email: 'abc@xyz.com'})  

// }


let foo = async function () {

  let p = await Member.findOne({ where: { id: '10' } })  

  if (p === null) {
    console.log('Not found!');
  } else {
    console.log(p instanceof Member); // true
    console.log(p.email); // 'My Title'
    console.log(p.name);
    console.log(p.bio)

  }

  p.name = "Katniss Everdeen";
  await p.save();

}

foo();




















// for (i = 0; i < 100; i++) {

//   var randomName = faker.name.findName(); 
//   var randomSentence = faker.lorem.sentence(); 
//   var randomEmail = faker.internet.email();
//   Member.create({ name: randomName, bio: randomSentence, email: randomEmail });

// }