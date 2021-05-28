# 封装 Storage

目前实现了 localStorage、sessionStorage、Cookie、indexedDB 的封装

## 使用

```
npm i easystorage
```

```javascript
import { local, cookie, session, memory, indexed } from 'easystorage';

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
// indexedDB 需要异步操作
await indexed.get('key');
```

或者

```html
<script src="https://cdn.jsdelivr.net/gh/xmy6364/storage/storage.min.js"></script>

<script>
  storage.local.set('key', value);
  // ...
</script>
```

## 体验 Demo

```bash
git clone https://github.com/xmy6364/storage.git

cd storage

npm install

npm run build

npm run dev
```

## TODO

- [x] 封装 indexDB
- [x] Github Action 自动发布 npm
