## 清除浮动的几种方法
1. 在父元素底部加上一行代码   <div style="clear:left"></div> 用both也可以
2. 在父元素css中加上
{
    float: left;
}
3. 使用伪类 after， 给父元素div添加一个clearFix的class类
 .clearFix::after{
            content: "";
            clear:both;
            display: block;
        }
4. 利用BFC 简称（块级格式化山下文）的效果来弥补父级容器的高度塌陷
.content{
            overflow: hidden;auto;scroll;
        }
5. 尼古拉斯大师 方法，把父容器的display设置成table，可以创建一个匿名表格单元，直接触发BFC效果
.content{
            display: table;
        }