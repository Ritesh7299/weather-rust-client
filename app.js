const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 8000

app.get('/myname', greeting)

function greeting(req,response)
{
    response.send("Heyy there!")
}
app.listen(port, () => {
console.log(`check greetings you may have received`)
})
