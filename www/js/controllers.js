angular.module('app.controllers', [])
  
.controller('issueOptionsController', ['$scope', '$stateParams', 
function ($scope, $stateParams) {
	$scope.issueOptionList = [
		{ icon: 'ion-android-add-circle', title: 'Limpeza' },
		{ icon: 'ion-android-add-circle', title: 'Conservação' },
		{ icon: 'ion-android-add-circle', title: 'Vazamento de água/esgoto' },
		{ icon: 'ion-android-add-circle', title: 'Estacionamento irregular' },
		{ icon: 'ion-android-add-circle', title: 'Consertos gerais' },
		{ icon: 'ion-android-add-circle', title: 'Incêndio' },
		{ icon: 'ion-android-add-circle', title: 'Outro tipo de chamado' }
	];
}])
      
.controller('createIssueController', ['$scope', '$stateParams', 
function ($scope, $stateParams) {


}])
   
.controller('locationSelectionController', ['$scope', '$stateParams', 
function ($scope, $stateParams) {


}])
   
.controller('issueCreatedController', ['$scope', '$stateParams', 
function ($scope, $stateParams) {


}])
 