/* A function that returns an array of students for a specific
 * city with their new grade */
export default function updateStudentGradeByCity(studentlist, city, newGrade) {
  // Filter student by the specified city
  return studentlist
    .filter((obj) => obj.location === city)
    .map((student) => {
    // Find the grade object corresponding to the student
      newGrade.map((studentGrade) => {
        if (studentGrade.studentId === student.id) {
          student.grade = studentGrade.grade;
        }

    /* If gradeObj is found, return the student object with
     the updated grade, otherwise set grade */
        if (!student.hasOwnProperty('grade')) {
          student.grade = 'N/A';
        }
        return student;
      });

      return student;
    });
}
