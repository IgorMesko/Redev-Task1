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