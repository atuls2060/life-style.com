const jsonServer = require('json-server')
const auth = require('json-server-auth')

const app = jsonServer.create()
const router = jsonServer.router('db.json')

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.db = router.db

const PORT = process.env.PORT || 3000;

app.use(auth)
app.use(router)
app.listen(PORT,()=>{
  console.log(`Server Started on Port ${PORT}`)
})