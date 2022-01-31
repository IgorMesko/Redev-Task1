const userServicec = require('../services/user.service');

class RegistrUser {
    async createUser(body) {
        const { email, fullname, bankAccount, isAdmin, status } = body;
        const emailUser = await userServicec.getUser();
        const user = emailUser.forEach((item) => item.email === email);

        if(!user) {
            const newUser = await userServicec.addUsers({
                id: ++emailUser.length,
                email,
                fullname,
                bankAccount,
                isAdmin,
                status,
            });
            return newUser;
        } else {
            return ('User alredy created');
        }
    };
};

module.exports = new RegistrUser();