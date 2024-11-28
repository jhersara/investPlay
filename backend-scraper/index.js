//Servidor priv
//Para coneciones de scraping

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors')

const app = express();
const PORT = 3031;

app.use(cors());

//Enrutamiendo de la conexion con www.dataroma.com
app.get('/api/scrape', async (rq, rs) =>{
    try {
        const {data} = await axios.get('https://www.dataroma.com/');
        const $ = cheerio.load(data);

        //Ejemplo para obtener encabezados de tablas
        const header = [];
        $('table thead tr td').each((_, element) => {
            header.push($(element).text().trim());
        });

        rs.json({ header })
    } catch (error) {
        alert('Error: ', error.message);
        rs.status(500).send('Error al analizar el scraping');
    }
});

app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
})