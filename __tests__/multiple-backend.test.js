import { multipleCheck } from './../src/multiple-backend.js';

describe('multipleCheck', () => {
  test('should determine whether value is a number', () => {
    let multipleCheckTest = multipleCheck('apple');
    expect(multipleCheckTest).toEqual(false);
  });
  // test('should loop up to number', () => {
  //   let multipleCheckTest = multipleCheck(3);
  //   expect(multipleCheckTest).toEqual([0,1,2,3]);
  // });
  // test('should loop up to number, if divisible by 3 push to array', () => {
  //   let multipleCheckTest = multipleCheck(8);
  //   expect(multipleCheckTest).toEqual([0, 3, 6]);
  // });
  // test('should loop up to number, if divisible by 5 push to array', () => {
  //   let multipleCheckTest = multipleCheck(8);
  //   expect(multipleCheckTest).toEqual([0, 3, 5, 6]);
  // });
  // test('should loop up to number, if divisible by 3 or 5 push to array', () => {
  //   let multipleCheckTest = multipleCheck(8);
  //   expect(multipleCheckTest).toEqual([0, 3, 5, 6]);
  // });
  test('should reduce array of multiples of 3 or 5 to single number', () => {
    let multipleCheckTest = multipleCheck(8);
    expect(multipleCheckTest).toEqual(14);
  });
});
