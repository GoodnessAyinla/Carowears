const express = require ('express')
const app = express()
const dotenv = require ('dotenv')
const bodyParser = require ('body-parser')
dotenv.config()
const port=process.env.PORT||5000

const cors = require('cors')
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


let allCountries=[
    {name:'India', capital:'New Delhi'},
    {name:'USA', capital:'Washington DC'},
    {name:'Germany', capital:'Berlin'},
    {name:'Russia', capital:'Moscow'},
    {name:'Japan', capital:'Tokyo'},
    {name:'China', capital:'Beijing'},
    {name:'Brazil', capital:'Brasilia'},
    {name:'France', capital:'Paris'},
    {name:'Italy', capital:'Rome'},
    {name:'Spain', capital:'Madrid'},
]

app.get('/test',(req,res)=>{
    // res.send('Get to work')
    res.send(allCountries)
})
app.listen(port,()=>console.log(`Server is running on port ${port}`));
