import {
    addAnnouncement,
    getAnnouncements,
    getOneAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
  } from "../Repository/Announcement.repository";
  
  export const createAnnouncement = async ({ title, content, dateTime, time, target }) => {
    try {
      const result = await addAnnouncement({ title, content, dateTime, time, target });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  export const getAllAnnouncements = async () => {
    try {
      const result = await getAnnouncements();
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  export const getOneAnnouncementById = async (id) => {
    try {
      const result = await getOneAnnouncement(id);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  export const updateAnnouncementById = async (
    id,
    { title, content, dateTime, time, target }
  ) => {
    try {
      const result = await updateAnnouncement(id, { title, content, dateTime, time, target });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  export const deleteAnnouncementById = async (id) => {
    try {
      const result = await deleteAnnouncement(id);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };
  