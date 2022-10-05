// ** Importar modulos
//const nombre_constante = require('nombre_del_modulo_requerido')
const hola_mundo = require('hola-mundo-nodejs')

// ** console.log(nombre_constante.nombre_funcion )
//console.log (hola_mundo.mensaje())

// ** Importar http para servidor
const http = require('http')
// ** Crear servidor con la funcion createServer
const server = http.createServer(onRequest)

// ** Puerto por donde escuchara el servidor
//server.listen(3000)
//console.log('Mi servidor esta corriendo en localhost:3000')

// ** Enviar respuesta desde node.js
//function onRequest(request, response) {
//console.log('Se ha detectado una nueva petición')
// ** ejemplos:
//console.log(request)
//console.log(request.headers.host)
//console.log(request.url)
//console.log(request.method)
//response.setHeader('Content-type', 'text/plain')
//response.write('Bienvenidos a node.js')
//response.end()
//}

// ** funcion anonima para el puerto
const port = 3000
const fs = require('fs')
const qs = require('querystring')
server.listen(port, ()=>{
    console.log('Mi servidor esta corriendo en localhost:3000')
})

// ** Resumen del código anterior para la funcion onRequest
function onRequest(req, res) {
    fs.readFile('index.html', (err, content)=>{
        console.log('Se ha detectado una nueva petición')
        if (req.url == '/'){
            if (err) {
                if (err.code == 'ENOENT') {
                    res.setStatus = 404
                    console.log('No se ha encontrado el archivo')
                } else {
                    res.setStatus = 500
                    console.log('Ha ocurrido un error en el servidor')
                }
            } else {
                res.setStatus = 202
                res.setHeader('Content-type', 'text/html')
                res.write(content)
                res.end()
            }
        } else if(req.url == '/users') {
            if (req.method == 'GET') {
                res.setStatus = 200
                res.setHeader('Content-type', 'text/html')
                res.write('Accediendo a usuarios')
                res.end()
            } else  if(req.method == 'POST') {
                //res.setStatus = 200
                //res.setHeader('Content-type', 'text/html')
                //res.write('Insertando usuarios')
                var datos = ''
                req.on('data', (d)=>{
                    datos += d
                })
                req.on('end', ()=>{
                    var post = qs.parse(datos)
                    res.end('Datos recibidos: '+ post.nombre)
                })
            } else  if(req.method == 'PUT') {
                //res.setStatus = 200
                //res.setHeader('Content-type', 'text/html')
                //res.write('Modificando usuarios')
                //res.end()
                var datos = ''
                req.on('data', (d)=>{
                    datos += d
                })
                req.on('end', ()=>{
                    var post = qs.parse(datos)
                    res.end('Datos recibidos: '+ post.nombre)
                })
            } else  if(req.method == 'DELETE') {
                //res.setStatus = 200
                //res.setHeader('Content-type', 'text/html')
                //res.write('Eliminando usuarios')
                //res.end()
                var datos = ''
                req.on('data', (d)=>{
                    datos += d
                })
                req.on('end', ()=>{
                    var post = qs.parse(datos)
                    res.end('Datos recibidos: '+ post.nombre)
                })
            }
        }
    })
}