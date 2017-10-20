import VulcanEmail from 'meteor/vulcan:email';

VulcanEmail.addTemplates({
  test:                     Assets.getText("lib/server/email/templates/common/test.handlebars"),
  wrapper:                  Assets.getText("lib/server/email/templates/common/wrapper.handlebars"),
  newsletter:               Assets.getText("lib/server/email/templates/newsletter/newsletter.handlebars"),
  newsletterConfirmation:   Assets.getText("lib/server/email/templates/newsletter/newsletterConfirmation.handlebars"),
});