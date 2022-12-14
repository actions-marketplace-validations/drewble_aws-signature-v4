const core = require('@actions/core');
const aws4 = require('aws4');
const https = require('https');

const accessKeyId = core.getInput('aws-access-key-id');
const secretAccessKey = core.getInput('aws-secret-access-key');
const sessionToken = core.getInput('aws-session-token');
const { 
  host,
  method,
  path,
  body,
  service,
  region,
  signQuery,
  headers
} = JSON.parse(core.getInput('request-options'));

function isNotEmpty(val) {
  if (val !== undefined && val !== '' &&  Object.keys(val)?.length !== 0) {
    return true;
  }

  return false;
}

function filterObject(obj) {
  const filtered = {};
  for(const el in obj) {
    if (isNotEmpty(obj[el])) {
      filtered[el] = obj[el];
    }
  }
  return filtered;
}

// body argument must be string
const bodyString = JSON.stringify(body);

const opts = filterObject({
  host,
  path,
  service,
  region,
  headers,
  method,
  body: bodyString,
  signQuery
});

const auth = filterObject({
  accessKeyId,
  secretAccessKey,
  sessionToken
});

aws4.sign(opts, auth)
https.request(opts, function(res) { res.pipe(process.stdout) }).end(opts.body || '');
