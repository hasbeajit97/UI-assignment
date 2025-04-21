const fs = require('fs');

const DATA_PATH = './utils/tempData.json';

exports.saveData = (data) => {
    fs.writeFileSync(DATA_PATH, JSON.stringify(data));
};

exports.loadData = () => {
    return JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
};
