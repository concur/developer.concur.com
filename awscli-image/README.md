## Reason

A custom Docker image for the AWS CLI we manage to allow for easier maintenance.

To build and push, follow the below commands. Replace the tag with the version
of AWS CLI used.

```
docker build -t quay.io/concur_platform/awscli:[tag]
docker push quay.io/concur_platform/awscli:[tag]
```
