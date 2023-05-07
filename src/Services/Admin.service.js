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

