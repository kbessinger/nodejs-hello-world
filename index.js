var AWS = require('aws-sdk');
var s3 = new AWS.S3();

exports.handler = function(event, context) {
  var s3 = new AWS.S3();
  var param = {Bucket: 'flow-logs', Key: 'test-lamda-x', Body: 'me me me'};
  console.log("s3");
  s3.upload(param, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log(data);
    console.log('actually done!');
    context.done();
  });

  console.log('done?');
  
};
