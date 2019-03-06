;(function (undefined) {
  var _global,
    DEFAULT_TIME = 60,
    BTN_DEF_TEXT = '获取验证码',
    BTN_CLICKED_TEXT = 's',
    BTN_FINISHED_TEXT = '重新获取';
  // 对象合并
  function extend(o, n, override) {
    for(var key in n){
      if(n.hasOwnProperty(key) && (!o.hasOwnProperty(key) || override)){
        o[key]=n[key];
      }
    }
    return o;
  }
  // 自定义一个倒计时功能
  function CountBack (opt) {
    this.opt = opt;
    this._init(opt);
  }

  CountBack.prototype = {
    constuctor: this,
    _init: function (opt) {
      // 默认参数
      var def = {
        btnDefText: BTN_DEF_TEXT,
        btnClickedText: BTN_CLICKED_TEXT,
        btnFinishedText: BTN_FINISHED_TEXT,
        time: DEFAULT_TIME
      };
      this.interval = null;
      this.def = extend(def, opt, true);
      this.target = this.getTarget(this.def.domId);
      this.target.innerText = this.def.btnDefText;
    },
    getTarget: function (domId) {
      if (!domId) throw new Error('CountBack: ', 'domId must not be empty!!');
      var targetDom = document.getElementById(domId);
      if (!targetDom) throw new Error('CountBack: ', 'Target with domId is null!!');
      return targetDom;
    },
    start: function () {
      console.log('CountBack: start....');
      var time = this.def.time;
      var _this = this;
      this.target.disabled = true;
      this.interval = setInterval(function () {
        time--;
        if (time < 1) {
          _this.stop();
          return;
        };
        _this.def.time = time;
        _this.target.innerText = _this.def.time + _this.def.btnClickedText;
      }, 1000);
    },
    stop: function () {
      console.log('CountBack: stop....');
      clearInterval(this.interval);
      this.interval = null;
      this.def.time = this.opt.time || DEFAULT_TIME;
      this.target.innerText = this.def.btnFinishedText;
      this.target.disabled = false;
    }
  }

  // 插件暴露给全局对象
  _global = (function () { return this || (0, eval)('this')}());
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = CountBack;
  } else if (typeof define === 'function' && define.amd) {
    define(function () { return CountBack });
  } else {
    !('CountBack' in _global) && (_global.CountBack = CountBack);
  }
}())
