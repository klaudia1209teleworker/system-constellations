# 導覽列

導覽連結順序（錨點須對應 `App.tsx` section `id`）：

1. `#curriculum` — 培訓內容
2. `#terms` — 條款
3. `#certification` — 證書
4. `#teacher` — 講師
5. `#overview` — 日期地點

- 前言區塊（`#intro`）仍保留於頁面，**不**列入導覽
- 中英切換**不**放在導覽列；置於 Hero 右上角（`LanguageSwitcher`）
- 文案來源：`src/i18n/zh.ts`、`en.ts` 的 `nav.links`
