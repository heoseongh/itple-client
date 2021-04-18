import axios from "axios";

/* 작성해야함 */

class ContestApi {
    URL = "";
    
    contestList() {
        return axios.get(this.URL)
        .then((res) => res.data)
    }

    contestDetail(id) {
        return axios.get(this.URL+id)
        .then((res) => res.data);
    }
}

export default ContestApi;