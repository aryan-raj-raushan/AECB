module.exports = {
    lifecycles: {
      async beforeCreate(data) {
        if (!data.nav_items || data.nav_items.length === 0) {
          throw new Error('nav_items is required');
        }
      },
      async beforeUpdate(params, data) {
        if (!data.nav_items || data.nav_items.length === 0) {
          throw new Error('nav_items is required');
        }
      },
    },
  };
  