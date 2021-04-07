const axios = require('axios');
const defaults = require('./defaults');

let url = 'products/'

const productResource = {
    all : function (){
        return axios({
            ...defaults, 
            method: "GET", 
            url: url
        })
    }
};

module.exports = productResource