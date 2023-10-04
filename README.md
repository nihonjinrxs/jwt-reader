# jwt-reader

This is a minimal program to enable reading the contents of a JWT at the shell.

It does not attempt to verify JWTs (because it doesn't know anything about the certs).

## Installing

To make it available locally, just do something like:

- Clone this repo
- Enter the root directory where this repo lives
- `npm install -g .`

You'll then have a shell command `jwt-reader` available in your shell.

## Using

```{sh}
$ jwt-reader
This tool will decode a JSON web token so you can see the contents.
NOTE: It does NOT verify the token.

Enter the token to decode:
<PASTE YOUR TOKEN CONTENTS>

{
    ... parsed token payload
}
```

You can include headers and signature by using the optional CLI argument `-c` or `--complete`.

## MIT License

Copyright © 2023 Ryan B. Harvey

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
