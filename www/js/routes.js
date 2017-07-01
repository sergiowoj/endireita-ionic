angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('tabsController.issueOptions', {
    url: '/issue-options',
    views: {
      'tab1': {
        templateUrl: 'templates/issueOptions.html',
        controller: 'issueOptionsController'
      }
    }
  })

  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabs.html',
    abstract:true
  })

  .state('createIssue', {
    url: '/create-issue',
    templateUrl: 'templates/createIssue.html',
    controller: 'createIssueController'
  })

  .state('locationSelection', {
    url: '/location',
    templateUrl: 'templates/locationSelection.html',
    controller: 'locationSelectionController'
  })

  .state('tabsController.issueCreated', {
    url: '/issue-created',
    views: {
      'tab1': {
        templateUrl: 'templates/issueCreated.html',
        controller: 'issueCreatedController'
      }
    }
  })

$urlRouterProvider.otherwise('/tabs/issue-options')

});