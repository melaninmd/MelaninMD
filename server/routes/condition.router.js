const express = require('express');
const router = express.Router();
const FormData = require('form-data');
const axios = require('axios');
//const { request } = require('http');
require('dotenv').config();
const stream = require('stream').Readable;
const pool = require('../modules/pool');



//setting up the diagnosis ID outside of everything so that it can be changed as needed
let diagnosisId;


router.post('/',  (req, res) => {
    const apiUrl = "https://autoderm.firstderm.com/v1/query";


    // const imageUrl = 'https://assets.nhs.uk/nhsuk-cms/images/S_0917_acne_M1080444.max-600x600.jpg';


    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    const imageBuffer = req.files.image.data;

    
    // make sure image key is also on front end code.
    const uploadedFile = req.files?.image;
    console.log('outthewazoo',uploadedFile);
    
    
    //FILESTACK DOES NOT ACCEPT JPEG
    const apiKey2 = process.env.API_KEY;
    const fileStackKey = process.env.FILE_STACK_API_KEY;

          axios({
            method: "POST",
            url: `https://www.filestackapi.com/api/store/S3?key=${fileStackKey}`,
            data: imageBuffer,
            headers: {
                "Content-Type": "image/*"
            }
        }).then(response => {
            const displayUrl = response.data.url + '?dl=false';

            console.log('taco', response.data, 'tacoURL',response.data?.url)

            axios.get(displayUrl, { responseType: 'arraybuffer' }).then((imageResponse) => {
                const imageData = new Buffer.from(imageResponse.data, 'binary');
                const formData = new FormData();
                const bufferStream = new stream.PassThrough();
                bufferStream.end(imageData);
                formData.append('file', bufferStream, { filename: response.data.filename, contentType: 'image/*' });
        
                const formHeaders = formData.getHeaders();
                formHeaders['Api-Key'] = apiKey2;
        
                return axios.post(apiUrl, formData, { headers: formHeaders });
            }).then((response) => {
                const date = new Date();
                console.log(response.data);
                const resp = {url: displayUrl, predictions: response.data.predictions}
                const predictions = response.data.predictions;
                

                let queryText = 'INSERT INTO diagnosis (user_id) VALUES ($1) RETURNING id';
                let values = [req.user.id];
                pool.query(queryText, values)
                    .then(response =>{
                        console.log('insert into diagnosis WORKS! ',response.rows)
                        diagnosisId = response.rows[0].id;
                        queryText = 'INSERT INTO pictures (diagnosis_id, filepath, date) VALUES ($1, $2, $3)';
                        values = [diagnosisId, displayUrl, date];
                        pool.query(queryText, values)
                            .then(response2=>{

                                console.log('insert into pictures works!',response2);
                                for (let prediction of predictions){
                                    queryText = `INSERT INTO prediction (diagnosis_id, prediction, icd, classification_id, link, confidence)
                                                VALUES ($1, $2, $3, $4, $5, $6)`
                                    values = [diagnosisId, prediction.name, prediction.icd, prediction.classificationId, prediction.readMoreUrl, prediction.confidence]
                                    pool.query(queryText, values)
                                }
                            }).then(response3=>{
                                console.log('all DB queries worked!', response3);
                                res.send(resp)

                            })

                    })

                
            }).catch((error) => {
                console.error('prolemas =>',error);
                if (error.response) {
                    console.error(`Response data =>>>>>>> ${error.response.data}`);
                    console.error(`Response status $$$$$$$$$ ${error.response.status}`);
                }
                res.sendStatus(500);
            });
        
        });
        })


module.exports = router;