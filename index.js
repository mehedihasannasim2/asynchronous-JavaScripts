console.log('Before');
const user = getUser(1, (user) => {
    console.log('User', user);

    // Get the repositories
    gerRepositories(user.githubUsername, (repos) => {
        console.log('Repos', repos);
    });

});
console.log('After');

// Three patterns to deal with asynchonous code. 
// Callbacks
// Promises
// Async/ await


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
