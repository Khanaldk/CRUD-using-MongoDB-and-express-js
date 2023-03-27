const MensModel=require('../src/models/mensModel');

class mensController
{
    static createMens=async(req,res)=>{
        const mens={
            ranking:req.body.ranking,
            name:req.body.name,
            dob:req.body.dob,
            country:req.body.country,
            score:req.body.score,
            event:req.body.event
        }
        const menRanking=await MensModel.create(mens);
        if(menRanking){
            return res.status(200).json({
                    message:"Mensranking created!",
                    menRanking:mens  
            })
        }
    }

    static findallMensRanking=async(req,res)=>{
        const getMens=await MensModel.find().count();
        if(getMens){
            return res.status(200).json({
                message:"Retreived all mensRanking!!",
                MensRanking:getMens
            })
        }
    }

    static findMensRankingById=async(req,res)=>{
        const _id=req.params.id;
        const mens=await MensModel.findOne({_id:_id});
        if(mens){
            return res.status(200).json({  
                    message:"Retrieved mensRanking!",
                    mensRanking:mens
             })
        }
        return res.status(500).json({
            message:"Invalid Id!"
        })
    }

    static updateMensRankingById=async(req,res)=>{
        const mensRanking=await MensModel.updateMany({_id:_id},req.body)
        if(mensRanking){
            return res.status(200).json({
                nessage:"MensRanking updated successfully!",
                newData:mensRanking
            })
        }
        return res.status(500).json({
            message:"Invalid Id!!"
        })
    }

    static deleteMensRankingById=async(req,res)=>{
        const _id=req.params._id;
        const menRanking=await MensModel.deleteOne({_id:_id});
        if(menRanking){
            return res.status(200).json({
                message:"MensRanking deleted successfully!"
            })
        }
        return res.status(500).json({
            message:"Invalid Id!"
        })
    }
}

module.exports=mensController