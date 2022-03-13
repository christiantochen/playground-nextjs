export type Authentication = {
  accessToken: string
}

export type User = {
  id: number
  organization_id: number
  email: string
  //   rbac_role_group_id: 416
  created_by: number
  updated_by: number
  created_at: Date
  updated_at: Date
  //   reset_token: null
  //   reset_token_expired: null
  is_deleted: boolean
  profile: UserProfile
  group: UserGroup
  //   organization: {
  //     id: 185
  //     name: 'Warung Leko'
  //     rbac_role_level_id: 3
  //     merchant_key: 'HQ-1-185-1567742419588'
  //     cms_merchant_key: null
  //     address: 'cityloft sudirman'
  //     tax_inclusive_mode: 'value'
  //     tax_inclusive: null
  //     location: null
  //     lat: '-6.209023999999999'
  //     lon: '106.81839919999993'
  //     created_at: '2019-09-06T04:00:19.000Z'
  //     updated_at: '2021-06-01T10:19:22.000Z'
  //     created_by: 72
  //     updated_by: 72
  //     organization_id: 1
  //     tax_type: null
  //     tax: null
  //     country_id: 97
  //     chain_display_mode_id: 2
  //     default_image: null
  //     tax_rule_id: 100020
  //     view_table_row: 100
  //     view_display_mode: null
  //     language_id: 8
  //     mc_language_id: 8
  //     default_item_stock: 1
  //     default_category_status: 1
  //     is_kitchen_printer: 0
  //     emenu_theme: 1
  //     is_deleted: 0
  //     term_condition: null
  //     privacy: null
  //     more_info: null
  //     description: null
  //     time_zone: null
  //     postcode: null
  //     phone: null
  //     whatsapp: null
  //     tier_price_id: null
  //     tier_tbd_id: null
  //     tier_menu_id: null
  //     tier_setting_id: null
  //     tier_payment_id: null
  //     currency_type: null
  //     sku_header_text: null
  //     website: null
  //     is_inclusive_gst: null
  //     support_mail: ''
  //     is_live: null
  //     is_tabsquare_restaurant: null
  //     certificate: null
  //     pushwoosh_appilcation_code: null
  //     is_show_pictures: null
  //     special_section_title: null
  //     special_section_image: null
  //     special_section_content: null
  //     limit_message: 0
  //     used_message: 0
  //     last_send_push: null
  //     app_ios_link: null
  //     fb_post_image: null
  //     fb_post_link: null
  //     fb_post_text: null
  //     tnc_r: null
  //     fb_post_title: null
  //     fb_page_body: null
  //     fb_page_title: null
  //     is_share_fb: null
  //     is_user_skipq: 0
  //     is_user_emenu: 0
  //     is_start_favourite: 0
  //     is_default_request: 0
  //     default_request: null
  //     ui_type: 2
  //     default_tax_rule_id: null
  //     is_override_app_setting: 0
  //     is_hide: 0
  //     restaurant_image: 'restaurant_default_image.png'
  //     banner_image: null
  //     feedback_emailer_type: 0
  //     template_sms_payment: null
  //     masterId: null
  //     rounded_type: null
  //     rounded_value: null
  //     is_buzzer_number: 0
  //     is_fr: 0
  //     is_ri: 0
  //     is_vo: 0
  //     is_void_order_send_to_pos: 0
  //     is_pos_order: 1
  //     is_sms: 0
  //     is_label_printer: null
  //     is_receipt_printer: null
  //     is_reprint: null
  //     is_remove_decimal: null
  //     is_bussing_table: 0
  //     is_open_item: 0
  //     rounding_rules_id: null
  //     is_hq: 0
  //     cashback_client_secret: '0'
  //     price_range: null
  //     postal_code: null
  //     cuisine: null
  //     country_code: 'SG'
  //     decimal_separator: '.'
  //     thousand_separator: ','
  //     stripe_commission_fees: null
  //     stripe_commission_amount: null
  //     stripe_sub_account: null
  //     estimate_order_prepare_time: null
  //     reject_time: 5
  //     gpay_enable: null
  //     is_auto_accept_order: 1
  //     is_item_tax: 0
  //     is_special_request: null
  //     invoice_no_max_digit: 0
  //     country_phone_code: null
  //     version: '2021-06-01T10:19:22.000Z'
  //     max_introduction_images: null
  //     max_information_images: null
  //     max_android_help: null
  //     max_android_discover_banner: null
  //     view_mode_promo: null
  //     is_idp: 0
  //     is_close_table_after_payment: null
  //     time_sending_feedback: null
  //     is_show_cash_payment_for_skipque: null
  //     is_show_cash_payment_for_phoneordering: null
  //     url_survey_feedback: null
  //     rider_enabled: null
  //     email: null
  //     is_food_court: 0
  //     state: null
  //     city: null
  //     unit: null
  //     is_rounding_generate_confirm: 0
  //     google_map_url: null
  //     smart_queue: 0
  //     default_crm_ui: 1
  //     country: {
  //       id: 97
  //       iso: 'ID'
  //       iso3: 'IDN'
  //       iso_number: 360
  //       name: 'Indonesia'
  //       language: 'Bahasa Indonesia'
  //       capital: 'Jakarta'
  //       continent: 'AS'
  //       currency: 'IDR'
  //       currency_name: 'Rupiah'
  //       phone: '62'
  //       status: 1
  //       option_type: 2
  //       weight: -97
  //     }
  //     parent: {
  //       default_image: 'default-1.png'
  //     }
  //     languages: []
  //     language: {
  //       id: 8
  //       name: 'Thai'
  //       g_code: 'th'
  //       file_name: 'th.json'
  //       image: null
  //       is_active: 1
  //       is_deleted: 0
  //       created_at: '2020-07-05T12:27:16.000Z'
  //       updated_at: '2020-07-05T12:27:16.000Z'
  //       created_by: 1
  //       updated_by: 1
  //     }
  //   }
}

export type UserProfile = {
  //     id: 188
  //     user_id: 280
  //     name: 'brand@leko.com'
  //     phone: null
  //     address: null
  //     email_support: null
  //     description: null
  //     profile_id: 188
}
export type UserGroup = {
  // id: 416
  // organization_id: 185
  // name: 'Admin'
  // description: ''
  // rbac_role_group_id: 416
}
export type UserOrganization = {}
