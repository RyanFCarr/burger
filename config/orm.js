const db = require('./connection');

async function selectAll(table){
    return new Promise(resolve => {
        db.query("SELECT * from ??", [table], (err, result)=>{
            if (err) throw err;
            resolve(result)
        });
    });
}

async function insertOne(table, column, value){
    return new Promise(resolve => {
        db.query("INSERT INTO ?? (??) VALUES (?)", [table, column, value], function(err, result) {
            if (err) throw err;
            resolve(result)
        });
    });
}

async function updateOne(table, column, value){
    return new Promise(resolve => {

        db.query("UPDATE ?? SET ??=? WHERE id=?", [table, column, value], function(err, result) {
            if (err) throw err;
            resolve(result)
        });
    });
}

module.exports = {
    selectAll,
    insertOne,
    updateOne
};
