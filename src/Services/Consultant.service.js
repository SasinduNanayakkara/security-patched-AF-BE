import { addConsultant, deleteConsultant, getConsultants, getOneConsultant, updateConsultant,updateConsultantStatus } from "../Repository/Consultant.repository"
import bcrypt from "bcrypt";

export const createConsultant = async ({firstName, lastName, specialization, email, password, phone, location,skills, status, description, dateTime, prefix, profileImage}) => {
    const encryptedPassword = await bcrypt.hash(password, 10);
    try {
        const result = await addConsultant({firstName, lastName, specialization, email, password: encryptedPassword, phone, location,skills, status, description, dateTime, prefix, profileImage});
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

export const updateConsultantById = async (id, {firstName, lastName, specialization, email, password, phone, location,skills, status, description, dateTime, prefix, profileImage}) => {
    try {
        const result = await updateConsultant(id, {firstName, lastName, specialization, email, password, phone, location,skills, status, description, dateTime, prefix, profileImage});
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

export const updateConsultantStatusById = async (id, {status}) => {
    try {
        const result = await updateConsultantStatus(id, {status});
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
};   