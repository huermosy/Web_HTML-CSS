<style>
html {
  //background-color: #ff003a;
}

h1 {
  text-align: center;
  display: block;
}

h2 {
  border:2px ridge #ff000f;
  padding: 10px;
  margin: 15px;
  background-color: #ff00ff;
  color: #00ff00;   /* 通常是文本颜色 */
  display: inline;
}

h3{
  margin: 10px;
  width: 160px;
  /*border: outset;*/
  color: #ff1233;   /* 文本颜色居然没起作用*/
}

h4{
  text-shadow: 2px 2px 4px #ff003f;
  border: outset;
}

h5{
  border: groove;
}

div {
  margin:5px;
  padding: 3px;
}

ul {
  // display: flex;
}

</style>

<!doctype html>
<html lang="en-US">
<h1> 大前端学习 </h1>
<h2> 配置环境 </h2>
<h3> 第一章 </h3>
<h4> 1. 安装基础软件 <h4>
<p> Web浏览器及版本控制器git等</p>

#### 2.浏览互联网
网页、网站、web服务器及搜索引擎区别
网页: 能够显示在web浏览器上的文档，也称为”页面“；
网站: 网页组成，以各种方式连接，也称为”站点“；
web服务器: 互联网上托管一个或多个网站的计算机；
搜索引擎：是一个帮助用户搜索到其他网站的网站

什么是URL？
网络上所有可用网页独一无二的地址，通过URL访问到；

#### 3. 代码编辑器

#### 4. 处理文件
##### 网站应该使用什么结构？
测试网站的常用结构：
index.html：主页内容，用户第一次访问网站看到文字及图片
images文件夹：网站上使用所有图片
styles文件夹：提供CSS样式，文本及背景色
scripts文件夹：给网站提供交互功能的javaScript代码

#### 5. 命令行速成
Glitch.com   test网址 支持访问本机 练习终端命令
Prettier 是一款专门为前端开发人员设计的代码格式化工具，专注于基于 javascript 的语言，
npm 是 JavaScript 世界里最为流行的包管理工具，同时也是 Node.js 的默认包管理器
##### 兴趣使然，更多工具，进程查看器：当某些东西使cpu风扇行为像一个喷气发动机，可以学习使用它；并且可以看出错程序有用 TODO

<hr>

### 第二章 HTML基础
#### 1. 网站是怎样的
#### 2. HTML基础
**什么是HTML**
HTML是一种用于定义内容结构的标记语言。可以由一段文字、图片及超链接组成。能够设置文字字体等；
My cat is very grumpy
![HTML](./learn_images/1.png)
<p>My cat is very grumpy</p>
记忆方式： p -> paragraph  段落
以上组成方式： 1. 开始标签； 2. 结束标签  3. 内容  4. 元素



**有值属性包括**
1. 属性与元素名称之间的一个空格
2. 属性名，后接一个等号
3. 属性值，''一对引号包围
<img src="./learn_images/2.png" alt="有值属性">

<strong>嵌套元素</strong>
将一个元素嵌套在另一个元素中,
<p>My cat is <strong>very</strong> grumpy(脾气坏的).</p>
<strong>空元素</strong>
不包含任何内容的叫做空元素； 更好理解应该是<strong>空标签</strong>/<strong>单标签</strong>。
比如：

&lt;img&gt;&lt;br&gt;以及&lt;input&gt;

<img src="./test-site/images/deepseek.jpeg" alt="My test image"/>

##### HTML文档详解
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>My test page</title>
  </head>
  <body>
    <img src="images/deepseek.jpeg" alt="test deepseek image">
  </body>
</html>

+ <!doctype html>:老生流传下来的，关联HTML文档。现在作用有限，禁忌你说明这是个HTML文档
+ <html></html>: 根元素，包含页面所有内容，还有lang属性，设置语种；
+ <head></head>: 在HTML包含但不想向用户显示的容器；CSS、页面描述，字符集声明等；
+ <meta charset="utf-8">: 字符集编码使用utf-8,包括世界绝大多数书写字符可以处理；
+ <meta name="viewport" content="width=device-widt">: 保证浏览器以视口宽度渲染，避免浏览器以视口更宽宽度渲染，使页面缩小；
+ <title></title>: 设置页面标题，显示在浏览器标签页上；<strong>但是有些网页上看有些特殊字符处理</strong>
+ <body></body>: 希望让用户访问页面时看到的所有内容，包括文本、图像、视频、游戏等其他内容；

#### <strong>image</strong>图像元素
alt（alternative可替代）属性用于描述文本，image不能被用户看到或者错误显示
<img src="" alt="图片路径无效，你看不到图片"> 

#### 标题（Heading)
<!-- 4个级别的标题 -->    HTML的注释
<h1>主标题</h1>
<h2>顶层标题</h2>
<h3>子标题</h3>
<h4>次标题</h4>
标题对于<strong>无障碍</strong>和<strong>搜索引擎优化</strong>很有意义


##### p段落pragraph
<p>
<img src="./test-site/images/deepseek.jpeg" alt="My test image"/>
</p>
<p>哈哈</p>

##### 列表：无序列表（ul)与有序列表（ol)。每个项目列表项都有一个<li>标记; 记忆：order和unorder
<p> 有一些水果 </p>
<ul>
  <li>苹果</li>
  <li>香蕉</li>
  <li>橘子</li>
</ul>
<p> 去哪里吃呢 </p>

<p> 有一些水果 </p>
<ol>
  <li>苹果</li>
  <li>香蕉</li>
  <li>橘子</li>
</ol>
<p> 去哪里吃呢 </p>

##### 链接
<a href="https://www.baidu.com/">百度</a> 记忆： hypertext reference 超文本链接

<h3> 第三章 CSS基础 </h3>
<h4> 什么是CSS </h4>
<p>
CSS(层叠样式表)为web添加内容样式的代码；
CSS样式表语言
</p>
CSS在Html中怎么被引用： <link href="css path" rel="stylesheet";>
怎么记忆？ hypetext refence   relationship关系，固有格式为stylesheet  就是样式表，也就是html和css之间的关系，这个是<strong>写死的关系。</strong>  <strong>ps:其实这个QSS就是从CSS这里借鉴过来的</strong>

<h5> 规则集的组成 </h5>
<img src="" alt="">
p{
  color:red;
}
以上整个被称为规则集，
<ol>
<li>选择器</li>
<li>属性与属性值</li>
<li>声明</li>
</ol>

<h5> 不同类型选择器 </h5>
<ul>
<li>元素选择器</li>
<li>属性选择器，拥有特定属性的元素</li>
<li>ID选择器，id唯一</li>
<li>类选择器，类可以有多个</li>
<li>伪类选择器，某些特定状态：如hover</li>
<ul>

盒子模型
</html>


<h2> JavaScript基础 </h2>
<span> 是什么：</span> <div>为网站添加交互性的编程语言</div>
<p>div:division全称，块级元素；span：跨度，内联元素，不会换行</p>
<p>javascript最流行的web技术之一</p>

<h4>变量</h4>
<p>
let myVariable;     // 变量的声明
<div>数据类型</div>
<ul>
<li>字符串</li>
<li>布尔</li>
<li>对象  如：const var = document.querySelector("标签")</li>
<li>数组<li>
</ul>
</p>

<h4>函数</h4>
<p>如：document.querySelector() 、  alert()输出信息等</p>
<p> 事件函数:   addEventListener;   onclick 搭配lambda函数 </p>

<h2>Web的工作原理</h2>
<h3>万维网是如何工作的</h3>
<ul>
<li>网络连接:允许web收发数据；商店购物街道</li>
<li>TCP/IP：传输控制协议和互联网协议；交通工具</li>
<li>DNS：域名系统；地址簿</li>
<li>HTTP：超文本传输协议；应用层协议，下订单时说的话一样</li>
<li>组成文件：代码及资源</li>
</ul>
<p>发生了什么？ 客户端根据DNS找到Server，client发送HTTP请求到client，需要一份server的副本到client，这条消息及c与s之间的传输都是通过TCP/Ip协议的；server同意，发送200OK然后将网页以数据包形式给client，拿到后浏览器渲染</p>
<h3>浏览器如何加载网页</h3>
<p>HTML -> 解析后转换为DOM树（文档对象模型）树状结构。某些文件在解析时会触发更多HTTP请求</p>
<p>CSS -> 将CSS样式规则排序到不同的”桶“中，浏览器渲染树，附加到节点进行渲染</p>
<p>javascript -> 页面上所有jsp都可以被解析、解释、编译、执行，在渲染之前影响到最后结果；比如往DOM添加节点/修改节点</p>