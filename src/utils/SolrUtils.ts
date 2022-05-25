const wrapWithQuotes = (string: string) => `"${string}"`;

const escapeQuotes = (string: string) => string.replace(/["]/g, '\\$&');

const formatListFilter = (field: string, values: string[]) => {
  if (!values?.length) {
    return null;
  }
  return `${field}:(${values
    .map(String)
    .map(escapeQuotes)
    .map(wrapWithQuotes)
    .join(',')})`;
};
