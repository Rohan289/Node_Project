const express = require('express')
const path=require('path')
const hbs=require('hbs')
const publicDirectory = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')
const app = new express()

//set up static directory to serve
app.use(express.static(publicDirectory))

//Set up handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)
//app.com
app.get('',(req,res) => {
  //res.send helps to send request to requester
  res.render('index',{
    title : 'Weather App',
    name : 'Rohan Bhowmick'
  })
})
app.get('/products',(req,res) => {
  //?search=rohan
  console.log('Query paramteres',req.query)
  if(!req.query.search) {
    return res.send({
      error : 'No search found'
    })
  }
  //{search : rohan}
  res.send({
    product : []
  })

})
app.listen(3001,() => {
  console.log('Server is up on port 3001!')
})