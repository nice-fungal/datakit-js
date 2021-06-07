/**
 * Internal context keep returning v1 format
 * to not break compatibility with logs data format
 */
export function startInternalContext(applicationId, session, parentContexts) {
  return {
    get: function (startTime) {
      var viewContext = parentContexts.findView(startTime)
      if (session.isTracked() && viewContext && viewContext.session.id) {
        const actionContext = parentContexts.findAction(startTime)
        return {
          application: {
            id: applicationId
          },
          session: {
            id: viewContext.session.id
          },
          userAction: actionContext
            ? {
                id: actionContext.userAction.id
              }
            : undefined,
          view: viewContext.view
        }
      }
    }
  }
}
