import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
            "Client-ID ba1fdf941d4a58b471bc6e52b43d033622e17edd99a1645e916a38660a21912c"
    }
});
