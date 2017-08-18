var connection = require("./connection.js");

var orm = {
    selectAll: function (tableInput,cb) {
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableInput], function(err, result){
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: function(burgerName, cb) {
        var queryString = 'INSERT INTO burgers (burger_name, devoured) VALUES (?, false)';
        connection.query(queryString, [burgerName], function(err, result){
            if (err) throw err;
            console.log('entry has been added!');
            cb(result);
        });
    },
    updateOne: function(tableInput, burgerToUpdate, cb) {
        var queryString = 'UPDATE ?? SET devoured = true WHERE burger_name = ?';
        connection.query(queryString, [tableInput, burgerToUpdate], function(err, result){
            if (err) throw err;
            console.log('entry has been updated');
            cb(result);
        });
    }
};

module.exports = orm;