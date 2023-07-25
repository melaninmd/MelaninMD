const express = require('express');
const router = express.Router();
const FormData = require('form-data');
const axios = require('axios');
const { request } = require('http');
require('dotenv').config();
const stream = require('stream').Readable;



router.post('/',  (req, res) => {
    const apiUrl = "https://autoderm.firstderm.com/v1/query";

    // const imageUrl = 'https://assets.nhs.uk/nhsuk-cms/images/S_0917_acne_M1080444.max-600x600.jpg';


    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // make sure image key is also on front end code.
    const uploadedFile = req.files?.image;
    
    
    //FILESTACK DOES NOT ACCEPT JPEG
    const apiKey2 = process.env.API_KEY2;
          axios({
            method: "POST",
            url: "https://www.filestackapi.com/api/store/S3?key=AkaVe8je9Thm6pWTbRcNwz",
            data: uploadedFile?.data,
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
                
                console.log(response.data);
                const resp = {url: displayUrl, predictions: response.data.predictions}
                res.send(resp);
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