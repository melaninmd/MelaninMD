const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

 /*  */
router.get('/get', (req, res) => {
  let data;

  const userId = req.user.id;
  const queryText = `SELECT diagnosis.id AS diagnosis_id, 
  JSON_AGG(prediction.prediction) AS prediction_name, JSON_AGG(prediction.icd) AS icd, JSON_AGG(prediction.link) AS prediction_link, 
  JSON_AGG(prediction.confidence) AS confidence FROM diagnosis 
  JOIN prediction ON prediction.diagnosis_id = diagnosis.id
  WHERE diagnosis.user_id = $1
  GROUP BY diagnosis.id;`
  pool.query(queryText, [userId])
    .then(response =>{
      console.log('here\'s our stuff! =>', response.rows);
      data=response.rows;
      const otherQueryText = `SELECT diagnosis.id, JSON_AGG(pictures.filepath) AS picture_link, JSON_AGG(pictures.date) AS date FROM pictures
      JOIN diagnosis ON pictures.diagnosis_id = diagnosis.id
      WHERE diagnosis.user_id = $1
      GROUP BY diagnosis.id;`
      pool.query(otherQueryText, [userId])
        .then(response=>{
          res.send({data: data, link: response.rows});
        })
      

    }).catch(err =>{
      console.error('We had an issue getting our stuff from the DB =>', err);
    })
});



router.delete('/diagnosis/:id', (req, res)=>{
  const conditionIdToDelete = req.params.id;
  const queryText = `DELETE FROM diagnosis WHERE id = $1`;

  pool.query(queryText, [conditionIdToDelete])
    .then(response=>{
      console.log('DELETE success!',response.rows);
      res.sendStatus(200);
    }).catch(err =>{
      console.error('problem deleting condition =>', err);
      res.sendStatus(500);
    })
});

router.post('/post/:id', async (req, res)=>{
  console.log('in history post router');
  const uploadedFile = req.files?.image;
  const conditionId = req.params.id;
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  try{
      const response = await axios({
        method: "POST",
        url: "https://www.filestackapi.com/api/store/S3?key=AkaVe8je9Thm6pWTbRcNwz",
        data: uploadedFile?.data,
        headers: {
            "Content-Type": "image/*"
        }
      })

      const displayUrl = response.data.url + '?dl=false';
      const date = new Date();

      const queryText = `INSERT INTO pictures (diagnosis_id, filepath, date)
      VALUES ($1, $2, $3);`;
      const values = [conditionId, displayUrl, date];

      pool.query(queryText, values)
        .then(result =>{
          console.log('Add a photo QUERY worked! =>', result);
          res.sendStatus(200);
        }).catch(error=>{
          console.error('problems in the add a photo QUERY =>', error);
          res.sendStatus(500);
        })
    } catch (error){
      console.error('problems with the Axios request =>', error);
      res.sendStatus(500);
    }    

  

})


module.exports = router;
