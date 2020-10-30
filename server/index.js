var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

var solve = require('@mattflow/sudoku-solver');

app.get('/solve', function (req, res) {
  console.log("potato")
  var solution = solve(req.query.sudoku);

  var parsedSolution = [];
  var tempLine = [];
  console.log(solution.length)
  for (var i = 1; i < solution.length+1; i++) {
    tempLine.push(solution[i-1]);
    if (i%9 === 0 && i>0) {
      parsedSolution.push(tempLine);
      tempLine = [];
    }
  }
  console.log(parsedSolution);
  res.send({solved: parsedSolution});
});

app.listen(3000, function () {
  console.log("Server up on http://localhost:3000")
})
