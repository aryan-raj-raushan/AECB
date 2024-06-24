module.exports = {
    lifecycles: {
      async beforeCreate(data) {
        if (!data?.categories || data?.categories?.length === 0) {
          throw new Error('categories is required');
        }
      },
      async beforeUpdate(params, data) {
        if (!data?.categories || data?.categories?.length === 0) {
          throw new Error('categories is required');
        }
      },
    },
  };
  