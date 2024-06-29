console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');

function getUser(id) {
    setTimeout(() => {
        console.log('reading a user from a database');
        return { id: id, githubUsername: 'nasim'};
    }, 2000);

    return 2;
}
