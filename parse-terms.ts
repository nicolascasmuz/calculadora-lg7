import { Terms } from "./terms-type";

function parseTerms(stringArgv: string): Terms {
  const regExp = /[+\-\*\/]/;

  const signIndex = stringArgv.search(regExp);
  const terms = stringArgv.split(regExp);
  const operator = stringArgv[signIndex];

  const obj: Terms = {
    a: Number(terms[0]),
    op: operator,
    b: Number(terms[1]),
  };

  return obj;
}

export { parseTerms };
