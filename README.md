# jquery.box
### 效果
 ![box.png](http://qjzd.qiniudn.com/Fkgz9SRyK7N1Kg1APindK88EC7cC)
### 依赖
jquery-1.11.2.min.js
jquery.mousewheel.min.js
jquery.jscrollpane.min.js
jquery.jscrollpane.css
### 使用
引用css
`<link rel="stylesheet" type="text/css" href="box.css"/>`
引用js
`<script type="text/javascript" src="jquery.box.js"></script>`
### 基本方法
```
<div style="display:none" id="box">
    <p>您好, 我是弹窗</p>
</div>
$("#box").box({title: "标题"});
```
### 高级用法
```
$.QjzdBox({
	 width: 820,
     height:380,
     title:'标题'
});
```
