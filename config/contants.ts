// system unexpected failue catcher
const SYSTEM_FAILURE = {
  SERVER_ERROR: 'Internal server error!!!'
};

// middleware auth
const MIDDLEWARE_AUTH_CONSTANTS = {
  ACCESS_DENIED: 'Access denied. No authorization token provided',
  RESOURCE_FORBIDDEN: "You don't have access to the request resource.",
  INVALID_AUTH_TOKEN: 'Invalid token'
};

// authentication constants
const AUTH_CONSTANTS = {
  INVALID_CREDENTIALS: 'Invalid email or password',
  INVALID_PASSWORD:
    'You have entered incorrect old password. Please try again with valid password.'
};

// version constants
const VERSION_CONSTANT: object = {
  SUBMIT_SUCCESS: 'Version details added successfully',
  NO_UPDATE: 'You are on latest version',
  VERSION_MANDATORY: 'Query parameter v is mandatory',
  APPTYPE_MANDATORY: 'Query parameter appType is mandatory'
};

// admin constants
const ADMIN_CONSTANTS = {
  INVALID_EMAIL: 'Invalid username/password.',
  BLOCKED_ACCOUNT: 'Your account is blocked. Please contact admin.',
  NOTIFICATION_SUCCESS: 'Notificaiton submitted successfully',
  DUPLICATE_MANAGER: 'Manager with given email already exists.',
  MANAGER_SUBMIT_SUCCESS: 'Manager added successfully',
  MANAGER_DELETE_SUCCESS: 'Manager updated successfully',
  MANAGER_UPDATE_SUCCESS: 'Manager deleted successfully',
  INVALID_MANAGER: 'No manager with given Id found.'
};

// role constants
const ROLE_CONSTANTS = {
  SUBMIT_SUCCESS: 'Role added successfully',
  UPDATE_SUCCESS: 'Role updated successfully',
  DELETE_SUCCESS: 'Role deleted successfully'
};

// user model constants
const USER_CONSTANTS = {
  INVALID_USER: 'User with given Id not found',
  UPDATE_SUCCESS: 'Update successfull!',
  SUBMIT_SUCCESS: 'User added successfully',
  EMAIL_ALREADY_EXISTS: 'Email already registered',
  PHONE_ALREADY_EXISTS: 'Phone number already registered',
  MOBILE_EMAIL_ALREADY_EXISTS: 'Mobile and Email both already registered',
  ALL_CHECKS_VALID: 'All check are valid',
  VERIFICATION_SUCCESS: 'Verification success. Please log in.',
  VERIFICATION_FAILURE:
    'We were unable to find a valid token. Your token may have expired.',
  USER_ALREADY_VERIFIED: 'This user has already been verified.',
  VERIFICATION_EMAIL_SENT:
    'Please confirm yourself by clicking on verify user button sent to your email',
  RESET_PASSWORD_EMAIL_SENT: 'A reset email has been sent to your email',
  PASSWORD_MISMATCH: 'Passwords do not match',
  NOT_YET_VERIFIED: 'Your account has not been verified.',
  PASSWORD_CHANGE_SUCCESS: 'Password reset successfully!'
};

export default {
  SYSTEM_FAILURE,
  MIDDLEWARE_AUTH_CONSTANTS,
  AUTH_CONSTANTS,
  VERSION_CONSTANT,
  ADMIN_CONSTANTS,
  ROLE_CONSTANTS,
  USER_CONSTANTS
};
