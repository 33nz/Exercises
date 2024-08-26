interface Contact {
  id: number
  name: string
  address: string
}

// getAddress returns the address of a contact object
// contacts have an id, name, and address that will need to be added to the interface above
export function getAddress(obj: Contact): string {
  return obj.address
}

// howManyFriends is passed an array of contacts
// it should return the number of contacts in the given array
export function howManyFriends(arr: Contact[]): number {
  return arr.length
}

// findTheBat is passed an array of contacts
// and returns the address of Batman
// or null if there is no Batman
export function findTheBat(contacts: Contact[]): string | null {
  let address = null

  contacts.map((x) => {
    if (x.name == 'Batman') {
      address = x.address
    }
  })
  return address
}

// ----------- OPTIONAL VS REQUIRED KEYS -----------

interface User {
  name: string
  verified: boolean
  picture?: string
  email?: string
}

// generateNewUser is passed a name
// it should return a new (unverified) user object
export function generateNewUser(userName: string): User {
  const newUser: User = {
    name: userName,
    verified: false,
  }
  return newUser
}

// verifyUser is passed a User object and an email
// it should return a new User object with an email and verified set to true
export function verifyUser(userObject: User, userEmail: string): User {
  const verifiedUser: User = {
    name: userObject.name,
    verified: true,
    email: userEmail,
  }
  return verifiedUser
}

// updateUserPhoto is passed a User object and a picture url
// it should return a new User object with the picture set to the given url
export function updateUserPhoto(user: User, picture: string): User {
  const updatedUser: User = {
    name: user.name,
    verified: user.verified,
    picture: picture,
  }
  return updatedUser
}

// getUserPhoto is passed a User object
// it should return the picture if it exists
// otherwise it should return a link to a kitten -> https://placekitten.com/200/300
export function getUserPhoto(): void {}

// ----------- RECORDS -----------

// getUser is passed two arguments, an id number and
// an object with numbers as keys and Users as values
// getUser should return the user with the given id
// or null if there is no user with that id
export function getUser(): void {}
