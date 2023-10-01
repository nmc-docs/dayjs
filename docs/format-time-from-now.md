---
sidebar_position: 6
---

# Format time from now

- Thư viện dayjs cung cấp cho ta phương thức `.fromNow()` để hiển thị khoảng cách thời gian so với hiện tại. Ví dụ như: 26 seconds ago, 4 minutes ago, 8 months ago,...
- Cú pháp:

```ts
dayjs(date?: string | Dayjs).fromNow(): string
```

- Ví dụ:

```ts
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

const relativeTimeOptions = {
  thresholds: [
    { l: "s", r: 59, d: "second" },
    { l: "m", r: 1 },
    { l: "mm", r: 59, d: "minute" },
    { l: "h", r: 1 },
    { l: "hh", r: 23, d: "hour" },
    { l: "d", r: 1 },
    { l: "dd", r: 29, d: "day" },
    { l: "M", r: 1 },
    { l: "MM", r: 11, d: "month" },
    { l: "y", r: 1 },
    { l: "yy", d: "year" },
  ],
  rounding: Math.floor,
};

dayjs.extend(relativeTime, relativeTimeOptions);
dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  relativeTime: {
    ...dayjs.Ls.en?.relativeTime,
    s: "%d seconds",
    m: "1 minute",
    h: "1 hour",
    d: "1 day",
    M: "1 month",
    y: "1 year",
  },
});

//Hiện tại đang là "2023-08-03 17:34:39"
console.log(dayjs("2023-08-03 17:09:00").fromNow()); // 25 minutes ago
console.log(dayjs("2023-08-03 19:32:00").fromNow()); // in 1 hour
```
