# BypassLink

Link unshortener for your projects or terminal. Uses bypass.vip's API service.

## Installation

Download as CLI

```
npm i -g bypasslink
```

Download for usage with Javascript

```
npm i bypasslink
```

## Usage

CLI

```
bypass <-b/--bypass> <link>
```

Javascript

```javascript
const bypasslink = require("bypasslink");
bypasslink.bypass("URL").then((a) => console.log(a));
```

### Supported links

| Website                       | Working? |
| ----------------------------- | -------: |
| linkvertise.com               |        ✔ |
| adf.ly                        |        ✔ |
| exe.io/exey.io                |        ✔ |
| sub2unlock.net/sub2unlock.com |        ✔ |
| rekonise.com                  |        ✔ |
| letsboost.net                 |        ✔ |
| ph.apps2app.com               |        ✔ |
| mboost.me                     |        ✔ |
| shortconnect.com              |        ✔ |
| sub4unlock.com                |        ✔ |
| ytsubme.com                   |        ✔ |
| bit.ly                        |        ✔ |
| social-unlock.com             |        ✔ |
| boost.ink                     |        ✔ |
| goo.gl                        |        ✔ |
| shrto.ml                      |        ✔ |
| t.co                          |        ✔ |
| tinyurl.com                   |        ✔ |
