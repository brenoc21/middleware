const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/disp", async (req, res) => {
  try {
    axios
      .get(
        "https://uol.unifor.br/disponibilidade-laboratorios/laboratorios-api",
        {
          headers: {
            "X-UNIFOR-API-Token":
              "96mfGGhkVE94yXQ5FK4SoQV3q4-kJamVWjDuNJaDo4nrp-EV-xPR-r7D62QRRPMtioPum2LnM1S2dJ6ujAX79YZkkobSY7YrP-U5mvCSZ00",
          },
        }
      )
      .then((response) => {
        return res.json(response.data);
      })
      .catch((err) => {
        return res.status(err.response.status).send({ error: err.response });
      });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

module.exports = (app) => app.use("/labs", router);
