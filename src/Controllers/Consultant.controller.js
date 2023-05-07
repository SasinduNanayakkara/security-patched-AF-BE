import { createConsultant, deleteConsultantById, getAllConsultants, getOneConsultantById, updateConsultantById } from "../Services/Consultant.service";

export const addConsultant = async (req, res) => {
    const { firstName, lastName, specialization, email, password, phone, location } = req.body;
    try {
        const result = await createConsultant({ firstName, lastName, specialization, email, password, phone, location });
        res.status(201).json({ data: result, status: 'success' });
    }
    catch (error) {
        res.status(400).json({ data: error.message });
    }
}

export const getConsultants = async (req, res) => {
    try {
        const result = await getAllConsultants();
        res.status(200).json({ data: result, status: 'success' });
    }
    catch (error) {
        res.status(400).json({ data: error.message });
    }
}

export const getOneConsultant = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await getOneConsultantById(id);
        res.status(200).json({ data: result, status: 'success' });
    }
    catch (error) {
        res.status(400).json({ data: error.message });
    }
}

export const updateConsultant = async (req, res) => {
    const id = req.params.id;
    const { firstName, lastName, specialization, email, password, phone, location } = req.body;
    try {
        const result = await updateConsultantById(id, { firstName, lastName, specialization, email, password, phone, location });
        res.status(200).json({ data: result, status: 'success' });
    }
    catch (error) {
        res.status(400).json({ data: error.message });
    }
}

export const deleteConsultant = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await deleteConsultantById(id);
        res.status(200).json({ data: result, status: 'success' });
    }
    catch (error) {
        res.status(400).json({ data: error.message });
    }
}