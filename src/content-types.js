export const fileTypes = {
    "html": 'text/html',
    "css":  'text/css',
    "js":   'text/javascript',
    "json": 'application/json',
    "png":  'image/png',
    "jpg":  'image/jpg',
    "gif":  'image/gif',
    "svg":  'image/svg+xml',
    "wav":  'audio/wav',
    "mp4":  'video/mp4',
    "woff": 'application/font-woff',
    "ttf":  'application/font-ttf',
    "eot":  'application/vnd.ms-fontobject',
    "otf":  'application/font-sfnt',
}
export const getContent = (ext) => ({ 
    'Content-Type': 
    Object.keys(fileTypes)
    .map(k => ext === `.${k}` && fileTypes[k])
    .filter(item => item !== false)[0] ?? 'text/html'
})