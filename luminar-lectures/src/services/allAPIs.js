import commonAPI from "./commonAPI";
import { base_Url } from "./base_Url";


export const addLecture  = async (lectureData) => {
    return await commonAPI("POST", `${base_Url}/lectures`, lectureData);
}
// const getAllLectures = async () => {

// }