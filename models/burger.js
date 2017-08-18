var orm = require('../config/orm');

var burger = {
    all: function(cb){
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },
    create: function(cb) {
        orm.insertOne(burgerName, function(res){
            cb(res);
        });
    },
    update: function(cb) {
        orm.updateOne('burgers', burgerToUpdate, function(res){
            cb(res);
        });
    }
};

module.exports = burger;