const { responseObj } = require('./util/helper');
const { q, clientQuery } = require('./util/connection');

exports.handler = async (event, context) => {
    try {
        let post = JSON.parse(event.body);
        let postId = post.id;
        let addFavorite= await clientQuery.query(q.Update(q.Ref(q.Collection('posts'), postId),{
            data:{
                // postInfo
            }
        }));
        return responseObj(200, addFavorite);
    } catch (error) {
        return responseObj(500, error);
    }
};