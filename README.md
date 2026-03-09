# !Bravado

A bang redirect tool that uses Brave Search for bangs and Google for everything else. No API. No backend. Just three files and a good idea.

> Inspired by [@t3dotgg](https://github.com/t3dotgg)'s [Unduck](https://github.com/t3-content/unduck)

---

## How it works

Type a bang like `!gh javascript` and it routes to Brave Search — which handles the redirect and sends you straight to GitHub. No bang? Goes to Google. Simple as that.

```
!gh javascript     →  github.com/search?q=javascript
!yt lo-fi beats    →  youtube.com/results?q=lo-fi+beats
just type anything →  google.com/search?q=just+type+anything
```

The redirect fires before the page even renders so it feels instant.

---

## Set as default search engine

**Firefox / Zen:**

1. Go to `about:preferences#search`
2. Scroll to **Search Shortcuts** → click **Add**
3. Fill in:
   - **Name:** !Bravado
   - **URL:** `https://taqi42.github.io/bravado?q=%s`
4. Set it as your **Default Search Engine**

**Chrome / Brave:**

1. Go to `chrome://settings/searchEngines`
2. Under **Site search** → click **Add**
3. Fill in:
   - **Name:** !Bravado
   - **Shortcut:** `!`
   - **URL:** `https://taqi42.github.io/bravado?q=%s`
4. Click the three dots next to it → **Make default**

---

## Quick Bangs

| Bang   | Goes to        |
| ------ | -------------- |
| `!gh`  | GitHub         |
| `!yt`  | YouTube        |
| `!mdn` | MDN Web Docs   |
| `!r`   | Reddit         |
| `!npm` | NPM            |
| `!w`   | Wikipedia      |
| `!tw`  | Twitter / X    |
| `!a`   | Amazon         |
| `!so`  | Stack Overflow |
| `!ddg` | DuckDuckGo     |

Brave Search supports thousands of bangs. Full list at [search.brave.com/bangs](https://search.brave.com/bangs).

---

## Credits

Built by [taqi42](https://github.com/taqi42) · Inspired by [@t3dotgg](https://github.com/t3dotgg)'s [Unduck](https://github.com/t3-content/unduck)
