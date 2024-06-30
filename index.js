// Asynchronous
console.log('Before');
getUser(1, (user) => {
    gerRepositories(user.githubUsername, (repos) => {
        getCommits(repo, (commits) => {
            // CALLBACK HELL

        });
    });

});
console.log('After');

// Synchronous 
console.log('before');
const user = getUser(1);
const repos = gerRepositories(user.githubUsername);
const commits = getCommits(repos[0]);
console.log(After);



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
