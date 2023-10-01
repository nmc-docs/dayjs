---
sidebar_position: 1
---

# Get

- Phương thức `.get()` để lấy các giá trị của một Dayjs object như giờ, phút, giây, ngày, tháng, năm,...
- Cú pháp:

```ts
dayjs(date?: string | Dayjs).get(unit: UnitType): number
```

- Các `UnitType`:

| UnitType      | Description                                         |
| ------------- | --------------------------------------------------- |
| `millisecond` | Mili giây (0 - 999)                                 |
| `second`      | Giây (0 - 59)                                       |
| `minute`      | Phút (0 - 59)                                       |
| `hour`        | Giờ (0 - 23)                                        |
| `day`         | Ngày trong tuần (0 là Sunday cho đến 6 là Saturday) |
| `date`        | Ngày trong tháng (1 - 31)                           |
| `month`       | Tháng (0 - 11)                                      |
| `year`        | Năm                                                 |

- Ví dụ:

```ts
import dayjs from "dayjs";

const date = dayjs("2023-05-22 14:38:27");
console.log(date.get("hour")); // 14
console.log(date.get("minute")); // 38
console.log(date.get("month")); // 4
```
