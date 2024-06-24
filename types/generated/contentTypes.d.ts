import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    name: Attribute.String;
    phone_number: Attribute.BigInteger;
    is_number_verified: Attribute.Boolean & Attribute.DefaultTo<false>;
    stream: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'api::stream.stream'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAffinityMediaAffinityMedia extends Schema.CollectionType {
  collectionName: 'affinity_medias';
  info: {
    singularName: 'affinity-media';
    pluralName: 'affinity-medias';
    displayName: 'Affinity Media';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    seo: Attribute.Component<'common.seo'>;
    is_featured: Attribute.Boolean & Attribute.DefaultTo<false>;
    is_top: Attribute.Boolean & Attribute.DefaultTo<false>;
    newspaper: Attribute.Component<'common.newpaper', true>;
    awards: Attribute.Component<'common.awards', true>;
    articles: Attribute.Component<'common.artical', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::affinity-media.affinity-media',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::affinity-media.affinity-media',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiApplicationStepApplicationStep
  extends Schema.CollectionType {
  collectionName: 'application_steps';
  info: {
    singularName: 'application-step';
    pluralName: 'application-steps';
    displayName: 'application_step';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    step_name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::application-step.application-step',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::application-step.application-step',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAwardAward extends Schema.CollectionType {
  collectionName: 'awards';
  info: {
    singularName: 'award';
    pluralName: 'awards';
    displayName: 'Award';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::award.award',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::award.award',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogBlog extends Schema.CollectionType {
  collectionName: 'blogs';
  info: {
    singularName: 'blog';
    pluralName: 'blogs';
    displayName: 'blog';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blog_content: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    blog_title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    blog_url: Attribute.String & Attribute.Required;
    featured_image: Attribute.Media & Attribute.Required;
    excerpt: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 180;
      }>;
    seo: Attribute.Component<'common.seo'>;
    is_featured: Attribute.Boolean & Attribute.DefaultTo<false>;
    is_top: Attribute.Boolean & Attribute.DefaultTo<false>;
    colleges: Attribute.Relation<
      'api::blog.blog',
      'manyToMany',
      'api::college.college'
    >;
    careers: Attribute.Relation<
      'api::blog.blog',
      'manyToMany',
      'api::career.career'
    >;
    courses: Attribute.Relation<
      'api::blog.blog',
      'manyToMany',
      'api::course.course'
    >;
    exams: Attribute.Relation<'api::blog.blog', 'manyToMany', 'api::exam.exam'>;
    landing_pages: Attribute.Relation<
      'api::blog.blog',
      'manyToMany',
      'api::landing-page.landing-page'
    >;
    scholarships: Attribute.Relation<
      'api::blog.blog',
      'manyToMany',
      'api::scholarship.scholarship'
    >;
    countries: Attribute.Relation<
      'api::blog.blog',
      'manyToMany',
      'api::country.country'
    >;
    tags: Attribute.Relation<'api::blog.blog', 'manyToMany', 'api::tag.tag'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiBoardBoard extends Schema.CollectionType {
  collectionName: 'boards';
  info: {
    singularName: 'board';
    pluralName: 'boards';
    displayName: 'board';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    board_name: Attribute.String & Attribute.Required & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::board.board',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::board.board',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCareerCareer extends Schema.CollectionType {
  collectionName: 'careers';
  info: {
    singularName: 'career';
    pluralName: 'careers';
    displayName: 'career';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    career_title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    page_data: Attribute.DynamicZone<
      [
        'common.gallery',
        'common.faq',
        'common.new-overview',
        'common.recommended-colleges',
        'common.recommended-courses',
        'common.recommended-exams',
        'common.recommended-careers',
        'common.recommended-scholarships',
        'common.recommended-countries',
        'common.banner-component',
        'common.rating-and-review',
        'common.news-and-update',
        'common.discussion-forum'
      ]
    > &
      Attribute.Required;
    streams: Attribute.Relation<
      'api::career.career',
      'oneToMany',
      'api::stream.stream'
    >;
    banner: Attribute.Media & Attribute.Required;
    average_startin_salary: Attribute.Decimal & Attribute.Required;
    popular_companies: Attribute.Relation<
      'api::career.career',
      'oneToMany',
      'api::popular-companie.popular-companie'
    >;
    career_levels: Attribute.Relation<
      'api::career.career',
      'oneToMany',
      'api::career-level.career-level'
    >;
    job_types: Attribute.Relation<
      'api::career.career',
      'oneToMany',
      'api::job-type.job-type'
    >;
    gender_ratio: Attribute.BigInteger;
    discussion_forums: Attribute.Relation<
      'api::career.career',
      'manyToMany',
      'api::discussion-forum.discussion-forum'
    >;
    career_url: Attribute.String & Attribute.Required;
    seo: Attribute.Component<'common.seo'>;
    user_forms: Attribute.Relation<
      'api::career.career',
      'oneToMany',
      'api::user-form.user-form'
    >;
    country: Attribute.Relation<
      'api::career.career',
      'manyToOne',
      'api::country.country'
    >;
    is_featured: Attribute.Boolean & Attribute.DefaultTo<false>;
    is_top: Attribute.Boolean & Attribute.DefaultTo<false>;
    gallery: Attribute.Media & Attribute.Required;
    blogs: Attribute.Relation<
      'api::career.career',
      'manyToMany',
      'api::blog.blog'
    >;
    news: Attribute.Relation<
      'api::career.career',
      'manyToMany',
      'api::news-and-blog.news-and-blog'
    >;
    review_component: Attribute.Component<'common.review-component', true> &
      Attribute.Required;
    nav_items: Attribute.Relation<
      'api::career.career',
      'manyToMany',
      'api::navbar.navbar'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::career.career',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::career.career',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCareerLevelCareerLevel extends Schema.CollectionType {
  collectionName: 'career_levels';
  info: {
    singularName: 'career-level';
    pluralName: 'career-levels';
    displayName: 'career_level';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    career_level_title: Attribute.String & Attribute.Required;
    career: Attribute.Relation<
      'api::career-level.career-level',
      'manyToOne',
      'api::career.career'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::career-level.career-level',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::career-level.career-level',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCategoryCategory extends Schema.CollectionType {
  collectionName: 'categories';
  info: {
    singularName: 'category';
    pluralName: 'categories';
    displayName: 'category';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category_name: Attribute.String & Attribute.Required;
    news: Attribute.Relation<
      'api::category.category',
      'manyToMany',
      'api::news-and-blog.news-and-blog'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCityCity extends Schema.CollectionType {
  collectionName: 'cities';
  info: {
    singularName: 'city';
    pluralName: 'cities';
    displayName: 'city';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    city_name: Attribute.UID & Attribute.Required;
    colleges: Attribute.Relation<
      'api::city.city',
      'oneToMany',
      'api::college.college'
    >;
    state: Attribute.Relation<
      'api::city.city',
      'manyToOne',
      'api::state.state'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::city.city', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::city.city', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiCollegeCollege extends Schema.CollectionType {
  collectionName: 'colleges';
  info: {
    singularName: 'college';
    pluralName: 'colleges';
    displayName: 'college';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    college_url: Attribute.UID & Attribute.Required;
    page_data: Attribute.DynamicZone<
      [
        'common.gallery',
        'common.new-overview',
        'common.faq',
        'common.recommended-colleges',
        'common.recommended-courses',
        'common.recommended-exams',
        'common.recommended-careers',
        'common.recommended-scholarships',
        'common.recommended-countries',
        'common.banner-component',
        'common.department-component',
        'common.rating-and-review',
        'common.news-and-update',
        'common.discussion-forum',
        'common.course-component',
        'common.compare-component'
      ]
    > &
      Attribute.Required;
    banner: Attribute.Media & Attribute.Required;
    logo: Attribute.Media & Attribute.Required;
    is_top: Attribute.Boolean & Attribute.DefaultTo<false>;
    college_type: Attribute.Relation<
      'api::college.college',
      'manyToOne',
      'api::colleges-type.colleges-type'
    >;
    approved_by: Attribute.Relation<
      'api::college.college',
      'manyToMany',
      'api::organisation.organisation'
    >;
    streams: Attribute.Relation<
      'api::college.college',
      'manyToMany',
      'api::stream.stream'
    >;
    city: Attribute.Relation<
      'api::college.college',
      'manyToOne',
      'api::city.city'
    >;
    state: Attribute.Relation<
      'api::college.college',
      'manyToOne',
      'api::state.state'
    >;
    country: Attribute.Relation<
      'api::college.college',
      'manyToOne',
      'api::country.country'
    >;
    ranked_by: Attribute.Relation<
      'api::college.college',
      'manyToMany',
      'api::ranking-bodie.ranking-bodie'
    >;
    Courses: Attribute.Component<'course.college-course', true> &
      Attribute.Required;
    courses: Attribute.Relation<
      'api::college.college',
      'manyToMany',
      'api::course.course'
    >;
    seo: Attribute.Component<'common.seo'>;
    college_name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    news: Attribute.Relation<
      'api::college.college',
      'manyToMany',
      'api::news-and-blog.news-and-blog'
    >;
    dawonload_brochure: Attribute.Media & Attribute.Required;
    college_title: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    review_component: Attribute.Component<'common.review-component'> &
      Attribute.Required;
    popular_companies: Attribute.Relation<
      'api::college.college',
      'manyToMany',
      'api::popular-companie.popular-companie'
    >;
    discussion_forums: Attribute.Relation<
      'api::college.college',
      'manyToMany',
      'api::discussion-forum.discussion-forum'
    >;
    scholarships: Attribute.Relation<
      'api::college.college',
      'manyToMany',
      'api::scholarship.scholarship'
    >;
    user_forms: Attribute.Relation<
      'api::college.college',
      'oneToMany',
      'api::user-form.user-form'
    >;
    is_featured: Attribute.Boolean & Attribute.DefaultTo<false>;
    gallery: Attribute.Media & Attribute.Required;
    blogs: Attribute.Relation<
      'api::college.college',
      'manyToMany',
      'api::blog.blog'
    >;
    review: Attribute.Component<'common.review', true>;
    nav_items: Attribute.Relation<
      'api::college.college',
      'manyToMany',
      'api::navbar.navbar'
    >;
    pin_code: Attribute.String;
    display_sequence: Attribute.BigInteger &
      Attribute.Required &
      Attribute.Unique;
    top_college_sequence: Attribute.BigInteger & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::college.college',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::college.college',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCollegesTypeCollegesType extends Schema.CollectionType {
  collectionName: 'colleges_types';
  info: {
    singularName: 'colleges-type';
    pluralName: 'colleges-types';
    displayName: 'colleges_type';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    college_type: Attribute.String & Attribute.Required;
    colleges: Attribute.Relation<
      'api::colleges-type.colleges-type',
      'oneToMany',
      'api::college.college'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::colleges-type.colleges-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::colleges-type.colleges-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCountryCountry extends Schema.CollectionType {
  collectionName: 'countries';
  info: {
    singularName: 'country';
    pluralName: 'countries';
    displayName: 'country';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    country_name: Attribute.UID & Attribute.Required;
    states: Attribute.Relation<
      'api::country.country',
      'oneToMany',
      'api::state.state'
    >;
    colleges: Attribute.Relation<
      'api::country.country',
      'oneToMany',
      'api::college.college'
    >;
    region: Attribute.Relation<
      'api::country.country',
      'manyToOne',
      'api::region.region'
    >;
    flags: Attribute.Media & Attribute.Required;
    banner: Attribute.Media & Attribute.Required;
    country_url: Attribute.String & Attribute.Required;
    display_name: Attribute.String & Attribute.Required;
    display_sequence: Attribute.BigInteger &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: '1';
      }>;
    nav_items: Attribute.Relation<
      'api::country.country',
      'manyToMany',
      'api::navbar.navbar'
    >;
    page_data: Attribute.DynamicZone<
      [
        'common.gallery',
        'common.faq',
        'common.new-overview',
        'common.recommended-colleges',
        'common.recommended-courses',
        'common.recommended-exams',
        'common.recommended-careers',
        'common.recommended-scholarships',
        'common.recommended-countries',
        'common.banner-component',
        'common.rating-and-review',
        'common.news-and-update',
        'common.discussion-forum',
        'common.colleges-component',
        'common.exams-component',
        'common.careers-component',
        'common.scholarship-component',
        'common.courses-component'
      ]
    > &
      Attribute.Required;
    discussion_forums: Attribute.Relation<
      'api::country.country',
      'manyToMany',
      'api::discussion-forum.discussion-forum'
    >;
    is_top: Attribute.Boolean & Attribute.DefaultTo<false>;
    seo: Attribute.Component<'common.seo'>;
    user_forms: Attribute.Relation<
      'api::country.country',
      'oneToMany',
      'api::user-form.user-form'
    >;
    exams: Attribute.Relation<
      'api::country.country',
      'oneToMany',
      'api::exam.exam'
    >;
    careers: Attribute.Relation<
      'api::country.country',
      'oneToMany',
      'api::career.career'
    >;
    courses: Attribute.Relation<
      'api::country.country',
      'oneToMany',
      'api::course.course'
    >;
    scholarships: Attribute.Relation<
      'api::country.country',
      'oneToMany',
      'api::scholarship.scholarship'
    >;
    is_featured: Attribute.Boolean & Attribute.DefaultTo<false>;
    short_description: Attribute.Text & Attribute.Required;
    global_rank: Attribute.BigInteger &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'1'>;
    listing_banner: Attribute.Media & Attribute.Required;
    color: Attribute.String & Attribute.Required;
    mascot_image: Attribute.Media & Attribute.Required;
    average_cost_living: Attribute.Decimal & Attribute.Required;
    gallery: Attribute.Media & Attribute.Required;
    blogs: Attribute.Relation<
      'api::country.country',
      'manyToMany',
      'api::blog.blog'
    >;
    news: Attribute.Relation<
      'api::country.country',
      'manyToMany',
      'api::news-and-blog.news-and-blog'
    >;
    review_component: Attribute.Component<'common.review-component', true> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::country.country',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::country.country',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCourseCourse extends Schema.CollectionType {
  collectionName: 'courses';
  info: {
    singularName: 'course';
    pluralName: 'courses';
    displayName: 'course';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    course_url: Attribute.UID & Attribute.Required;
    course_name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    page_data: Attribute.DynamicZone<
      [
        'common.gallery',
        'common.new-overview',
        'common.faq',
        'common.recommended-colleges',
        'common.banner-component',
        'common.recommended-courses',
        'common.recommended-exams',
        'common.recommended-careers',
        'common.recommended-scholarships',
        'common.recommended-countries',
        'common.jee-rank-predictor',
        'common.neet-rank-predictor',
        'common.rating-and-review',
        'common.news-and-update',
        'common.discussion-forum'
      ]
    > &
      Attribute.Required;
    is_top: Attribute.Boolean & Attribute.DefaultTo<false>;
    logo: Attribute.Media & Attribute.Required;
    banner: Attribute.Media & Attribute.Required;
    type: Attribute.Relation<
      'api::course.course',
      'oneToOne',
      'api::courses-type.courses-type'
    >;
    specializations: Attribute.Relation<
      'api::course.course',
      'manyToMany',
      'api::specialization.specialization'
    >;
    streams: Attribute.Relation<
      'api::course.course',
      'manyToMany',
      'api::stream.stream'
    >;
    colleges: Attribute.Relation<
      'api::course.course',
      'manyToMany',
      'api::college.college'
    >;
    nav_items: Attribute.Relation<
      'api::course.course',
      'manyToMany',
      'api::navbar.navbar'
    >;
    seo: Attribute.Component<'common.seo'>;
    approved_by: Attribute.Relation<
      'api::course.course',
      'manyToMany',
      'api::organisation.organisation'
    >;
    average_fee: Attribute.BigInteger & Attribute.Required;
    rating: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
        max: 10;
      }>;
    news: Attribute.Relation<
      'api::course.course',
      'manyToMany',
      'api::news-and-blog.news-and-blog'
    >;
    dawonload_brochure: Attribute.Media & Attribute.Required;
    course_title: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    course_level: Attribute.Relation<
      'api::course.course',
      'manyToOne',
      'api::course-level.course-level'
    >;
    review_component: Attribute.Component<'common.review-component'> &
      Attribute.Required;
    discussion_forums: Attribute.Relation<
      'api::course.course',
      'manyToMany',
      'api::discussion-forum.discussion-forum'
    >;
    user_forms: Attribute.Relation<
      'api::course.course',
      'oneToMany',
      'api::user-form.user-form'
    >;
    country: Attribute.Relation<
      'api::course.course',
      'manyToOne',
      'api::country.country'
    >;
    is_featured: Attribute.Boolean & Attribute.DefaultTo<false>;
    gallery: Attribute.Media & Attribute.Required;
    blogs: Attribute.Relation<
      'api::course.course',
      'manyToMany',
      'api::blog.blog'
    >;
    filter_sequence: Attribute.BigInteger &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMax<{
        min: '1';
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::course.course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::course.course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCourseLevelCourseLevel extends Schema.CollectionType {
  collectionName: 'course_levels';
  info: {
    singularName: 'course-level';
    pluralName: 'course-levels';
    displayName: 'course_level';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    course_level_name: Attribute.String & Attribute.Required;
    courses: Attribute.Relation<
      'api::course-level.course-level',
      'oneToMany',
      'api::course.course'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::course-level.course-level',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::course-level.course-level',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCoursesTypeCoursesType extends Schema.CollectionType {
  collectionName: 'courses_types';
  info: {
    singularName: 'courses-type';
    pluralName: 'courses-types';
    displayName: 'courses_type';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    course_type: Attribute.String & Attribute.Required;
    course: Attribute.Relation<
      'api::courses-type.courses-type',
      'oneToOne',
      'api::course.course'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::courses-type.courses-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::courses-type.courses-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDiscussionForumDiscussionForum
  extends Schema.CollectionType {
  collectionName: 'discussion_forums';
  info: {
    singularName: 'discussion-forum';
    pluralName: 'discussion-forums';
    displayName: 'discussion_forum';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    discussion_forum_title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    dIscussion_forum_main_question: Attribute.String & Attribute.Required;
    seo: Attribute.Component<'common.seo'>;
    discussion_forum_reply: Attribute.Component<'common.discussion-forum-reply'> &
      Attribute.Required;
    colleges: Attribute.Relation<
      'api::discussion-forum.discussion-forum',
      'manyToMany',
      'api::college.college'
    >;
    exams: Attribute.Relation<
      'api::discussion-forum.discussion-forum',
      'manyToMany',
      'api::exam.exam'
    >;
    courses: Attribute.Relation<
      'api::discussion-forum.discussion-forum',
      'manyToMany',
      'api::course.course'
    >;
    careers: Attribute.Relation<
      'api::discussion-forum.discussion-forum',
      'manyToMany',
      'api::career.career'
    >;
    countries: Attribute.Relation<
      'api::discussion-forum.discussion-forum',
      'manyToMany',
      'api::country.country'
    >;
    scholarships: Attribute.Relation<
      'api::discussion-forum.discussion-forum',
      'manyToMany',
      'api::scholarship.scholarship'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::discussion-forum.discussion-forum',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::discussion-forum.discussion-forum',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEventBannerEventBanner extends Schema.CollectionType {
  collectionName: 'event_banners';
  info: {
    singularName: 'event-banner';
    pluralName: 'event-banners';
    displayName: 'Event_banner';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    event_banner: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::event-banner.event-banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::event-banner.event-banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExamExam extends Schema.CollectionType {
  collectionName: 'exams';
  info: {
    singularName: 'exam';
    pluralName: 'exams';
    displayName: 'exam';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    exam_url: Attribute.UID & Attribute.Required;
    page_data: Attribute.DynamicZone<
      [
        'common.gallery',
        'common.new-overview',
        'common.faq',
        'common.banner-component',
        'common.recommended-colleges',
        'common.recommended-courses',
        'common.recommended-exams',
        'common.recommended-careers',
        'common.recommended-scholarships',
        'common.recommended-countries',
        'common.jee-rank-predictor',
        'common.neet-rank-predictor',
        'common.rating-and-review',
        'common.discussion-forum',
        'common.news-and-update'
      ]
    > &
      Attribute.Required;
    logo: Attribute.Media & Attribute.Required;
    banner: Attribute.Media & Attribute.Required;
    exam_mode: Attribute.Relation<
      'api::exam.exam',
      'manyToOne',
      'api::exam-mode.exam-mode'
    >;
    streams: Attribute.Relation<
      'api::exam.exam',
      'manyToMany',
      'api::stream.stream'
    >;
    exam_level: Attribute.Relation<
      'api::exam.exam',
      'manyToOne',
      'api::exam-level.exam-level'
    >;
    application_date: Attribute.Component<'common.application-date'> &
      Attribute.Required;
    exam_date: Attribute.Component<'common.exm-date'> & Attribute.Required;
    result_date: Attribute.Component<'common.result-date'> & Attribute.Required;
    nav_items: Attribute.Relation<
      'api::exam.exam',
      'manyToMany',
      'api::navbar.navbar'
    >;
    exam_name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    seo: Attribute.Component<'common.seo'>;
    news: Attribute.Relation<
      'api::exam.exam',
      'manyToMany',
      'api::news-and-blog.news-and-blog'
    >;
    dawonload_brochure: Attribute.Media & Attribute.Required;
    exam_title: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    review_component: Attribute.Component<'common.review-component'> &
      Attribute.Required;
    is_featured: Attribute.Boolean & Attribute.DefaultTo<false>;
    discussion_forums: Attribute.Relation<
      'api::exam.exam',
      'manyToMany',
      'api::discussion-forum.discussion-forum'
    >;
    user_forms: Attribute.Relation<
      'api::exam.exam',
      'oneToMany',
      'api::user-form.user-form'
    >;
    country: Attribute.Relation<
      'api::exam.exam',
      'manyToOne',
      'api::country.country'
    >;
    is_top: Attribute.Boolean & Attribute.DefaultTo<false>;
    gallery: Attribute.Media & Attribute.Required;
    blogs: Attribute.Relation<'api::exam.exam', 'manyToMany', 'api::blog.blog'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::exam.exam', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::exam.exam', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiExamLevelExamLevel extends Schema.CollectionType {
  collectionName: 'exam_levels';
  info: {
    singularName: 'exam-level';
    pluralName: 'exam-levels';
    displayName: 'exam_level';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    exam_level_name: Attribute.String & Attribute.Required;
    exams: Attribute.Relation<
      'api::exam-level.exam-level',
      'oneToMany',
      'api::exam.exam'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::exam-level.exam-level',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::exam-level.exam-level',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExamModeExamMode extends Schema.CollectionType {
  collectionName: 'exam_modes';
  info: {
    singularName: 'exam-mode';
    pluralName: 'exam-modes';
    displayName: 'exam_mode';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    exam_mode: Attribute.String & Attribute.Required;
    exam_names: Attribute.Relation<
      'api::exam-mode.exam-mode',
      'oneToMany',
      'api::exam.exam'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::exam-mode.exam-mode',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::exam-mode.exam-mode',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFeaturedSectionFeaturedSection
  extends Schema.CollectionType {
  collectionName: 'featured_sections';
  info: {
    singularName: 'featured-section';
    pluralName: 'featured-sections';
    displayName: 'featured_section';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    images: Attribute.Media & Attribute.Required;
    text_section: Attribute.Component<'common.text-section', true> &
      Attribute.Required;
    heading: Attribute.String & Attribute.Required;
    pointers: Attribute.Component<'common.pointers', true> & Attribute.Required;
    button: Attribute.Component<'common.button-type', true> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::featured-section.featured-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::featured-section.featured-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGetInTouchGetInTouch extends Schema.CollectionType {
  collectionName: 'get_in_touches';
  info: {
    singularName: 'get-in-touch';
    pluralName: 'get-in-touches';
    displayName: 'Get in Touch';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    email: Attribute.String;
    phone: Attribute.String;
    streams: Attribute.Relation<
      'api::get-in-touch.get-in-touch',
      'manyToMany',
      'api::stream.stream'
    >;
    userPhone: Attribute.String;
    source: Attribute.String;
    select_test: Attribute.Relation<
      'api::get-in-touch.get-in-touch',
      'oneToOne',
      'api::select-test.select-test'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::get-in-touch.get-in-touch',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::get-in-touch.get-in-touch',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHeroSectionHeroSection extends Schema.CollectionType {
  collectionName: 'hero_sections';
  info: {
    singularName: 'hero-section';
    pluralName: 'hero-sections';
    displayName: 'hero_section';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    header_text: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 150;
      }>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 250;
      }>;
    button_type: Attribute.Component<'common.button-type', true> &
      Attribute.Required;
    trusted_by: Attribute.Media & Attribute.Required;
    hero_image: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hero-section.hero-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::hero-section.hero-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiJobTypeJobType extends Schema.CollectionType {
  collectionName: 'job_types';
  info: {
    singularName: 'job-type';
    pluralName: 'job-types';
    displayName: 'job_type';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    job_type_title: Attribute.String & Attribute.Required;
    career: Attribute.Relation<
      'api::job-type.job-type',
      'manyToOne',
      'api::career.career'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::job-type.job-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::job-type.job-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLandingPageLandingPage extends Schema.CollectionType {
  collectionName: 'landing_pages';
  info: {
    singularName: 'landing-page';
    pluralName: 'landing-pages';
    displayName: 'landing_page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    landing_page_title: Attribute.String & Attribute.Required;
    landing_page_url: Attribute.String & Attribute.Required;
    landing_page: Attribute.String & Attribute.Required;
    page_data: Attribute.DynamicZone<
      [
        'common.gallery',
        'common.faq',
        'common.new-overview',
        'common.recommended-colleges',
        'common.recommended-courses',
        'common.recommended-exams',
        'common.recommended-careers',
        'common.recommended-scholarships',
        'common.recommended-countries',
        'common.banner-component',
        'common.rating-and-review',
        'common.news-and-update',
        'common.discussion-forum'
      ]
    > &
      Attribute.Required;
    banner: Attribute.Media & Attribute.Required;
    seo: Attribute.Component<'common.seo'>;
    news: Attribute.Relation<
      'api::landing-page.landing-page',
      'manyToMany',
      'api::news-and-blog.news-and-blog'
    >;
    user_forms: Attribute.Relation<
      'api::landing-page.landing-page',
      'oneToMany',
      'api::user-form.user-form'
    >;
    gallery: Attribute.Media & Attribute.Required;
    blogs: Attribute.Relation<
      'api::landing-page.landing-page',
      'manyToMany',
      'api::blog.blog'
    >;
    review_component: Attribute.Component<'common.review-component', true> &
      Attribute.Required;
    nav_items: Attribute.Relation<
      'api::landing-page.landing-page',
      'manyToMany',
      'api::navbar.navbar'
    >;
    logo: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::landing-page.landing-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::landing-page.landing-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLetUsHelpFindLetUsHelpFind extends Schema.CollectionType {
  collectionName: 'let_us_help_finds';
  info: {
    singularName: 'let-us-help-find';
    pluralName: 'let-us-help-finds';
    displayName: 'Let Us Help Find';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    streams: Attribute.Relation<
      'api::let-us-help-find.let-us-help-find',
      'manyToMany',
      'api::stream.stream'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::let-us-help-find.let-us-help-find',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::let-us-help-find.let-us-help-find',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNavbarNavbar extends Schema.CollectionType {
  collectionName: 'navbars';
  info: {
    singularName: 'navbar';
    pluralName: 'navbars';
    displayName: 'navbar';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required & Attribute.Unique;
    exams: Attribute.Relation<
      'api::navbar.navbar',
      'manyToMany',
      'api::exam.exam'
    >;
    courses: Attribute.Relation<
      'api::navbar.navbar',
      'manyToMany',
      'api::course.course'
    >;
    countrie: Attribute.Relation<
      'api::navbar.navbar',
      'manyToMany',
      'api::country.country'
    >;
    scholarship: Attribute.Relation<
      'api::navbar.navbar',
      'manyToMany',
      'api::scholarship.scholarship'
    >;
    landing_pages: Attribute.Relation<
      'api::navbar.navbar',
      'manyToMany',
      'api::landing-page.landing-page'
    >;
    careers: Attribute.Relation<
      'api::navbar.navbar',
      'manyToMany',
      'api::career.career'
    >;
    colleges: Attribute.Relation<
      'api::navbar.navbar',
      'manyToMany',
      'api::college.college'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::navbar.navbar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::navbar.navbar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNewsAndBlogNewsAndBlog extends Schema.CollectionType {
  collectionName: 'news_and_blogs';
  info: {
    singularName: 'news-and-blog';
    pluralName: 'news-and-blogs';
    displayName: 'news';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    url: Attribute.String & Attribute.Required;
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    featured_image: Attribute.Media & Attribute.Required;
    type: Attribute.Enumeration<['blog', 'news']> & Attribute.Required;
    excerpt: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 180;
      }>;
    seo: Attribute.Component<'common.seo'>;
    courses: Attribute.Relation<
      'api::news-and-blog.news-and-blog',
      'manyToMany',
      'api::course.course'
    >;
    exams: Attribute.Relation<
      'api::news-and-blog.news-and-blog',
      'manyToMany',
      'api::exam.exam'
    >;
    categories: Attribute.Relation<
      'api::news-and-blog.news-and-blog',
      'manyToMany',
      'api::category.category'
    > &
      Attribute.Required;
    is_featured: Attribute.Boolean & Attribute.DefaultTo<false>;
    is_recommended: Attribute.Boolean & Attribute.DefaultTo<false>;
    is_top: Attribute.Boolean & Attribute.DefaultTo<false>;
    countries: Attribute.Relation<
      'api::news-and-blog.news-and-blog',
      'manyToMany',
      'api::country.country'
    >;
    specializations: Attribute.Relation<
      'api::news-and-blog.news-and-blog',
      'manyToMany',
      'api::specialization.specialization'
    >;
    careers: Attribute.Relation<
      'api::news-and-blog.news-and-blog',
      'manyToMany',
      'api::career.career'
    >;
    colleges: Attribute.Relation<
      'api::news-and-blog.news-and-blog',
      'manyToMany',
      'api::college.college'
    >;
    landing_pages: Attribute.Relation<
      'api::news-and-blog.news-and-blog',
      'manyToMany',
      'api::landing-page.landing-page'
    >;
    scholarships: Attribute.Relation<
      'api::news-and-blog.news-and-blog',
      'manyToMany',
      'api::scholarship.scholarship'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::news-and-blog.news-and-blog',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::news-and-blog.news-and-blog',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNewsPaperNewsPaper extends Schema.CollectionType {
  collectionName: 'news_papers';
  info: {
    singularName: 'news-paper';
    pluralName: 'news-papers';
    displayName: 'News Paper';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    images: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::news-paper.news-paper',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::news-paper.news-paper',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrganisationOrganisation extends Schema.CollectionType {
  collectionName: 'organisations';
  info: {
    singularName: 'organisation';
    pluralName: 'organisations';
    displayName: 'organisation';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    organisation_name: Attribute.String & Attribute.Required;
    organisation_logo: Attribute.Media & Attribute.Required;
    content_writer: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
    colleges: Attribute.Relation<
      'api::organisation.organisation',
      'manyToMany',
      'api::college.college'
    >;
    organisation_full_form: Attribute.String;
    courses: Attribute.Relation<
      'api::organisation.organisation',
      'manyToMany',
      'api::course.course'
    >;
    scholarships: Attribute.Relation<
      'api::organisation.organisation',
      'oneToMany',
      'api::scholarship.scholarship'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::organisation.organisation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::organisation.organisation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPopularCompaniePopularCompanie
  extends Schema.CollectionType {
  collectionName: 'popular_companies';
  info: {
    singularName: 'popular-companie';
    pluralName: 'popular-companies';
    displayName: 'popular_companie';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    company_name: Attribute.String & Attribute.Required;
    logo: Attribute.Media & Attribute.Required;
    company_description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    colleges: Attribute.Relation<
      'api::popular-companie.popular-companie',
      'manyToMany',
      'api::college.college'
    >;
    career: Attribute.Relation<
      'api::popular-companie.popular-companie',
      'manyToOne',
      'api::career.career'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::popular-companie.popular-companie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::popular-companie.popular-companie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRankingBodieRankingBodie extends Schema.CollectionType {
  collectionName: 'ranking_bodies';
  info: {
    singularName: 'ranking-bodie';
    pluralName: 'ranking-bodies';
    displayName: 'ranking_body';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ranking_body_name: Attribute.String & Attribute.Required;
    ranking_body_logo: Attribute.Media & Attribute.Required;
    content_writer: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    colleges: Attribute.Relation<
      'api::ranking-bodie.ranking-bodie',
      'manyToMany',
      'api::college.college'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ranking-bodie.ranking-bodie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ranking-bodie.ranking-bodie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRegionRegion extends Schema.CollectionType {
  collectionName: 'regions';
  info: {
    singularName: 'region';
    pluralName: 'regions';
    displayName: 'region';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    region_name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    countries: Attribute.Relation<
      'api::region.region',
      'oneToMany',
      'api::country.country'
    >;
    logo: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::region.region',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::region.region',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiScholarshipScholarship extends Schema.CollectionType {
  collectionName: 'scholarships';
  info: {
    singularName: 'scholarship';
    pluralName: 'scholarships';
    displayName: 'scholarship';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    logo: Attribute.Media & Attribute.Required;
    nav_items: Attribute.Relation<
      'api::scholarship.scholarship',
      'manyToMany',
      'api::navbar.navbar'
    >;
    page_data: Attribute.DynamicZone<
      [
        'common.gallery',
        'common.faq',
        'common.new-overview',
        'common.recommended-colleges',
        'common.recommended-courses',
        'common.recommended-exams',
        'common.recommended-careers',
        'common.recommended-scholarships',
        'common.recommended-countries',
        'common.banner-component',
        'common.discussion-forum',
        'common.rating-and-review',
        'common.news-and-update'
      ]
    > &
      Attribute.Required;
    banner: Attribute.Media & Attribute.Required;
    conducted_by: Attribute.Relation<
      'api::scholarship.scholarship',
      'manyToOne',
      'api::organisation.organisation'
    >;
    scholarship_title: Attribute.String & Attribute.Required;
    eligibility: Attribute.String & Attribute.Required;
    type: Attribute.Relation<
      'api::scholarship.scholarship',
      'manyToOne',
      'api::scholarship-type.scholarship-type'
    >;
    number_of_scholarship: Attribute.BigInteger & Attribute.Required;
    amount: Attribute.Decimal;
    is_featured: Attribute.Boolean & Attribute.DefaultTo<false>;
    scholarship_url: Attribute.String & Attribute.Required;
    discussion_forums: Attribute.Relation<
      'api::scholarship.scholarship',
      'manyToMany',
      'api::discussion-forum.discussion-forum'
    >;
    seo: Attribute.Component<'common.seo'>;
    colleges: Attribute.Relation<
      'api::scholarship.scholarship',
      'manyToMany',
      'api::college.college'
    >;
    user_forms: Attribute.Relation<
      'api::scholarship.scholarship',
      'oneToMany',
      'api::user-form.user-form'
    >;
    country: Attribute.Relation<
      'api::scholarship.scholarship',
      'manyToOne',
      'api::country.country'
    >;
    is_top: Attribute.Boolean & Attribute.DefaultTo<false>;
    gallery: Attribute.Media & Attribute.Required;
    blogs: Attribute.Relation<
      'api::scholarship.scholarship',
      'manyToMany',
      'api::blog.blog'
    >;
    review_component: Attribute.Component<'common.review-component', true> &
      Attribute.Required;
    news: Attribute.Relation<
      'api::scholarship.scholarship',
      'manyToMany',
      'api::news-and-blog.news-and-blog'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::scholarship.scholarship',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::scholarship.scholarship',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiScholarshipTypeScholarshipType
  extends Schema.CollectionType {
  collectionName: 'scholarship_types';
  info: {
    singularName: 'scholarship-type';
    pluralName: 'scholarship-types';
    displayName: 'scholarship_type';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    scholarships: Attribute.Relation<
      'api::scholarship-type.scholarship-type',
      'oneToMany',
      'api::scholarship.scholarship'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::scholarship-type.scholarship-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::scholarship-type.scholarship-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSelectTestSelectTest extends Schema.CollectionType {
  collectionName: 'select_tests';
  info: {
    singularName: 'select-test';
    pluralName: 'select-tests';
    displayName: 'SelectTest';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::select-test.select-test',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::select-test.select-test',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSpecializationSpecialization extends Schema.CollectionType {
  collectionName: 'specializations';
  info: {
    singularName: 'specialization';
    pluralName: 'specializations';
    displayName: 'specialization';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    specialization_name: Attribute.UID & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    courses: Attribute.Relation<
      'api::specialization.specialization',
      'manyToMany',
      'api::course.course'
    >;
    news: Attribute.Relation<
      'api::specialization.specialization',
      'manyToMany',
      'api::news-and-blog.news-and-blog'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::specialization.specialization',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::specialization.specialization',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStateState extends Schema.CollectionType {
  collectionName: 'states';
  info: {
    singularName: 'state';
    pluralName: 'states';
    displayName: 'state';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    state_name: Attribute.String & Attribute.Required;
    country: Attribute.Relation<
      'api::state.state',
      'manyToOne',
      'api::country.country'
    >;
    colleges: Attribute.Relation<
      'api::state.state',
      'oneToMany',
      'api::college.college'
    >;
    cities: Attribute.Relation<
      'api::state.state',
      'oneToMany',
      'api::city.city'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::state.state',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::state.state',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStreamStream extends Schema.CollectionType {
  collectionName: 'streams';
  info: {
    singularName: 'stream';
    pluralName: 'streams';
    displayName: 'stream';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    stream_name: Attribute.String & Attribute.Required;
    content_for_colleges: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    content_for_exams: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    content_for_courses: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    icon: Attribute.Media & Attribute.Required;
    exams: Attribute.Relation<
      'api::stream.stream',
      'manyToMany',
      'api::exam.exam'
    >;
    courses: Attribute.Relation<
      'api::stream.stream',
      'manyToMany',
      'api::course.course'
    >;
    college_names: Attribute.Relation<
      'api::stream.stream',
      'manyToMany',
      'api::college.college'
    >;
    career: Attribute.Relation<
      'api::stream.stream',
      'manyToOne',
      'api::career.career'
    >;
    content_for_careers: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    content_for_scholarships: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    content_for_countries: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    get_in_touches: Attribute.Relation<
      'api::stream.stream',
      'manyToMany',
      'api::get-in-touch.get-in-touch'
    >;
    let_us_help_finds: Attribute.Relation<
      'api::stream.stream',
      'manyToMany',
      'api::let-us-help-find.let-us-help-find'
    >;
    filter_sequence: Attribute.BigInteger &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMax<{
        min: '1';
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::stream.stream',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::stream.stream',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTagTag extends Schema.CollectionType {
  collectionName: 'tags';
  info: {
    singularName: 'tag';
    pluralName: 'tags';
    displayName: 'tag';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    tags_name: Attribute.String & Attribute.Required;
    blogs: Attribute.Relation<'api::tag.tag', 'manyToMany', 'api::blog.blog'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiTestimonialTestimonial extends Schema.CollectionType {
  collectionName: 'testimonials';
  info: {
    singularName: 'testimonial';
    pluralName: 'testimonials';
    displayName: 'testimonial';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Attribute.Media & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    college: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'api::college.college'
    >;
    year: Attribute.Date & Attribute.Required;
    testimonial: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiUserDataUserData extends Schema.CollectionType {
  collectionName: 'user_datas';
  info: {
    singularName: 'user-data';
    pluralName: 'users-data';
    displayName: 'user_data';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    email: Attribute.Email;
    number: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 10;
        maxLength: 10;
      }>;
    stream: Attribute.Relation<
      'api::user-data.user-data',
      'oneToOne',
      'api::stream.stream'
    >;
    courseLevel: Attribute.Relation<
      'api::user-data.user-data',
      'oneToOne',
      'api::course-level.course-level'
    >;
    password: Attribute.Password;
    name: Attribute.String;
    otp: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 6;
        maxLength: 6;
      }>;
    gender: Attribute.String;
    city: Attribute.String;
    courseInterested: Attribute.Relation<
      'api::user-data.user-data',
      'oneToOne',
      'api::course.course'
    >;
    educationDetails_10: Attribute.Component<'common.10th-class-info-component'>;
    educationDetails_12: Attribute.Component<'common.12th-class-info-component'>;
    graduationDetails: Attribute.Component<'common.graduation-info-component'>;
    users_meta_data: Attribute.Relation<
      'api::user-data.user-data',
      'oneToOne',
      'api::users-meta-data.users-meta-data'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::user-data.user-data',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::user-data.user-data',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiUserFormUserForm extends Schema.CollectionType {
  collectionName: 'user_forms';
  info: {
    singularName: 'user-form';
    pluralName: 'user-forms';
    displayName: 'user_form';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    form_title: Attribute.String;
    form_description: Attribute.Text;
    form_url: Attribute.String;
    college: Attribute.Relation<
      'api::user-form.user-form',
      'manyToOne',
      'api::college.college'
    >;
    course: Attribute.Relation<
      'api::user-form.user-form',
      'manyToOne',
      'api::course.course'
    >;
    exam: Attribute.Relation<
      'api::user-form.user-form',
      'manyToOne',
      'api::exam.exam'
    >;
    career: Attribute.Relation<
      'api::user-form.user-form',
      'manyToOne',
      'api::career.career'
    >;
    scholarship: Attribute.Relation<
      'api::user-form.user-form',
      'manyToOne',
      'api::scholarship.scholarship'
    >;
    country: Attribute.Relation<
      'api::user-form.user-form',
      'manyToOne',
      'api::country.country'
    >;
    landing_page: Attribute.Relation<
      'api::user-form.user-form',
      'manyToOne',
      'api::landing-page.landing-page'
    >;
    form_stape: Attribute.Component<'common.form-stape', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::user-form.user-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::user-form.user-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiUsersMetaDataUsersMetaData extends Schema.CollectionType {
  collectionName: 'users_meta_dataes';
  info: {
    singularName: 'users-meta-data';
    pluralName: 'users-meta-dataes';
    displayName: 'users_meta_data';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    applied_colleges: Attribute.Component<
      'usermeta.applied-colleges-component',
      true
    >;
    applied_courses: Attribute.Component<
      'usermeta.applied-courses-component',
      true
    >;
    applied_exams: Attribute.Component<
      'usermeta.applied-exams-component',
      true
    >;
    applied_scholarships: Attribute.Component<
      'usermeta.applied-scholarships',
      true
    >;
    careers_interested: Attribute.Component<
      'usermeta.careers-interested',
      true
    >;
    countries_interested: Attribute.Component<'usermeta.countries-interested'>;
    other_service_interest: Attribute.Component<
      'usermeta.other-service-interest',
      true
    >;
    user_data: Attribute.Relation<
      'api::users-meta-data.users-meta-data',
      'oneToOne',
      'api::user-data.user-data'
    >;
    email: Attribute.Email;
    gender: Attribute.String;
    city: Attribute.String;
    courseInterested: Attribute.Relation<
      'api::users-meta-data.users-meta-data',
      'oneToOne',
      'api::course.course'
    >;
    number: Attribute.String;
    graduationDetails: Attribute.Component<'common.graduation-info-component'>;
    educationDetailsSecondary: Attribute.Component<'common.12th-class-info-component'>;
    educationDetailsPrimary: Attribute.Component<'common.10th-class-info-component'>;
    professionalExperience: Attribute.Component<
      'usermeta.professional-experience-component',
      true
    >;
    doctorateDetails: Attribute.Component<'common.graduation-info-component'>;
    filled_exams: Attribute.Component<'common.filled-exams', true>;
    preferred_institutions: Attribute.Component<
      'usermeta.preferred-institutions',
      true
    >;
    entrance_exam: Attribute.Component<'usermeta.entrance-exam', true>;
    save_college: Attribute.Component<'common.save-college', true>;
    save_exam: Attribute.Component<'common.save-exam', true>;
    save_course: Attribute.Component<'common.save-course', true>;
    save_careers: Attribute.Component<'common.save-careers', true>;
    save_scholarships: Attribute.Component<'common.save-scholarships', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::users-meta-data.users-meta-data',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::users-meta-data.users-meta-data',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVirtualTourVirtualTour extends Schema.CollectionType {
  collectionName: 'virtual_tours';
  info: {
    singularName: 'virtual-tour';
    pluralName: 'virtual-tours';
    displayName: 'virtual_tour';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    images: Attribute.Media;
    video: Attribute.Media;
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::virtual-tour.virtual-tour',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::virtual-tour.virtual-tour',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::affinity-media.affinity-media': ApiAffinityMediaAffinityMedia;
      'api::application-step.application-step': ApiApplicationStepApplicationStep;
      'api::award.award': ApiAwardAward;
      'api::blog.blog': ApiBlogBlog;
      'api::board.board': ApiBoardBoard;
      'api::career.career': ApiCareerCareer;
      'api::career-level.career-level': ApiCareerLevelCareerLevel;
      'api::category.category': ApiCategoryCategory;
      'api::city.city': ApiCityCity;
      'api::college.college': ApiCollegeCollege;
      'api::colleges-type.colleges-type': ApiCollegesTypeCollegesType;
      'api::country.country': ApiCountryCountry;
      'api::course.course': ApiCourseCourse;
      'api::course-level.course-level': ApiCourseLevelCourseLevel;
      'api::courses-type.courses-type': ApiCoursesTypeCoursesType;
      'api::discussion-forum.discussion-forum': ApiDiscussionForumDiscussionForum;
      'api::event-banner.event-banner': ApiEventBannerEventBanner;
      'api::exam.exam': ApiExamExam;
      'api::exam-level.exam-level': ApiExamLevelExamLevel;
      'api::exam-mode.exam-mode': ApiExamModeExamMode;
      'api::featured-section.featured-section': ApiFeaturedSectionFeaturedSection;
      'api::get-in-touch.get-in-touch': ApiGetInTouchGetInTouch;
      'api::hero-section.hero-section': ApiHeroSectionHeroSection;
      'api::job-type.job-type': ApiJobTypeJobType;
      'api::landing-page.landing-page': ApiLandingPageLandingPage;
      'api::let-us-help-find.let-us-help-find': ApiLetUsHelpFindLetUsHelpFind;
      'api::navbar.navbar': ApiNavbarNavbar;
      'api::news-and-blog.news-and-blog': ApiNewsAndBlogNewsAndBlog;
      'api::news-paper.news-paper': ApiNewsPaperNewsPaper;
      'api::organisation.organisation': ApiOrganisationOrganisation;
      'api::popular-companie.popular-companie': ApiPopularCompaniePopularCompanie;
      'api::ranking-bodie.ranking-bodie': ApiRankingBodieRankingBodie;
      'api::region.region': ApiRegionRegion;
      'api::scholarship.scholarship': ApiScholarshipScholarship;
      'api::scholarship-type.scholarship-type': ApiScholarshipTypeScholarshipType;
      'api::select-test.select-test': ApiSelectTestSelectTest;
      'api::specialization.specialization': ApiSpecializationSpecialization;
      'api::state.state': ApiStateState;
      'api::stream.stream': ApiStreamStream;
      'api::tag.tag': ApiTagTag;
      'api::testimonial.testimonial': ApiTestimonialTestimonial;
      'api::user-data.user-data': ApiUserDataUserData;
      'api::user-form.user-form': ApiUserFormUserForm;
      'api::users-meta-data.users-meta-data': ApiUsersMetaDataUsersMetaData;
      'api::virtual-tour.virtual-tour': ApiVirtualTourVirtualTour;
    }
  }
}
