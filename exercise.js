async function notifyCustomer() {
    try {
        const customer = await getCustomer(1);
        console.log('Customer', customer);
        if (customer.isGold){
            const movies = await getTopMovies();
            console.log('Top movies', movies);
            await sendEmail(customer.email, movies);
            console.log('Email sending....');
        } else {
            console.log("customer is not Gold customer");
        }

    }
    catch (error){
        console.log('Error', error);
    }
}

notifyCustomer();

function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'nasim',
                isGold: true,
                email: 'email'
            });
        }, 4000);
    });
}

function getTopMovies(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
        }, 4000);
    });
}

function sendEmail(email, movies){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 4000);
    });
}