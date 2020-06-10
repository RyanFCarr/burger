const orm = require('orm');

async function getAll(){
    return orm.selectAll();
}
async function addOne(){
    return orm.insertOne();
}
async function changeOne(){
    return orm.updateOne();
}

module.exports = {
    getAll,
    addOne,
    changeOne
};