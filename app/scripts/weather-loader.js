'use strict';

import {get} from './http_utils';
import {getContent} from './content-builder';

//Chains the needed functionality to call the services
// and retrieve the needed data to be showed
const loadWeather = () =>
    get('https://weathersync.herokuapp.com/ip')
    .then(response => get(`https://weathersync.herokuapp.com/weather/${response.location.latitude},${response.location.longitude}`))
    .then(getContent)
    .then(content => document.querySelector('.content').innerHTML = content);

export default {
    loadWeather
};
