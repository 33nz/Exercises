export function getHeight(pilot) {
  return pilot.height
}

export function getHomeworldClimate(pilot) {
  return pilot.homeworld.climate
}

export function getHomeworldClimateB(pilot) {
  return pilot['homeworld']['climate']
}

export function getFirstVehicleModel(pilot) {
  return pilot.vehicles[0].model
}

export function getSecondVehiclePassengers(pilot) {
  return pilot.vehicles[1].specs.passengers
}

export function getVehicleNames(pilot) {
  return pilot.vehicles.map(vehicle => vehicle.name)
}

export function getVehicleNames2(pilot) {
  const vehicleNames = pilot.vehicles.map(vehicle => {
    return vehicle.name
  })
  return vehicleNames
}

export function getDepreciatedVehicleValues(pilot) {

  const vehicleValues = pilot.vehicles.map(vehicle => {
    return {
      name: vehicle.name,
      depreciatedValue: vehicle.costInCredits * .9
    }
  })
  return vehicleValues
}

export function getDepreciatedVehicleValuesB(pilot) {
  const vehicleValues = pilot.vehicles.map(({name, costInCredits}) => {
    return {
      name,
      depreceatedValue: costInCredits * .9
    }
  })
  return vehicleValues
}

export function getSpeeders (pilot) {
  return pilot.vehicles.filter(vehicle => vehicle.vehicleClass === 'speeder')
}

export function getFirstSpeeder(pilot) {
  const speeder = pilot.vehicles.find(vehicle => vehicle.vehicleClass === 'speeder')
  return speeder.name
}

export function getTotalCrew(pilot) {  
  return pilot.vehicles.reduce((accumulator, vehicle) => accumulator + vehicle.specs.crew, 0)
}

export function getHomeworldSpecsList(pilot) {  
  return Object.keys(pilot.homeworld)
}

export function getHomeworldSpecsValues(pilot) {
  return Object.entries(pilot.homeworld)
}

const dejarik = [                                                                
  [ null, null, 'MS', null, 'GT', null, 'MN', null, null, 'KS', null, 'GH' ],    // MS = Mantellian Savrip
  [ null, 'NO', null, null, null, null, null, 'HJ', null, null, 'KL', null ],    // GT = Grimtaash the Molator
  [ null ]                                                                       // GH = Ghhhk
]                                                                                // HJ = Houjix
//                                                                                  // NO = Ng'ok
//                                                                                  // KS = Kintan strider
//                                                                                  // KL = K'lor'slug 
//                                                                                  // MN = M'onnok

export function getDejarikValue (row, column) {
  return dejarik[row][column]
}