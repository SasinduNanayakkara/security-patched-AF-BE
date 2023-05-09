import { Admin } from "../Models/Admin.model";

export const addAdmin = async ({firstName, lastName, email, password}) => {
    try {
        const result = await Admin.create({firstName, lastName, email, password});
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
};

export const getAdmins = async () => {
    try {
        const result = await Admin.find();
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
};

export const getOneAdmin = async (id) => {
    try {
        const result = await Admin.findById(id);
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}
