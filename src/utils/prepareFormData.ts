export const prepareFormData = (event: Event): object => {
  const button = event.target as HTMLButtonElement;
  const form = button.closest("form") as HTMLFormElement | null;
  const formDataObject: Record<string, string> = {};

  if (form) {
    const formData = new FormData(form);
    // Преобразование FormData в обычный объект
    formData.forEach((value, name) => {
      formDataObject[name] = value.toString();
    });
  }

  return formDataObject;
};
