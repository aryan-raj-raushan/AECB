// import collegeController from '../../src/api/college/controllers/college';

// // Mock the factories.createCoreController function
// jest.mock('@strapi/strapi', () => ({
//     factories: {
//       createCoreController: jest.fn(() => 'mockedController'), // Mock the createCoreController function to return a mocked value
//     },
//   }));
  
//   describe('College Controller', () => {
//     it('calls factories.createCoreController', () => {
//       // Call the collegeController function
//       expect(collegeController).toEqual('mockedController');
//     });
  
//     // You can write more test cases to verify the functionality of the returned controller
//   });


import collegeController from '../../src/api/college/controllers/college';

// Mock the factories.createCoreController function
jest.mock('@strapi/strapi', () => ({
  factories: {
    createCoreController: jest.fn(() => 'mockedController'), // Mock the createCoreController function to return a mocked value
  },
}));

describe('College Controller', () => {
  it('calls factories.createCoreController', () => {
    // Call the collegeController function
    expect(collegeController).toEqual('mockedController');
  });
});