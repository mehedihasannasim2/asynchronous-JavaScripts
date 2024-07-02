console.log('Before');

//callback-based approach
getUser(1, (user) => {
    getRepositories(user.githubUsername, (repos) => {
        getCommits(repos[0], (commits) => {
            console.log(commits);
        })
    })
});



// Promises-based approach
getUser(1)
    .then(user => getRepositories(user.githubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('commits', commits))
    .catch(err =>console.log('Error', err.message));

    
// Async and Await approach
async function displayCommits(){
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.githubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch (err) {
        console.log('Error', err.message);
    }

}
displayCommits();

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
            // reject(new Error('could not get repo'))
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

