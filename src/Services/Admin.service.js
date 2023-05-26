import { addAdmin, getAdmins, getOneAdmin, updateAdmin } from "../Repository/Admin.repository"
import bcrypt from "bcrypt";

export const createAdmin = async ({firstName, lastName, email, password}) => {
    const encryptedPassword = await bcrypt.hash(password, 10);
    try {
        const result = await addAdmin({firstName, lastName, email, password: encryptedPassword});
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

export const updateAdminById = async (id, {firstName, lastName, email, password}) => {
    try {
        const result = await updateAdmin(id, {firstName, lastName, email, password});
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const deleteAdminById = async (id) => {
    try {
        const result = await deleteAdmin(id);
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

//getAdmins
export const getAllAdmins = async () => {
    try {
        const result = await getAdmins();
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
};