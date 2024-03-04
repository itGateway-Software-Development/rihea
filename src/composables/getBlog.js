import { ref } from "vue"
import api from "@/api/api";
import axios from "axios";

let getBlog = () => {
    let blog = ref('');
    let error = ref('');
    let load = async(id) => {
        try {
            let response = await axios.get(api.getBlog+id);
            blog.value = response.data.blog;
            blog.value.photo = api.photo_url+blog.value.photo;
        } 
        catch(err) {
            error.value = err.message;
        }
    }
    return {blog, error, load};
}

export default getBlog;