import * as operations from "./operations";

type Terms = {
  a: number;
  op: string;
  b: number;
};

function parseTerms(stringArgv: string): Terms {
  const regExp = /[+\-\*\/]/;

  const signIndex = stringArgv.search(regExp);
  const terms = stringArgv.split(regExp);
  const operator = stringArgv[signIndex];

  console.log("stringArgv: ", stringArgv, typeof stringArgv);
  console.log("signIndex: ", signIndex);

  const obj: Terms = {
    a: Number(terms[0]),
    op: operator,
    b: Number(terms[1]),
  };

  return obj;
}

function executeOperation(parseObj: Terms): number | undefined {
  if (parseObj.op == "+") {
    return operations.add(parseObj.a, parseObj.b);
  }
  if (parseObj.op == "-") {
    return operations.subtract(parseObj.a, parseObj.b);
  }
  if (parseObj.op == "*") {
    return operations.multiply(parseObj.a, parseObj.b);
  }
  if (parseObj.op == "/") {
    return operations.split(parseObj.a, parseObj.b);
  }
}

function main() {
  const parsedObj = parseTerms(process.argv[2]);
  const result = executeOperation(parsedObj);
  console.log(result);
}

main();
