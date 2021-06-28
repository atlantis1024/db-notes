(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{425:function(t,s,a){"use strict";a.r(s);var e=a(15),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mongodb-运维"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-运维"}},[t._v("#")]),t._v(" MongoDB 运维")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#mongodb-%E5%AE%89%E8%A3%85"}},[t._v("MongoDB 安装")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#windows"}},[t._v("Windows")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#linux"}},[t._v("Linux")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E8%AE%BE%E7%BD%AE%E7%94%A8%E6%88%B7%E5%90%8D%E5%AF%86%E7%A0%81"}},[t._v("设置用户名、密码")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%A4%87%E4%BB%BD%E5%92%8C%E6%81%A2%E5%A4%8D"}},[t._v("备份和恢复")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E6%95%B0%E6%8D%AE%E5%A4%87%E4%BB%BD"}},[t._v("数据备份")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E6%95%B0%E6%8D%AE%E6%81%A2%E5%A4%8D"}},[t._v("数据恢复")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA"}},[t._v("导入导出")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%AF%BC%E5%85%A5%E6%93%8D%E4%BD%9C"}},[t._v("导入操作")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%AF%BC%E5%87%BA%E6%93%8D%E4%BD%9C"}},[t._v("导出操作")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[t._v("参考资料")])])]),t._v(" "),a("h2",{attrs:{id:"mongodb-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-安装"}},[t._v("#")]),t._v(" MongoDB 安装")]),t._v(" "),a("h3",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),a("p",[t._v("（1）下载并解压到本地")]),t._v(" "),a("p",[t._v("进入官网下载地址："),a("a",{attrs:{href:"https://www.mongodb.com/try/download/community",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("官方下载地址")]),a("OutboundLink")],1),t._v(" ，选择合适的版本下载。")]),t._v(" "),a("p",[t._v("（2）创建数据目录")]),t._v(" "),a("p",[t._v("MongoDB 将数据目录存储在 db 目录下。但是这个数据目录不会主动创建，我们在安装完成后需要创建它。")]),t._v(" "),a("p",[t._v("例如："),a("code",[t._v("D:\\Tools\\Server\\mongodb\\mongodb-4.4.0\\data\\db")])]),t._v(" "),a("p",[t._v("（3）运行 MongoDB 服务")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("mongod --dbpath D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("mongodb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("mongodb-4.4.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("db\n")])])]),a("p",[t._v("（4）客户端连接 MongoDB")]),t._v(" "),a("p",[t._v("可以在命令窗口中运行 mongo.exe 命令即可连接上 MongoDB")]),t._v(" "),a("p",[t._v("（5）配置 MongoDB 服务")]),t._v(" "),a("h3",{attrs:{id:"linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" Linux")]),t._v(" "),a("p",[t._v("（1）使用安装包安装")]),t._v(" "),a("p",[t._v("安装前我们需要安装各个 Linux 平台依赖包。")]),t._v(" "),a("p",[a("strong",[t._v("Red Hat/CentOS：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo yum install libcurl openssl\n")])])]),a("p",[a("strong",[t._v('Ubuntu 18.04 LTS ("Bionic")/Debian 10 "Buster"：')])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo apt-get install libcurl4 openssl\n")])])]),a("p",[a("strong",[t._v('Ubuntu 16.04 LTS ("Xenial")/Debian 9 "Stretch"：')])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo apt-get install libcurl3 openssl\n")])])]),a("p",[t._v("（2）创建数据目录")]),t._v(" "),a("p",[t._v("默认情况下 MongoDB 启动后会初始化以下两个目录：")]),t._v(" "),a("ul",[a("li",[t._v("数据存储目录：/var/lib/mongodb")]),t._v(" "),a("li",[t._v("日志文件目录：/var/log/mongodb")])]),t._v(" "),a("p",[t._v("我们在启动前可以先创建这两个目录并设置当前用户有读写权限：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /var/lib/mongo\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /var/log/mongodb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("whoami")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" /var/lib/mongo     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置权限")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("whoami")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" /var/log/mongodb   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置权限")]),t._v("\n")])])]),a("p",[t._v("（3）运行 MongoDB 服务")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("mongod --dbpath /var/lib/mongo --logpath /var/log/mongodb/mongod.log --fork\n")])])]),a("p",[t._v("打开 /var/log/mongodb/mongod.log 文件看到以下信息，说明启动成功。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tail -10f /var/log/mongodb/mongod.log")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-07-09T12:20:17.391+0800 I  NETWORK  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("listener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Listening on /tmp/mongodb-27017.sock\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-07-09T12:20:17.392+0800 I  NETWORK  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("listener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Listening on "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-07-09T12:20:17.392+0800 I  NETWORK  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("listener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" waiting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" connections on port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),t._v("\n")])])]),a("p",[t._v("（4）客户端连接 MongoDB")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /usr/local/mongodb4/bin\n./mongo\n")])])]),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/dunwu/linux-tutorial/tree/master/codes/linux/soft",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux 安装脚本"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"设置用户名、密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置用户名、密码"}},[t._v("#")]),t._v(" 设置用户名、密码")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" use admin\nswitched to db admin\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" db.createUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pwd"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"roles"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"role"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userAdminAnyDatabase"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"db"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nSuccessfully added user: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"roles"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"role"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userAdminAnyDatabase"')]),t._v(",\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"db"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h2",{attrs:{id:"备份和恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备份和恢复"}},[t._v("#")]),t._v(" 备份和恢复")]),t._v(" "),a("h3",{attrs:{id:"数据备份"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据备份"}},[t._v("#")]),t._v(" 数据备份")]),t._v(" "),a("p",[t._v("在 Mongodb 中，使用 "),a("code",[t._v("mongodump")]),t._v(" 命令来备份 MongoDB 数据。该命令可以导出所有数据到指定目录中。")]),t._v(" "),a("p",[a("code",[t._v("mongodump")]),t._v(" 命令可以通过参数指定导出的数据量级转存的服务器。")]),t._v(" "),a("p",[t._v("mongodump 命令语法如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mongodump -h dbhost -d dbname -o dbdirectory\n")])])]),a("ul",[a("li",[a("p",[t._v("-h：MongDB 所在服务器地址，例如：127.0.0.1，当然也可以指定端口号：127.0.0.1:27017")])]),t._v(" "),a("li",[a("p",[t._v("-d：需要备份的数据库实例，例如：test")])]),t._v(" "),a("li",[a("p",[t._v("-o：备份的数据存放位置，例如：c:\\data\\dump，当然该目录需要提前建立，在备份完成后，系统自动在 dump 目录下建立一个 test 目录，这个目录里面存放该数据库实例的备份数据。")])])]),t._v(" "),a("p",[a("code",[t._v("mongodump")]),t._v(" 命令可选参数列表如下所示：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("语法")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("实例")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("mongodump --host HOST_NAME --port PORT_NUMBER")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("该命令将备份所有 MongoDB 数据")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("mongodump --host runoob.com --port 27017")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("mongodump --dbpath DB_PATH --out BACKUP_DIRECTORY")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("mongodump --dbpath /data/db/ --out /data/backup/")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("mongodump --collection COLLECTION --db DB_NAME")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("该命令将备份指定数据库的集合。")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("mongodump --collection mycol --db test")])])])]),t._v(" "),a("p",[t._v("【示例】备份全量数据")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ mongodump -h "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 --port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),t._v(" -o test2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T11:55:58.086+0800    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v(" dumping test.company "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18801")]),t._v(" documents"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T11:56:00.725+0800    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#############...........]  test.people  559101/1000000  (55.9%)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T11:56:03.725+0800    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("###################.....]  test.people  829496/1000000  (82.9%)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T11:56:06.725+0800    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#####################...]  test.people  884614/1000000  (88.5%)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T11:56:08.088+0800    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("########################]  test.people  1000000/1000000  (100.0%)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T11:56:08.350+0800    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v(" dumping test.people "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),t._v(" documents"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("【示例】备份指定数据库")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("mongodump -h "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 --port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),t._v(" -d admin -o test3\n")])])]),a("h3",{attrs:{id:"数据恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据恢复"}},[t._v("#")]),t._v(" 数据恢复")]),t._v(" "),a("p",[t._v("mongodb 使用 "),a("code",[t._v("mongorestore")]),t._v(" 命令来恢复备份的数据。")]),t._v(" "),a("p",[a("code",[t._v("mongorestore")]),t._v(" 命令语法如下：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mongorestore -h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("hostname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(":port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -d dbname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[a("code",[t._v("--host <:port>")]),t._v(", "),a("code",[t._v("-h <:port>")]),t._v("：MongoDB 所在服务器地址，默认为： localhost:27017")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("--db")]),t._v(" , "),a("code",[t._v("-d")]),t._v(" ：需要恢复的数据库实例，例如：test，当然这个名称也可以和备份时候的不一样，比如 test2")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("--drop")]),t._v("：恢复的时候，先删除当前数据，然后恢复备份的数据。就是说，恢复后，备份后添加修改的数据都会被删除，慎用哦！")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("<path>")]),t._v("：mongorestore 最后的一个参数，设置备份数据所在位置，例如：c:\\data\\dump\\test。你不能同时指定 "),a("code",[t._v("<path>")]),t._v(" 和 "),a("code",[t._v("--dir")]),t._v(" 选项，"),a("code",[t._v("--dir")]),t._v(" 也可以设置备份目录。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("--dir")]),t._v("：指定备份的目录。你不能同时指定 "),a("code",[t._v("<path>")]),t._v(" 和 "),a("code",[t._v("--dir")]),t._v(" 选项。")])])]),t._v(" "),a("p",[t._v("【示例】")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ mongorestore -h "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 --port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),t._v(" -d "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" --dir "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" --drop\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T11:46:16.053+0800    finished restoring test.tweets "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("966")]),t._v(" documents, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" failures"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T11:46:18.256+0800    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("###.....................]  test.people  164MB/1.03GB  (15.6%)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T11:46:21.255+0800    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("########................]  test.people  364MB/1.03GB  (34.6%)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T11:46:24.256+0800    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("############............]  test.people  558MB/1.03GB  (53.0%)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T11:46:27.255+0800    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("###############.........]  test.people  700MB/1.03GB  (66.5%)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T11:46:30.257+0800    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("###################.....]  test.people  846MB/1.03GB  (80.3%)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T11:46:33.255+0800    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("######################..]  test.people  990MB/1.03GB  (94.0%)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T11:46:34.542+0800    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("########################]  test.people  1.03GB/1.03GB  (100.0%)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T11:46:34.543+0800    no indexes to restore\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T11:46:34.543+0800    finished restoring test.people "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),t._v(" documents, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" failures"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T11:46:34.544+0800    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000966")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" restored successfully. "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" failed to restore.\n")])])]),a("h2",{attrs:{id:"导入导出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入导出"}},[t._v("#")]),t._v(" 导入导出")]),t._v(" "),a("p",[a("code",[t._v("mongoimport")]),t._v(" 和 "),a("code",[t._v("mongoexport")]),t._v(" 并不能可靠地保存所有的富文本 BSON 数据类型，因为 JSON 仅能代表一种 BSON 支持的子集类型。因此，数据用这些工具导出导入或许会丢失一些精确程度。")]),t._v(" "),a("h3",{attrs:{id:"导入操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入操作"}},[t._v("#")]),t._v(" 导入操作")]),t._v(" "),a("p",[t._v("在 MongoDB 中，使用 "),a("code",[t._v("mongoimport")]),t._v(" 来导入数据。 默认情况下，"),a("code",[t._v("mongoimport")]),t._v(" 会将数据导入到本地主机端口 27017 上的 MongoDB 实例中。要将数据导入在其他主机或端口上运行的 MongoDB 实例中，请通过包含 "),a("code",[t._v("--host")]),t._v(" 和 "),a("code",[t._v("--port")]),t._v(" 选项来指定主机名或端口。 使用 "),a("code",[t._v("--drop")]),t._v(" 选项删除集合（如果已经存在）。 这样可以确保该集合仅包含您要导入的数据。")]),t._v(" "),a("p",[t._v("语法格式：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("mongoimport -h IP --port 端口 -u 用户名 -p 密码 -d 数据库 -c 表名 --type 类型 --headerline --upsert --drop 文件名\n")])])]),a("p",[t._v("【示例】导入表数据")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ mongoimport -h "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 --port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),t._v(" -d "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" -c book --drop test/book.dat\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T10:53:56.359+0800    connected to: mongodb://127.0.0.1:27017/\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T10:53:56.372+0800    dropping: test.book\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T10:53:56.628+0800    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" imported successfully. "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" failed to import.\n")])])]),a("p",[t._v("【示例】从 json 文件中导入表数据")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ mongoimport -h "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 --port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),t._v(" -d "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" -c student --upsert test/student.json\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T11:02:55.907+0800    connected to: mongodb://127.0.0.1:27017/\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T11:02:56.068+0800    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" imported successfully. "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" failed to import.\n")])])]),a("p",[t._v("【示例】从 csv 文件中导入表数据")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ mongoimport -h "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 --port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),t._v(" -d "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" -c product --type csv --headerline test/product.csv\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T11:07:49.788+0800    connected to: mongodb://127.0.0.1:27017/\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T11:07:51.051+0800    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" imported successfully. "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" failed to import.\n")])])]),a("p",[t._v("【示例】导入部分表字段数据")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ mongoimport -h "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 --port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),t._v(" -d "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" -c product --type json --upsertFields name,price test/product.json\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T11:14:05.410+0800    connected to: mongodb://127.0.0.1:27017/\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T11:14:05.612+0800    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" imported successfully. "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" failed to import.\n")])])]),a("h3",{attrs:{id:"导出操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导出操作"}},[t._v("#")]),t._v(" 导出操作")]),t._v(" "),a("p",[t._v("语法格式：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("mongoexport -h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IP"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --port "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("端口"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -u "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("用户名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("密码"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("数据库"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("表名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("字段"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("条件导出"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --csv -o "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("文件名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("ul",[a("li",[a("code",[t._v("-f")]),t._v("：导出指字段，以逗号分割，"),a("code",[t._v("-f name,email,age")]),t._v(" 导出 name,email,age 这三个字段")]),t._v(" "),a("li",[a("code",[t._v("-q")]),t._v("：可以根查询条件导出，"),a("code",[t._v('-q \'{ "uid" : "100" }\'')]),t._v(" 导出 uid 为 100 的数据")]),t._v(" "),a("li",[a("code",[t._v("--csv")]),t._v("：表示导出的文件格式为 csv 的，这个比较有用，因为大部分的关系型数据库都是支持 csv，在这里有共同点")])]),t._v(" "),a("p",[t._v("【示例】导出整张表")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ mongoexport -h "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 --port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),t._v(" -d "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" -c product -o test/product.dat\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T10:44:23.161+0800    connected to: mongodb://127.0.0.1:27017/\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T10:44:23.177+0800    exported "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" records\n")])])]),a("p",[t._v("【示例】导出表到 json 文件")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ mongoexport -h "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 --port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),t._v(" -d "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" -c product --type json -o test/product.json\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T10:49:52.735+0800    connected to: mongodb://127.0.0.1:27017/\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T10:49:52.750+0800    exported "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" records\n")])])]),a("p",[t._v("【示例】导出表中部分字段到 csv 文件")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ mongoexport -h "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 --port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),t._v(" -d "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" -c product --type csv -f name,price -o test/product.csv\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T10:47:33.160+0800    connected to: mongodb://127.0.0.1:27017/\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-11T10:47:33.176+0800    exported "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" records\n")])])]),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.mongodb.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB 官网"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/mongodb/mongo",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB Github"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://university.mongodb.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB 官方免费教程"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.runoob.com/mongodb/mongodb-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB 教程"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);