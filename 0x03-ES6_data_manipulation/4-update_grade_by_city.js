export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter(student => student.location === city)
    .map(student => {
      const studgrade = newGrades.find(grade => grade.studentId === student.id);
      return {...student, grade: studgrade ? studgrade.grade : 'N/A'};
    });
}
