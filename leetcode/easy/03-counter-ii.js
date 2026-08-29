let num;

const createCounter = function (init) {
  num = init;

  const countFuncs = {
    increment: () => {
      return (num = num + 1);
    },
    decrement: () => {
      return (num = num - 1);
    },
    reset: () => {
      return (num = init);
    },
  };

  return countFuncs;
};

const counter = createCounter(4);

counter.increment();
counter.increment();
counter.decrement();
counter.reset();

console.log(num);
