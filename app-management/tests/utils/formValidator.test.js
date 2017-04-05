import { firstElementRequired, validateUrlArray, formValidator } from '../../utils/formValidator';

describe('firstElementRequired validation', () => {
  it('should return undefined when there is a first element of an array/string', () => {
    const items = ['Seattle', 'Portland', 'Vancouver'];
    const city = 'Seattle';

    expect(firstElementRequired(items)).toBeUndefined();
    expect(firstElementRequired(city)).toBeUndefined();
  });

  it('should return a message when there is not a first element of an array/string', () => {
    const items = [];
    const city = '';

    expect(firstElementRequired(items)).toBe('are required');
    expect(firstElementRequired(city)).toBe('are required');
  });
});

describe('validateUrlArray validation', () => {
  it('should return an array of no errors for valid arrays', () => {
    const validUrls = ['http://www.google.com', 'http://www.google.com'];

    expect(validateUrlArray(validUrls)).toEqual([undefined, undefined]);
  });

  it('should return an array of errors for invalid arrays', () => {
    const invalidUrls = ['http://wwwgoogle', 'www.google.com'];
    const msg = 'is not a valid url';

    expect(validateUrlArray(invalidUrls)).toEqual([msg, msg]);
  });

  it('should return undefined for empty arrays and objects other than arrays', () => {
    expect(validateUrlArray([])).toBeUndefined();
    expect(validateUrlArray('test')).toBeUndefined();
  });
});

describe('formValidator utility', () => {
  it('should return a function', () => {
    expect(formValidator()).toBeInstanceOf(Function);
  });

  it('should validate an object when provided constraints', () => {
    const user = {
      firstName: 'Tom',
    };

    const constraints = {
      firstName: { presence: true },
    };

    const result = formValidator(constraints)(user);

    expect(result).toEqual({});
  });

  it('should invalidate an object when provided constraints', () => {
    const user = {};

    const constraints = {
      firstName: { presence: true },
    };

    const result = formValidator(constraints)(user);

    expect(result.firstName).toBeDefined();
    expect(result.firstName).toBeInstanceOf(Array);
    expect(result.firstName).toContain("First name can\'t be blank");
  });
});
