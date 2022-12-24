export const isEmail = (account: string) => {
  return /.+\@.+\..+/.test(account);
};

export const to = (promise) => {
  if (!promise.then) {
    return promise;
  }

  return promise
    .then((result) => Promise.resolve([null, result]))
    .catch((err) => Promise.resolve([err]));
};
