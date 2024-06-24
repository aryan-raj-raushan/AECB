import { factories } from "@strapi/strapi";
export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {

    strapi.log.info("++++++++++++++++++ register()++++++++++++++++++")

   },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {

    strapi.log.info("++++++++++++++++++ bootstrap() started ++++++++++++++++++")
/*
  // create user admin if it doesn't exist
  await strapi.admin.services.role.createRolesIfNoneExist();
  const superAdminRole = await strapi.db.query('admin::role').findOne({where: {code: 'strapi-super-admin'}});
  const superAdmin = await strapi.db.query('admin::user').findOne({where: {username: 'shashank.tripathi'}});
  
  if (!superAdmin) {
    const params = { 
      username: 'shashank.tripathi',
      email: 'shashank.tripathi@affinityeducation.in',
      blocked: false,
      isActive: true,
      confirmed: true,
      password: null,
      roles: null
    }   
    params.password = await strapi.admin.services.auth.hashPassword("Shashank@123");
    params.roles = [superAdminRole.id]
    await strapi.db.query("admin::user").create({
      data: {...params},
      populate: ['roles']
    }); 
    strapi.log.info(`user ${} was there!`);
  }

  */
 
  strapi.log.info("++++++++++++++++++ bootstrap() done ++++++++++++++++++")
  
  },
};

