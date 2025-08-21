async function getData({url = "", ...options}) {
    try {
        const response = await fetch(url, options);
        const type = options.headers["Content-Type"] || "";
        if (/json/.test(type)) return await response.json();
        if (/text/.test(type)) return await response.text();
        return await response.blob();
    }
    catch (e){
        console.error("Error:", e);
    }
}
export default getData;