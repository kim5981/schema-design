const Car = require("./cars-model")
const vin = require("vin-validator")
const checkCarId = async (req, res, next) => {
  try{
    const car = await Car.getById(req.params.id)
    !car ? next({status:404, message: `car with id ${req.params.id} is not found`})
    : req.car = car 
    next()
  } catch(err){
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage } = req.body

  if(!vin){
    next({ status: 400, message: `vin is missing`})
  }
  if(!make){
    next({ status: 400, message: `make is missing`})
  }
  if(!model){
    next({ status: 400, message: `model is missing`})
  }
  if(!mileage){
    next({ status: 400, message: `mileage is missing`})
  }
  next()
}

const checkVinNumberValid = (req, res, next) => {
  if(vin.validate(req.body.vin)){
    next()
  } else {
    next({ 
      status: 400, 
      message: `vin ${req.body.vin} is invalid`,
     })
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  try{
     const existing = await Car.getByVin(req.body.vin)
     if(!existing){
      next()
     } else {
       next({ 
         status: 400,
         message: `vin ${req.body.vin} already exists`
        })
     }
  } catch(err){
    next(err)
  }
}

module.exports = {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
  }