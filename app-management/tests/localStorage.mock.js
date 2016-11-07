/*
 * Note that this localStorage mock only handles strings
 */

const LocalStorage = () => {
  const storage = {};

  return {
    getItem: (key) => storage[key] || null,
    setItem: (key, item) => storage[key] = item,
    removeItem: (key) => delete storage[key],
  };
};

export default LocalStorage;
