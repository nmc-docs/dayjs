---
sidebar_position: 8
---

# Query

Dưới đây là các phương thức Query trong dayjs:

- [isBefore](#isbefore)
- [isSame](#issame)
- [isAfter](#isafter)
- [isSameOrBefore](#issameorbefore)
- [isSameOrAfter](#issameorafter)
- [isBetween](#isbetween)
- [isLeapYear](#isleapyear)
- [isToday](#istoday)
- [isTomorrow](#istomorrow)
- [isYesterday](#isyesterday)

## isBefore

- Trả về `true` nếu **date1** ở trước **date2**
- Cú pháp:

```ts
dayjs(date1?: string | Dayjs).isBefore(date2: string | Dayjs, unit?: string): boolean
```

- Ví dụ:

```ts
import dayjs from "dayjs";

const date1 = dayjs("2023-06-03");
const date2 = dayjs("2023-06-15");

console.log(date1.isBefore(date2, "month")); // false
console.log(date1.isBefore(date2, "day")); // true
```

## isSame

- Trả về `true` nếu **date1** cùng thời gian với **date2**
- Cú pháp:

```ts
dayjs(date1?: string | Dayjs).isSame(date2: string | Dayjs, unit?: string): boolean
```

- Ví dụ:

```ts
import dayjs from "dayjs";

const date1 = dayjs("2023-06-03");
const date2 = dayjs("2023-06-15");

console.log(date1.isSame(date2, "month")); // true
console.log(date1.isSame(date2, "day")); // false
```

## isAfter

- Trả về `true` nếu **date1** sau **date2**
- Cú pháp:

```ts
dayjs(date1?: string | Dayjs).isAfter(date2: string | Dayjs, unit?: string): boolean
```

- Ví dụ:

```ts
import dayjs from "dayjs";

const date1 = dayjs("2023-07-25");
const date2 = dayjs("2023-07-15");

console.log(date1.isAfter(date2, "month")); // false
console.log(date1.isAfter(date2, "day")); // true
```

## isSameOrBefore

- Trả về `true` nếu **date1** trước hoặc cùng thời gian với **date2**
- Cú pháp:

```ts
dayjs(date1?: string | Dayjs).isSameOrBefore(date2: string | Dayjs, unit?: string): boolean
```

- Ví dụ:

```ts
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";

dayjs.extend(isSameOrBefore);

const date1 = dayjs("2023-07-25");
const date2 = dayjs("2023-07-15");

console.log(date1.isSameOrBefore(date2, "month")); // true
console.log(date1.isSameOrBefore(date2, "day")); // false
```

## isSameOrAfter

- Trả về `true` nếu **date1** sau hoặc cùng thời gian với **date2**
- Cú pháp:

```ts
dayjs(date1?: string | Dayjs).isSameOrAfter(date2: string | Dayjs, unit?: string): boolean
```

- Ví dụ:

```ts
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

dayjs.extend(isSameOrAfter);

const date1 = dayjs("2023-07-14");
const date2 = dayjs("2023-07-15");

console.log(date1.isSameOrAfter(date2, "day")); // false
console.log(date1.isSameOrAfter(date2, "month")); // true
```

## isBetween

- Trả về `true` nếu một date nằm ở giữa 2 date còn lại
- Cú pháp:

```ts
dayjs(date?: string | Dayjs).isBetween(left: string | Dayjs, right: string | Dayjs, unit?: string, range?: string): boolean
```

:::info

Trong đó:

- **date** : date cần kiểm tra
- **left** : date đầu mút trái
- **right** : date đầu mút phải
- **unit** : đơn vị tính
- **range** : chỉ định kiểm tra trong khoảng hay trong đoạn, các giá trị nhận vào có thể là: `()`, `(]`, `[]`, `[)`

:::

- Ví dụ:

```ts
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

const date1 = dayjs("2023-07-01");
const date2 = dayjs("2023-07-31");

const test1 = dayjs("2023-07-23");
const test2 = dayjs("2023-07-01");
const test3 = dayjs("2023-07-31");

console.log(test1.isBetween(date1, date2, null, "[]")); // true

console.log(test2.isBetween(date1, date2, null, "(]")); // false
console.log(test2.isBetween(date1, date2, null, "[]")); // true

console.log(test3.isBetween(date1, date2, null, "()")); // false
console.log(test3.isBetween(date1, date2, null, "(]")); // true

console.log(test2.isBetween(date1, date2, "month", "(]")); // false
console.log(test2.isBetween(date1, date2, "month", "[]")); // true
```

## isLeapYear

- Trả về `true` nếu date là năm nhuận
- Cú pháp:

```ts
dayjs(date?: string | Dayjs).isLeapYear(): boolean
```

- Ví dụ:

```ts
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";

dayjs.extend(isLeapYear);

console.log(dayjs("2020-04-25").isLeapYear()); // true
console.log(dayjs("2022-04-25").isLeapYear()); // false
```

## isToday

- Trả về `true` nếu date thuộc ngày hiện tại
- Cú pháp:

```ts
dayjs(date?: string | Dayjs).isToday(): boolean
```

- Ví dụ:

```ts
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";

dayjs.extend(isToday);

const date1 = dayjs("2014-08-16 21:32:16");
const date2 = dayjs();

console.log(date1.isToday()); // false
console.log(date2.isToday()); // true
```

## isTomorrow

- Trả về `true` nếu date thuộc ngày mai
- Cú pháp:

```ts
dayjs(date?: string | Dayjs).isTomorrow(): boolean
```

- Ví dụ:

```ts
import dayjs from "dayjs";
import isTomorrow from "dayjs/plugin/isTomorrow";

dayjs.extend(isTomorrow);

const date1 = dayjs();
const date2 = dayjs().add(1, "day");

console.log(date1.isTomorrow()); // false
console.log(date2.isTomorrow()); // true
```

## isYesterday

- Trả về `true` nếu date thuộc ngày hôm qua
- Cú pháp:

```ts
dayjs(date?: string | Dayjs).isYesterday(): boolean
```

- Ví dụ:

```ts
import dayjs from "dayjs";
import isYesterday from "dayjs/plugin/isYesterday";

dayjs.extend(isYesterday);

const date1 = dayjs();
const date2 = dayjs().subtract(1, "day");

console.log(date1.isYesterday()); // false
console.log(date2.isYesterday()); // true
```
