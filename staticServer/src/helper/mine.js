const path = require('path');

const mimeTypes = {
  'css':'text/css',
  'gif':'image/gif',
  'html':'text/html',
  'ico':'image/x-icon',
  'jpeg':'image/jpeg',
  'jpg':'image/jpg',
  'js':'text/javascript',
  'json':'application/json',
  'pdf':'application/pdf',
  'png':'image/png',
  'svg':'application/x-shockwave-flash',
  'tiff':'image/tiff',
  'txt':'text/plain',
  'wav':'audio/x-wav',
  'wma':'audio/x-ms-wma',
  'wmv':'video/x-ms-wmv',
  'xml':'text/xml',
};

module.exports =(filePath) => {
  let extname = path.extname(filePath).split('.').pop().toLowerCase();

  if(!extname){
    extname = filePath;
  }
  return mimeTypes[extname] || mimeTypes['txt'];




};
