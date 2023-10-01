---
sidebar_position: 2
---

# Get user timezone

- Cú pháp để lấy timezone hiện tại của người dùng:

```ts
dayjs.tz.guess(): string
```

- Ví dụ:

```ts
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

console.log(dayjs.tz.guess()); // Asia/Saigon
```
