type ClassValue = string | number | Record<string, boolean> | ClassArray;

interface ClassArray extends Array<ClassValue> {}

export const classNames = (...args: (ClassValue | undefined)[]): string => {
  const classes: string[] = [];

  for (const arg of args) {
    if (arg === undefined) {
      continue;
    }

    if (typeof arg === "string" || typeof arg === "number") {
      classes.push(arg.toString());
    } else if (Array.isArray(arg)) {
      classes.push(classNames(...arg));
    } else if (typeof arg === "object" && arg !== null) {
      for (const [key, value] of Object.entries(arg)) {
        if (value) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(" ");
};

export const removeClass = (
  originalClasses: string | undefined,
  ...classesToRemove: string[]
): string => {
  if (originalClasses === undefined) {
    return "";
  }

  const classArray = originalClasses.split(" ");
  classesToRemove.forEach(classToRemove => {
    const index = classArray.indexOf(classToRemove);
    if (index !== -1) {
      classArray.splice(index, 1);
    }
  });

  return classArray.join(" ");
};
