export default function getListStudentIds(list) {
  // Check if the argument is an array
  if (Array.isArray(list)) {
    return list.map((obj) => obj.id); // Return an empty array if the argument is not an array
  }
  return [];
}
