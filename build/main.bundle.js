'use strict';

var getGithubProfile = function getGithubProfile() {
    return fetch('https://api.github.com/users/falcon24092');
};

getGithubProfile().then(function (response) {
    return console.log('response', response);
});
