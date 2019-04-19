import axios from "axios";

export default {
    ajaxGet (api, callback) {
        axios.get(api)
            .then(callback)
            .catch(err => {
                console.log(err);
            })
    },
    ajaxPost (api, post, callback) {
        axios.post(api, post)
            .then(callback)
            .catch(err => {
                console.log(err);
            })
    },
}