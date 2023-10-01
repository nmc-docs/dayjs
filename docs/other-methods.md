---
sidebar_position: 10
---

# Một số phương thức khác

## Chuyển Date về dạng ISO 8601 String

- Cú pháp:

```ts
dayjs(date?: string | Dayjs).toISOString(): string
```

- Ví dụ:

```ts
import dayjs from "dayjs";

console.log(dayjs().toISOString()); // "2023-08-04T03:29:40.611Z"
console.log(dayjs("2023-05-22 14:25:08").toISOString()); // "2023-05-22T07:25:08.000Z"
```

## Dayjs Clone

- Phương thức `.clone()` sẽ tạo một bản sao Dayjs mới dựa trên object hiện tại
- Cú pháp:

```ts
dayjs(date?: string | Dayjs).clone(): Dayjs
```

- Ví dụ:

```ts
import dayjs from "dayjs";

const a = dayjs();
const b = a.clone();
```
