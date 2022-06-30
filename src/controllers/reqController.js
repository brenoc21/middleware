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
router.get("/teste", async (req, res) => {
  try {
    return res.json([
      {
        codigo: "D26",
        vagas: 31,
        descricao: "LAB. DE INFORMATICA D-26",
        disponivel: true,
        longitude: -38.4800698304,
        latitude: -3.7701811216,
      },
      {
        codigo: "M35",
        vagas: 25,
        descricao: "M35 - LABORATÓRIO DE INFORMÁTI",
        disponivel: true,
        longitude: -38.4788446098,
        latitude: -3.7686550768,
      },
      {
        codigo: "T14",
        vagas: 25,
        descricao: "T14 - LAB. DE INFORMÁTICA",
        disponivel: true,
        longitude: -38.4797259504,
        latitude: -3.7684491952,
      },
      {
        codigo: "K05",
        vagas: 25,
        descricao: "LABORATORIO DE INFORMATICA K-0",
        disponivel: true,
        longitude: -38.4800534234,
        latitude: -3.7689135768,
      },
      {
        codigo: "K10",
        vagas: 15,
        descricao: "LAB. DE DESENVOLVIMENTO DE PRO",
        disponivel: true,
        longitude: -38.4788375435,
        latitude: -3.7692197375,
      },
      {
        codigo: "M33",
        vagas: 25,
        descricao: "M33 - LABORATÓRIO DE INFORMÁTI",
        disponivel: true,
        longitude: -38.478866434,
        latitude: -3.7689490509,
      },
      {
        codigo: "D18",
        vagas: 31,
        descricao: "LABORATORIO DE INFORMATICA D-1",
        disponivel: true,
        longitude: -38.480412558,
        latitude: -3.7707134771,
      },
      {
        codigo: "T07",
        vagas: 25,
        descricao: "T07 - LAB. DE INFORMÁTICA",
        disponivel: true,
        longitude: -38.4801915755,
        latitude: -3.7686235759,
      },
      {
        codigo: "T16",
        vagas: 25,
        descricao: "T16 - LAB. DE INFORMÁTICA",
        disponivel: true,
        longitude: -38.4797767562,
        latitude: -3.7675883085,
      },
      {
        codigo: "K07",
        vagas: 25,
        descricao: "LABORATÓRIO DE  INFORMATICA K-",
        disponivel: true,
        longitude: -38.4791784138,
        latitude: -3.7690210154,
      },
      {
        codigo: "K08",
        vagas: 15,
        descricao: "LABORATÓRIO DE ARQUITETURA K-0",
        disponivel: true,
        longitude: -38.4790157558,
        latitude: -3.7693748658,
      },
      {
        codigo: "D14",
        vagas: 31,
        descricao: "LABORATORIO DE INFORMATICA D-1",
        disponivel: true,
        longitude: -38.4806709957,
        latitude: -3.7701678391,
      },
      {
        codigo: "K09",
        vagas: 31,
        descricao: "LABORATORIO DE INFORMATICA - K",
        disponivel: true,
        longitude: -38.4791164163,
        latitude: -3.7691019631,
      },
      {
        codigo: "Z45",
        vagas: 25,
        descricao: "Z45 - LABORATÓRIO DE INFORMÁTI",
        disponivel: true,
        longitude: 0,
        latitude: 0,
      },
      {
        codigo: "D22",
        vagas: 0,
        descricao: "LAB. DE INFORMATICA D-22",
        disponivel: false,
        longitude: -38.4789756983,
        latitude: -3.7706379473,
      },
      {
        codigo: "T05",
        vagas: 25,
        descricao: "T05 - LAB. DE INFORMÁTICA",
        disponivel: true,
        longitude: -38.4800589385,
        latitude: -3.769271944,
      },
      {
        codigo: "K11",
        vagas: 31,
        descricao: "LABORATORIO DE INFORMATICA - K",
        disponivel: true,
        longitude: -38.4792879569,
        latitude: -3.7696451577,
      },
    ]);
  } catch (err) {
    return res.json({ error: err });
  }
});

module.exports = (app) => app.use("/labs", router);
