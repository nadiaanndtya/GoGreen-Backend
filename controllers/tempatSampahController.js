const TempatSampah = require("../models/TempatSampah");

exports.getTempatSampah = async (req, res) => {

  try {

    const data = await TempatSampah.findAll();

    res.json(data);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error"
    });

  }

};