export const asyncForEach = async (array: any[], callback: any) => {
  if (!Array.isArray(array)) {
    throw new Error('expected an  array');
  }

  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};
