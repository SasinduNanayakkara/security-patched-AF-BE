import { Announcement } from "../Models/Announcement.model";

export const addAnnouncement = async ({ title, content, dateTime, target }) => {
    try {
        const result = await Announcement.create({ title, content, dateTime, target });
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
};

export const getAnnouncements = async () => {
    try {
        const result = await Announcement.find();
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
};

export const getOneAnnouncement = async (id) => {
    try {
        const result = await Announcement.findById(id);
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const updateAnnouncement = async (id, { title, content, dateTime,target }) => {
    try {
        const result = await Announcement.findByIdAndUpdate(id, { title, content, dateTime,target });
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const deleteAnnouncement = async (id) => {
    try {
        const result = await Announcement.findByIdAndDelete(id);
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
};
