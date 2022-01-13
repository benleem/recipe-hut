const { responseObj } = require('./util/helper');
const { q, clientQuery } = require('./util/connection');

exports.handler = async (event, context) => {
    const {identity, user} = context.clientContext;
    try {
        let newUser= await clientQuery.query(q.Create(q.Collection('users'), {
            data:{
                user
            }
        }));
        return responseObj(200, newUser);
    } catch (error) {
        return responseObj(500, error);
    }
}