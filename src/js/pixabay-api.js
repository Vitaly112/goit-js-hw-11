const BASE_URL = "https://pixabay.com/api/";

function serviceSearchPhoto(seachImage = "") {
    const API_KEY = "43270282-4a5d06b91258db09a976f913c";
    const params = new URLSearchParams({
        key: API_KEY,
        q: seachImage,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true"
    });

    return fetch(`${BASE_URL}?${params}`)        
            .then(response => {
                if(!response.ok) {
                    throw new Error("Ooooops!");
                }
                return response.json();
            });
}

export { serviceSearchPhoto };