fullstack 全栈
Front Enginner
Backend  /api

restful api
浏览器与服务器通信方式的一种设计风格

- restful 的世界里， 一切皆资源
- url 来唯一定位资源的识别符
    /posts/:id/comments
- 加一条comment 怎么办？
{
    id: 2,
    body: 'hello',
    postId: 1
}
/comments  设计好URL   POST     发送评论
- 设计有意义的URL
    资源  状态改变
    POST /comments 加一条评论  id: 2
    修改一些内容
    PUT   /comments/2  body: 'no'

    操作   SQL 方法    HTTP的动词
    CREATE  INSERT    POST
    READ    SELECT    GET
    UPDATE  UPDATE    PUT/PATCH   {body: '', postId: 1} (将完整的东西交给PUT，才可以修改，相当于全部替换。   PATCH只要给一部分，需要修改的部分)
    DLETE   DLETE     DLETE