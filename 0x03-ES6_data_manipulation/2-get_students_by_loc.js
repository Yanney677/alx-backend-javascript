export default function getStudentsByLocation(studentlist, city) {
  // Use filter to find students located in the specific city
  return studentlist.filter((obj) => obj.location === city);
}
