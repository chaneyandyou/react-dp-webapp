# react-dp-webapp

这个一个react+react-router+redux+webpack的webapp实战项目，最主要是熟悉了解react+redux的开发模式。

# 安装启动
```
git clone https://github.com/chaneyandyou/react-dp-webapp.git

cd react-dp-webapp

npm install 

npm start

npm run mock	//使用了koa模拟后台接口

```

# 关于智能组件和木偶组件
这是用 React 做系统设计时的两个非常重要的概念。虽然在 React 中，所有的单位都叫做“组件”，但是通过以上例子，我们还是将它们分别放在了``./app/containers``和``./app/components``两个文件夹中。为何要分开呢？

<strong>智能组件</strong> 在日常开发中，我们也简称“页面”。为何说它“智能”，因为它只会做一些很聪明的事儿，脏活累活都不干。它只对数据负责，只需要获取了数据、定义好数据操作的相关函数，然后将这些数据、函数直接传递给具体实现的组件即可。

<strong>木偶组件</strong> 这里“木偶”一词用的特别形象，它总是被人拿线牵着。它从智能组件（或页面）那里接受到数据、函数，然后就开始做一些展示工作，它的工作就是把拿到的数据展示给用户，函数操作开放给用户。至于数据内容是什么，函数操作是什么，它不关心。

# 项目截图
<img src="https://github.com/duxianwei520/react/blob/master/screenshots/login.png" width="704" height="561"/> 

# 图片403报错说明
应该是cnblog 进行了防盗链，实际项目中，换成自己的图片即可。




