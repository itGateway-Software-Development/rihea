import { ref } from 'vue';
import api from '../api/api';
import axios from 'axios';

let getBlogs = () => {
    let blogs = ref([]);
    let error = ref('');

    let load = async() => {
        try {
            let response = await axios.get(api.topBlogs);
            if (response.status == 404) {
                throw new Error("Page not found");
            }
            blogs.value = response.data.topBlogs;
        } catch (err) {
            error.value = err.message;
        }
    }
    return { blogs, error, load };
}

export default getBlogs;