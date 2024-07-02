
console.log('Before');
getUser(1, getRepositories);
console.log('After');

function getRepositories(user) {
    getRepositories(user.githubUsername, getCommits);
}

function getCommits(repos){
    getCommits(repo, displayCommits);
}

function displayCommits(commits){
    console.log(commits);
}




function getUser(id, Callbacks) {
    setTimeout(() => {
        console.log('reading a user from a database');
        Callbacks({ id: id, githubUsername: 'nasim'});
    }, 2000);
}

function gerRepositories(username, Callbacks) {
    setTimeout(() => {
        console.log('calling github api...');
        Callbacks(['repo1', 'repo2', 'repo3']);
    }, 2000);
}
