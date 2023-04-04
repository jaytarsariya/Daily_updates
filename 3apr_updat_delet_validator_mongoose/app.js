const mongoose = require('mongoose');
mongoose
  .connect('mongodb://127.0.0.1:27017/newData')
  .then((result) => {
    console.log('connection successfully...');
  })
  .catch((err) => {
    console.log(err);
  });

const studeSchema = new mongoose.Schema({
  stud_id: Number,
  stud_name: String,
  stud_address: String,
  stud_bdate: {
    type: Date,
    default: Date.now,
  },
});
const Studentlist = new mongoose.model('Studentlist', studeSchema);
const insertData = async () => {
  const mystud = new Studentlist({
    stud_id: 1,
    stud_name: 'jay tarsariya',
    stud_address: 'india',
  });
  const mystud1 = new Studentlist({
    stud_id: 26,
    stud_name: 'rahul sharma',
    stud_address: 'mumbai',
  });

  const mystud2 = new Studentlist({
    stud_id: 87,
    stud_name: 'soorya kumar yadav',
    stud_address: 'chennai',
  });

  const mystud3 = new Studentlist({
    stud_id: 45,
    stud_name: 'vivek tank',
    stud_address: 'india',
  });

  const mystud4 = new Studentlist({
    stud_id: 54,
    stud_name: 'jaideep sondagar',
    stud_address: 'india',
  });

  const mystud5 = new Studentlist({
    stud_id: 32,
    stud_name: 'chirag',
    stud_address: 'ucrain',
  });

  const mystud6 = new Studentlist({
    stud_id: 96,
    stud_name: 'sunket',
    stud_address: 'kolkatta',
  });

  const result = await Studentlist.insertMany([
    mystud,
    mystud1,
    mystud2,
    mystud3,
    mystud4,
    mystud5,
    mystud6,
  ]);
  console.log(result);
};
// insertData();

const displaydata = async () => {
  try {
    // const result =await Studentlist.find({stud_name:"sunket"})
    // const result =await Studentlist.find({stud_id:{$eq:54}})// equal to 54
    // const result =await Studentlist.find({stud_address:{$in:["india","mumbai"]}})// jenu address india and mumbai hoi te data apse
    // const result =await Studentlist.find({stud_address:{$nin:["india","mumbai"]}})// india and mumbai sivay nu data apse
    // const result =await Studentlist.find({$or:[{stud_name:{$eq:"jay tarsariya"}},{stud_id:{$eq:54}}]})
    // const result =await Studentlist.find({$and:[{stud_name:{$eq:"jay tarsariya"}},{stud_id:{$eq:54}}]})
    // const result =await Studentlist.find().limit(2)// pella 2 data apse
    const result = await Studentlist.find().sort({ stud_name: 1 }); // 1 atle a thi saru karine z sudhina data lin  ma gothvine apse and -1 atle z thi a .
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// displaydata();

// 31-03-23
// insert manydata in old data then call data and run.









//*********************************** */ 3-4-23 update and delete *************************************************

const updatedata =async()=>{
  try{
// const result =await Studentlist.updateOne({stud_id:1},{$set:{stud_name:"zara khan"}})// update data
const result =await Studentlist.deleteMany({stud_id:87})// delete data
console.log(result);
  
}catch(err){
  console.log(err);
}
}

updatedata()