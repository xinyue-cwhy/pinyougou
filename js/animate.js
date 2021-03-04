//缓动动画
function move(obj, mixlenght, callback) {
  obj.timer = setInterval(() => {
    var step = (mixlenght - obj.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if (obj.offsetLeft == mixlenght) {
      clearInterval(obj.timer);
      // if (callback) { callback(); }
      callback && callback();
    }
    obj.style.left = (obj.offsetLeft + step) + 'px';
  }, 15);
}