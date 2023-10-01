---
sidebar_position: 3
---

# Một số phương thức get khác

## dayOfYear()

- Phương thức `dayOfYear()` trả về số thứ tự ngày trong năm (1 - 366) của đối tượng Dayjs hiện tại.
- Phương thức này cần **DayOfYear** plugin để hoạt động.
- Cú pháp:

```ts
dayjs(date?: string | Dayjs).dayOfYear(): number
```

- Ví dụ:

```ts
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";

dayjs.extend(dayOfYear);

console.log(dayjs("2023-05-22 14:38:27").dayOfYear()); // 142
```

## week()

- Phương thức `.week()` trả về số thứ tự tuần trong năm của đối tượng Dayjs hiện tại.
- Phương thức này cần **WeekOfYear **plugin để hoạt động.
- Cú pháp:

```ts
dayjs(date?: string | Dayjs).week(): number
```

- Ví dụ:

```ts
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";

dayjs.extend(weekOfYear);

console.log(dayjs("2023-05-22 14:38:27").week()); // 21
```

## daysInMonth()

- Phương thức `.daysInMonth()` trả về số lượng ngày trong tháng của đối tượng Dayjs hiện tại.
- Cú pháp:

```ts
dayjs(date?: string | Dayjs).week(): number
```

- Ví dụ:

```ts
import dayjs from "dayjs";

console.log(dayjs("2020-02-14 14:38:27").daysInMonth()); // 29
```

## min() / max()

- Phương thức `.min()` trả về đối tượng Dayjs có giá trị bé nhất trong một mảng các đối tượng Dayjs.
- Phương thức `.max()` trả về đối tượng Dayjs có giá trị lớn nhất trong một mảng các đối tượng Dayjs.
- Hai phương thức này cần **MinMax** plugin để hoạt động.
- Cú pháp:

```ts
dayjs.min(dateList: Dayjs[]): Dayjs
dayjs.max(dateList: Dayjs[]): Dayjs
```

- Ví dụ:

```ts
import dayjs from "dayjs";
import minMax from "dayjs/plugin/minMax";

dayjs.extend(minMax);

const dateList = ["2021-07-26", "2021-02-05", "2021-10-20"];

console.log(
  dayjs.min(dateList.map((date) => dayjs(date)))?.format("DD/MM/YYYY") // 05/02/2021
);
console.log(
  dayjs.max(dateList.map((date) => dayjs(date)))?.format("DD/MM/YYYY") // 20/10/2021
);
```
