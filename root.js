const express = require('express')
const server = express()


const PORT = 3000
server.listen(PORT,()=> {
    console.log(`Server running via ${PORT}`);
})