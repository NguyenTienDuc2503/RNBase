// import I18n from '@src/i18n/i18n';
// function strings() {
//   return {
//     cancel: I18n.t('cancel', {defaultValue: ''}),
//     save: I18n.t('save', {defaultValue: ''}),
//     confirm: I18n.t('confirm', {defaultValue: ''}),
//     notification: I18n.t('notification', {defaultValue: ''}),
//     re_login: I18n.t('re_login', {defaultValue: ''}),
//     try_again: I18n.t('try_again', {defaultValue: ''}),
//     account: I18n.t('account', {defaultValue: ''}),
//     edit: I18n.t('edit', {defaultValue: ''}),
//     order: I18n.t('order', {defaultValue: ''}),
//     pay: I18n.t('pay', {defaultValue: ''}),
//     remove: I18n.t('remove', {defaultValue: ''}),
//     done: I18n.t('done', {defaultValue: ''}),
//     total_price: I18n.t('total_price', {defaultValue: ''}),
//     remove_cart_success: I18n.t('remove_cart_success', {defaultValue: ''}),
//     remove_cart_failed: I18n.t('remove_cart_failed', {defaultValue: ''}),
//     register_success: I18n.t('register_success', {defaultValue: ''}),
//     home: I18n.t('home', {defaultValue: ''}),
//     qr_code: I18n.t('qr_code', {defaultValue: ''}),
//     choose_province: I18n.t('choose_province', {defaultValue: ''}),
//     choose_district: I18n.t('choose_district', {defaultValue: ''}),
//     product: I18n.t('product', {defaultValue: ''}),
//     order_cart: I18n.t('order_cart', {defaultValue: ''}),
//     select: I18n.t('select', {defaultValue: ''}),
//     login: I18n.t('login', {defaultValue: ''}),
//     password_update: I18n.t('password_update', {defaultValue: ''}),
//     register: I18n.t('register', {defaultValue: ''}),
//     to_ignore: I18n.t('to_ignore', {defaultValue: ''}),
//     loading_progress: I18n.t('loading_progress', {defaultValue: ''}),
//     from_library: I18n.t('from_library', {defaultValue: ''}),
//     take_photo: I18n.t('take_photo', {defaultValue: ''}),
//     send: I18n.t('send', {defaultValue: ''}),
//     please_login: I18n.t('please_login', {defaultValue: ''}),
//     cart: I18n.t('cart', {defaultValue: ''}),
//     forgot_password: I18n.t('forgot_password', {defaultValue: ''}),
//     select_all: I18n.t('select_all', {defaultValue: ''}),
//     product_detail: I18n.t('product_detail', {defaultValue: ''}),
//     validate_network_error: I18n.t('validate.network_error', {
//       defaultValue: '',
//     }),
//     validate_network_success: I18n.t('validate.network_success', {
//       defaultValue: '',
//     }),
//     validate_error_user: I18n.t('validate.error_user', {defaultValue: ''}),
//     validate_error: I18n.t('validate.error', {defaultValue: ''}),
//     validate_otp_short: I18n.t('validate.otp_short', {defaultValue: ''}),
//     validate_otp: I18n.t('validate.otp', {defaultValue: ''}),
//     validate_tax_code_length: I18n.t('validate.tax_code_length', {
//       defaultValue: '',
//     }),
//     validate_user_max: I18n.t('validate.user_max', {defaultValue: ''}),
//     validate_user_min: I18n.t('validate.user_min', {defaultValue: ''}),
//     validate_first_name_max: I18n.t('validate.first_name_max', {
//       defaultValue: '',
//     }),
//     validate_first_name_min: I18n.t('validate.first_name_min', {
//       defaultValue: '',
//     }),
//     validate_last_name_max: I18n.t('validate.last_name_max', {
//       defaultValue: '',
//     }),
//     validate_last_name_min: I18n.t('validate.last_name_min', {
//       defaultValue: '',
//     }),
//     validate_require: I18n.t('validate.require', {defaultValue: ''}),
//     validate_email: I18n.t('validate.email', {defaultValue: ''}),
//     validate_user: I18n.t('validate.user', {defaultValue: ''}),
//     validate_phone: I18n.t('validate.phone', {defaultValue: ''}),
//     validate_pass_fail: I18n.t('validate.pass_fail', {defaultValue: ''}),
//     validate_image: I18n.t('validate.image', {defaultValue: ''}),
//     validate_password: I18n.t('validate.password', {defaultValue: ''}),
//     validate_choose_item_product: I18n.t('validate.choose_item_product', {
//       defaultValue: '',
//     }),
//     validate_update_avatar: I18n.t('validate.update_avatar', {
//       defaultValue: '',
//     }),
//     validate_address_gps: I18n.t('validate.address_gps', {defaultValue: ''}),
//     validate_unit_business: I18n.t('validate.unit_business', {
//       defaultValue: '',
//     }),
//     validate_tax_code: I18n.t('validate.tax_code', {defaultValue: ''}),
//     validate_tax_code_error: I18n.t('validate.tax_code_error', {
//       defaultValue: '',
//     }),
//     validate_address_display: I18n.t('validate.address_display', {
//       defaultValue: '',
//     }),
//     validate_district: I18n.t('validate.district', {defaultValue: ''}),
//     validate_address_detail: I18n.t('validate.address_detail', {
//       defaultValue: '',
//     }),
//     validate_working_exp: I18n.t('validate.working_exp', {defaultValue: ''}),
//     placeholder_name: I18n.t('placeholder.name', {defaultValue: ''}),
//     placeholder_doctor: I18n.t('placeholder.doctor', {defaultValue: ''}),
//     placeholder_phone: I18n.t('placeholder.phone', {defaultValue: ''}),
//     placeholder_password: I18n.t('placeholder.password', {defaultValue: ''}),
//     placeholder_confirm_password: I18n.t('placeholder.confirm_password', {
//       defaultValue: '',
//     }),
//     placeholder_code: I18n.t('placeholder.code', {defaultValue: ''}),
//     placeholder_captcha: I18n.t('placeholder.captcha', {defaultValue: ''}),
//     placeholder_otp: I18n.t('placeholder.otp', {defaultValue: ''}),
//     placeholder_present_pass: I18n.t('placeholder.present_pass', {
//       defaultValue: '',
//     }),
//     placeholder_new_pass: I18n.t('placeholder.new_pass', {defaultValue: ''}),
//     placeholder_first_name: I18n.t('placeholder.first_name', {
//       defaultValue: '',
//     }),
//     placeholder_last_name: I18n.t('placeholder.last_name', {
//       defaultValue: '',
//     }),
//     placeholder_birth_month: I18n.t('placeholder.birth_month', {
//       defaultValue: '',
//     }),
//     placeholder_province: I18n.t('placeholder.province', {defaultValue: ''}),
//     placeholder_district: I18n.t('placeholder.district', {defaultValue: ''}),
//     placeholder_ward: I18n.t('placeholder.ward', {defaultValue: ''}),
//     placeholder_gender: I18n.t('placeholder.gender', {defaultValue: ''}),
//     placeholder_address_detail: I18n.t('placeholder.address_detail', {
//       defaultValue: '',
//     }),
//     placeholder_address: I18n.t('placeholder.address', {defaultValue: ''}),
//     placeholder_email: I18n.t('placeholder.email', {defaultValue: ''}),
//     placeholder_address_gps: I18n.t('placeholder.address_gps', {
//       defaultValue: '',
//     }),
//     placeholder_unit_business: I18n.t('placeholder.unit_business', {
//       defaultValue: '',
//     }),
//     placeholder_tax_code: I18n.t('placeholder.tax_code', {defaultValue: ''}),
//     placeholder_address_display: I18n.t('placeholder.address_display', {
//       defaultValue: '',
//     }),
//     placeholder_working_exp: I18n.t('placeholder.working_exp', {
//       defaultValue: '',
//     }),
//     placeholder_insert_code: I18n.t('placeholder.insert_code', {
//       defaultValue: '',
//     }),
//     input_require_email: I18n.t('input_require.email', {defaultValue: ''}),
//     input_require_email_forgot: I18n.t('input_require.email_forgot', {
//       defaultValue: '',
//     }),
//     input_require_phone_forgot: I18n.t('input_require.phone_forgot', {
//       defaultValue: '',
//     }),
//     input_require_name: I18n.t('input_require.name', {defaultValue: ''}),
//     input_require_phone: I18n.t('input_require.phone', {defaultValue: ''}),
//     input_require_password: I18n.t('input_require.password', {
//       defaultValue: '',
//     }),
//     input_require_password_present: I18n.t('input_require.password_present', {
//       defaultValue: '',
//     }),
//     input_require_password_new: I18n.t('input_require.password_new', {
//       defaultValue: '',
//     }),
//     input_require_password_confirm: I18n.t('input_require.password_confirm', {
//       defaultValue: '',
//     }),
//     input_require_code: I18n.t('input_require.code', {defaultValue: ''}),
//     input_require_confirm_password: I18n.t('input_require.confirm_password', {
//       defaultValue: '',
//     }),
//     input_require_otp: I18n.t('input_require.otp', {defaultValue: ''}),
//     input_require_first_name: I18n.t('input_require.first_name', {
//       defaultValue: '',
//     }),
//     input_require_last_name: I18n.t('input_require.last_name', {
//       defaultValue: '',
//     }),
//     input_require_birth_month: I18n.t('input_require.birth_month', {
//       defaultValue: '',
//     }),
//     input_require_gender: I18n.t('input_require.gender', {defaultValue: ''}),
//     input_require_address_gps: I18n.t('input_require.address_gps', {
//       defaultValue: '',
//     }),
//     input_require_unit_business: I18n.t('input_require.unit_business', {
//       defaultValue: '',
//     }),
//     input_require_province: I18n.t('input_require.province', {
//       defaultValue: '',
//     }),
//     input_require_tax_code: I18n.t('input_require.tax_code', {
//       defaultValue: '',
//     }),
//     input_require_tax_code_length: I18n.t('input_require.tax_code_length', {
//       defaultValue: '',
//     }),
//     input_require_address_display: I18n.t('input_require.address_display', {
//       defaultValue: '',
//     }),
//     input_require_district: I18n.t('input_require.district', {
//       defaultValue: '',
//     }),
//     input_require_choose_avatar: I18n.t('input_require.choose_avatar', {
//       defaultValue: '',
//     }),
//     input_require_working_exp: I18n.t('input_require.working_exp', {
//       defaultValue: '',
//     }),
//     input_require_qr_code: I18n.t('input_require.qr_code', {
//       defaultValue: '',
//     }),
//     input_require_ward: I18n.t('input_require.ward', {defaultValue: ''}),
//     label_confirm_code: I18n.t('label.confirm_code', {defaultValue: ''}),
//     label_name: I18n.t('label.name', {defaultValue: ''}),
//     label_phone: I18n.t('label.phone', {defaultValue: ''}),
//     label_password: I18n.t('label.password', {defaultValue: ''}),
//     label_confirm_password: I18n.t('label.confirm_password', {
//       defaultValue: '',
//     }),
//     label_code: I18n.t('label.code', {defaultValue: ''}),
//     label_insert_code: I18n.t('label.insert_code', {defaultValue: ''}),
//     label_address_detail: I18n.t('label.address_detail', {defaultValue: ''}),
//     label_present_pass: I18n.t('label.present_pass', {defaultValue: ''}),
//     label_new_pass: I18n.t('label.new_pass', {defaultValue: ''}),
//     label_first_name: I18n.t('label.first_name', {defaultValue: ''}),
//     label_birth_month: I18n.t('label.birth_month', {defaultValue: ''}),
//     label_province: I18n.t('label.province', {defaultValue: ''}),
//     label_district: I18n.t('label.district', {defaultValue: ''}),
//     label_ward: I18n.t('label.ward', {defaultValue: ''}),
//     label_gender: I18n.t('label.gender', {defaultValue: ''}),
//     label_address: I18n.t('label.address', {defaultValue: ''}),
//     label_email: I18n.t('label.email', {defaultValue: ''}),
//     label_otp: I18n.t('label.otp', {defaultValue: ''}),
//     label_address_gps: I18n.t('label.address_gps', {defaultValue: ''}),
//     label_unit_business: I18n.t('label.unit_business', {defaultValue: ''}),
//     label_tax_code: I18n.t('label.tax_code', {defaultValue: ''}),
//     label_address_display: I18n.t('label.address_display', {
//       defaultValue: '',
//     }),
//     label_working_exp: I18n.t('label.working_exp', {defaultValue: ''}),
//     notify_delete_cart_success: I18n.t('notify.delete_cart_success', {
//       defaultValue: '',
//     }),
//     notify_update_pass_success: I18n.t('notify.update_pass_success', {
//       defaultValue: '',
//     }),
//     notify_register_supplier_success: I18n.t(
//       'notify.register_supplier_success',
//       {defaultValue: ''},
//     ),
//     notify_forgot_pass_success: I18n.t('notify.forgot_pass_success', {
//       defaultValue: '',
//     }),
//     notify_permission_camera: I18n.t('notify.permission_camera', {
//       defaultValue: '',
//     }),
//     type_product: I18n.t('type_product', {defaultValue: ''}),
//     similar: I18n.t('similar', {defaultValue: ''}),
//     sold: I18n.t('sold', {defaultValue: ''}),
//     evaluate: I18n.t('evaluate', {defaultValue: ''}),
//     evaluate_capital: I18n.t('evaluate_capital', {defaultValue: ''}),
//     add_address: I18n.t('add_address', {defaultValue: ''}),
//     set_address_default: I18n.t('set_address_default', {defaultValue: ''}),
//     call_phone: I18n.t('call_phone', {defaultValue: ''}),
//     messenger: I18n.t('messenger', {defaultValue: ''}),
//     zalo: I18n.t('zalo', {defaultValue: ''}),
//     buy: I18n.t('buy', {defaultValue: ''}),
//     add_cart: I18n.t('add_cart', {defaultValue: ''}),
//     list_vouch: I18n.t('list_vouch', {defaultValue: ''}),
//     detail: I18n.t('detail', {defaultValue: ''}),
//     voucher_detail: I18n.t('voucher_detail', {defaultValue: ''}),
//     rank: I18n.t('rank', {defaultValue: ''}),
//     accumulated_point: I18n.t('accumulated_point', {defaultValue: ''}),
//     logout: I18n.t('logout', {defaultValue: ''}),
//     supplier: I18n.t('supplier', {defaultValue: ''}),
//     supplier_decline: I18n.t('supplier_decline', {defaultValue: ''}),
//     supplier_wait: I18n.t('supplier_wait', {defaultValue: ''}),
//     supplier_stop: I18n.t('supplier_stop', {defaultValue: ''}),
//     request_price: I18n.t('request_price', {defaultValue: ''}),
//     delivery_address: I18n.t('delivery_address', {defaultValue: ''}),
//     introduce: I18n.t('introduce', {defaultValue: ''}),
//     change_pass: I18n.t('change_pass', {defaultValue: ''}),
//     confirm_logout: I18n.t('confirm_logout', {defaultValue: ''}),
//     no_update: I18n.t('no_update', {defaultValue: ''}),
//     use_point: I18n.t('use_point', {defaultValue: ''}),
//     voucher: I18n.t('voucher', {defaultValue: ''}),
//     discount_rank: I18n.t('discount_rank', {defaultValue: ''}),
//     update: I18n.t('update', {defaultValue: ''}),
//     sex: I18n.t('sex', {defaultValue: ''}),
//     label_date_of_birth: I18n.t('label_date_of_birth', {defaultValue: ''}),
//     placeholder_date_of_birth: I18n.t('placeholder_date_of_birth', {
//       defaultValue: '',
//     }),
//     choose_ward: I18n.t('choose_ward', {defaultValue: ''}),
//     exp: I18n.t('exp', {defaultValue: ''}),
//     is_builder: I18n.t('is_builder', {defaultValue: ''}),
//     please_select_address: I18n.t('please_select_address', {
//       defaultValue: '',
//     }),
//     navigate_supplier: I18n.t('navigate_supplier', {defaultValue: ''}),
//     member: I18n.t('member', {defaultValue: ''}),
//     sliver: I18n.t('sliver', {defaultValue: ''}),
//     gold: I18n.t('gold', {defaultValue: ''}),
//     diamond: I18n.t('diamond', {defaultValue: ''}),
//     phone_fail: I18n.t('phone_fail', {defaultValue: ''}),
//     search_builder: I18n.t('search_builder', {defaultValue: ''}),
//     receive_infomation: I18n.t('receive_infomation', {defaultValue: ''}),
//     info_account: I18n.t('info_account', {defaultValue: ''}),
//     gift: I18n.t('gift', {defaultValue: ''}),
//     select_gift: I18n.t('select_gift', {defaultValue: ''}),
//     transport_fee: I18n.t('transport_fee', {defaultValue: ''}),
//     payments: I18n.t('payments', {defaultValue: ''}),
//     select_payments: I18n.t('select_payments', {defaultValue: ''}),
//     total_payments: I18n.t('total_payments', {defaultValue: ''}),
//     total_ships: I18n.t('total_ships', {defaultValue: ''}),
//     tax_code: I18n.t('tax_code', {defaultValue: ''}),
//     policy_rank: I18n.t('policy_rank', {defaultValue: ''}),
//     next: I18n.t('next', {defaultValue: ''}),
//     back: I18n.t('back', {defaultValue: ''}),
//     receive_information: I18n.t('receive_information', {defaultValue: ''}),
//     list_empty: I18n.t('list_empty', {defaultValue: ''}),
//     total_money_product: I18n.t('total_money_product', {defaultValue: ''}),
//     select_point: I18n.t('select_point', {defaultValue: ''}),
//     use: I18n.t('use', {defaultValue: ''}),
//     my_point: I18n.t('my_point', {defaultValue: ''}),
//     repay_point: I18n.t('repay_point', {defaultValue: ''}),
//     point_history: I18n.t('point_history', {defaultValue: ''}),
//     type_point: I18n.t('type_point', {defaultValue: ''}),
//     wallet_point: I18n.t('wallet_point', {defaultValue: ''}),
//     history_introduct: I18n.t('history_introduct', {defaultValue: ''}),
//     rights_introduce: I18n.t('rights_introduce', {defaultValue: ''}),
//     recharge_success: I18n.t('recharge_success', {defaultValue: ''}),
//     recharge_fail: I18n.t('recharge_fail', {defaultValue: ''}),
//     history_introduce: I18n.t('history_introduce', {defaultValue: ''}),
//     support: I18n.t('support', {defaultValue: ''}),
//     list_cart_atm: I18n.t('list_cart_atm', {defaultValue: ''}),
//     revenue: I18n.t('revenue', {defaultValue: ''}),
//     solds: I18n.t('solds', {defaultValue: ''}),
//     evalutes: I18n.t('evalutes', {defaultValue: ''}),
//     follow: I18n.t('follow', {defaultValue: ''}),
//     need_confirm: I18n.t('need_confirm', {defaultValue: ''}),
//     need_report: I18n.t('need_report', {defaultValue: ''}),
//     new_order: I18n.t('new_order', {defaultValue: ''}),
//     choose_day: I18n.t('choose_day', {defaultValue: ''}),
//     your_review: I18n.t('your_review', {defaultValue: ''}),
//     are_you_cancel_this_order: I18n.t('are_you_cancel_this_order', {
//       defaultValue: '',
//     }),
//     are_you_deny_this_order: I18n.t('are_you_deny_this_order', {
//       defaultValue: '',
//     }),
//     are_you_confirm_this_order: I18n.t('are_you_confirm_this_order', {
//       defaultValue: '',
//     }),
//     are_you_success_this_order: I18n.t('are_you_success_this_order', {
//       defaultValue: '',
//     }),
//     you_cancel_order_success: I18n.t('you_cancel_order_success', {
//       defaultValue: '',
//     }),
//     you_deny_order_success: I18n.t('you_deny_order_success', {
//       defaultValue: '',
//     }),
//     you_confirm_order_success: I18n.t('you_confirm_order_success', {
//       defaultValue: '',
//     }),
//     you_success_order: I18n.t('you_success_order', {defaultValue: ''}),
//     seen_evaluate: I18n.t('seen_evaluate', {defaultValue: ''}),
//     deny: I18n.t('deny', {defaultValue: ''}),
//     success: I18n.t('success', {defaultValue: ''}),
//     order_detail: I18n.t('order_detail', {defaultValue: ''}),
//     description: I18n.t('description', {defaultValue: ''}),
//     input_info_review: I18n.t('input_info_review', {defaultValue: ''}),
//     pending: I18n.t('pending', {defaultValue: ''}),
//     process: I18n.t('process', {defaultValue: ''}),
//     complete: I18n.t('complete', {defaultValue: ''}),
//     bought: I18n.t('bought', {defaultValue: ''}),
//     waring_status_enterPrise: I18n.t('waring_status_enterPrise', {
//       defaultValue: '',
//     }),
//     validate_error_point: I18n.t('validate_error_point', {defaultValue: ''}),
//     input_require_point: I18n.t('input_require_point', {defaultValue: ''}),
//     error_point: I18n.t('error_point', {defaultValue: ''}),
//     edit_address: I18n.t('edit_address', {defaultValue: ''}),
//     list_address: I18n.t('list_address', {defaultValue: ''}),
//     withdraw_point: I18n.t('withdraw_point', {defaultValue: ''}),
//     withdraw_money: I18n.t('withdraw_money', {defaultValue: ''}),
//     point: I18n.t('point', {defaultValue: ''}),
//     history: I18n.t('history', {defaultValue: ''}),
//     number_different: I18n.t('number_different', {defaultValue: ''}),
//     choose_money_withdraw: I18n.t('choose_money_withdraw', {
//       defaultValue: '',
//     }),
//     is_money: I18n.t('is_money', {defaultValue: ''}),
//     placeholder_money_withdraw: I18n.t('placeholder_money_withdraw', {
//       defaultValue: '',
//     }),
//     list: I18n.t('list', {defaultValue: ''}),
//     choose_bank_receive: I18n.t('choose_bank_receive', {defaultValue: ''}),
//     next_page: I18n.t('next_page', {defaultValue: ''}),
//     add_bank_new: I18n.t('add_bank_new', {defaultValue: ''}),
//     choose_category: I18n.t('choose_category', {defaultValue: ''}),
//     choose_payment: I18n.t('choose_payment', {defaultValue: ''}),
//     invalid_account_number: I18n.t('invalid_account_number', {
//       defaultValue: '',
//     }),
//     max_bank_number: I18n.t('max_bank_number', {defaultValue: ''}),
//     min_bank_number: I18n.t('min_bank_number', {defaultValue: ''}),
//     placeholder_bank_number: I18n.t('placeholder_bank_number', {
//       defaultValue: '',
//     }),
//     no_duration: I18n.t('no_duration', {defaultValue: ''}),
//     time_apply: I18n.t('time_apply', {defaultValue: ''}),
//     exchange_point: I18n.t('exchange_point', {defaultValue: ''}),
//     accumulate_point: I18n.t('accumulate_point', {defaultValue: ''}),
//     instruct: I18n.t('instruct', {defaultValue: ''}),
//     new: I18n.t('new', {defaultValue: ''}),
//     category: I18n.t('category', {defaultValue: ''}),
//     see_more: I18n.t('see_more', {defaultValue: ''}),
//     send_again_otp: I18n.t('send_again_otp', {defaultValue: ''}),
//     otp_mess: I18n.t('otp_mess', {defaultValue: ''}),
//     time_otp_expired: I18n.t('time_otp_expired', {defaultValue: ''}),
//     delivery_info: I18n.t('delivery_info', {defaultValue: ''}),
//     order_info: I18n.t('order_info', {defaultValue: ''}),
//     select_address: I18n.t('select_address', {defaultValue: ''}),
//     order_success: I18n.t('order_success', {defaultValue: ''}),
//     cancel_order_success: I18n.t('cancel_order_success', {defaultValue: ''}),
//     cancel_order_fail: I18n.t('cancel_order_fail', {defaultValue: ''}),
//     normal: I18n.t('normal', {defaultValue: ''}),
//     worker: I18n.t('worker', {defaultValue: ''}),
//     agent: I18n.t('agent', {defaultValue: ''}),
//     search: I18n.t('search', {defaultValue: ''}),
//     no_address_order: I18n.t('no_address_order', {defaultValue: ''}),
//     delete: I18n.t('delete', {defaultValue: ''}),
//     code_scan: I18n.t('code_scan', {defaultValue: ''}),
//     insert_code: I18n.t('insert_code', {defaultValue: ''}),
//     insert_code_line: I18n.t('insert_code_line', {defaultValue: ''}),
//     validate_name: I18n.t('validate_name', {defaultValue: ''}),
//     total_money: I18n.t('total_money', {defaultValue: ''}),
//     payment_transfer: I18n.t('payment_transfer', {defaultValue: ''}),
//     payment_cod: I18n.t('payment_cod', {defaultValue: ''}),
//     transfer_warning: I18n.t('transfer_warning', {defaultValue: ''}),
//     content_transfer: I18n.t('content_transfer', {defaultValue: ''}),
//     account_holder: I18n.t('account_holder', {defaultValue: ''}),
//     bank_code: I18n.t('bank_code', {defaultValue: ''}),
//     confirm_cancel_order: I18n.t('confirm_cancel_order', {defaultValue: ''}),
//     scratch_card: I18n.t('scratch_card', {defaultValue: ''}),
//     give_point: I18n.t('give_point', {defaultValue: ''}),
//     list_gift: I18n.t('list_gift', {defaultValue: ''}),
//     change: I18n.t('change', {defaultValue: ''}),
//     select_telecom: I18n.t('select_telecom', {defaultValue: ''}),
//     history_change_cart: I18n.t('history_change_cart', {defaultValue: ''}),
//     history_change_gift: I18n.t('history_change_gift', {defaultValue: ''}),
//     denominations: I18n.t('denominations', {defaultValue: ''}),
//     gift_exchange: I18n.t('gift_exchange', {defaultValue: ''}),
//     change_card_success: I18n.t('change_card_success', {defaultValue: ''}),
//     type_card: I18n.t('type_card', {defaultValue: ''}),
//     number_seri: I18n.t('number_seri', {defaultValue: ''}),
//     code_card: I18n.t('code_card', {defaultValue: ''}),
//     number_point: I18n.t('number_point', {defaultValue: ''}),
//     validate_point: I18n.t('validate_point', {defaultValue: ''}),
//     message: I18n.t('message', {defaultValue: ''}),
//     validate_note: I18n.t('validate_note', {defaultValue: ''}),
//     update_account_success: I18n.t('update_account_success', {
//       defaultValue: '',
//     }),
//     member_rank: I18n.t('member_rank', {defaultValue: ''}),
//     manual_user: I18n.t('manual_user', {defaultValue: ''}),
//     paid: I18n.t('paid', {defaultValue: ''}),
//     unPaid: I18n.t('unPaid', {defaultValue: ''}),
//     confirmed: I18n.t('confirmed', {defaultValue: ''}),
//     product_new: I18n.t('product_new', {defaultValue: ''}),
//     product_hot: I18n.t('product_hot', {defaultValue: ''}),
//   };
// }
// export default strings;

export const strings = () => {};
