var modules = [
  'ui.bootstrap',
  'jasmine.mvn.sample.main'
];

angular.module('app', modules)
    .controller('AppController',
        function ($uibModal)
        {
          var appCtrl = this;
          appCtrl.lastAction = "Welcome !";

          appCtrl.updateModel = function (newestLastAction)
          {
            if (newestLastAction && newestLastAction.length > 0)
            {
              appCtrl.lastAction = newestLastAction;
            }
          }
          appCtrl.callCtrlFunction = function ()
          {
            var modalInstance = $uibModal.open({
              templateUrl: 'main/main.modal.html',
              controller : 'MainModalController as mainModalCtrl',
              size       : 'sm'
            });

            modalInstance.result.then(
            function (retour)
            {
              appCtrl.updateModel(retour);
            },
            function onDismissed(retour)
            {
              appCtrl.updateModel(retour);
            });
          };
        }
    );
