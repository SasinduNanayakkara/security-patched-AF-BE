import { addConsultant, deleteConsultant, getConsultants, getOneConsultant, updateConsultant } from "../Repository/Consultant.controller"
import bcrypt from "bcrypt";

export const createConsultant = async ({firstName, lastName, specialization, email, password, phone, location}) => {
    const encryptedPassword = await bcrypt.hash(password, 10);
    try {
        const result = await addConsultant({firstName, lastName, specialization, email, password: encryptedPassword, phone, location});
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const getAllConsultants = async () => {
    try {
        const result = await getConsultants();
        return result;
    }
    catch(error) {
        throw new Error(error);
    }
}

export const getOneConsultantById = async (id) => {
    try {
        const result = await getOneConsultant(id);
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const updateConsultantById = async (id, {firstName, lastName, specialization, email, password, phone, location}) => {
    try {
        const result = await updateConsultant(id, {firstName, lastName, specialization, email, password, phone, location});
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const deleteConsultantById = async (id) => {
    try {
        const result = await deleteConsultant(id);
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}
