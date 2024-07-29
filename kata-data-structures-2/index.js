import luke from './starwars.js'
import * as queries from './queries.js'

// const result = queries.getHeight(luke)
// const result = queries.getHomeworldClimate(luke)
// const result = queries.getHomeworldClimateB(luke)
// const result = queries.getFirstVehicleModel(luke)
// const result = queries.getSecondVehiclePassengers(luke)
// const result = queries.getVehicleNames(luke)
// const result = queries.getVehicleNames2(luke)
// const result = queries.getDepreciatedVehicleValues(luke)
// const result = queries.getDepreciatedVehicleValuesB(luke)
// const result = queries.getSpeeders(luke)
// const result = queries.getFirstSpeeder(luke)
// const result = queries.getTotalCrew(luke)
// const result = queries.getHomeworldSpecsList(luke)
// const result = queries.getHomeworldSpecsValues(luke)
const result = queries.getDejarikValue(0, 4)
// const result = queries.getDejarikValue(0, 2)

console.log('result:', result)