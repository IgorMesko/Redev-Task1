const userServices = require('../services/user.service');

class UserControllers {
    async getUsers() {
        const users = await userServices.getUser();
        return users;
    };

    async getUserFullName(id) {
        const users = await userServices.getUserFullName(id);
        return users;
    };

    async getUserIsAdmin(id) {
        const users = await userServices.getUserIsAdmin(id);
        return users;
    };

    async getbankAccount(id) {
        const users = await userServices.getbankAccount(id);
        return users;
    };

    async getStatus(id) {
        const users = await userServices.getStatus(id);
        return users;
    };
};

module.exports = new UserControllers();