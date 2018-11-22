var db = require('../comm/DBConnection');
var $sqlCommands = require('../comm/sqlCommand');

/**
 * 增加用户Action
 */
function addAction(req, res, next){
    // 获取前台页面传过来的参数
    var param = req.query || req.params;
    // 执行Query
    db.queryArgs($sqlCommands.user_status.insertOne,
        [param.name],
        function(err, result) {
            if(!err){
                result = {
                    code: 200,
                    msg:'successful'
                };
            }
            // 以json形式，把操作结果返回给前台页面
            db.doReturn(res, result);
        }
    );
}
/**
 * 获取用户Action
 */
function showAction(req, res, next){
    // 获取前台页面传过来的参数
    var param = req.query || req.params;
    // 执行Query
    db.queryArgs($sqlCommands.user_status.selectOne,
        function(err, result) {
            var data = result;
            if(!err){
                result = {
                    code: 200,
                    msg:'successful',
                    data: data
                };
            }
            // 以json形式，把操作结果返回给前台页面
            db.doReturn(res, result);
        }
    );
}
// exports
module.exports = {
    addAction: addAction,
    showAction: showAction
};
