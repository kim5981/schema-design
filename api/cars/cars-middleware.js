const Car = require("./cars-model")

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
  // vin, make, model, mileage
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
  next()
}

const checkVinNumberUnique = (req, res, next) => {
  next()
}

module.exports = {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
  }