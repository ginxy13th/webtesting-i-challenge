const enhancer = require('./enhancer.js');
// test away!
describe("repair", () => {
    it("should restore durability to 100", () => {
      expect(
        enhancer.repair({
          name: "name",
          durability: 75,
          enhancement: 5
        })
      ).toEqual({
        name: "name",
        durability: 100,
        enhancement: 5
      });
    });

    it("SUCCESS, should increment enhancement by 1 if less than 20", () => {
        expect(
            enhancer.success({
            name: "name2",
            durability: 100,
            enhancement: 19
          })
        ).toEqual({
          name: "name2",
          durability: 100,
          enhancement: 20
        });
      });
  });

  describe("fail", () => {
    it("will decrease by 5 if enhancement is less than 15", () => {
      const item = {
        name: "Item 1",
        enhancement: 10,
        durability: 35,
      };
      const expected = 30;
      const actual = enhancer.fail(item);
      expect(actual.durability).toBe(expected);
    });

    it("will decrease by 1 if enhancement is greater than 16", () => {
      const item = {
        name: "Item 1",
        enhancement: 18,
        durability: 35,
      };
      const expected = 17;
      const expectedd = 25
      const actual = enhancer.fail(item);
      expect(actual.enhancement).toEqual(expected);
      expect(actual.durability).toEqual(expectedd)
    });

    it("will decrease by 10 if enhancement is greater than 15", () => {
      const item = {
        name: "Item 1",
        enhancement: 16,
        durability: 35,
      };
      const expected = 25;
      const actual = enhancer.fail(item);
      expect(actual.durability).toEqual(expected);
    });

it("gets() items" , ()=>{
    expect(enhancer.get({
        name: "name3",
        durability: 10,
        enhancement:5 
    })).toEqual({
        name: "name3",
        durability: 10,
        enhancement:5
    })


})

}); 