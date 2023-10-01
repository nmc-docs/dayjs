---
sidebar_position: 2
---

# Khởi tạo Dayjs

## Cú pháp

```ts
dayjs(date?: string | Dayjs)
```

:::info

**dayjs** trả về kiểu có tên `Dayjs`

:::

## Ví dụ

```ts
import dayjs from "dayjs";

const date = dayjs();
const date1 = dayjs("2023-06-15");
const date2 = dayjs("2023-07-15 16:49:32");
const date3 = dayjs("2023-07-29T07:05:42.042Z");
```
