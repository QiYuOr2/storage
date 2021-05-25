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
import { local, cookie, session, memory } from '../dist/Storage.js';

local.set('key', value);
local.get('key');
local.remove('key');
local.clear();
```

## TODO

- [ ] 封装 indexDB
