var util = require('util');
/**
 * Module dependencies.
 */
var OAuth2Error = require('./oauth2error');

/**
 * `AuthorizationError` error.
 *
 * @api public
 */
function AuthorizationError(message, code, uri, status) {
  if (!status) {
    switch (code) {
      case 'invalid_request': status = 400; break;
      case 'invalid_client': status = 401; break;
      case 'unauthorized_client': status = 403; break;
      case 'access_denied': status = 403; break;
      case 'unsupported_response_type': status = 400; break;
      case 'invalid_scope': status = 400; break;
      case 'temporarily_unavailable': status = 503; break;
    }
  }
  
  OAuth2Error.call(this, message, code, uri, status);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'AuthorizationError';
}

/**
 * Inherit from `OAuth2Error`.
 */
util.inherits(AuthorizationError, OAuth2Error);

/**
 * Expose `AuthorizationError`.
 */
module.exports = AuthorizationError;
