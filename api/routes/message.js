var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");

/* GET users listing. */
router.use("/", function(req, res, next) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "guillaume.zarb@gmail.com",
      pass: "xndvscdnimzrdpkn"
    }
  });
  var mailOptions = {
    from: "guillaume.zarb@gmail.com",
    to: "guillaume.zarb@gmail.com",
    subject: "New Message From " + req.body.name,
    html:
      "<html><head><style>div{display: grid;}span{padding: 10px; background: #e1e1e16b;font-size: 16px;}</style></head><body><div><h1>" +
      "You have a new email from " +
      req.body.name +
      "</h1><span>" +
      req.body.message +
      "</span></div></body><html>"
  };
  let result = {};
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      result.success = false;
      result.error = error;
      res.json(result);
    } else {
      result.success = true;
      res.json(result);
    }
  });
});

module.exports = router;
