const app = require  ('./src/app');

const port = process.env.PORT 

app.listen(port, ()=> console.log  (`Sevidor rodando na porta ${port}`))