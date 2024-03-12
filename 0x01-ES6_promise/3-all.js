/* Importing functions from utils.js */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  
  // Promises returned by uploadPhoto and createUser
  const photo = uploadPhoto();
  const user = createUser();

  // Destructure results to extract bodies
  return Promise.all([photo, user]).then((results) => {
    console.log(`${results[0].body} ${results[1].firstName} ${results[1].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
