async function getData(url = "", options = {}) {
    try {
        const response = await fetch(url, options);
        if (/json/.test(response.type)) return await response.json();
        if (/html|text|xml/.test(response.type)) return await response.text();
        const data = await response.blob();
        return URL.createObjectURL(data);
    }
    catch (e){
        console.error("Error:", e);
    }
}