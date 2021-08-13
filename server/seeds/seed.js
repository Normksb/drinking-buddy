const db = require('../config/connection');
const { User, Drinks } = require('../models');
const userSeeds = require('./userSeeds.json');
const drinkSeeds = require('./drinkSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Drinks.deleteMany({});
    await User.create(userSeeds);
    await Drinks.create(drinkSeeds);

    console.log('done seeding data!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

