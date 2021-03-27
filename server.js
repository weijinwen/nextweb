const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const cookieParser = require('cookie-parser');

const language = (req) => {
    let lang_header = req.headers["accept-language"]
    let lang_header_arr = [];
    if (lang_header) {
        lang_header_arr = lang_header.split(',')
    }
    if (req.cookies.locale_lang) {
        return req.cookies.locale_lang;
    } else if (lang_header_arr.length !== 0) {
        return lang_header_arr[0]
    } else {
        return "zh-CN"
    }
}

app.prepare().then(() => {
    const server = express()
    server.use(cookieParser())
    server.all('*', (req, res) => {
        req.locale = language(req)
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})
