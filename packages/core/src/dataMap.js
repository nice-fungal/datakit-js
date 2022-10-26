import { RumEventType } from './helper/enums'
export var commonTags = {
  sdk_name: '_dd.sdk_name',
  sdk_version: '_dd.sdk_version',
  app_id: 'application.id',
  env: '_dd.env',
  service: '_dd.service',
  version: '_dd.version',
  userid: 'user.id',
  user_email: 'user.email',
  user_name: 'user.name',
  session_id: 'session.id',
  session_type: 'session.type',
  session_sampling: 'session.is_sampling',
  is_signin: 'user.is_signin',
  os: 'device.os',
  os_version: 'device.os_version',
  os_version_major: 'device.os_version_major',
  browser: 'device.browser',
  browser_version: 'device.browser_version',
  browser_version_major: 'device.browser_version_major',
  screen_size: 'device.screen_size',
  network_type: 'device.network_type',
  device: 'device.device',
  view_id: 'view.id',
  view_referrer: 'view.referrer',
  view_url: 'view.url',
  view_host: 'view.host',
  view_path: 'view.path',
  view_path_group: 'view.path_group',
  view_url_query: 'view.url_query'
}
// 需要用双引号将字符串类型的field value括起来， 这里有数组标示[string, path]
export var dataMap = {
  view: {
    type: RumEventType.VIEW,
    tags: {
      view_loading_type: 'view.loading_type',
      view_apdex_level: 'view.apdex_level',
      is_active: 'view.is_active'
    },
    fields: {
      view_error_count: 'view.error.count',
      view_resource_count: 'view.resource.count',
      view_long_task_count: 'view.long_task.count',
      view_action_count: 'view.action.count',
      first_contentful_paint: 'view.first_contentful_paint',
      largest_contentful_paint: 'view.largest_contentful_paint',
      cumulative_layout_shift: 'view.cumulative_layout_shift',
      first_input_delay: 'view.first_input_delay',
      loading_time: 'view.loading_time',
      dom_interactive: 'view.dom_interactive',
      dom_content_loaded: 'view.dom_content_loaded',
      dom_complete: 'view.dom_complete',
      load_event: 'view.load_event',
      first_input_time: 'view.first_input_time',
      first_meaningful_paint: 'view.largest_contentful_paint',
      first_paint_time: 'view.fpt',
      resource_load_time: 'view.resource_load_time',
      time_to_interactive: 'view.tti',
      dom: 'view.dom',
      dom_ready: 'view.dom_ready',
      time_spent: 'view.time_spent'
    }
  },
  resource: {
    type: RumEventType.RESOURCE,
    tags: {
      trace_id: '_dd.trace_id',
      span_id: '_dd.span_id',
      resource_url: 'resource.url',
      resource_url_host: 'resource.url_host',
      resource_url_path: 'resource.url_path',
      resource_url_path_group: 'resource.url_path_group',
      resource_url_query: 'resource.url_query',
      resource_type: 'resource.type',
      resource_status: 'resource.status',
      resource_status_group: 'resource.status_group',
      resource_method: 'resource.method'
    },
    fields: {
      resource_size: 'resouce.size',
      duration: 'resource.duration',
      resource_dns: 'resource.dns',
      resource_tcp: 'resource.tcp',
      resource_ssl: 'resource.ssl',
      resource_ttfb: 'resource.ttfb',
      resource_trans: 'resource.trans',
      resource_first_byte: 'resource.firstbyte'
    }
  },
  error: {
    type: RumEventType.ERROR,
    tags: {
      error_source: 'error.source',
      error_type: 'error.type',
      error_handling: 'error.handling',
      resource_url: 'error.resource.url',
      resource_url_host: 'error.resource.url_host',
      resource_url_path: 'error.resource.url_path',
      resource_url_path_group: 'error.resource.url_path_group',
      resource_status: 'error.resource.status',
      resource_status_group: 'error.resource.status_group',
      resource_method: 'error.resource.method'
    },
    fields: {
      error_message: ['string', 'error.message'],
      error_stack: ['string', 'error.stack']
    }
  },
  long_task: {
    type: RumEventType.LONG_TASK,
    tags: {},
    fields: {
      duration: 'long_task.duration'
    }
  },
  action: {
    type: RumEventType.ACTION,
    tags: {
      action_id: 'action.id',
      action_name: 'action.target.name',
      action_type: 'action.type'
    },
    fields: {
      duration: 'action.loading_time',
      action_error_count: 'action.error.count',
      action_resource_count: 'action.resource.count',
      action_long_task_count: 'action.long_task.count'
    }
  },
  browser_log: {
    type: RumEventType.LOGGER,
    tags: {
      error_source: 'error.source',
      error_type: 'error.type',
      error_resource_url: 'resource.url',
      error_resource_url_host: 'resource.url_host',
      error_resource_url_path: 'resource.url_path',
      error_resource_url_path_group: 'resource.url_path_group',
      error_resource_status: 'resource.status',
      error_resource_status_group: 'resource.status_group',
      error_resource_method: 'resource.method',
      action_id: 'user_action.id',
      service: 'service',
      status: 'status'
    },
    fields: {
      message: ['string', 'message']
    }
  }
}
