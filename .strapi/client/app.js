/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import ckeditor5 from "@_sh/strapi-plugin-ckeditor/strapi-admin";
import strapiCloud from "@strapi/plugin-cloud/strapi-admin";
import documentation from "@strapi/plugin-documentation/strapi-admin";
import graphql from "@strapi/plugin-graphql/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import importExportEntries from "strapi-plugin-import-export-entries/strapi-admin";
import requestId from "strapi-plugin-request-id/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    ckeditor5: ckeditor5,
    "strapi-cloud": strapiCloud,
    documentation: documentation,
    graphql: graphql,
    i18n: i18N,
    "users-permissions": usersPermissions,
    "import-export-entries": importExportEntries,
    "request-id": requestId,
  },
});
