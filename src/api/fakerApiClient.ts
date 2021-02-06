class FakerApiClient {
  fetch<T>(resolveFunc: () => T): Promise<T> {
    return new Promise(function (resolve) {
      setTimeout(() => {
        const result = resolveFunc();
        resolve(result);
      }, 2000);
    });
  }
}

const fakerApiClient = new FakerApiClient();
export default fakerApiClient;
