import { getAdminByEmail } from "../Repository/Admin.repository"
import { getClientByEmail } from "../Repository/Client.repository";
import { getConsultantByEmail } from "../Repository/Consultant.controller";

export const loginService = async ({email, password}) => {
    const isAdmin = await getAdminByEmail(email);
    const isConsultant = await getConsultantByEmail(email);
    const isClient = await getClientByEmail(email);
    if (isAdmin) {
        if (isAdmin.password === password) {
            return isAdmin;
        }
        else {
            throw new Error("Wrong password");
        }
    }
    else if (isConsultant) {
        if (isConsultant.password === password) {
            return isConsultant;
        }
        else {
            throw new Error("Wrong password");
        }
    }
    else if (isClient) {
        if (isClient.password === password) {
            return isClient;
        }
        else {
            throw new Error("Wrong password");
        }
    }
}

