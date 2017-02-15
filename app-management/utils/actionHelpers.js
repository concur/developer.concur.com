// Helper functions for signup actions
const SIGNUP_SERVER_ERROR = 'A server error occurred when creating your account. Please try again later.';

export const signupHelpers = {
  isSuccessful(responseText) {
    try {
      const { userid, password } = JSON.parse(responseText);
      if (userid && password) return Promise.resolve(responseText);
      throw new Error(SIGNUP_SERVER_ERROR);
    } catch (e) {
      throw new Error(SIGNUP_SERVER_ERROR);
    }
  },
  isDuplicateLogin(responseText) {
    if (responseText.includes('Error (IsDuplicateLoginID)')) {
      throw new Error('That email already exists. Please choose another.');
    }
    return Promise.resolve(responseText);
  },
  isCriticalError(responseText) {
    if (responseText.includes('Error (Critical)')) {
      throw new Error(SIGNUP_SERVER_ERROR);
    }
    return Promise.resolve(responseText);
  },
};

// Helper functions for auth actions
export const authHelpers = {
  isAuthorized(response) {
    if (response.status === 403) {
      throw new Error('Invalid username and/or password');
    }
    return Promise.resolve(response);
  },
  isSuccessful(response) {
    if (response.status !== 200) {
      throw new Error('A server error occurred when logging in. Please try again later.');
    }
    return Promise.resolve(response);
  },
  hasValidToken(data) {
    if (!data || !data.access_token) {
      throw new Error('Invalid username and/or password');
    }
    return Promise.resolve(data);
  },
};
