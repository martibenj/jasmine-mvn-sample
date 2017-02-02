angular.module('jasmine.mvn.sample.main', [])
    .controller('MainModalController', function MainModalController($uibModalInstance)
    {
      var mainModalCtrl = this;
      mainModalCtrl.aProperty = 'value';

      mainModalCtrl.save = function ()
      {
        $uibModalInstance.close('Save!');
      };

      mainModalCtrl.cancel = function ()
      {
        $uibModalInstance.dismiss('Cancel!');
      };
    });

