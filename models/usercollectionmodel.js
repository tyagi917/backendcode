const{Schema,model}=require('mongoose');
const Usercollection=new Schema({
	name:{
		type:String,
		require:true
	}
})
module.exports=model("UserCollection",Usercollection)