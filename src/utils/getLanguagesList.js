export const getLanguagesList = teachers => {
  return teachers
    .flatMap(teacher => teacher.languages)
    .filter((item, index, array) => array.indexOf(item) === index);
};
