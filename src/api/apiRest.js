export const apiRest = {
  get: async( url) => {
    try {
      const response = await fetch( url, { method: 'GET' } );
      return response.json();
    } catch (err) {
      throw Error( err )
    }
  }
};