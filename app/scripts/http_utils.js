'use strict';

//Wraps the http request in a Promise 
export function get(url) {
    return new Promise(
        function(resolve, reject) {
            var req = new XMLHttpRequest();
            req.open('GET', url);

            req.onload = function() {
                if (req.status === 200) {
                    resolve(JSON.parse(req.response));
                } else {
                    reject(Error(req.statusText));
                }
            };
            req.onerror = function() {
                reject(Error('Network Error'));
            };
            req.send();
        });
}
