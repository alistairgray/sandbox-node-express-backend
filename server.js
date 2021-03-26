// Dependencies
const express = require('express');
const _ = require('underscore');
const axios = require('axios');

// Server Details
const server = express();
const PORT = 1337;

// SpaceX API Config
const SPACEX_BASEURL = 'https://api.spacexdata.com/v3';

// GET SpaceX Upcoming Launches
server.get('/spaceX', (req, res) => {
    axios.get(SPACEX_BASEURL+'/captuals'+'/upcoming')
    .then(res.json(
        {
            capsule_serial,
            capsule_id,
            status,
            
        }
    ))
    .catch(console.warn()
    );
)};

