import { StackActions, CommonActions } from '@react-navigation/core'

let _navigator: any

function setTopLevelNavigator(navigatorRef: any) {
  _navigator = navigatorRef
}

function navigate(name: string, params?: any) {
  if (_navigator) _navigator.dispatch(CommonActions.navigate(name, params))
}
function replace(name: string, params?: any) {
  if (_navigator) _navigator.dispatch(StackActions.replace(name, params))
}
function push(name: string, params?: any) {
  if (_navigator) _navigator.dispatch(StackActions.push(name, params))
}
function goBack() {
  if (_navigator) _navigator.dispatch(CommonActions.goBack())
}
function pop(count: number) {
  if (_navigator) _navigator.dispatch(StackActions.pop(count || 1))
}
function dismiss() {
  if (_navigator) {
    _navigator.dispatch(StackActions.popToTop())
    goBack()
  }
}
function navigateWithKey(name: string, params?: any, key?: string) {
  if (_navigator)
    _navigator.dispatch(CommonActions.navigate({ name, params, key }))
}
function reset(params: any) {
  if (_navigator) _navigator.dispatch(CommonActions.reset(params))
}

export default {
  dismiss,
  navigate,
  setTopLevelNavigator,
  goBack,
  push,
  replace,
  pop,
  navigateWithKey,
  reset
}
