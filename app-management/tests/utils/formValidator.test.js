import formValidator from '../../utils/formValidator';

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
