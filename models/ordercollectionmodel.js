const {Schema,model}=require('mongoose');
const collectionorder=new Schema({
	userid:{
		type:Schema.types.ObjectId,
		ref:"UserCollection"
	},
	subtotal:
	{
		type:Number,
		require:true
	},
	date:
	{
		type:Date,
		Deafult:Date();
	},


})
module.exports=model("CollectionOrder",collectionorder);