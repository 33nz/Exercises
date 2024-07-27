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
  return pilot.vehicle.model[0]
}

export function getSecondVehiclePassengers (pilot) {
  return pilot.vehicles[1].specs.passengers
}

export function getVehicleNames (pilot) {
  const vehicleNames = pilot.vehicles.map(vehicle => 
   vehicle.name
  )
  // Return an array of vehicle names
  return vehicleNames
}

export function getDepreciatedVehicleValues (pilot) {
  // Return an array of objects with the
  // vehicle's name and 90% of the cost:
  // e.g. { name: 'Imperial Shuttle', depreciatedValue: 216000 }
  // const vehicleValues = pilot.vehicles.map(vehicle => {
  //   return {
  //     name: vehicle.name,
  //     depricatedValue: vehicle.costInCredits * .9
  //   }
  // })
  const vehicleValues = pilot.vehicles.map(({name, costInCredits}) => {
    return {
      name,
      depreciatedValue: costInCredits * .9
    }
  })
  return vehicleValues
}

export function getSpeeders (pilot) {
  return pilot.vehicles.filter(vehicle => vehicle.vehicleClass === 'speeder')
}

export function getFirstSpeeder (pilot) {
  return pilot.vehicles.find(vehicle => vehicle.vehicleClass === 'speeder')
}

export function getTotalCrew (pilot) {  
  return pilot.vehicles.reduce((accumulator, vehicle) => accumulator + vehicle.specs.crew, 0)
}

export function getHomeworldSpecsList (pilot) {  
  return Object.keys(pilot.homeworld)
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