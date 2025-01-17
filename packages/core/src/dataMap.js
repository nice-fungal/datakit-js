import { RumEventType } from './helper/enums'
export var commonTags = {
  sdk_name: '_gc.sdk_name',
  sdk_version: '_gc.sdk_version',
  app_id: 'application.id',
  env: 'env',
  service: 'service',
  version: 'version',
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
  view_name: 'view.path', // 冗余一个字段
  view_path_group: 'view.path_group',
  view_url_query: 'view.url_query'
}
export var commonFields = {
  action_id: 'action.id',
  action_ids: 'action.ids',
  view_in_foreground: 'view.in_foreground',
  display: 'display',
  session_has_replay: 'session.has_replay',
  is_login: 'user.is_login',
  page_states: '_gc.page_states'
}
// 需要用双引号将字符串类型的field value括起来， 这里有数组标示[string, path]
export var dataMap = {
  view: {
    type: RumEventType.VIEW,
    tags: {
      view_loading_type: 'view.loading_type',
      view_apdex_level: 'view.apdex_level',
      view_privacy_replay_level: 'privacy.replay_level'
    },
    fields: {
      is_active: 'view.is_active',
      session_replay_stats: '_gc.replay_stats',
      session_is_active: 'session.is_active',
      view_error_count: 'view.error.count',
      view_resource_count: 'view.resource.count',
      view_long_task_count: 'view.long_task.count',
      view_action_count: 'view.action.count',
      first_contentful_paint: 'view.first_contentful_paint',
      largest_contentful_paint: 'view.largest_contentful_paint',
      largest_contentful_paint_element_selector:
        'view.largest_contentful_paint_element_selector',
      cumulative_layout_shift: 'view.cumulative_layout_shift',
      cumulative_layout_shift_target_selector:
        'view.cumulative_layout_shift_target_selector',
      first_input_delay: 'view.first_input_delay',
      loading_time: 'view.loading_time',
      dom_interactive: 'view.dom_interactive',
      dom_content_loaded: 'view.dom_content_loaded',
      dom_complete: 'view.dom_complete',
      load_event: 'view.load_event',
      first_input_time: 'view.first_input_time',
      first_input_target_selector: 'view.first_input_target_selector',
      first_paint_time: 'view.fpt',
      interaction_to_next_paint: 'view.interaction_to_next_paint',
      interaction_to_next_paint_target_selector:
        'view.interaction_to_next_paint_target_selector',
      resource_load_time: 'view.resource_load_time',
      time_to_interactive: 'view.tti',
      dom: 'view.dom',
      dom_ready: 'view.dom_ready',
      time_spent: 'view.time_spent',
      first_byte: 'view.first_byte',
      frustration_count: 'view.frustration.count',
      custom_timings: 'view.custom_timings'
    }
  },
  resource: {
    type: RumEventType.RESOURCE,
    tags: {
      trace_id: '_gc.trace_id',
      span_id: '_gc.span_id',
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
      duration: 'resource.duration',
      resource_size: 'resource.size',
      resource_encode_size: 'resource.encode_size',
      resource_render_blocking_status: 'resource.render_blocking_status',
      resource_dns: 'resource.dns',
      resource_tcp: 'resource.tcp',
      resource_ssl: 'resource.ssl',
      resource_ttfb: 'resource.ttfb',
      resource_trans: 'resource.trans',
      resource_redirect: 'resource.redirect',
      resource_first_byte: 'resource.firstbyte',
      resource_dns_time: 'resource.dns_time',
      resource_download_time: 'resource.download_time',
      resource_first_byte_time: 'resource.first_byte_time',
      resource_connect_time: 'resource.connect_time',
      resource_ssl_time: 'resource.ssl_time',
      resource_redirect_time: 'resource.redirect_time'
    }
  },
  error: {
    type: RumEventType.ERROR,
    tags: {
      error_id: 'error.id',
      trace_id: '_gc.trace_id',
      span_id: '_gc.span_id',
      error_source: 'error.source',
      error_type: 'error.type',
      error_handling: 'error.handling'
      //   resource_url: 'error.resource.url',
      //   resource_url_host: 'error.resource.url_host',
      //   resource_url_path: 'error.resource.url_path',
      //   resource_url_path_group: 'error.resource.url_path_group',
      //   resource_status: 'error.resource.status',
      //   resource_status_group: 'error.resource.status_group',
      //   resource_method: 'error.resource.method'
    },
    fields: {
      error_message: ['string', 'error.message'],
      error_stack: ['string', 'error.stack'],
      error_causes: ['string', 'error.causes']
    }
  },
  long_task: {
    type: RumEventType.LONG_TASK,
    tags: {
      long_task_id: 'long_task.id'
    },
    fields: {
      duration: 'long_task.duration'
    }
  },
  action: {
    type: RumEventType.ACTION,
    tags: {
      action_type: 'action.type'
    },
    fields: {
      action_name: 'action.target.name',
      duration: 'action.loading_time',
      action_error_count: 'action.error.count',
      action_resource_count: 'action.resource.count',
      action_frustration_types: 'action.frustration.type',
      action_long_task_count: 'action.long_task.count',
      action_target: '_gc.action.target',
      action_position: '_gc.action.position'
    }
  },
  telemetry: {
    type: 'telemetry',
    fields: {
      status: 'telemetry.status',
      message: ['string', 'telemetry.message'],
      type: 'telemetry.type',
      error_stack: ['string', 'telemetry.error.stack'],
      error_kind: ['string', 'telemetry.error.kind']
    }
  },
  browser_log: {
    type: RumEventType.LOGGER,
    tags: {
      error_source: 'error.source',
      error_type: 'error.type',
      error_resource_url: 'http.url',
      error_resource_url_host: 'http.url_host',
      error_resource_url_path: 'http.url_path',
      error_resource_url_path_group: 'http.url_path_group',
      error_resource_status: 'http.status_code',
      error_resource_status_group: 'http.status_group',
      error_resource_method: 'http.method',
      action_id: 'user_action.id',
      service: 'service',
      status: 'status'
    },
    fields: {
      message: ['string', 'message']
    }
  }
}
