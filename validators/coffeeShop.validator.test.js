const coffeeShopSchema = require('../validators/coffeeShopValidators');

describe("Coffee shop validator", () => {
  test("should pass all the validation test", () => {
    const validData = {
      name: 'Starbucks - Oasis',
      address: 'R11, Jln PJU 1A/7, Oasis Ara Damansara',
      city: 'Petaling Jaya',
      state: 'Selangor',
      postal_code: '47301',
      longitude: 3.113334,
      latitude: 101.574682,
      phone_number: '0377343151',
      email: 'customer@starbucks.com.my'
    };
    const { error } = coffeeShopSchema.validate(validData);
    expect(error).toBeUndefined();
  });

  test("should fail the test as longitude less than -200", () => {
    const validData = {
      name: 'Starbucks - Oasis',
      address: 'R11, Jln PJU 1A/7, Oasis Ara Damansara',
      city: 'Petaling Jaya',
      state: 'Selangor',
      postal_code: '47301',
      longitude: -200,
      latitude: 101.574682,
      phone_number: '0377343151',
      email: 'customer@starbucks.com.my'
    };
    const { error } = coffeeShopSchema.validate(validData);
    expect(error).toBeDefined();
    expect(error.details[0].message).toMatch(/"longitude" must be greater than or equal to -180/)
  });

  test("should fail the test as name too short", () => {
    const validData = {
      name: 'ss',
      address: 'R11, Jln PJU 1A/7, Oasis Ara Damansara',
      city: 'Petaling Jaya',
      state: 'Selangor',
      postal_code: '47301',
      longitude: 3.113334,
      latitude: 101.574682,
      phone_number: '0377343151',
      email: 'customer@starbucks.com.my'
    };
    const { error } = coffeeShopSchema.validate(validData);
    expect(error).toBeDefined();
    expect(error.details[0].message).toMatch(/"name" length must be at least 10 characters long/)
  });
});