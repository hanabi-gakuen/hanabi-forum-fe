function vueVerify (VueComponent) {
  expect(typeof VueComponent.props).toEqual('object')
  expect(typeof VueComponent.components).toEqual('object')
}

export default {
  vueVerify
}
