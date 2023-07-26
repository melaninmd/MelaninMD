const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/get', (req, res) => {

  const userId = req.user.id;
  const queryText = `SELECT diagnosis.id AS diagnosis_id, pictures.filepath AS picture_link, JSON_AGG(pictures.date) AS date, 
  JSON_AGG(prediction.prediction) AS prediction_name, JSON_AGG(prediction.icd) AS icd, JSON_AGG(prediction.link) AS prediction_link, 
  JSON_AGG(prediction.confidence) AS confidence FROM diagnosis 
  JOIN pictures ON pictures.diagnosis_id = diagnosis.id
  JOIN prediction ON prediction.diagnosis_id = diagnosis.id
  WHERE diagnosis.user_id = $1
  GROUP BY diagnosis.id;`
  pool.query(queryText, [userId])
    .then(response =>{
      console.log('here\'s our stuff! =>', response.rows);
      res.send(response.rows);

    }).catch(err =>{
      console.error('We had an issue getting our stuff from the DB =>', err);
    })
});

router.delete('/diagnosis/:id', (req, res)=>{
  const conditionIdToDelete = req.params.id;
  const queryText = `DELETE FROM diagnosis Where id = $1`;

  pool.query(queryText, [conditionIdToDelete])
    .then(response=>{
      console.log('DELETE success!',response.rows);
      res.sendStatus(200);
    }).catch(err =>{
      console.error('problem deleting condition =>', err);
      res.sendStatus(500);
    })
});


module.exports = router;
