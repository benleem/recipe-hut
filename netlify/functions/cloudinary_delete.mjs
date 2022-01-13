const { requestObj, responseObj } = require('./util/helper');
const { cloudinary } = require('./util/cloudinary_helper');

exports.handler = async (event, context) =>{
    try {
        let body = JSON.parse(event.body);        
        const response = await cloudinary.uploader.destroy(body.data);
        return responseObj(200, response);
    } catch (error) {
        return responseObj(500, error);
    }
};

