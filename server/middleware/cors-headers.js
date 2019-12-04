/**
 * Adds CORS headers to the response
 *
 * {@link https://en.wikipedia.org/wiki/Cross-origin_resource_sharing}
 * {@link http://expressjs.com/en/4x/api.html#res.set}
 * @param {object} request the Request object
 * @param {object} response the Response object
 * @param {function} next function to continue execution
 * @returns {void}
 * @example
 * <code>
 * const express = require('express');
 * const corsHeaders = require('./middleware/cors-headers');
 *
 * const app = express();
 * app.use(corsHeaders);
 * </code>
 */
module.exports = (request, response, next) => {
  response.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'DELETE,GET,PATCH,POST,PUT',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  });
  // intercept OPTIONS method
  if (request.method === 'OPTIONS') {
    response.sendStatus(200);
  } else {
    next();
  }
};
