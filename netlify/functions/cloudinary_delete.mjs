const { requestObj, responseObj } = require('./util/helper');
require('dotenv').config();
var cloudinary = require('cloudinary').v2;
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_KEY, 
    api_secret: process.env.CLOUD_SECRET,
    secure: true
});

exports.handler = async (event, context) =>{
    try {
        let body = JSON.parse(event.body);        
        const response = await cloudinary.uploader.destroy(body.data);
        return responseObj(200, response);
    } catch (error) {
        console.log(error)
        return responseObj(500, error);
    }
};

