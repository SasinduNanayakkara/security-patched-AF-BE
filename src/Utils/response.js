export const makeResponse = ({res, status, message, data}) => {
    const responseData = {data, message};
    if (!data) {
        delete responseData.data;
    }
    return res.status(status).json(responseData);
}