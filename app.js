const express = require("express")

const app = express()

app.get('/health', (req, res) => {
    return res.send("Server working on 3000")
})

app.listen(3000, () => {
    console.log('Server started on 3000')
})