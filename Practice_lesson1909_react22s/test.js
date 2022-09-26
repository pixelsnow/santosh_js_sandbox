const getNumber = () => {
  return new Promise((resolve) => {
    resolve(42);
  });
};

getNumber().then((value) => {
  console.log(value);
});

// async version

const getNumber2 = async () => {
  return 42;
};

getNumber2().then((value) => {
  console.log(value);
});
