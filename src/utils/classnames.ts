type ClassNamesFunction = (
  originalClasses: string,
  classesToAddOrRemove: string
) => string;

export const addClassNames: ClassNamesFunction = (
  originalClasses,
  classesToAdd
) => {
  const originalClassArray = originalClasses.split(" ");
  const classesToAddArray = classesToAdd.split(" ");

  // Удаляем дубликаты классов из массива, который нужно добавить
  const uniqueClassesToAdd = classesToAddArray.filter(
    className => !originalClassArray.includes(className)
  );

  // Объединяем исходные классы и уникальные классы для добавления
  const newClasses = [...originalClassArray, ...uniqueClassesToAdd];

  // Объединяем массив классов в строку и возвращаем
  return newClasses.join(" ");
};

export const removeClassNames: ClassNamesFunction = (
  originalClasses,
  classesToRemove
) => {
  const originalClassArray = originalClasses.split(" ");
  const classesToRemoveArray = classesToRemove.split(" ");

  // Фильтруем исходные классы, оставляя только те, которые не нужно удалить
  const newClasses = originalClassArray.filter(
    className => !classesToRemoveArray.includes(className)
  );

  // Объединяем массив классов в строку и возвращаем
  return newClasses.join(" ");
};
