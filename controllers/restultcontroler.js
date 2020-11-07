const userCollection=require('./models/usercollectionmodel.js');
const orderCollection=require('./model/ordercollection.js');
exports.restult=(req,res)=>
{
	orderCollection.aggregate([$group:{_id:"$userid",noofOrders:{$sum:1}},averageBillvalue:{$aug:"$subtotal"}]).exec((err,data)=>{
		if(err)
		{
			return res.status(400).json({
				status:"failed",
				message:"unable to fetch data"
			})
			return res.json(data);
		}
	})
}
exports.restult1=(req,res)=>{
	userCollection.aggregate([{$addfields:{orderCollection.aggregate(_id:"$userid",nooforder:{$sum:1})}}]).exec((err,data)=>{
		if(err)
		{
			return res.status(400).json({
				status:"failed",
				message:"unable to fetch data"
			})
			return res.json(data);
		}
	})
}
