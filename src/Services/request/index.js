import axios from "axios";

async function getAll(params) {
    const response = await axios.get("/requests", { params });
    return response;
}


async function updateById(id, data) {
    const response = await axios.put(`/requests/${id}`, data, {
        // _opts: { noToast: false },
    });
    return response;
}
const requestService = {
    updateById,
    getAll,
};
export default requestService;