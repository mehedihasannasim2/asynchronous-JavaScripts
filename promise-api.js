
const p = Promise.resolve({ id: 1, username: 'nasim'});
p.then(result => console.log(result));


const p1 = Promise.reject(new Error('reason for rejection'));
p1.catch(error => console.log(error));
