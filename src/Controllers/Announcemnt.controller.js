import {
    createAnnouncement,
    deleteAnnouncementById,
    getAllAnnouncements,
    getOneAnnouncementById,
    updateAnnouncementById,
  } from "../Services/Announcement.service";
  
  export const addAnnouncement = async (req, res) => {
    const { title, content, dateTime, time, target } = req.body;
    try {
      const result = await createAnnouncement({
        title,
        content,
        dateTime,
        time,
        target,
      });
      res.status(201).json({ data: result, status: "success" });
    } catch (error) {
      res.status(400).json({ data: error.message });
    }
  };
  
  export const getAnnouncements = async (req, res) => {
    try {
      const result = await getAllAnnouncements();
      res.status(200).json({ data: result, status: "success" });
    } catch (error) {
      res.status(400).json({ data: error.message });
    }
  };
  
  export const getOneAnnouncement = async (req, res) => {
    const id = req.params.id;
    try {
      const result = await getOneAnnouncementById(id);
      res.status(200).json({ data: result, status: "success" });
    } catch (error) {
      res.status(400).json({ data: error.message });
    }
  };
  
  export const updateAnnouncement = async (req, res) => {
    const id = req.params.id;
    const { title, content, dateTime, time, target } = req.body;
    try {
      const result = await updateAnnouncementById(id, {
        title,
        content,
        dateTime,
        time,
        target,
      });
      res.status(200).json({ data: result, status: "success" });
    } catch (error) {
      res.status(400).json({ data: error.message });
    }
  };
  
  export const deleteAnnouncement = async (req, res) => {
    const id = req.params.id;
    try {
      const result = await deleteAnnouncementById(id);
      res.status(200).json({ data: result, status: "success" });
    } catch (error) {
      res.status(400).json({ data: error.message });
    }
  };
  