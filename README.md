# AWS Signature v4 action
*NOT PRODUCTION READY*

This action leverages the awsv4 package to facilitate signed requests to AWS services.

## Inputs


  aws-access-key-id:
    description: 'Your AWS Key ID'
    required: false
  aws-secret-access-key:
    description: 'Your AWS Secret Key'
    required: false
  aws-session-token:
    description: 'Your AWS session token'
    required: false
  request-options:
    description: 'aws4 requestOptions object https://github.com/mhart/aws4#aws4signrequestoptions-credentials'
    required: true

## `aws-access-key-id`

For requests to services that are not publicly accessible, set the Access Key ID.

## `aws-secret-access-key`

For requests to services that are not publicly accessible, set the Secret Access Key.

## `aws-session-token`

For requests to services that are not publicly accessible, and require a token, set the session token.

## `request-options`

This is a JSON object containing properties as defined in the [aws4 README](https://github.com/mhart/aws4#aws4signrequestoptions-credentials).

## Example usage

uses: drewble/aws-signature-v4@main
with:
  aws-access-key-id: ''
  aws-secret-access-key: ''
  aws-session-token: ''
  request-options: '{"host": "my-bucket.s3.us-west-1.amazonaws.com", "path": "/my-object", "service": "s3", "region": "us-east-1"}' 