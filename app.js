const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const { convertAndValidateNumsArray, findMode, findMean, findMedian } = require('./helpers');

app.get('/mean', (req,res,next)=>{
  if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
  } //if a query key with comma-seperated numbers is not passed through, we throw an error
  let numsAsStrings = req.query.nums.split(',');  //This method splits the string into an array of substrings based on the specified delimiter, which in this case is the comma ,. So, '1,2,3,4' into an array ['1', '2', '3', '4'].
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }
})


app.get('/median', (req,res,next)=>{
  if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
  }
  let numsAsStrings = req.query.nums.split(',');
  // check if anything bad was put in
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "median",
    result: findMedian(nums)
  }

  return res.send(result);
})

app.get('/mode', (req,res,next)=>{
  if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
  }
  let numsAsStrings = req.query.nums.split(',');
  // check if anything bad was put in
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }
  
  let result = {
    operation: "mode",
    result: findMode(nums)
  }

  return res.send(result);
})


app.listen(3000, function () {
  console.log('App on port 3000');
})