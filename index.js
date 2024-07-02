
console.log('Before');
getUser(1, getRepositories);
console.log('After');

function getRepositories(user) {
    getRepositories(user.githubUsername, getCommits);
}

function getCommits(repos){
    getCommits(repos[0], displayCommits);
}

function displayCommits(commits){
    console.log(commits);
}


function getUser(id, callback) {
    setTimeout(() => {
        console.log('reading a user from a database');
        callback({ id: id, githubUsername: 'nasim'});
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('calling github api...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}














