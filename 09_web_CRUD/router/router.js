const router = require('express').Router();
const User = require('../models/schema');
const multer = require('multer');
const fs = require('fs');
const bcrypt = require("bcryptjs")


//   ************************************* Multer *******************************
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/upload');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg');
  },
});

var upload = multer({
  storage: storage,
});

router.get('/', (req, resp) => {
  resp.render('login');
});

router.get('/registration', (req, resp) => {
  resp.render('registration');
});

router.get('/login', (req, resp) => {
  resp.render('login');
});

//   ************************************* Do_Registration *******************************

router.post('/do_register', upload.single('img'), async (req, resp) => {
  // console.log(req.body);
  // console.log(req.file.filename);

  try {
    //schema object
    const user = new User({
      uname: req.body.uname,
      email: req.body.email,
      pass: req.body.pass,
      img: req.file.filename,
    });
    const data = await user.save();
    console.log(data);
    resp.render('registration', { msg: 'Registration successfully !!!' });
  } catch (error) {
    console.log(error);
  }
});

//   ************************************* view Frome view.hbs *******************************
router.get('/view', async (req, resp) => {
  try {
    const data = await User.find();
    resp.render('view', { udata: data });
  } catch (error) {
    resp.send(error);
  }
});

//   ************************************* Delete with file *******************************
router.get('/delete', async (req, resp) => {
  const _id = req.query.did;
  try {
    const data = await User.findByIdAndDelete(_id);
    // console.log(data);
    fs.unlinkSync('public/upload/' + data.img);
    resp.redirect('view');
  } catch (error) {
    console.log(error);
  }
});

//   ************************************* Edit And Update data *******************************
router.get('/edit', async (req, resp) => {
  const eid = req.query.eid;
  try {
    const data = await User.findOne({ _id: eid });
    resp.render('update', { udata: data });
  } catch (error) {
    resp.send(error)
  }
});

//   ************************* data update method frome update.hbs *******************************

router.post('/do_update', upload.single('img'), async (req, resp) => {
  // console.log(req.body);
  // console.log(req.file.filename);

  try {
    //schema object
    const data = await User.findByIdAndUpdate(req.body._id, {
      uname: req.body.uname,
      email: req.body.email,
      pass: req.body.pass,
      img: req.file.filename,
    });
  //  console.log(data);// 1. null..........error  // 2.  Error solved..
   fs.unlinkSync('public/upload/' + data.img);
    resp.render('update', { msg: 'update successfully !!!' });
  } catch (error) {
    console.log(error);
  }
});



router.post("/do_login",async(req,resp)=>{
  const email=req.body.email;
  const pass=req.body.pass;

try {
  const userdata= await User.findOne({email:req.body.email})
  console.log(userdata);
  // const isvalid =  await bcrypt.compare(pass,userdata.pass)
  //     console.log(isvalid);
  
} catch (error) {
 console.log(error)
}

})
  


module.exports = router;
