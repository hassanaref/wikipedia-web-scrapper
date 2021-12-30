const cheerio = require('cheerio');
const axios = require('axios');
const express = require('express');
const app = express();

const url = 'https://en.wikipedia.org/wiki/Jamiroquai'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []
        $('.mw-headline', html).each(function(){
            const subheader = $(this).text()
            articles.push({
                subheader
            })
        })
        console.log(articles)
    })
app.listen(3000, () => {
    console.log('server started');
})
