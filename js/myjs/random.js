var posts=["2018/01/05/1_5_多重循环/","2018/03/05/1_7_算法和二维数组/","2018/05/05/2_6_异常/","2018/04/05/2_5_抽象类和接口/","2018/02/05/1_6_一维数组/","2023/05/27/3_3_输入输出流/","2023/05/27/hello-world/","2023/05/27/redis和mysql数据库同步/","2023/05/27/日志和线程/","2023/05/27/3_4_多线程 (2)/","2023/05/27/3_1_集合框架/","2023/05/27/3_2_实用类/","2023/05/27/3_4_多线程/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};