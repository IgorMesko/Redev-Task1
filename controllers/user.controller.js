const userServices = require('../services/user.service');

class UserControllers {
    async getUsers() {
        const users = await userServices.getUser();
        return users;
    };

    async getUserEmail(id) {
        const users = await userServices.getUser();

        let result = null;
        users.find((element) => {
            if(element.id == id) {
                result = element.email;
            };
        });
        return result;
    };

    async getUserIsAdmin(id) {
        const users = await userServices.getUser();

        let result = null;
        users.find((element) => {
            if(element.id == id) {
                result = element.isAdmin;
            };
        });
        return result;
    };

    async getUserBancAccount(id) {
        const users = await userServices.getUser();

        let result = null;
        users.find((element) => {
            if(element.id == id) {
                result = element.bankAccount;
            };
        });
        return result;
    };

    async getStatusUser(id) {
        const users = await userServices.getUser();

        let result = null;
        users.find((element) => {
            if(element.id == id) {
                result = element.status;
            };
        });
        return result;
    };
};

module.exports = new UserControllers();