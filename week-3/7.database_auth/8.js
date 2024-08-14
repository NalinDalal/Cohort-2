const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017")

const Dog = mongoose.model('Cat', { name: String });

const kitty = new Dog({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

kitty.save();