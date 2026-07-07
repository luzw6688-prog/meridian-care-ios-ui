# Meridian Care AI Massage App 最新版需求 PRD

版本：V1.1.0
更新时间：2026-06-26

## 1. 产品概述

Meridian Care 是一款面向西方用户的 AI 经络按摩打卡 App。产品通过 Apple 登录、AI 计划定制、订阅解锁、每日自助按摩引导、打卡记录与 Wellness Journey 健康树成长体系，帮助用户建立轻量、稳定、可持续的 self-care 习惯。

产品定位为 wellness / self-care 工具，不做医疗诊断，不承诺疾病治疗结果，不替代医生建议。

核心理念：

Every wellness session helps your tree grow. Every step helps you become healthier.

中文表达：

每一次养生，都会滋养你的健康树；每一步坚持，都让你成为更好的自己。

## 2. 目标用户

- 希望通过短时自助按摩改善睡眠、疲劳、压力、颈肩紧绷、消化状态或循环状态的用户。
- 偏好简洁、温暖、西方 wellness 审美的用户。
- 需要低门槛、可在家完成、每天 3-10 分钟的健康习惯用户。
- 愿意为 AI 个性化按摩计划、步骤引导、打卡成长反馈、历史记录和长期成就系统付费的用户。

## 3. 产品目标

- 用 3 步完成 AI 个性化按摩计划定制。
- 让用户选择的目标影响计划内容、首页展示、按摩步骤和预期变化。
- 在 AI 生成计划节点触发订阅墙，提高付费转化。
- 取消底部导航，首页与打卡结合为一个核心模块，降低操作复杂度。
- 用自然周展示本周打卡记录，不再以“计划天数”表达按摩计划。
- 用 100 天 Wellness Journey 健康树成长体系承载长期留存。
- 通过里程碑弹窗、分享弹窗和 100 天总结增强成就感与传播。

## 4. 核心流程

1. 用户进入 App。
2. 使用 Sign in with Apple 登录。
3. 进入计划定制流程。
4. 第一步选择改善目标。
5. 第二步根据目标选择当前状态。
6. 第三步确认养生目标、建议按摩部位和每日时间。
7. 点击 Generate plan。
8. 展示 AI 制定动效：AI is creating your personalized wellness check-in plan。
9. 若未订阅，动效结束后弹出订阅付费墙。
10. 用户可关闭付费墙进入未订阅浏览态。
11. 用户订阅后进入计划结果页。
12. 点击 Start using 时出现 iOS 风格通知授权提示。
13. 用户选择 Allow 或 Set Up Later。
14. 进入首页，查看计划、自然周打卡记录、Wellness Tree 和今日打卡入口。
15. 点击 Check In 进入按摩引导。
16. 每个按摩步骤前有 3 秒准备倒计时。
17. 正式按摩倒计时可点击暂停或继续。
18. 完成打卡后返回首页，首页显示今日已完成，并点亮本周对应日期。
19. 若达成 Day 1 / 3 / 7 / 15 / 30 / 60 / 100 里程碑，弹出 Wellness Achievement。
20. 里程碑弹窗后进入分享弹窗，引导邀请朋友加入。
21. Day 100 达成后弹出完整 Journey 总结，授予 Tree of Life 勋章，并引导 Plant a New Tree。

## 5. 信息架构

当前 MVP 取消底部导航，仅保留一个首页核心模块。

首页包含：

- Welcome / 用户头像入口。
- 当前 AI 养生计划标题。
- 自然周打卡记录入口。
- Wellness Tree 健康树入口。
- 首页插画。
- 今日按摩卡片。
- Check In / Check In Again 入口。
- Retune Plan / 重新定制计划入口。

二级页面与弹窗：

- 计划定制页。
- AI 生成动效页。
- 订阅付费墙。
- 计划结果页。
- 通知授权弹窗。
- 打卡历史页。
- Wellness Journey 里程碑详情页。
- Wellness Achievement 阶段弹窗。
- Check-in 分享弹窗。
- iPhone 系统分享模拟弹窗。
- 设置弹窗。
- 账号注销确认弹窗。
- Day 100 Journey Complete 弹窗。

暂缓功能：

- 泡茶养生打卡。
- 养生内容/咨询模块。
- 调理趋势模块。
- 体检报告上传正式能力。
- 医疗诊断、处方建议或疾病治疗承诺。

## 6. 登录与计划定制

### 6.1 登录

- 登录方式：Sign in with Apple。
- 登录后直接进入计划定制流程。
- 首次进入不前置订阅墙。

### 6.2 第一步：选择改善目标

页面标题方向：

What would you like to improve most?

选项：

- 🌙 Better Sleep
- ⚡ More Energy
- 🧘 Less Stress
- 💆 Neck & Shoulder Relief
- 🌿 Better Digestion
- 🩸 Improve Circulation

规则：

- 单选。
- 默认选中 Better Sleep。
- 切换目标后，第二步问题、第三步建议按摩部位、首页计划、按摩步骤和预期变化同步更新。

### 6.3 第二步：选择当前状态

第二步根据第一步目标动态变化。

- Better Sleep：询问过去 7 天睡眠质量。
- More Energy：询问最近精力状态。
- Less Stress：询问当前压力状态。
- Neck & Shoulder Relief：询问颈肩状态。
- Better Digestion：询问消化状态。
- Improve Circulation：询问循环状态。

规则：

- 每个问题提供 3 个单选项。
- 默认选中第一个。
- 当前状态用于 AI 生成计划和后续埋点分析。

### 6.4 第三步：确认计划设置

展示内容：

- Wellness Goal：用户选择的目标。
- Suggested massage area：AI 建议按摩部位。
- Daily time：3 分钟、5 分钟、10 分钟。

规则：

- 默认时间为 5 分钟。
- 用户选择时间后，首页今日按摩时长同步更新。
- 点击 Generate plan 后进入 AI 生成动效页。

### 6.5 AI 生成动效

页面文案：

- AI is creating your personalized wellness check-in plan
- Analyzing your goal, current status, and daily time.

跳转规则：

- 已订阅用户：动效结束后进入计划结果页。
- 未订阅用户：动效结束后弹出订阅付费墙。

## 7. 目标与计划联动

用户选择的目标必须影响以下内容：

- 计划结果页标题。
- 首页 Your Wellness Plan 标题。
- 今日按摩卡片标题。
- 今日按摩说明。
- 建议按摩部位。
- Expected change 文案。
- 按摩步骤名称。
- 每个步骤的按摩说明。
- 每个步骤的倒计时时长。

目标对应示例：

| 目标 | 计划标题 | 示例按摩方向 |
| --- | --- | --- |
| Better Sleep | Head & Neck Meridian Massage | 太阳穴、颈侧、耳后、腕部安神点 |
| More Energy | Shoulder & Palm Energy Massage | 肩部、掌心、腕部、指尖 |
| Less Stress | Calm Palm Meridian Massage | 掌心、内腕、虎口、指尖 |
| Neck & Shoulder Relief | Neck & Shoulder Meridian Massage | 颈侧、肩井、枕骨下方、腕部 |
| Better Digestion | Abdomen & Hand Meridian Massage | 掌心预热、顺时针揉腹、掌心、膝下点位 |
| Improve Circulation | Hand & Foot Circulation Massage | 掌心、腕部、指尖、足心 |

内容边界：

- 只描述轻量 self-care 感受。
- 不使用 cure、treat、heal 等医疗承诺表达。
- 不声称治疗疾病或改变医学指标。

## 8. 订阅付费墙

### 8.1 触发时机

- 首次计划定制完成，AI 生成动效结束且用户未订阅。
- 未订阅浏览态点击 Subscribe now。
- 设置中点击订阅情况。

### 8.2 关闭规则

- 付费墙顶部使用 Close，不使用 Back。
- 用户关闭后进入未订阅浏览态。
- 未订阅状态可浏览 App，但核心计划、按摩引导和打卡数据展示为缺省或订阅引导。

### 8.3 订阅方案

Monthly：

- $9.90/month。
- CTA：Start membership。

Annual：

- 突出 $4.16/month。
- 弱化展示 $49.90 billed yearly。
- 提供 3-day free trial。
- CTA：Start 3-day free trial。

交互：

- 月订阅和年订阅可点击切换。
- 当前选择态需要明显。
- 选择月订阅后，下方说明文案按月订阅变化。
- 选择年订阅后，下方说明文案按免费试用和年度订阅变化。
- 不展示 Cancel anytime。

### 8.4 订阅权益

权益区域视觉上合并为一个卡片，内部保留三条权益，每条前带小图标：

- Personalized massage plan：根据目标、状态和时间生成按摩计划。
- Guided meridian massage：提供步骤、点位高亮、倒计时引导。
- Progress insights：提供自然周打卡记录、历史足迹和 Wellness Journey 成长反馈。

### 8.5 底部链接

付费墙底部展示：

- Restore Purchase · Terms · Privacy Policy

## 9. 未订阅浏览态

用户关闭订阅墙后可进入 App 浏览。

首页展示：

- Not subscribed。
- Subscribe to start daily check-ins。
- 说明：Your plan is ready. Subscribe to unlock guided massage and begin today’s check-in。
- 按钮：Subscribe now。
- 按钮：Retune plan。

规则：

- 未订阅用户不能进入按摩引导。
- 未订阅用户不能产生有效打卡。
- 未订阅状态下，历史记录、计划内容和成长反馈展示缺省内容或订阅引导。

## 10. 首页与打卡

### 10.1 首页布局

首页参考西方 wellness App 风格，整体干净、温暖、紧凑。

展示结构：

- Welcome Kevin / 头像入口。
- Your Wellness Plan。
- 当前目标，例如 Better Sleep。
- 自然周打卡记录入口。
- Wellness Tree 入口。
- 主题插画。
- 今日按摩卡片。
- Check In / Check In Again 按钮。

### 10.2 自然周打卡记录

规则：

- 按自然周展示。
- 每天用一个点或日期标记。
- 完成当天打卡后点亮对应日期。
- 未打卡日期不点亮。
- 过了自然周后进入新的一周。
- 用户可点击入口查看历史记录。

### 10.3 打卡历史二级页

页面目标：

- 展示用户过往打卡足迹。
- 体现长期坚持感。

展示内容：

- 当前周记录。
- 过往周记录。
- 总打卡次数。
- 每次打卡的目标、时间、按摩计划标题。
- 常驻分享入口。

交互：

- 页面内容超出时内部滚动。
- 返回按钮回到首页。
- 分享入口点击后弹出 Check-in 分享弹窗。

## 11. 按摩引导

### 11.1 进入规则

- 用户点击首页 Check In 后，首页今日卡片区域消失，替换为按摩引导流程。
- 打卡页面只专注于按摩引导，不展示重复完成按钮。

### 11.2 引导内容

每个计划由若干按摩步骤组成。

单步骤展示：

- Step X / X。
- 按摩点名称。
- 按摩说明。
- 手部或身体部位示意。
- 当前按摩区域高亮。
- 倒计时。

### 11.3 准备倒计时

规则：

- 每个具体经络按摩倒计时前增加准备时间。
- 准备时间为 3 秒。
- 从一个按摩步骤切换到下一个按摩步骤时，也先进入 3 秒准备倒计时。

### 11.4 正式倒计时

规则：

- 正式按摩倒计时时间根据用户选择的每日时长和步骤配置计算。
- 用户点击计时器可暂停。
- 再次点击计时器继续。
- 不暂停时倒计时持续运行。

### 11.5 完成打卡

完成后：

- 返回首页。
- 首页标注今日计划已完成。
- 打卡模块显示今日已完成。
- 用户可选择再次进行今日打卡内容。
- 本周对应日期点亮。
- Wellness Tree 进度推进。

## 12. Wellness Journey 健康树成长系统

### 12.1 设计定位

Wellness Journey 是产品的长期留存系统，不只是打卡奖励。

成长体系由四层构成：

- Wellness Journey：100 天健康旅程。
- Wellness Tree：树木视觉成长。
- Wellness Achievement：阶段成就反馈。
- New Journey：完成后开启新的旅程。

核心表达：

- 树木成长是视觉反馈。
- 用户成长是心理反馈。
- 树只是载体，真正成长的是用户自己。

### 12.2 成长周期

一个完整 Wellness Journey 为 100 天。

里程碑如下：

| 里程碑 | 树木阶段 | 成长名称 | 用户感知 |
| --- | --- | --- | --- |
| Day 1 | 🌱 | Seed Planted | 开启健康旅程 |
| Day 3 | 🌿 | First Leaves | 建立习惯 |
| Day 7 | 🌳 | Young Tree | 开始成长 |
| Day 15 | 🌲 | Thriving Tree | 坚持带来改变 |
| Day 30 | 🌸 | Blooming Tree | 养成稳定习惯 |
| Day 60 | 🍎 | Fruit Tree | 收获健康成果 |
| Day 100 | 🌳✨ | Tree of Life | 完成一次完整健康旅程 |

### 12.3 首页入口

首页展示：

- Wellness Tree · Day X。
- 当前阶段名称。
- 100 天进度条。
- X / 100 Days。
- Milestones 入口。

示例：

- Wellness Tree · Day 27。
- Blooming Tree。
- 27 / 100 Days。

点击后进入 Wellness Journey 二级页。

### 12.4 Wellness Journey 二级页

页面使用时间轴结构。

展示规则：

- 已解锁阶段显示真实图标、阶段名称和说明。
- 未解锁阶段显示问号。
- 未解锁阶段提示 Reach X days to reveal。
- 内容超出时页面内部滚动。

阶段示例：

- 🌱 Day 1 / Seed Planted / Unlocked。
- 🌿 Day 3 / First Leaves / Unlocked。
- ? Day 60 / ? / Reach 60 days to reveal。
- ? Day 100 / ? / Complete your Wellness Journey。

### 12.5 阶段弹窗

每到一个里程碑，完成打卡后弹出 Wellness Achievement。

Day 1：

- 标题：🌱 Your Wellness Journey Begins。
- 正文：Every wellness session helps your tree grow. Take care of yourself, and your tree will flourish.

Day 3：

- 标题：🌿 First Leaves。
- 正文：Small habits create lasting change.

Day 7：

- 标题：🌳 One Week Stronger。
- 正文：You're building a routine your future self will thank you for.

Day 15：

- 标题：🌲 15 Days of Wellness。
- 正文：Consistency is becoming your superpower.

Day 30：

- 标题：🌸 One Month of Wellness。
- 正文：Your healthy habits are starting to bloom.

Day 60：

- 标题：🍎 Fruit Tree。
- 正文：The care you invested is now bearing fruit.

Day 100：

- 进入 Journey Complete 弹窗。

动效：

- 树木阶段使用轻量生长动画。
- 弹窗使用轻量弹出动画。
- Day 100 使用生命树发光动效。

## 13. 100 天总结与 New Journey

### 13.1 Day 100 完成弹窗

标题：

🏆 Congratulations!

正文：

You completed your first Wellness Journey, built a healthier routine, and grew your Wellness Tree into a Tree of Life.

展示数据：

- 🌳 Tree of Life。
- 100 Days Completed。
- 126 Wellness Sessions。
- 612 Minutes Practiced。

勋章：

- 🏅 Tree of Life。
- Awarded for completing a 100-day Wellness Journey.

CTA：

- 🌱 Plant a New Tree。

### 13.2 New Journey

点击 Plant a New Tree 后：

- Journey 计数进入下一轮。
- 首页回到 Day 0。
- 用户开始新的 Wellness Tree。
- 已完成的 Journey 和 Tree of Life 勋章未来可沉淀到个人主页 Achievement Collection。

后续可扩展：

- Tree of Life。
- Tree of Balance。
- Tree of Calm。
- Tree of Vitality。

## 14. 分享功能

### 14.1 分享类型

分享分为两类：

- Check-in 分享。
- App 分享。

### 14.2 Check-in 分享触发

触发场景：

- 用户首次完成打卡后。
- 每到一个 Wellness Journey 里程碑后。
- 打卡历史页常驻分享入口点击后。

分享弹窗内容：

- 当前里程碑标题。
- 用户累计打卡天数。
- 当前达成的 Wellness Achievement。
- 邀请朋友一起加入。
- 分享到 Instagram。
- 分享到 TikTok。
- More：调起 iPhone 系统分享组件。

Day 1 分享：

- 标题：🌱 I started my wellness journey today!
- 正文：I planted my first Wellness Tree today. Every healthy habit helps it grow. Join me and let's grow healthier together.
- CTA：Join My Journey。

其他阶段分享：

- Day 3：🌿 My Wellness Tree has started to grow!
- Day 7：🌳 One week stronger!
- Day 15：🌲 15 Days of Wellness!
- Day 30：🌸 One Month of Wellness!
- Day 60：🍎 My Wellness Tree is now bearing fruit!
- Day 100：🏆 I completed my Wellness Journey!

### 14.3 App 分享

入口：

- 个人中心 / 设置弹窗中。

规则：

- 点击 Share App 后直接调起 iPhone 系统分享组件。
- 分享内容强调 Meridian Care 可帮助建立温和的每日经络按摩习惯。

## 15. 设置与账号

个人头像点击后打开设置弹窗。

设置内容：

- 订阅状态。
- Share App。
- Language。
- About Us。
- Sign Out。
- Restore Purchase。
- Account Delete。
- Terms。
- Privacy Policy。

语言：

- 支持 English 和中文。
- 设置内可切换。
- 切换后界面文案同步更新。

关于我们：

- 展示版本号 V1.0.0。

账号注销：

- 设置中提供 Account Delete。
- 点击后弹出确认弹窗。
- 文案说明会删除账号、个人计划、打卡记录和偏好设置。
- 订阅仍需通过 App Store 管理。
- 确认后回到登录页。

底部链接排布：

- Restore Purchase · Account Delete。
- Terms · Privacy Policy。

## 16. 多语言

支持语言：

- English。
- 中文。

规则：

- 默认英文。
- 中文需使用符合产品语气的自然中文，不做机械直译。
- 切换后首页、计划、订阅、设置、打卡、历史、弹窗、分享等文案均应同步。

## 17. ASO 优化建议

### 17.1 关键词策略

根据当前关键词判断，ASO 优先级建议：

1. Meridian。
2. Acupressure。
3. Massage。
4. Wellness。
5. Self Care。
6. Sleep。
7. Stress Relief。
8. Energy。
9. Relaxation。
10. TCM。

策略说明：

- 主关键词向 Meridian 靠拢。
- 副关键词使用 Acupressure 和 Massage 承接搜索意图。
- TCM 作为补充关键词，不作为主标题核心。
- 文案避免过度医疗化，重点表达 wellness、self-care、habit、routine。

### 17.2 App 名称建议

推荐主名称：

Meridian Care: AI Massage

备选：

- Meridian Massage & Wellness。
- Meridian Care: Acupressure。
- AI Meridian Massage Routine。

### 17.3 副标题建议

推荐：

Daily acupressure & self-care

备选：

- Build a gentle massage habit。
- AI wellness massage routine。
- Meridian self-care in minutes。

### 17.4 关键词字段建议

英文关键词组合：

meridian,acupressure,massage,wellness,self care,sleep,stress,relax,energy,routine,tcm

### 17.5 应用商店介绍方向

核心卖点：

- AI personalized meridian massage plan。
- Guided self-massage steps。
- Daily check-in routine。
- Wellness Tree growth journey。
- Track weekly progress and milestones。

禁止方向：

- 不承诺治疗失眠、肝病、消化疾病、血液循环疾病。
- 不使用 medical treatment、cure、diagnose 等表达。

## 18. 埋点需求

### 18.1 用户与登录

- app_open。
- apple_login_click。
- apple_login_success。
- onboarding_start。

### 18.2 计划定制

- plan_goal_view。
- plan_goal_select。
- plan_status_view。
- plan_status_select。
- plan_time_view。
- plan_time_select。
- generate_plan_click。
- ai_generating_start。
- ai_generating_complete。

属性：

- goal。
- status_option。
- selected_time。
- language。
- subscription_status。

### 18.3 订阅

- paywall_show。
- paywall_close。
- subscription_plan_select。
- subscription_cta_click。
- subscription_success。
- restore_purchase_click。
- terms_click。
- privacy_click。

属性：

- trigger_source。
- selected_plan：monthly / annual。
- price。
- trial_available。

### 18.4 首页与打卡

- home_view。
- checkin_start_click。
- massage_step_prepare_start。
- massage_step_start。
- massage_timer_pause。
- massage_timer_resume。
- massage_step_complete。
- checkin_complete。
- checkin_again_click。

属性：

- goal。
- routine_title。
- duration。
- step_index。
- step_name。
- journey_day。
- weekly_checkin_count。

### 18.5 Wellness Journey

- wellness_tree_view。
- wellness_journey_detail_click。
- wellness_journey_detail_view。
- wellness_milestone_unlock。
- wellness_milestone_modal_show。
- wellness_milestone_modal_close。
- journey_complete_show。
- tree_of_life_awarded。
- new_journey_click。

属性：

- journey_day。
- milestone_day。
- milestone_name。
- tree_stage。
- journey_index。

### 18.6 分享

- checkin_share_modal_show。
- checkin_share_instagram_click。
- checkin_share_tiktok_click。
- checkin_share_more_click。
- app_share_click。
- system_share_open。

属性：

- share_source。
- milestone_day。
- journey_day。
- channel。

### 18.7 设置与账号

- profile_open。
- language_change。
- about_click。
- sign_out_click。
- delete_account_click。
- delete_account_confirm。

属性：

- from_language。
- to_language。
- subscription_status。

## 19. 非功能需求

设计：

- 以 iPhone 主流尺寸呈现。
- 原型尺寸不随意扩大。
- 内容超出时页面内部滚动。
- 首页一屏优先展示核心信息，允许内部滚动。
- 视觉风格简洁、温暖、西方 wellness。

性能：

- 首页首屏加载快速。
- 动效轻量，不影响操作。
- GIF 或图片资源需控制体积。

可访问性：

- 关键按钮具备清晰文字。
- 弹窗可关闭。
- 返回按钮回到上一级。
- 交互状态清晰。

合规：

- 不做医疗诊断。
- 不承诺治疗效果。
- 订阅、恢复购买、用户协议、隐私协议入口清晰。
- 账号注销入口清晰。

## 20. MVP 验收标准

- 用户可从登录完成计划定制。
- AI 生成计划后，未订阅用户看到订阅墙。
- 订阅墙可关闭，关闭后进入未订阅浏览态。
- 订阅后可进入首页。
- 首页仅保留核心模块，无底部导航。
- 首页显示当前计划、自然周打卡、Wellness Tree 和今日打卡入口。
- 点击 Check In 后进入按摩引导，首页卡片区域被引导流程替代。
- 每个按摩步骤前有 3 秒准备倒计时。
- 计时器可暂停与继续。
- 完成打卡后首页显示今日已完成。
- 完成 Day 1 打卡后弹出 Wellness Achievement 和分享弹窗。
- Wellness Journey 二级页显示 7 个里程碑阶段，未解锁阶段为问号。
- Day 100 具备 Journey Complete 弹窗、数据总结、Tree of Life 勋章和 Plant a New Tree。
- 设置中具备语言切换、分享 App、订阅状态、关于我们、登出、恢复购买、Terms、Privacy Policy、账号注销。
- 中文与英文切换后主要界面文案同步。
- 站点包可直接打开或部署预览。
