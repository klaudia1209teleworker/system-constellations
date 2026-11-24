export interface ScheduleRow {
  month: string
  days: string
}

export interface ScheduleWindowContent {
  title: string
  monthLabel: string
  daysLabel: string
  closeHint: string
  popupBlocked: string
  rows: ScheduleRow[]
}

/** Open the detailed class schedule in a separate browser window. */
export function openScheduleWindow(content: ScheduleWindowContent) {
  const width = 720
  const height = 820
  const left = Math.max(0, Math.round(window.screenX + (window.outerWidth - width) / 2))
  const top = Math.max(0, Math.round(window.screenY + (window.outerHeight - height) / 2))

  const popup = window.open(
    '',
    'sc-schedule',
    `popup=yes,width=${width},height=${height},left=${left},top=${top}`,
  )

  if (!popup) {
    window.alert(content.popupBlocked)
    return
  }

  const rowsHtml = content.rows
    .map(
      (row, index) => `
      <tr class="${index % 2 === 0 ? 'odd' : ''}">
        <th scope="row">${escapeHtml(row.month)}</th>
        <td>${escapeHtml(row.days)}</td>
      </tr>`,
    )
    .join('')

  popup.document.write(`<!doctype html>
<html lang="${document.documentElement.lang || 'zh-Hant'}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(content.title)}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Libre+Baskerville:wght@400;700&family=Noto+Sans+TC:wght@400;500;600&display=swap" rel="stylesheet" />
  <style>
    :root {
      --primary: #5C3D2E;
      --secondary: #C4A484;
      --text: #2A211C;
      --bg: #EDE6DB;
      --muted: #7A6E64;
      --border: #D2C6B6;
      --surface: #F7F2EA;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 2rem 1.25rem 2.5rem;
      font-family: "IBM Plex Sans", "Noto Sans TC", sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
    }
    h1 {
      margin: 0 0 0.5rem;
      font-family: "Libre Baskerville", serif;
      font-size: 1.75rem;
      color: var(--primary);
    }
    .rule {
      width: 3.5rem;
      height: 2px;
      background: var(--secondary);
      margin: 0 0 1.5rem;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      border: 1px solid var(--border);
      background: var(--surface);
    }
    th, td {
      padding: 0.85rem 1rem;
      text-align: left;
      vertical-align: top;
      border-top: 1px solid var(--border);
    }
    thead th {
      background: var(--primary);
      color: var(--surface);
      font-weight: 600;
      border-top: none;
    }
    tbody th {
      width: 7rem;
      white-space: nowrap;
      color: var(--primary);
      font-weight: 600;
    }
    tr.odd td, tr.odd th { background: color-mix(in srgb, var(--surface) 70%, var(--bg)); }
    .hint {
      margin-top: 1.25rem;
      font-size: 0.875rem;
      color: var(--muted);
    }
  </style>
</head>
<body>
  <h1>${escapeHtml(content.title)}</h1>
  <div class="rule" aria-hidden="true"></div>
  <table>
    <thead>
      <tr>
        <th scope="col">${escapeHtml(content.monthLabel)}</th>
        <th scope="col">${escapeHtml(content.daysLabel)}</th>
      </tr>
    </thead>
    <tbody>
      ${rowsHtml}
    </tbody>
  </table>
  <p class="hint">${escapeHtml(content.closeHint)}</p>
</body>
</html>`)
  popup.document.close()
  popup.focus()
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}
