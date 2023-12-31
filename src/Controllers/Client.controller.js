import { addClient, deleteClient, getClients, getOneClient, updateClient } from "../Services/Client.service";

export const createClient = async (req, res) => {
    const { firstName, lastName, email, password, phone, location, prefix, profileImage } = req.body;
    try {
        const result = await addClient({ firstName, lastName, email, password, phone, location, prefix, profileImage });
        res.status(201).json({ data: result, status: 'success' });
    }
    catch (error) {
        res.status(403).json({ data: error.message, status: 'error' });
    }
}

export const getALLClients = async (req, res) => {
    try {
        const result = await getClients();
        console.log(result);
        for(let item of result) {
            delete item.password
        }
        res.status(200).json({ data: result, status: 'success' });
    }
    catch (error) {
        res.status(400).json({ data: error.message, status: 'error' });
    }
}

export const getOneClientById = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await getOneClient(id);
        res.status(200).json({ data: result, status: 'success' });
    }
    catch (error) {
        res.status(400).json({ data: error.message, status: 'error' });
    }
}

export const updateClientById = async (req, res) => {
    const id = req.params.id;
    const { firstName, lastName, email, password, phone, location, prefix, profileImage} = req.body;
    try {
        const result = await updateClient(id, { firstName, lastName, email, password, phone, location, prefix, profileImage});
        res.status(200).json({ data: result, status: 'success' });
    }
    catch (error) {
        res.status(400).json({ data: error.message, status: 'error' });
    }
}

export const deleteClientById = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await deleteClient(id);
        res.status(200).json({ data: result, status: 'success' });
    }
    catch (error) {
        res.status(400).json({ data: error.message, status: 'error' });
    }
}
