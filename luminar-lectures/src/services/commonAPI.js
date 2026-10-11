import axios from "axios";

const commonAPI = async (reqMethod, reqUrl, reqBody) => {
    const reqConfig = {
        url: reqUrl,
        method: reqMethod,
        header: {
            "Content-Type": "application/json"
        },
        data: reqBody
    }
    return await axios(reqConfig).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}

export default commonAPI;