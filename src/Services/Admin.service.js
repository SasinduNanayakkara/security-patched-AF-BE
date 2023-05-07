import { addAdmin, getAdmins, getOneAdmin, updateAdmin } from "../Repository/Admin.repository"

export const createAdmin = async ({firstName, lastName, email, password}) => {
    try {
        const result = await addAdmin({firstName, lastName, email, password});
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const getAllAdmins = async () => {
    try {
        const result = await getAdmins();
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const getOneAdminById = async (id) => {
    try {
        const result = await getOneAdmin(id);
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}