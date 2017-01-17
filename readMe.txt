记录下踩过的坑

1.click事件 缩写 是@click 不是 :click
2.props:['departments','roles','userInfo'] 写成 props:['departments,roles,userInfo']
3. data 写成 date 导致一直取不到数据;
4.events 写成event
5.chrome调试比firebug 检查错误能力强?
6.test
7.新增加菜单需要到user/roleModal.vue 去添加菜单编码 在执行一次

1.新建工程
  根目录文件 
   dist 打包输出文件目录 可以在webpack.config 配置
   src 源文件目录 
   package.json npm init生成
   webpack.config.js 拷贝一份 
   index.html 入口页面
   node_modules 依赖的库 
   webpack 打包命令
   /*
$ webpack --config XXX.js   //使用另一份配置文件（比如webpack.config2.js）来打包

$ webpack --watch   //监听变动并自动打包

$ webpack -p    //压缩混淆脚本，这个非常非常重要！

$ webpack -d    //生成map映射文件，告知哪些模块被最终打包到哪里了*/

  