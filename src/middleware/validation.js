const {check,validationResult}=require('express-validator');

const MensModel=require('../models/mensModel');

const validation={};

validation.MensRankingValidate=[
    check('ranking')
        .notEmpty().withMessage("Ranking is required!")
        .custom(async(value)=>{
            const checkValue=await  MensModel.findOne({ranking:value});
            if(checkValue){
                throw new Error("Ranking already exist!")
            }
        }),
    check('name')
        .notEmpty().withMessage("Name is required!")
        .isLength({min:3}).withMessage('Name must be at least 3 character!'),
    check('country')
        .notEmpty().withMessage('Country is required!'),
    check('score')
        .notEmpty().withMessage("Score is required!")
        .isInt().withMessage("Score must be integer type!"),
    
        (req,res,next)=>{
            const errors=validationResult(req);
            if(!errors.isEmpty()){
                return res.status(402).json({
                    message:errors.array()
                })
            }
            next();
        }
]

module.exports=validation