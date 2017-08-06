const expect = require('expect');
const utils = require('./utils');
describe('Utils',()=>{
    describe('#add', ()=>{
        it('should add two numbers', () => {
            var res = utils.add(33,11);
            expect(res).toBe(44, 'Expected').toBeA('number', 'not a number');
            // if(res !== 44)
            //     throw new Error(`Expected 44, but got ${res}.`);
        });
    });


    it('should async add two numbers', (done) =>{
        utils.asyncAdd(4,3,(sum)=>{
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });

    it('should square a number', () =>{
        var res = utils.square(3);
        expect(res).toBe(9).toBeA('number');
        // if(res !== 9)
        //     throw  new Error(`Expected 9, but got ${res}`);
    });
    it('chould async square a number', (done)=>{
        utils.asyncSquare(5,(res)=>{
            expect(res).toBe(25).toBeA('number');
            done();
        });

    });
});
// should verify first and last names are set
// assert it includes firstName and lastName with proper values
it('should set firstName and lastName ', () =>{
    var  user = {location: 'Tunisia', age: 28};
    var res = utils.setName(user, 'ABD BOU');
    expect(res).toInclude({
        firstName : 'ABD',
        lastName : 'BOU'
    });
});
// it('should expect som values', () =>{
//    // expect(12).toNotBe(11);
//    // expect ({name: 'ABD'}).toEqual({name: 'ABD'}); // toNotEqual
//    // expect([2,3,4]).toInclude(5); /// toExclude
//    //  expect({
//    //      name: 'ABD',
//    //      age: 28,
//    //      location: 'Tunisia'
//    //  }).toInclude({
//    //      age: 28
//    //  });
// });