const orm = require('../config/orm');

async function selectAll(){
    return orm.selectAll("burgers");
}
async function insertOne(burger_name){
    return orm.insertOne("burgers", "burger_name", burger_name);
}
async function updateOne(id, devoured){
    
    return orm.updateOne("burgers", id, "devoured", devoured ? 1 : 0);
}

module.exports = {
    selectAll,
    insertOne,
    updateOne
};