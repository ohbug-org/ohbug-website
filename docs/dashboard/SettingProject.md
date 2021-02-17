---
title: 项目设置
metaTitle: 项目设置 - Ohbug Docs
metaDescription: 项目设置用于对项目进行管理。
---

# 项目设置

项目设置用于对项目进行管理。

![setting-project](/images/setting-project.jpg)

## 设置

可以对项目基础信息进行修改。

`apiKey` 可在设置页面进行查询，点击复制按钮可复制 `apiKey`。

## 通知

### 通知规则

要使用通知功能首先需要配置指定通知规则。

![setting-notification-rules](/images/setting-notification-rules.jpg)

#### 新建通知规则

![setting-notification-rules-new](/images/setting-notification-rules-new.jpg)

目前 Ohbug 支持设定区间的方式触发通知：

- 区间：当 Issue 达到所填的区间时触发通知任务。
- 白名单：第一栏下拉选择[事件类型](../library/Events/#type)，第二栏输入框输入匹配的事件信息（支持正则）
- 黑名单名单：输入内容同白名单，当黑白名单同时匹配到事件时，先处理白名单，若符合白名单匹配则发送通知。
- 级别：用于通知内容的类型判断，将出现在通知的标题栏。
- 静默期：通常每种通知规则 30 分钟最多通知一次。请合理配置通知规则，防止通知过度。

### 通知设置

![setting-notification-setting](/images/setting-notification-setting.jpg)

Ohbug 支持通过 `邮件通知` `浏览器通知` `第三方通知` 三种方式派发通知消息。

#### 邮件通知

默认使用项目管理员邮箱作为默认通知目标，可进行修改增删，最多支持三个邮件。

#### 浏览器通知

浏览器通知目前仅支持为一个账号进行通知，且由于 Chrome 浏览器的通知服务器被神秘力量阻拦，暂不支持。Firefox 浏览器可用。

#### 第三方通知（推荐）

![setting-notification-setting-new](/images/setting-notification-setting-new.jpg)

##### 钉钉

1. 点击客户端左边的头像，选择**机器人管理**。
2. 选择**自定义**并点击**添加**，进入配置页。
3. 填写机器人名字，并选择添加到的群组。
4. 安全设置一栏选择自定义关键词，填入 `Ohbug事件`
5. 点击完成获取到 Webhook 地址。
6. 回到 Ohbug 控制台，在添加第三方的链接栏填入刚获取的 Webhook 地址。
7. （可选）负责人栏点击加号按钮，输入需要通知的人的手机号

##### 企业微信

1. 选择要接受消息的群。
2. PC 端右键选择**添加群机器人**，创建机器人后可获得 Webhook 地址 / 移动端进入群，点击右上角的头像图标进入群设置，选择群机器人点击**添加**，创建机器人获得 Webhook 地址。
3. 回到 Ohbug 控制台，在添加第三方的链接栏填入刚获取的 Webhook 地址。
4. （可选）负责人栏点击加号按钮，输入需要通知的人的手机号
