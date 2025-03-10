export function normalizeData<T extends object>(data: T[] | undefined): T[] {
  if (!data) return [];

  return data.map(item => {
    const keys = Object.keys(item) as (keyof T)[];
    if (keys.length > 1) {
      const secondKey = keys[1]; // Второй ключ
      const secondValue = item[secondKey];

      // Создаем новый объект с переименованным вторым ключом
      const { [secondKey]: _, ...rest } = item;
      return { ...rest, label: secondValue } as T; // Переименовываем второй ключ в "name"
    }
    return item; // Если ключей меньше 2, оставляем объект как есть
  });
}
