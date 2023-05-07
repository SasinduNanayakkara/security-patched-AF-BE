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

export const getAdminByEmail = async (email) => {
    try {
        const result = await Admin.findOne({email});
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}


export const updateAdmin = async (id, {firstName, lastName, email, password}) => {
    try {
        const result = await Admin.findByIdAndUpdate(id, {firstName, lastName, email, password});
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const deleteAdmin = async (id) => {
    try {
        const result = await Admin.findByIdAndDelete(id);
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
};