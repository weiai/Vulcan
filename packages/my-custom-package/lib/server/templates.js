/* 
Register email templates.
*/

import NovaEmail from 'nova-email';

NovaEmail.addTemplates({
  newPost: Assets.getText("lib/server/emails/customNewPost.handlebars"),
  customEmail: Assets.getText("lib/server/emails/customEmail.handlebars")
});