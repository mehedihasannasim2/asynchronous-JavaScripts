console.log('Before');

getUser(1, (user) => {
    gerRepositories(user.githubUsername, (repos) => {
        getCommits(repos[0], (commits) => {
            console.log(commits);
        })
    })

});
console.log('After');


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





// -------------------- Previous Nested Callback hell
// console.log('Before');

// getUser(1, (user) => {
//     gerRepositories(user.githubUsername, (repos) => {
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//         });
//     });

// });
// console.log('After');


// function getUser(id, callback) {
//     setTimeout(() => {
//         console.log('reading a user from a database');
//         callback({ id: id, githubUsername: 'nasim'});
//     }, 2000);
// }

// function getRepositories(username, callback) {
//     setTimeout(() => {
//         console.log('calling github api...');
//         callback(['repo1', 'repo2', 'repo3']);
//     }, 2000);
// }

// function getCommits(repo, callback) {
//     setTimeout(() => {
//         console.log('calling github api...');
//         callback(['repo1', 'repo2', 'repo3']);
//     }, 2000);
// }

