export default function getStudentIdsSum(studentlist) {
  // Use reduce to sum all student ids
  return studentlist.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
