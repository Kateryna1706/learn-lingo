export const getlevelList = teachers => {
  return teachers
    .flatMap(teacher => teacher.levels)
    .filter((item, index, array) => array.indexOf(item) === index);
};
