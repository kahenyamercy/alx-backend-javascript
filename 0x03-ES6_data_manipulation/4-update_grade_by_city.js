// Function that returns array of students for specific city with their new grade

export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => ({
    ...student,
    grade: newGrades.find((grade) => grade.studentId === student.id).grade,
  }));
}
