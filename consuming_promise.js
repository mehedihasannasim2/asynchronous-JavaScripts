console.log('Before');

// callback method
// getUser(1, (user) => {
//     getRepositories(user.githubUsername, (repos) => {
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//         })
//     })
// });


console.log('After');

// Promises
getUser(1)
    .then(user => getRepositories(user.githubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('commits', commits))
    .catch(err =>console.log('Error', err.message));

function getUser(id) {
    return new Promise((resolve, reject) => {
        // kick off some async work
        setTimeout(() => {
            console.log('reading a user from a database');
            resolve({ id: id, githubUsername: 'nasim'});
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('calling github api...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);   
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('calling github api...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}

