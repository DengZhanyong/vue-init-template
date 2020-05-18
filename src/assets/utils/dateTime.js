module.exports = {
  nowTime() {
    var now = new Date()
    let [year, month, day] = [now.getFullYear(), now.getMonth(), now.getDate()]
    return `${year}-${month}-${day}`
  }
}