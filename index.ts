import { executeOperation } from "./execute-operation";
import { parseTerms } from "./parse-terms";

function main() {
  const parsedObj = parseTerms(process.argv[2]);
  const result = executeOperation(parsedObj);
  console.log(result);
}

main();
