export const normalizeFileName = (path: string) => {
  return (path.split('/').pop() as string).replace(/\.\w+$/, '') as string;
};
