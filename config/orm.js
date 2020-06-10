const db = require('./connection');

async function selectAll(){
    return new Promise(resolve => {
        db.query("SELECT * from burgers", (err, result)=>{
            if (err) throw err;
            resolve(result)
        });
    });
}

async function insertOne(burger_name){
    return new Promise(resolve => {
        db.query("INSERT INTO burgers (burger_name) VALUES (?)", [burger_name], function(err, result) {
            if (err) throw err;
            resolve(result)
        });
    });
}

async function updateOne(id, burger_name){
    return new Promise(resolve => {

        db.query("UPDATE burgers SET burger_name=? WHERE id=?", [burger_name, id], function(err, result) {
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


