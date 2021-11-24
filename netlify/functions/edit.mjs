const { responseObj } = require('./util/helper');
const { q, clientQuery } = require('./util/connection');

exports.handler = async (event, context) => {
    try {
        let post = JSON.parse(event.body);
        let postInfo = post.postInfo;
        let postId = post.id
        let editPost= await clientQuery.query(q.Update(q.Ref(q.Collection('posts'), postId),{
            data:{
                postInfo
            }
        }));
        return responseObj(200, editPost);
    } catch (error) {
        console.log(error)
        return responseObj(500, error);
    }
};