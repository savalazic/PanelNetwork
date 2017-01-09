import Raven from 'raven-js';

const sentry_key = '1e2fc2c04c5b493d906d561d80a13018';
const sentry_app = '127375';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
