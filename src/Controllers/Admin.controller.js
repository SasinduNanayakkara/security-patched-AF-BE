import { createAdmin, deleteAdminById, getAllAdmins, getOneAdminById, updateAdminById } from "../Services/Admin.service";

export const addAdmin = async (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    try {
        const result = await createAdmin({firstName, lastName, email, password});
        res.status(201).json({ data: result, status: 'success' });
    }
    catch (error) {
        res.status(400).json({ data: error.message });
    }
}

export const getAdmins = async (req, res) => {
    try {
        const result = await getAllAdmins();
        res.status(200).json({ data: result, status: 'success' });
    }
    catch (error) {
        res.status(400).json({ data: error.message });
    }
}

export const getOneAdmin = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await getOneAdminById(id);
        res.status(200).json({ data: result, status: 'success' });
    }
    catch (error) {
        res.status(400).json({ data: error.message });
    }
}