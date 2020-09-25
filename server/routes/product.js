const express = require('express');
const router = express.Router();
const {multer} = require('multer')
const { auth } = require("../middleware/auth");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`)
  },
  fileFilter: (req, file, cb) => {
      const ext = path.extname(file.originalname)
      if (ext !== '.jpg' || ext !== '.png') {
          return cb(res.status(400).end('only jpg, png are allowed'), false);
      }
      cb(null, true)
  }
})

var upload = multer({ storage: storage }).single("file")

//=================================
//             Product
//=================================

router.post("/uploadImage", auth, (req, res) => {
    upload(req, res, err => {
      if(err) {
        return res.json({success: false, err})
      } else {
        return res.json({success: true, image: res.res.file.path, fileName: res.res.file.filename})
      }
    })
});

module.exports = router;