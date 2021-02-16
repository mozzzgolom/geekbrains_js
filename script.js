const http = require('http');
const fs = require('fs');
const path = require('path')
const url = require('url')

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.json': 'application/json',
  }

const server = http.createServer((req, res) => {    
    // console.log(`Запрошенный адрес: ${req.url}`);
    // получаем путь после слеша
    const filePath = req.url.substr(1);
    // смотрим, есть ли такой файл    
    fs.access(filePath, fs.constants.R_OK, err => {        
        // если произошла ошибка - отправляем статусный код 404
        if(err){
            res.statusCode = 404;
            res.end("Resourse not found!");
        } else {   
                  
            fs.createReadStream(filePath).pipe(res);
            
        }       
      });
});

server.listen(process.env. PORT || 4000)

console.log('Server started')


 // const body = req.url === '/style.css'
    // ? fs.readFileSync('./geekbrains_js/style.css', 'utf8')
    // : fs.readFileSync('./geekbrains_js/index.html', 'utf8')
    // // const body = fs.readFileSync('./geekbrains_js/index.html', 'utf8');
    // res.end(body);
    // // console.log(req.url)

  
    