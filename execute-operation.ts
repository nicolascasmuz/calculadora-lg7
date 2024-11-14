import * as operations from "./operations";
import { Terms } from "./terms-type";

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

export { executeOperation };
