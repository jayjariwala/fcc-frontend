import axois from 'axios';

const unsplash = axois.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID c06539c4ea2dc91e840d9f1f09e2ac9bbf96dd85f8029d4aea4533719befe94e'
    }
})

export default unsplash;