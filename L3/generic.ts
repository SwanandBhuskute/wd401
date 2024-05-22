function identity<T>(arg: T): T {
    return arg;
  }
  
  let output1 = identity<string>("Hello");
  let output2 = identity<number>(42);
  