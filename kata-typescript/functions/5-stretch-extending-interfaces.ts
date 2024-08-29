// DOCS: https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types

interface Vehicle {
  make: string
  model: string
  year: number
}

interface Car extends Vehicle {
  doors: number
}

interface Motorcycle extends Vehicle {
  sidecar: boolean
}

// getVehicle should return a Vehicle object
// it is passed a make, model, and year as parameters
export function getVehicle(make: string, model: string, year: number): Vehicle {
  return { make: make, model: model, year: year }
}

// getCar should return a Car object (extension of Vehicle)
// it is passed a make, model, year, and the number of doors as parameters
export function getCar(
  make: string,
  model: string,
  year: number,
  doors: number,
): Car {
  return { make: make, model: model, year: year, doors: doors }
}

// getMotorcycle should return a Motorcycle object (extension of Vehicle)
// it is passed a make, model, year, and whether there is a sidecar as parameters
export function getMotorcycle(
  make: string,
  model: string,
  year: number,
  sidecar: boolean,
): Motorcycle {
  return { make: make, model: model, year: year, sidecar: sidecar }
}

// getTruck should return a Truck object (extension of Vehicle)
// it is passed a make, model, year, the number of wheels, and whether it has a trailer as parameters
export function getTruck(): void {}

// generateVehicles should return an array of predefined vehicles (check the test for more info)
// it should use the functions above to generate the vehicles
export function generateVehicles(): void {}

// ----------- DEFINED KEYS -----------

// createUserObj will be passed a name and an email
// it will sometimes be passed a picture as a third parameter
// it should return an object with the above properties and a role defined as 'user' and return that object
export function createUserObj(): void {}

// upgradeToAdmin will be passed a user object
// it should alter the role property to be 'admin' and return the object
export function upgradeToAdmin(): void {}

// isUserAdmin will be passed a user object
// it should return true if the role is 'admin' and false if it is not
// Depending on how you code this, you may need a type predicate - https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
// or a type assertion - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
export function isUserAdmin(): void {}

// getAdmins will be passed an array of user objects
// it should return an array of only the admin users
// you should use the above function to help you
export function getAdmins(): void {}
