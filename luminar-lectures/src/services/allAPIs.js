import commonAPI from "./commonAPI";
import { base_Url } from "./base_Url";


export const addLecture  = async (lectureData) => {
    return await commonAPI("POST", `${base_Url}/lectures`, lectureData);
}

export const getLectures = async () => {
    return await commonAPI("GET", `${base_Url}/lectures`);
}

export const deleteLecture = async (lectureId) => {
    return await commonAPI("DELETE", `${base_Url}/lectures/${lectureId}`, {});
}