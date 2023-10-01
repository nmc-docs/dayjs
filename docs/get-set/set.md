---
sidebar_position: 2
---

# Set

- Phương thức `.set()` dùng để thiết lập một đơn vị (như ngày, tháng, năm, giờ, phút, giây,...) dựa trên đối tượng Dayjs sẵn có
- Phương thức `.set()` trả về một đối tượng Dayjs mới sau khi được thiết lập. Đối tượng Dayjs ban đầu không bị thay đổi.
- Cú pháp:

```ts
dayjs(date?: string | Dayjs).set(unit: UnitType, value: number): Dayjs
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
const newDate = date.set("hour", 0).set("minute", 0).set("second", 0);
console.log(date.format("DD/MM/YYYY HH:mm:ss")); // 22/05/2023 14:38:27
console.log(newDate.format("DD/MM/YYYY HH:mm:ss")); // 22/05/2023 00:00:00
```
