const express = require("express");

const router = express.Router();

const {
  HomePergunta,
  HomeMonitoria,
} = require("../Controllers/FormulariosController");

router.get("/perguntas", HomePergunta);
router.post("/perguntas", HomeMonitoria);

module.exports = router;
