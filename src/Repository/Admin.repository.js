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

