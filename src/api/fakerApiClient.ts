class FakerApiClient {
  fetch<T>(resolveFunc: () => T, ms: number = 2000): Promise<T> {
    return new Promise(function (resolve) {
      setTimeout(() => {
        const result = resolveFunc();
        resolve(result);
      }, ms);
    });
  }
}

const fakerApiClient = new FakerApiClient();
export default fakerApiClient;
