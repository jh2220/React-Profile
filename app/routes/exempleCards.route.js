const express = require('express')
const router = express.Router()
const cors = require('cors')

router.get('/exempleCards', cors(), (req, res) => {

  var response = [
    {
      title: "Simple Title",
      listItens: [
        { name: "Alpha", isChecked: false, tagColor: "#09f" },
        { name: "Beta", isChecked: true, tagColor: "#f54275" },
      ],
    },
    {
      title: "List 2",
      listItens: [{ name: "Charlie", isChecked: false, tagColor: "#eff542" }],
    },
  ];

  res.send(response);
});

module.exports = router;