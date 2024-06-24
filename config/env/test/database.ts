

export default ({ env }) => {
    const client = env("DB_CLIENT", "postgres");
  
    const connections = {
      postgres: {
        connection: {
          host: env("DB_HOST", "localhost"),
          port: env.int("DB_PORT", 5432), 
          database: env("DB_NAME", "portal_db"),
          user: env("DB_USERNAME", "postgres"),
          password: env("DB_PASSWORD", "1234"),
          ssl: env.bool("DB_SSL", false) && {
            key: env("DB_SSL_KEY", undefined),
            cert: env("DB_SSL_CERT", undefined),
            ca: env("DB_SSL_CA", undefined),
            capath: env("DB_SSL_CAPATH", undefined),
            cipher: env("DB_SSL_CIPHER", undefined),
            rejectUnauthorized: env.bool("DB_SSL_REJECT_UNAUTHORIZED", true),
          },
          schema: env("DATABASE_SCHEMA", "public"),
        },
        pool: {
          min: env.int("DATABASE_POOL_MIN", 2),
          max: env.int("DATABASE_POOL_MAX", 10),
        },
      },
    };
  
    return {
      connection: {
        client,
        ...connections[client],
        acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
      },
    };
  };
  