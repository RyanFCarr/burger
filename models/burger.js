const orm = require('../config/orm');

async function selectAll(){
    return orm.selectAll("burgers");
}
async function insertOne(burger_name){
    return orm.insertOne("burgers", "burger_name", burger_name);
}
async function updateOne(id, burger){
    return orm.updateOne(id, burger);
}

module.exports = {
    selectAll,
    insertOne,
    updateOne
};