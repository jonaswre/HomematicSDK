export function traverse(o) {
  const i = o;
  if (typeof o == 'object') {
    for (const key in o) {
      i[key] = traverse(o[key]);
    }
  } else {
    try {
      return JSON.parse(i);
    } catch (error) {
      return i;
    }
  }
  return i;
}
