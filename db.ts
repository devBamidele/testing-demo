export const getCustomerSync = function(id: Number) {
    console.log('Reading a customer from MongoDB...');
    return { id: id, points: 11, email: 'test@gmail.com' };
  }
  
  export const getCustomer = async function(id: string) {
    return new Promise((resolve, reject) => {
      console.log('Reading a customer from MongoDB...');
      resolve({ id: id, points: 11 });
    });
  }
  