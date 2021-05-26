# 封装 Storage

目前实现了 localStorage、sessionStorage、Cookie 的封装

## 体验 Demo

```bash
npm install

npm run build

npm run dev
```

## 使用

```javascript
import { local, cookie, session, memory } from '../dist/index.esm';

// localStorage
local.set('key', value);
local.get('key');
local.remove('key');
local.clear();

// cookie
cookie.set('key', value);
cookie.get('key');
cookie.remove('key');
cookie.clear();

// ...
```

或者

```html
<script src="https://cdn.jsdelivr.net/gh/xmy6364/storage/storage.min.js"></script>

<script>
  storage.local.set('key', value);
  // ...
</script>
```

## TODO

- [ ] 封装 indexDB
