//user_status单一的user_status表SQL-Command
var user_status = {
    insertOne:'INSERT INTO hainan (id, content) VALUES(?, ?)',
    selectOne:'Select id,content from hainan'
};

//exports
module.exports = {
    user_status: user_status
};
