// 返回上一页 挂载到vue的原型对象上
export function goBack(val = -1) {
    this.$router.go(val)
}