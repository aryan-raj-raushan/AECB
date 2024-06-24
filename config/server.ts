module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', [
      '9/L+JPjSEJqGmQRoBfgdgw==',
      'SR0X6AEy7QOpy1oOuupazg==',
      '0HRFvAhJCpzspEjdRNHXLw==',
      'cu4S+zp7ilRlcSs2FxYazQ=='
    ]), // Use APP_KEYS from .env or the provided default values
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

