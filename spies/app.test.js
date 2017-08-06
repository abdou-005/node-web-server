const expect = require('expect');
const rewire = require('rewire');


var app = rewire('./app');

describe('App', ()=>{
    var db = {
      saveUser: expect.createSpy()
    };
    app.__set__('db', db);

   it('should call the spy correctly', ()=>{
       var spy = expect.createSpy();
       spy('And',25);
        expect(spy).toHaveBeenCalledWith('And',25);
   });
    it('should call save user wth user object', ()=>{
        var email = 'and@eample.com';
        var password = '123abc';
        app.handelSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});