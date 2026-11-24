import { useLocale } from '../i18n/useLocale'
import { openScheduleWindow } from '../lib/open-schedule-window'

export function ScheduleOpenButton() {
  const { t } = useLocale()

  return (
    <button
      type="button"
      onClick={() =>
        openScheduleWindow({
          title: t.overview.scheduleWindowTitle,
          monthLabel: t.overview.scheduleMonthLabel,
          daysLabel: t.overview.scheduleDaysLabel,
          closeHint: t.overview.scheduleCloseHint,
          popupBlocked: t.overview.schedulePopupBlocked,
          rows: t.overview.schedule,
        })
      }
      className="inline-flex items-center justify-center rounded-md border border-primary bg-transparent px-5 py-3 text-sm font-semibold tracking-wide text-primary transition hover:bg-primary hover:text-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {t.overview.scheduleButton}
    </button>
  )
}
