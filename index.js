const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000
const { User } = require('./models/User')

 // 클라이언트에서 post 할경우 json으로 받기위한 모듈
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}));//application/x-www-from-urlencoded 형식
app.use(bodyParser.json()); //application/json 형식

const config = require('./config/key');


mongoose.connect(config.mongoURL,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
  useFindAndModify:false
}).then(() => console.log("MongoDB connected.."))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!!!!ss'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

app.post('/regster', (req, res) => {
  //회원 가입할때 정보들을 JSON형식으로 받기위한부분
  const user = new User(req.body); //models을 JSON형식으로 받기

  //몽고 db 지원함수
  user.save((err,userInfo) => {
    //에러인경우 출력
    if(err) return res.json({success:false , err})
    //정상동작인 경우 출
    return res.status(200).json({
      success:true
    });
  });
});
