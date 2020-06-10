const orm = require('../config/orm');

async function selectAll(){
    return orm.selectAll();
}
async function insertOne(burger){
    return orm.insertOne(burger);
}
async function updateOne(id, burger){
    return orm.updateOne(id, burger);
}

module.exports = {
    selectAll,
    insertOne,
    updateOne
};