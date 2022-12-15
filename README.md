# Advent of Code, 2022, with nodejs on GCP

Advent of code is a coding challenge that runs every year.

This year though, I was inspired to solve the problem with live tracing and debugging and as much ops stuff as possible.

So I'll rely on the tools I know best, the amazing nestjs with typescript, GCP, and the super low overhead app engine.

This advent of code will be a tasty RESTful API, where you just upload your input, and the output arrives with some other summary stats.

It should have:
- good tests
- easy deployment
- nice logging
- live debugging and snapshotting
- tracing
- error reporting
- profiling

## Interesting stuff I found so far

### You don't need to use GCP keys to authenticate with github actions.
Every github action can craft it's own token from github.
You can use this token, in conjunction with google's workload identity, to essentially verify that token, and map it's claims onto a new token.
Finally, we can restrict that token to only be allowable from certain repositories, owners, branches, etc...
No more long-lived tokens or uploading service account credentials as secrets.

Very interesting stuff, have a read [here](https://cloud.google.com/blog/products/identity-security/enabling-keyless-authentication-from-github-actions)

