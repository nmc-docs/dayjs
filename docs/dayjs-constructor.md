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

## Khởi tạo với custom format

- Để khởi tạo một đối tượng **Dayjs** với custom format, ta sử dụng plugin `CustomParseFormat`
- Ví dụ:

```ts
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const date = dayjs("27/11/2022 09:15:17", "DD/MM/YYYY HH:mm:ss");
```
