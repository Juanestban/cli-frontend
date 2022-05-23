if (!Array.prototype.pipe) {
  Array.prototype.pipe = function Pipe<Fns = any>(...fns: Fns[]): any {
    return (x: string): string[] => {
      return fns.reduce((v: any, f: Fns) => {
        if (typeof f === 'function') {
          return f(v);
        }

        return v;
      }, x);
    };
  };
}
