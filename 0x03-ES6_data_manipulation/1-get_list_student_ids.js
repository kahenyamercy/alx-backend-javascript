// a function that returns an array of ids from a list of object

export default function getListStudentIds(listStudents) {
  if (!Array.isArray(listStudents)) {
    return [];
  }
  return listStudents.map((student) => student.id);
}
