// Servidorcito con json-server
// npm i json-server
// Para esto se uso el archivo db.json
// Se configuro el Script a "start": "json-server --watch db.json"
// Se inicia con npm run start
/**
 * Podemos probar las distintas metodos HTTP con Postman
 * GET: Obtiene los datos del end-point
 * POST: Prepara nuevos recursos para ser enviados (body-raw-json)
 * PUT: Reemplaza un recurso en su totalidad ([url]/:id, params-path params-id=la_id, body-raw-json)
 * PATCH: Reemplaza un recurso parcialmente ([url]/:id, params-path params-id=la_id, body-raw-json)
 * DELETE: Elimina un recurso en su totalidad ([url]/:id, params-path params-id=la_id)
 */

// Web server
import config1 from 'dotenv'
import config2 from 'env-var'
import express from 'express'
import path from 'node:path'

config1.config();

const funcionMain = () => {
    let port = config2.get('PORT').default(3000).asInt();

    const app = express();

    app.use(express.static('public'));

    app.get('*', (req, res) => {
        res.send(path.join(__dirname + '/public/index.html'));
    })

    app.listen(port, () => {
        console.log(`Escuchando en el puerto ${port}`);
    })
}

//funcion anónima autoconvocada
(async () => {
    funcionMain();
})();
