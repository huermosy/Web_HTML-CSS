<h1>使用HTML构建内容</h1>
<h2>文档与网站架构</h2>
学习<br/>
的几个新的标签

<hr>
有
无语义元素： <div> 块级无语元素义 <span>行级无语义元素
语义化标记: <header>页眉    <nav>:导航栏  <main>:主内容  <aside》侧边栏>
<footer>:页脚

<blockquote>   <q>标签的使用 配合cite</q></blockquote>


<!-- 标准简单日期 -->
<time datetime="2016-01-20">20 January 2016</time>
<!-- 只包含年份和月份-->
<time datetime="2016-01">January 2016</time>
<!-- 只包含月份和日期 -->
<time datetime="01-20">20 January</time>
<!-- 只包含时间，小时和分钟数 -->
<time datetime="19:30">19:30</time>
<!-- 还可包含秒和毫秒 -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- 日期和时间 -->
<time datetime="2016-01-20T19:30">7.30pm, 20 January 2016</time>
<!-- 含有时区偏移值的日期时间 -->
<time datetime="2016-01-20T19:30+01:00"
  >7.30pm, 20 January 2016 is 8.30pm in France</time
>
<!-- 提及特定周 -->
<time datetime="2016-W04">The fourth week of 2016</time>
