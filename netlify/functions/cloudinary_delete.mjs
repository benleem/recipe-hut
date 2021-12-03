const { requestObj, responseObj } = require('./util/helper');
var cloudinary = require('cloudinary').v2;
cloudinary.config({ 
    cloud_name: 'recipe-hut', 
    api_key: '981896117984596', 
    api_secret: '8uE-iRUMSnJvt1JGG_b0csOuN8Q',
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

