const express = require("express");
const router = express.Router();
const FormModel = require("../models/FormModel");

router.post("/forms", async (req, res) => {
  let success = false;
  try {
    const { form } = req.body;

    await FormModel.collection.drop();
    
    const newForm = new FormModel({
      form: form,
    });
    const saveForm = await newForm.save();

    success = true;
    res.json({ success, msg: "Form added Successfully" });
  } catch (error) {
    success = false;
    res.status(500).send({ success, msg: "Internal server error" });
    console.log(error);
  }
});

router.get("/getforms", async (req, res) => {
  let success = false;
  try {
    const form = await FormModel.find();
    success = true;
    res.json({ success, question: form, msg: "Form Retrieved Successfully" });
  } catch (error) {
    success = false;
    res.status(500).send({ success, msg: "Internal server error" });
    console.log(error);
  }
});
module.exports = router;
