function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`Calling ${propertyKey} with arguments: ${args}`);
      return originalMethod.apply(this, args);
    };
    return descriptor;
  }
  
  class Example {
    @Log
    method(arg: string) {
      return `Hello, ${arg}`;
    }
  }
  
  const example = new Example();
  example.method('World');
  