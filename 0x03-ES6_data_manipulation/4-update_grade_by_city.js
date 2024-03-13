export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter(student => student.location === city)
    .map(student => {
      const sgrade = newGrades.find(grade => grade.studentId === student.id);
      return {...student, grade: sgrade ? sgrade.grade : 'N/A'};
    });
}
