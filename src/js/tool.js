const Tool = {
  //工具汇总
  setLocal: (key, val) => localStorage.setItem(key, JSON.stringify(val)), // 设置localStorage
  getLocal: key => JSON.parse(localStorage.getItem(key)), // 获取localStorage
  fullScreen: dom => {
    //屏幕全屏工具
    let element = dom || document.documentElement;
    element.requestFullScreen && element.requestFullScreen();
    element.webkitRequestFullScreen && element.webkitRequestFullScreen();
    element.mozRequestFullScreen && element.mozRequestFullScreen();
  },
  shuffle: arr => {
    let i = arr.length;
    while (i) {
      let j = Math.floor(Math.random() * i--);
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  },
  delKey: (list, val, elseList) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i] === val) list.splice(i, 1);
    }
    if (!elseList) return all.tool.setLocal("list", all.tool.shuffle(list));
    return all.tool.setLocal(elseList, all.tool.shuffle(list));
  },
  savePaizeList: (stage, name, prize) => {
    let prizeList = all.tool.getLocal("prizeList");
    if (!prizeList) prizeList = {};
    if (!prizeList[stage]) prizeList[stage] = [];
    prizeList[stage].push({
      name: name,
      prize: "" + prize
    });
    all.tool.setLocal("prizeList", prizeList);
  }
};
export default Tool;
