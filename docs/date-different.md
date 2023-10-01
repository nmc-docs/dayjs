---
sidebar_position: 7
---

# Tính khoảng cách giữa 2 date

- Thư viện dayjs cung cấp cho ta phương thức `.diff()` để tính khoảng cách giữa 2 date theo unit nhất định.
- Cú pháp:

```ts
dayjs(date1?: string | Dayjs).diff(date2?: string | Dayjs, unit?: string, float?: boolean): number
```

:::info

Trong đó:

- **date1** , **date2** : 2 date cần tính khoảng cách
- **unit** : đơn vị tính khoảng cách
- **float** : trả về kết quả ở dạng số thực thay vì được làm tròn

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

const date1 = dayjs("2023-08-03");
const date2 = dayjs("2022-08-03");
console.log(date1.diff(date2, "hour", true)); // 8760
console.log(date1.diff(date2, "month", true)); // 12
console.log(date1.diff(date2, "year", true)); // 1
console.log(date1.diff(date2, "week", true)); // 52.142857142857146
```
