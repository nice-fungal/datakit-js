import { ErrorSource } from './errorTools'
import { ONE_MINUTE, clocksNow } from './tools'

export function createErrorFilter(configuration, onLimitReached) {
  var errorCount = 0
  var allowNextError = false

  return {
    isLimitReached: function () {
      if (errorCount === 0) {
        setTimeout(function () {
          errorCount = 0
        }, ONE_MINUTE)
      }

      errorCount += 1
      if (errorCount <= configuration.maxErrorsByMinute || allowNextError) {
        allowNextError = false
        return false
      }

      if (errorCount === configuration.maxErrorsByMinute + 1) {
        allowNextError = true
        try {
          onLimitReached({
            message: `Reached max number of errors by minute: ${configuration.maxErrorsByMinute}`,
            source: ErrorSource.AGENT,
            startClocks: clocksNow()
          })
        } finally {
          allowNextError = false
        }
      }

      return true
    }
  }
}
