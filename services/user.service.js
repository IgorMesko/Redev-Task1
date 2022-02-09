const fs = require('fs');

class UserServices {
    getUser() {
        return new Promise((resolve, reject) => {
            try {
                fs.readFile('data.json', 'utf-8', (err, data) => {
                    if(err) {
                        throw err;
                    };

                    const usersFromFile = JSON.parse(data);
                    const users = usersFromFile.users;
                    resolve(users);
                });
            } catch (error) {
                reject(error);
            };
        });
    };

    getUserFullName(id) {
        return new Promise((resolve, reject) => {
            try {
                fs.readFile('data.json', 'utf-8', (err, data) => {
                    if(err) {
                        throw err;
                    };

                    const usersFromFile = JSON.parse(data);
                    const users = usersFromFile.users;

                    let res = null;
                    users.find((element) => {
                        if(element.id == id) {
                            res = element.fullName;
                        };
                    });
                    resolve(res);
                });
            } catch (error) {
                reject(error);
            };
        });
    }

    getUserIsAdmin(id) {
        return new Promise((resolve, reject) => {
            try {
                fs.readFile('data.json', 'utf-8', (err, data) => {
                    if(err) {
                        throw err;
                    };

                    const usersFromFile = JSON.parse(data);
                    const users = usersFromFile.users;
                    
                    let result = null;
                    users.find((element) => {
                        if(element.id == id) {
                            result = element.isAdmin;
                        };
                    });
                    resolve(result);
                });
            } catch (error) {
                reject(error);
            };
        });
    }

    getbankAccount(id) {
        return new Promise((resolve, reject) => {
            try {
                fs.readFile('data.json', 'utf-8', (err, data) => {
                    if(err) {
                        throw err;
                    };

                    const usersFromFile = JSON.parse(data);
                    const users = usersFromFile.users;
                    
                    let result = null;
                    users.find((element) => {
                        if(element.id == id) {
                            result = element.bankAccount;
                        };
                    });
                    resolve(result);
                });
            } catch (error) {
                reject(error);
            };
        });
    }

    getStatus(id) {
        return new Promise((resolve, reject) => {
            try {
                fs.readFile('data.json', 'utf-8', (err, data) => {
                    if(err) {
                        throw err;
                    };

                    const usersFromFile = JSON.parse(data);
                    const users = usersFromFile.users;
                    
                    let result = null;
                    users.find((element) => {
                        if(element.id == id) {
                            result = element.status;
                        };
                    });
                    resolve(result);
                });
            } catch (error) {
                reject(error);
            };
        });
    }

    addUsers(body) {
        return new Promise((resolve, reject) => {
            try {
                fs.readFile('data.json', 'utf-8', (err, data) => {
                    if(err) {
                        throw err;
                    };

                    const usersFromFile = JSON.parse(data);
                    const users = usersFromFile.users;
                    users.push(body);

                    fs.writeFile('data.json', JSON.stringify(usersFromFile, null, 4), (err) => {
                        if(err) {
                            throw err;
                        };
                    });

                    resolve('The user has been successfully registered.');
                });
            } catch (error) {
                reject(error);
            };
        });
    };
    
};

module.exports = new UserServices();

