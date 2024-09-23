import variableAnswers from './challenge/1-variables.js'
import functionAnswers from './challenge/2-functions.js'
import operatorAnswers from './challenge/3-operators.js'
import objectAnswers from './challenge/4-objects.js'
import loopAnswers from './challenge/7-loops.js'
import arrayAnswers from './challenge/5-arrays.js'
import conditionalAnswers from './challenge/6-conditionals.js'

import { formatResultsSection } from './lib/index.js'
import {
  resultsForVariables,
  resultsForFunctions,
  resultsForObjects,
  resultsForArrays,
  resultsForLoops,
  resultsForConditionals,
  resultsForOperators,
} from './lib/results.js'

export function buildResults() {
  const variableResults = resultsForVariables(variableAnswers)
  const functionResults = resultsForFunctions(functionAnswers)
  const objectResults = resultsForObjects(objectAnswers)
  const arrayResults = resultsForArrays(arrayAnswers)
  const loopResults = resultsForLoops(loopAnswers)
  const conditionalResults = resultsForConditionals(conditionalAnswers)
  const operatorResults = resultsForOperators(operatorAnswers)

  let output = '<h1>Javascript Intro Results</h1>'
  output += formatResultsSection('Variables', variableResults)
  output += formatResultsSection('Functions', functionResults)
  output += formatResultsSection('Operators', operatorResults)
  output += formatResultsSection('Objects', objectResults)
  output += formatResultsSection('Arrays', arrayResults)
  output += formatResultsSection('Conditionals', conditionalResults)
  output += formatResultsSection('Loops', loopResults)
  return output
}
