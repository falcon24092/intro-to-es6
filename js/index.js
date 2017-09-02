const getGithubProfile = () => 
    fetch('https://api.github.com/users/falcon24092')

    getGithubProfile()
        .then(response => response.json())
        .catch(e => console.error('Failed while fetching github user profile'))
        .then(response => console.log('response', response))
        