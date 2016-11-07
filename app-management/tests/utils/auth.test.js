import auth, { TOKEN_KEY } from '../../utils/auth';
import LocalStorage from '../localStorage.mock';

describe('auth utility', () => {
  beforeEach(() => {
    window.localStorage = LocalStorage();
  });

  it('should set a token to localStorage', () => {
    const token = 'a-sample-token';
    auth.setToken(token);
    const result = window.localStorage.getItem(TOKEN_KEY);

    expect(result).toBeDefined();
    expect(result).toBe(token);
  });

  it('should get a token from localStorage', () => {
    const token = 'a-sample-token';
    auth.setToken(token);
    const result = auth.getToken();

    expect(result).toBe(token);
  });

  it('should remove a token from localStorage', () => {
    const token = 'a-sample-token';
    auth.setToken(token);
    auth.removeToken();

    const result = window.localStorage.getItem(TOKEN_KEY);

    expect(result).toBeNull();
  });
});
