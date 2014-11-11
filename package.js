Package.describe({
  name: 'vim55k:errors',
  summary: 'A pattern to display application errors to the user',
  version: '1.0.0',
  git: 'https://github.com/vim55k/meteor-errors-try-package.git'
});

Package.onUse(function (api, where) {
  api.versionsFrom('1.0');
  api.use(['mongo', 'templating'], 'client');
  api.addFiles(['errors.js','errors_list.html','errors_list.js'], 'client');
  api.export('Errors');
});

Package.onTest(function(api) {
  api.use('tmeasday:errors', 'client');
  api.use(['tinytest', 'test-helpers'], 'client');
  api.addFiles('errors_tests.js', 'client');
});