/* Implement the signUpUser function */
export default function signUpUser(firstName, lastName) {
    // Return a resloved promise with the provided object
    return new Promise((resolve) => {
    resolve({
      firstName,
      lastName,
    });
  });
}
