/* Importing signUpUser and uploadPhoto functions */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Function to handle profile signup
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Promises for signUpUser and uploadPhoto
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  // Executing promises and handling their settled states
  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise]).then((values) => {
    const result = [];
    values.forEach((element) => {
      if (element.status === 'fulfilled') {
	/* Returning an array with status and value/error of
	     each promise */
        result.push({ status: element.status, value: element.value });
      } else {
        result.push({ status: element.status, value: `${element.reason}` });
      }
    });
    return result;
  });
}
