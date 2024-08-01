// declaraciones
let calculo
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const captureButton = document.getElementById('capture');
const fileInput = document.getElementById('file-input');
const dropArea = document.getElementById('drop-area');
const photo = document.getElementById('photo');
const recognizedTextElement = document.getElementById('recognized-text');
const resultElement = document.getElementById('result');
// Obtener acceso a la cámara
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => video.srcObject = stream)
    .catch(err => console.error("Error accessing the camera: ", err));
// Capturar la foto
captureButton.addEventListener('click', () => {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataURL = canvas.toDataURL('image/png');
    photo.src = dataURL;
    recognizeText(dataURL);
});
// Manejar la carga de imágenes
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    processFile(file);
});
// Manejar arrastrar y soltar
dropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropArea.style.borderColor = '#333';
});
dropArea.addEventListener('dragleave', () => {
    dropArea.style.borderColor = '#ccc';
});
dropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    dropArea.style.borderColor = '#ccc';
    const file = event.dataTransfer.files[0];
    processFile(file);
});
// Procesar el archivo cargado o arrastrado
function processFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0);
            const dataURL = canvas.toDataURL('image/png');
            photo.src = dataURL; // Datos capturados
            recognizeText(dataURL); // Llama al OCR y la evaluación matemática
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}
// Reconocimiento de texto con Tesseract.js
function recognizeText(dataURL) {
    Tesseract.recognize(dataURL,'eng',{logger: m => console.log(m)})
    .then(({ data: { text } }) => {
        recognizedTextElement.textContent = `Texto reconocido: ${text}`;
        evaluateMath(text);
    });
}
// Evaluar expresión matemática usando math.js
function evaluateMath(expression) {
    try {
        calculo = expression;
        const result = math.evaluate(expression);
        resultElement.textContent = `Resultado: ${result}`;
    } catch (err) {
        resultElement.textContent = 'Error en la expresión matemática';
    }
}