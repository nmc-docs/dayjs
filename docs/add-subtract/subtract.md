---
sidebar_position: 2
---

# Subtract

- Phương thức `.subtract()` được sử dụng để bớt một lượng thời gian cụ thể dựa trên đối tượng Dayjs hiện tại.
- Phương thức này trả về một đối tượng Dayjs mới, đối tượng Dayjs ban đầu không bị thay đổi.
- Cú pháp:

```ts
dayjs(date?: string | Dayjs).subtract(value: number, unit: ManipulateType): Dayjs
```

- Danh sách các units:

| Unit     | Description |
| -------- | ----------- |
| `day`    | Ngày        |
| `week`   | Tuần        |
| `month`  | Tháng       |
| `year`   | Năm         |
| `hour`   | Giờ         |
| `minute` | Phút        |
| `second` | Giây        |

- Ví dụ:

```ts
import dayjs from "dayjs";

const date = dayjs("2014-08-16 21:32:16");
const newDate = date.subtract(3, "day");
console.log(newDate.date()); // 13
```
