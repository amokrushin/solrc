const wrapWithQuotes = (string: string) => `"${string}"`;

const escapeQuotes = (string: string) => string.replace(/["]/g, '\\$&');
