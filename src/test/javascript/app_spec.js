describe('Testing and Mock with Jasmine', function ()
{
  beforeEach(function ()
  {
    module('app');
    module('jasmine.mvn.sample.main');
  });

  var scope,
      controller;

  var mockedModalInstance = {
    close  : function ()
    {
    },
    dismiss: function ()
    {
    }
  };

  describe('test using the controller', function ()
  {
    beforeEach(inject(function ($rootScope, $controller)
    {
      scope = $rootScope.$new();
      spyOn(mockedModalInstance, 'close');
      spyOn(mockedModalInstance, 'dismiss');
      controller = $controller('MainModalController', {
        '$scope'         : scope,
        $uibModalInstance: mockedModalInstance
      });
    }));

    it('read properties', function ()
    {
      console.log(scope);
    });
  });
});
