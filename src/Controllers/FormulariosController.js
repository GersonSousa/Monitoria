const db = require("../Database/database");

const HomePergunta = async (req, res) => {
  try {
    const SQLColaborador = "SELECT * FROM tb_colaborador";
    const SQLSetor = "SELECT * FROM tb_setor";
    const SQLSupervisor = "SELECT * FROM tb_supervisor";

    await db.query(SQLSupervisor, (err, supervisores) => {
      if (err) throw err;
      db.query(SQLSetor, (err, setores) => {
        if (err) throw err;
        db.query(SQLColaborador, (err, colaboradores) => {
          if (err) throw err;
          res.render("Formularios/index", {
            title: "Perguntas",
            supervisores,
            setores,
            colaboradores,
          });
        });
      });
    });
  } catch (error) {}
};

const HomeMonitoria = async (req, res) => {
  try {
    let monitor = req.body.monitor;
    let setor = req.body.setor;
    let colaborador = req.body.colaborador;
    let supervisor = req.body.supervisor;
    let protocolo = req.body.protocolo;
    let cod_cliente = req.body.cod_cliente;
    let meio_atendimento = req.body.meio_atendimento;
    let dt_monitoria = req.body.dt_monitoria;
    let pergunta1 = req.body.pergunta1;
    let pergunta2 = req.body.pergunta2;
    let pergunta3 = req.body.pergunta3;
    let pergunta4 = req.body.pergunta4;
    let pergunta5 = req.body.pergunta5;
    let pergunta6 = req.body.pergunta6;
    let pergunta7 = req.body.pergunta7;
    let pergunta8 = req.body.pergunta8;
    let pergunta9 = req.body.pergunta9;
    let pergunta10 = req.body.pergunta10;
    let pergunta11 = req.body.pergunta11;
    let pergunta12 = req.body.pergunta12;
    let pergunta13 = req.body.pergunta13;
    let pergunta14 = req.body.pergunta14;
    let pergunta15 = req.body.pergunta15;
    let pergunta16 = req.body.pergunta16;
    let pergunta17 = req.body.pergunta17;
    let pergunta18 = req.body.pergunta18;
    let pergunta19 = req.body.pergunta19;
    let pergunta20 = req.body.pergunta20;
    let pergunta21 = req.body.pergunta21;
    let pergunta22 = req.body.pergunta22;
    let obs = req.body.obs;

    let values = [
      monitor,
      setor,
      colaborador,
      supervisor,
      protocolo,
      cod_cliente,
      meio_atendimento,
      dt_monitoria,
      pergunta1,
      pergunta2,
      pergunta3,
      pergunta4,
      pergunta5,
      pergunta6,
      pergunta7,
      pergunta8,
      pergunta9,
      pergunta10,
      pergunta11,
      pergunta12,
      pergunta13,
      pergunta14,
      pergunta15,
      pergunta16,
      pergunta17,
      pergunta18,
      pergunta19,
      pergunta20,
      pergunta21,
      pergunta22,
      obs,
    ];

    const sql =
      "INSERT INTO tb_monitoria ( monitor,setor,colaborador,supervisor,protocolo,cod_cliente,meio_atendimento,dt_monitoria,pergunta_1,pergunta_2,pergunta_3,pergunta_4,pergunta_5,pergunta_6,pergunta_7,pergunta_8,pergunta_9,pergunta_10,pergunta_11,pergunta_12,pergunta_13,pergunta_14,pergunta_15,pergunta_16,pergunta_17,pergunta_18,pergunta_19,pergunta_20,pergunta_21,pergunta_22,obs) VALUES ?";
    const campos = [values];

    db.query(sql, [campos], function (err, rows) {
      if (err) throw err;
      res.redirect("/perguntas");
    });
  } catch (error) {}
};

module.exports = { HomePergunta, HomeMonitoria };
