---
sidebar_position: 1
---

# Add

- Phương thức `.add()` được sử dụng để thêm một lượng thời gian cụ thể dựa trên đối tượng Dayjs hiện tại
- Phương thức này trả về một đối tượng Dayjs mới, đối tượng Dayjs ban đầu không bị thay đổi.
- Cú pháp:

```ts
dayjs(date?: string | Dayjs).add(value: number, unit: ManipulateType): Dayjs
```

:::info

- **value** : là số nguyên biểu thị số lượng thời gian muốn thêm
- **unit** : là một chuỗi xác định đơn vị thời gian muốn thêm

:::

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
const newDate = date.add(3, "day");
console.log(newDate.date()); // 19
```
