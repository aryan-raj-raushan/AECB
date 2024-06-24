export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'Ddb6F8a6sHmn18rp1ZXybw=='), // Use ADMIN_JWT_SECRET from .env or the provided default value
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'VhcWHtUUOqIlHxZR+iB8lg=='), // Use API_TOKEN_SALT from .env or the provided default value
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', '+ys03xQnj5SLNMFF88s1aQ=='), // Use TRANSFER_TOKEN_SALT from .env or the provided default value
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
