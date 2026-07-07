# AI 经络养护 MVP 中文需求 PRD

版本：V1.0.0
更新时间：2026-06-10

## 1. 产品定位

AI 经络养护是一款面向西方用户的轻量自助经络按摩打卡 App。用户通过 Apple 登录后完成 AI 计划定制，在 AI 生成计划节点触发订阅付费墙。订阅后解锁每日个性化经络按摩计划、步骤倒计时、经络点高亮、自然周打卡时间轴和历史足迹。

产品定位为 wellness / self-care 工具，不做医疗诊断，不承诺疾病治疗结果。

## 2. MVP 核心目标

- 用 3 步生成个性化按摩计划：改善目标、当前状态、每日时间。
- 用户选择的目标要真实影响计划标题、建议按摩部位、首页内容、按摩步骤和预期变化。
- 订阅墙出现在 AI 生成计划节点，用户可关闭后浏览 App。
- 取消底部导航，仅保留单首页。
- 首页采用温暖、简洁、西方 wellness 风格。
- 首页顶部合并展示自然周打卡时间轴，不再单独展示 This Week 卡片。
- 打卡流程包含 3 秒准备倒计时、正式按摩倒计时、步骤高亮、暂停/继续。
- 当天打卡完成后，首页显示今日已完成，并允许再次打卡。
- 提供历史记录入口，以足迹形式展示过往自然周打卡记录。

## 3. 用户主流程

1. 用户进入 App。
2. 使用 Apple 登录。
3. 进入计划定制。
4. 第一步选择改善目标。
5. 第二步根据目标选择当前状态。
6. 第三步确认目标、建议按摩部位和每日时间。
7. 点击生成计划。
8. 展示 AI 正在制定专属养生打卡计划的动效页。
9. 未订阅用户在动效结束后看到订阅墙。
10. 用户可关闭订阅墙进入未订阅浏览态。
11. 用户订阅后进入计划结果页。
12. 进入 App 前出现通知授权提示，可选择允许或稍后设置。
13. 进入首页，查看个人计划、自然周时间轴和今日打卡入口。
14. 点击 Check In Today 进入按摩引导。
15. 每个步骤先进行 3 秒准备倒计时，再进入正式按摩倒计时。
16. 完成今日打卡后，首页点亮今日日期并显示今日已完成。
17. 用户可点击 Check In Again 重复当天按摩。
18. 用户可点击 View history 查看历史打卡足迹。

## 4. 计划定制

第一步：选择改善目标。

- 🌙 Better Sleep
- ⚡ More Energy
- 🧘 Less Stress
- 💆 Neck & Shoulder Relief
- 🌿 Better Digestion
- 🩸 Improve Circulation

第二步：选择当前状态。

- 第二步选项根据第一步目标动态变化。
- Better Sleep：询问过去 7 天睡眠质量。
- More Energy：询问最近精力状态。
- Less Stress：询问当前压力状态。
- Neck & Shoulder Relief：询问颈肩状态。
- Better Digestion：询问消化状态。
- Improve Circulation：询问循环状态。
- 每个问题提供 3 个单选项，默认选中第一个。

第三步：确认计划设置。

- 展示养生目标。
- 展示 AI 建议按摩部位。
- 时间选项：3 分钟、5 分钟、10 分钟。
- 默认 5 分钟。
- 点击生成计划后进入 AI 制定动效页。

AI 制定动效：

- 单独一屏展示“AI 正在为您制定专属养生打卡计划”。
- 动效期间表现为 AI 正在分析目标、当前状态和每日时间。
- 动效结束后，已订阅用户进入计划结果页，未订阅用户弹出订阅墙。

## 5. 目标与计划联动

用户选择的目标需要同步影响：

- 计划结果页标题。
- 首页 Your Wellness Plan 标题。
- 今日按摩标题。
- 今日按摩说明。
- 建议按摩部位。
- 预期变化文案。
- 按摩步骤名称。
- 按摩步骤说明。
- 步骤倒计时时长。

目标示例：

- Better Sleep：Head & Neck Meridian Massage。
- More Energy：Shoulder & Palm Energy Massage。
- Less Stress：Calm Palm Meridian Massage。
- Neck & Shoulder Relief：Neck & Shoulder Meridian Massage。
- Better Digestion：Abdomen & Hand Meridian Massage。
- Improve Circulation：Hand & Foot Circulation Massage。

文案限制：

- 只表达日常 self-care 感受。
- 不使用医疗承诺词。
- 不承诺治疗疾病或改变医学指标。

## 6. 订阅规则

- 月度订阅：$9.90/month。
- 年度订阅：突出 $4.16/month。
- 年度订阅弱化展示 $49.90 billed yearly。
- 年度订阅提供 3 天免费试用。
- 月订阅和年订阅可点击切换。
- 年订阅按钮：Start 3-day free trial。
- 月订阅按钮：Start membership。
- 不展示 Cancel anytime。
- 订阅墙顶部使用 Close。
- 订阅墙底部展示 Restore Purchase · Terms · Privacy Policy。

订阅权益：

- Personalized massage plan。
- Guided meridian massage。
- Progress insights。

视觉规则：

- 权益区域视觉上合并为一个卡片。
- 三条权益各自保留标题、说明和小图标。

## 7. 未订阅浏览态

未订阅首页展示：

- Not subscribed。
- Subscribe to start daily check-ins。
- Subscribe now 按钮。
- Retune plan / 重新制定计划入口。

规则：

- 用户可浏览 App 基础界面。
- 核心按摩引导、打卡数据和完整计划为锁定或缺省状态。
- 点击订阅引导再次弹出订阅墙。

## 8. 首页

首页首屏结构：

- Welcome Kevin 头像区。
- Retune Plan 入口。
- Your Wellness Plan。
- 大号计划标题，例如 Better Sleep / Improve Circulation。
- 自然周打卡时间轴。
- View history 入口。
- 暖色经络养生插画。
- 今日按摩卡片。
- Check In Today 按钮。

自然周时间轴：

- 首页顶部时间轴与原 This Week 区域合并。
- 不再单独展示 This Week 卡片。
- 展示周一到周日 7 个日期点。
- 每个点显示具体日期。
- 点与点之间用线连接。
- 已完成打卡的日期点亮。
- 未打卡日期不点亮。
- 今日完成后点亮当天日期。
- 展示本周已打卡天数。
- View history 放在同一区域。

注意：

- 自然周只代表本周哪几天打卡。
- 不代表计划天数。
- 不展示固定周期进度，例如 0 of 5 days done。

## 9. 首页内按摩引导

进入方式：

- 点击首页 Check In Today。

进入后：

- 首页概览隐藏。
- 展示按摩引导流程。
- 展示经络点示意。
- 当前步骤点位高亮。
- 展示步骤标题、说明和倒计时。

倒计时：

- 每个步骤开始前先展示 3 秒准备倒计时。
- 准备阶段文案：Ready · Step n / 4。
- 中文：准备 · 第 n / 4 步。
- 准备结束后进入正式按摩倒计时。
- 切换到下一步骤时，也先进入 3 秒准备倒计时。
- 点击计时器可暂停或继续。
- 准备倒计时和正式倒计时都支持暂停。

完成后：

- 点击 Complete check-in 完成今日打卡。
- 首页显示今日已完成。
- 今日日期点亮。
- 按钮变为 Check In Again。
- 用户可再次完成当天按摩。

## 10. 打卡历史

入口：

- 首页时间轴区域的 View history。

页面：

- Check-in Records / History。

展示：

- 本周记录。
- 上周记录。
- 更早记录。
- 每条记录展示自然周日期范围。
- 每条记录展示已点亮日期。
- 每条记录展示完成次数。
- 视觉表现类似足迹。

## 11. 设置与账号

入口：

- 首页 Welcome 头像区。

内容：

- 用户信息。
- 订阅情况。
- 多语言切换。
- 关于我们：V1.0.0。
- Restore Purchase。
- Terms。
- Privacy Policy。
- Delete Account。
- Log Out。

账号注销：

- Delete Account 不使用红色字体凸显。
- 点击后展示二次确认弹窗。
- 弹窗说明将永久删除账号、个人计划、打卡记录和偏好设置。
- 提醒有效订阅仍需通过 App Store 管理。
- 只有确认注销按钮使用危险色。

## 12. 多语言

- 支持 English 和中文。
- 设置中可切换。
- 切换语言不重置当前页面、订阅状态、目标选择、状态选择、时间选择、打卡状态或计时器状态。
- 中文文案优先使用自然中文表达。

## 13. 暂缓功能

当前 MVP 暂不包含：

- 泡茶养生打卡。
- 养生内容/咨询模块。
- 调理趋势模块。
- 体检报告上传正式能力。
- 医疗诊断、处方建议或疾病治疗承诺。

## 14. 埋点需求

核心目标：

- 追踪首次计划定制完成率。
- 追踪目标选择分布。
- 追踪订阅墙曝光、关闭、订阅点击和订阅成功。
- 追踪首页自然周时间轴曝光、今日点亮和历史记录点击。
- 追踪准备倒计时、正式按摩倒计时、暂停、继续、完成。
- 追踪今日完成后的再次打卡。
- 追踪多语言、设置和账号注销。

核心事件：

- app_open
- apple_sign_in_success
- plan_setup_start
- plan_goal_select
- plan_status_select
- plan_time_select
- plan_generate_click
- ai_plan_generating_show
- ai_plan_generating_complete
- paywall_show
- paywall_close
- subscription_plan_select
- subscription_cta_click
- subscription_success
- restore_purchase_click
- notification_permission_show
- notification_allow_click
- notification_later_click
- home_view
- home_plan_view
- weekly_timeline_view
- weekly_timeline_today_lightup
- checkin_history_click
- checkin_history_view
- checkin_start_click
- checkin_repeat_click
- massage_prepare_start
- massage_prepare_complete
- massage_step_view
- timer_pause_click
- timer_resume_click
- checkin_complete_success
- settings_open
- language_change
- delete_account_click
- delete_account_confirm

关键指标：

- 首次计划完成率。
- 目标选择分布。
- 订阅墙曝光到订阅点击转化率。
- 年订阅选择率。
- 年订阅 3 天试用点击率。
- 打卡开始率。
- 打卡完成率。
- 准备倒计时完成率。
- 今日完成后的重复打卡率。
- 本周打卡天数。
- 历史记录入口点击率。
- 语言切换比例。
- 账号注销点击率和确认注销率。

## 15. ASO 优化建议

关键词主轴优先级：

1. meridian
2. acupressure
3. self massage
4. relaxation / stress relief / sleep
5. TCM

推荐名称：

- Meridian Care

备选名称：

- Meridian Massage
- Meridian Self Massage
- Meridian Acupressure
- Meridian Reset
- Meridian Care: Acupressure

Subtitle 候选：

- Guided acupressure plan
- Daily meridian massage
- Self massage for relaxation
- Acupressure check-in plan

关键词建议：

- meridian
- acupressure
- self massage
- pressure points
- relaxation
- sleep
- stress relief
- wellness
- routine
- check in
- TCM
- neck massage
- shoulder relief
- hand massage

截图文案建议：

- AI builds your meridian plan
- Choose your goal in seconds
- Follow guided acupressure steps
- Check in with a calm weekly timeline
- Review your wellness footprints

## 16. 新版本迭代：分享与小树苗反馈

### 16.1 打卡分享

- 用户每达到一个新的打卡里程碑后，自动出现分享弹窗。
- 分享弹窗核心目标是邀请朋友一起打卡。
- 首日达成分享内容需突出：用户完成首日养生打卡，获得一颗养生小树苗，邀请朋友加入一起进行养生打卡。
- 后续里程碑分享内容根据累计打卡天数和树木成长阶段动态变化。
- 分享渠道包括 Instagram、TikTok、More。
- 点击 More 后调起 iPhone 系统分享组件。
- 同一里程碑只自动出现一次。

打卡记录常驻分享：

- Check-in Records / History 页面顶部增加 Share 入口。
- 点击后以弹窗形式展示打卡记录数据和当前达成成果。
- 弹窗同样支持 Instagram、TikTok 和 More。

### 16.2 App 分享

- App 分享入口放在个人中心弹窗中。
- 入口名称：Share App。
- 辅助文案：Invite friends。
- 点击后直接调起 iPhone 系统分享组件。

### 16.3 小树苗反馈系统

首页增加 Wellness Sapling / 养生小树苗模块。

表现：

- 用户每日打卡后，累计打卡天数增加，小树苗逐步成长。
- 里程碑分为首日、累计 3 天、累计 7 天、累计 15 天、累计 30 天。
- 每达到一个里程碑，小树苗进入一个新的成长阶段。
- 成长阶段依次为：小树苗、中树苗、大树苗、正常的树、高高的树。
- 用户点击首页里程碑区域，可进入里程碑详情二级界面。
- 详情页展示每一阶段的解锁条件。
- 未解锁阶段的树木形态显示为问号，达到对应里程碑后才展示真实形态。

当前 MVP 阶段：

- 首日：养生小树苗。
- 累计 3 天：中树苗。
- 累计 7 天：大树苗。
- 累计 15 天：正常的树。
- 累计 30 天：高高的树。

### 16.4 新增埋点

- checkin_share_auto_show
- checkin_share_click
- checkin_share_more_click
- checkin_history_share_click
- app_share_click
- system_share_show
- growth_sapling_view
- growth_milestone_unlock
- growth_milestone_entry_click
- growth_milestone_detail_view
- growth_milestone_item_click
- growth_milestone_modal_view
