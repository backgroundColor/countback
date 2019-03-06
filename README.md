# countback
注册时 发送验证码

## API

```
 // 安装
 npm i countback

```

```
 /*
  * domId 目标button的id（必填）
  * btnDefText 目标button的默认显示（选填，默认值：获取验证码）
  * btnClickedText 目标button的点击后显示（选填，默认为s，为拼接字段，如：59s）
  * btnFinishedText 目标button点击事件完成后显示文案（选填，默认值：重新发送）
  * time 倒计时事件，单位值秒（选填，默认值： 60）
 */
 var sendCodeFn = new CountBack({
     domId: 'submitBtn',    
     btnDefText: '发送验证码',
     btnClickedText: 's',
     btnFinishedText: '再次发送',
     time: 60
   });

   /*
    * start 开始倒计时 （倒计时开始时，dom元素有disabled 属性时，会触发disabled=true）
    * stop  结束倒计时 （倒计时结束时，dom元素有disabled 属性时，会触发disabled=fales）
   */

   document.getElementById('submitBtn').onclick = function () {
     sendCodeFn.start();
     sendCodeFn.stop();
   }

   ```
