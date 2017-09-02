const getGithubProfile = () => 
    fetch('https://api.github.com/users/falcon24092')

    getGithubProfile()
        .then(response => console.log('response', response))