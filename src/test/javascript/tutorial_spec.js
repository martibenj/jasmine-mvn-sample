// Rappel des méthodes de test classique. D'autres exemples sur : https://jasmine.github.io/2.0/introduction.html
describe('Tutorial for Jasmine', function ()
{
  it('Assertions Simples', function ()
  {
    expect(true).toBe(true);
    expect(false).not.toBe(true);
  });

  it('Tests avec Matcher', function ()
  {
    var message = "foo bar baz";

    expect(message).toMatch(/bar/);
    expect(message).toMatch("bar");
    expect(message).not.toMatch(/quux/);
  });

  it('Tests sur Objects', function ()
  {
    var a = {
      foo: "foo"
    };
    expect(a.foo).toBeDefined();

    expect(a.bar).not.toBeDefined();
    expect(a.bar).toBeUndefined();
  });

  it('Tests sur null', function ()
  {
    expect(null).toBeNull();
  });

  it('Tests sur Array', function ()
  {
    var arr = ["foo", "bar", "baz"];
    expect(arr).toContain("bar");
  });

  it('Tests sur numeriques', function ()
  {
    var pi = 3.141592;
    expect(2.5).toBeLessThan(pi);
    expect(pi).toBeGreaterThan(1);
  });

  it('Tests sur throwable', function ()
  {
    var baz = function ()
    {
      throw 'fail';
    };
    expect(baz).toThrow('fail');
  });

  var foo;
  beforeEach(function ()
  {
    foo = 0;
    foo += 1;
  });

  afterEach(function ()
  {
    foo = 0;
  });

  it("Test utilisant before/afterEach", function ()
  {
    expect(foo).toEqual(1);
  });

  // Nested describe
  describe("A spy", function ()
  {
    var foo, bar = null;

    beforeEach(function ()
    {
      foo = {
        setBar: function (value)
        {
          bar = value;
        }
      };

      // Track l'appel de la function
      spyOn(foo, 'setBar');

      foo.setBar(123);
      foo.setBar(456, 'another param');
    });

    it("tracks that the spy was called", function ()
    {
      expect(foo.setBar).toHaveBeenCalled();
    });

    it("tracks all the arguments of its calls", function ()
    {
      expect(foo.setBar).toHaveBeenCalledWith(123);
      expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
    });

    // Empeche la fonction d'être exécutée
    it("stops all execution on a function", function ()
    {
      expect(bar).toBeNull();
    });
  });
});