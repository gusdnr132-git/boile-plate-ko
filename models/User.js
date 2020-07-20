const mongoose = require('mongoose');
//이름,이메일,비밀번호,권한설정,토큰,토큰유지시간
const userSchema = mongoose.Schema({
  name:{
     type : String,
     maxlength : 50 ,
  },
  email:{
     type : String ,
     trim : true ,
     unique : 1
  },
  password:{
     type : String,
     maxlength : 50 ,
  },
  role:{
     type : Number,
     default : 0
  },
  image:String,
  token:{
     type : String,
  },
  tokenExp:{
       type : Number
    }
});
//스키마를 모델로 가공
const User = mongoose.model('User',userSchema)

//다른 파일에서도 사용할수 있게하는게함
module.exports={User};
