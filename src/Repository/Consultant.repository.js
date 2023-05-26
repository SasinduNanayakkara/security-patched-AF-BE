import { Consultant } from "../Models/Consultant.model";

export const addConsultant = async ({firstName, lastName, specialization, email, password, phone, location, skills, status, description, dateTime, prefix, profileImage}) => {
    try {
        const result = await Consultant.create({firstName, lastName, specialization, email, password, phone, location,skills, status, description, dateTime, prefix, profileImage });
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const getConsultants = async () => {
    try {
        const result = await Consultant.find();
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const getOneConsultant = async (id) => {
    try {
        const result = await Consultant.findById(id);
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const updateConsultant = async (id, {firstName, lastName, specialization, email, password, phone, location,skills, status, description, dateTime, prefix, profileImage }) => {
    try {
        const result = await Consultant.findByIdAndUpdate(id, {firstName, lastName, specialization, email, password, phone, location,skills, status, description, dateTime, prefix, profileImage });
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const getConsultantByEmail = async (email) => {
    try {
        const result = await Consultant.findOne({email});
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const deleteConsultant = async (id) => {
    try {
        const result = await Consultant.findByIdAndDelete(id);
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

//update status of consultant
export const updateConsultantStatus = async (id, {status}) => {
    try {
        const result = await Consultant.findByIdAndUpdate(id, {status});
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
};

