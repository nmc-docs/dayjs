---
sidebar_position: 1
---

# Convert to another timezone

- Phương thức `.tz()` trong dayjs trả về một đối tượng Dayjs mới sau khi được chuyển timezone từ một đối tượng Dayjs ban đầu.
- Phương thức này cần plugin **utc** và **timezone** để hoạt động.
- Cú pháp:

```ts
dayjs(date?: string | Dayjs).tz(timezone?: string): Dayjs
```

:::info

Xem các timezone khả dụng: [https://en.wikipedia.org/wiki/List_of_tz_database_time_zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

:::

- Ví dụ:

```ts
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const shanghaiTime = dayjs(dayjs()).tz("Asia/Shanghai");

console.log(
  shanghaiTime.format("DD/MM/YYYY HH:mm:ss")
); /* 05/08/2023 16:34:01 */
// Do thời gian ở địa phương hiện tại là 05/08/2023 15:34:01 và thời gian ở Shanghai (Thượng Hải, Trung Quốc) hơn ta 1 giờ đồng hồ
```
