Package.describe({
  name: 'bestofjs',
});

Package.onUse(function (api) {

  api.use([

    'http',

    // vulcan core
    'vulcan:core',

    // vulcan packages
    'vulcan:forms',
    'vulcan:accounts',

    'vulcan:newsletter',
    
  ]);

  api.addFiles('lib/stylesheets/style.css');
  
  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');

  api.addAssets([

    'lib/server/email/templates/common/test.handlebars',
    'lib/server/email/templates/common/wrapper.handlebars',

    'lib/server/email/templates/newsletter/newsletter.handlebars',
    'lib/server/email/templates/newsletter/newsletterConfirmation.handlebars',
    
  ], ['server']);
  
});
