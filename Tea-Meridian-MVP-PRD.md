# Tea Meridian MVP PRD

## 1. Product Overview

Product name: AI Tea Meridian

Version: V1.0.0

AI Tea Meridian is a lightweight wellness app that combines daily herbal-style tea routines with guided meridian massage. After subscribing, users complete a short AI setup flow, receive a personalized tea and massage plan, check in on either or both tracks, and upload baseline health data when trend analysis is required.

Core value:
- Turn wellness tea and self-guided meridian massage into a simple daily habit.
- Personalize recommendations through goals, time preference, AI feedback, and baseline health data.
- Help users see weekly summaries and future wellness trends from consistent check-ins.

## 2. Target Users

Primary users:
- People seeking lightweight wellness support for sleep, fatigue, digestion, circulation, liver care, or weight management.
- Users who prefer at-home self-care through tea routines and simple massage guidance.
- Users willing to subscribe for personalized plans, check-in guidance, and AI-assisted wellness insights.

## 3. Business Model

The app uses a subscription-first model with browse access.

Flow:
1. User enters the app.
2. User signs in with Apple.
3. Subscription screen appears.
4. User may subscribe or close the paywall and browse locked states.
5. Subscribed users enter the plan setup flow.

Plans:
- Monthly: $9.90/month
- Annual: $49.90/year
- Annual plan includes a 3-day free trial
- Existing members can enter the subscription screen to renew or manage the plan

Membership benefits:
- Personalized tea plan
- Guided meridian massage with GIF demos
- Dual check-in for tea and massage
- Weekly wellness summary on Home
- Baseline data upload and AI trend analysis
- Wellness content and AI consultation entry

## 4. Main User Flows

### 4.1 New Subscribed User

1. Open app
2. Sign in with Apple
3. View subscription screen
4. Subscribe
5. Complete 3-step plan setup
6. View generated Today’s Plan
7. Choose notification permission: Allow or Set Up Later
8. Enter Home
9. Complete tea and/or massage check-ins
10. Upload baseline data when trend analysis is needed

### 4.2 Browse Without Subscription

1. Sign in with Apple
2. Close subscription screen
3. Enter Home in non-subscribed state
4. Home, Check-in, and Wellness show locked content prompts
5. User can re-enter subscription from locked prompts or Profile

## 5. Information Architecture

Bottom navigation:
- Home
- Check-in
- Wellness

Non-tab screens:
- Login
- Subscription
- Plan Setup Step 1: Goal
- Plan Setup Step 2: Wellness Settings
- Plan Setup Step 3: AI Details
- Plan Result
- Upload Report
- Photo Picker
- Profile modal

## 6. Functional Requirements

### 6.1 Login

Entry: first screen.

Requirements:
- Display product value proposition.
- Provide Sign in with Apple button.
- On sign-in, navigate to subscription screen.

Primary copy:
- One wellness tea, one meridian massage every day
- Generate a daily tea and meridian massage check-in plan based on your wellness goal and body focus.

### 6.2 Subscription

Entry points:
- After Apple sign-in
- Home locked state
- Check-in locked state
- Wellness locked state
- Profile subscription card

Requirements:
- Display membership benefits.
- Display Monthly and Annual plans.
- Highlight Annual plan with 3-day free trial.
- Allow user to close the screen and browse locked states.
- Continue / Renew membership enters plan setup.

States:
- Close: set app to non-subscribed browse state.
- Continue / Renew: set app to subscribed state and enter plan setup.

### 6.3 Plan Setup

Plan setup has 3 steps.

#### Step 1: Goal Selection

Question: What would you like to improve most?

Requirements:
- User selects one primary goal.
- Default selected goal: Sleep & Relaxation.
- Selection updates visual active state.

Options:
- Sleep & Relaxation
- Fatigue Relief
- Digestive Care
- Energy & Circulation
- Liver Care
- Weight & Fat Loss

#### Step 2: Wellness Settings

Requirements:
- Show the selected wellness goal.
- Show suggested massage area based on selected goal.
- Let user choose daily time.
- Default time: 10 min.

Time options:
- 5 min
- 10 min
- 15 min

Goal mapping:
- Sleep & Relaxation: calming tea + head-neck relaxation; suggested massage area: Head & Neck.
- Fatigue Relief: energy tea + shoulder-neck relief; suggested massage area: Shoulder & Neck.
- Digestive Care: gentle tea + abdominal meridian care; suggested massage area: Abdomen.
- Energy & Circulation: circulation tea + hands-feet relaxation; suggested massage area: Hands & Feet.
- Liver Care: liver care plan with health report baseline trends; suggested massage area: Feet.
- Weight & Fat Loss: light tea + metabolism-activating massage; suggested massage area: Abdomen.

#### Step 3: AI Details

Requirements:
- User may provide extra personal context.
- Feedback field starts empty.
- Submit feedback button is disabled until feedback is entered.
- Skip remains available.
- Display explanation card: AI will analyze feedback to create a better-fitting wellness plan.

Buttons:
- Submit feedback
- Skip

### 6.4 Plan Result

Requirements:
- Display AI-generated 7-day plan.
- Show tea and massage preview.
- Start using opens a notification permission prompt before entering Home.

Current sample plan:
- Plan: Liver Ease
- Tea: Rose Tangerine Peel Tea
- Massage: Shoulder & Neck Relief
- Approximate time: 12 min daily

### 6.5 Notification Prompt

Trigger: user taps Start using on Plan Result.

Requirements:
- Show iOS-style notification permission prompt.
- Options: Allow, Set Up Later.
- Either option enters Home.
- If user allows, mark notification state as enabled.

Prompt copy:
- “Tea Meridian” Would Like to Send You Notifications
- Notifications may include daily tea, meridian massage, and plan progress reminders.

### 6.6 Home

Home contains:
- Current plan
- Today’s two tracks
- Weekly wellness summary
- Wellness trend / baseline data entry

Subscribed state:
- Show personal plan.
- Show today’s tea + massage track.
- Show weekly summary.
- Show trend entry.

Non-subscribed state:
- Show locked card and subscription CTA.

Weekly summary:
- Streak
- Completed items
- Current focus
- AI-style summary copy

### 6.7 Wellness Trend & Baseline Data

Rules:
- Only one active wellness trend exists at a time.
- Current MVP trend example: Liver Care.
- AI trend comparison requires baseline data first.

Liver Care baseline data:
- User uploads a pre-care health report screenshot.
- AI focuses on ALT / AST and other transaminase values.

States:
- Pending: ask user to upload baseline data.
- Analyzing: show AI analyzing status after upload.
- Future state: show trend chart after analysis completes.

### 6.8 Upload Health Report

Entry: Home > Wellness Trend > Add baseline data / Upload health report screenshot.

Flow:
1. User enters Upload Report screen.
2. User taps Choose one photo from Library.
3. App shows iOS-style photo permission prompt.
4. User taps Allow Full Access.
5. User enters photo picker.
6. User can select only one photo.
7. User taps Use This Photo.
8. User returns to Upload Report screen.
9. Selected photo state is shown.
10. User taps Upload and analyze.
11. User returns to Home.
12. Wellness Trend changes to AI analyzing state.

Permission prompt:
- “Tea Meridian” Would Like to Access Your Photos
- Used to select a health report screenshot so AI can create your pre-care baseline.
- Buttons: Allow Full Access, Don’t Allow

### 6.9 Check-in

Check-in uses a task switcher + detail panel.

Tasks:
- Tea
- Massage

Requirements:
- User can switch between Tea and Massage detail panels.
- User can complete only tea, only massage, or both.
- Each task has its own check-in button.
- Button state changes after completion.
- Complete both check-ins returns to Home.

Tea sample:
- Rose Tangerine Peel Tea
- Ingredients: Rose, Tangerine peel, Goji
- Steps:
  1. Warm the cup, then add 3 rose buds
  2. Add 1 small piece of tangerine peel and 6 goji berries
  3. Pour 85°C hot water and steep for 5 minutes
  4. Sip warm to complete today’s tea care

Massage sample:
- Shoulder-Neck Meridian Massage
- GIF demo
- Timer and step indicator
- Safety reminder to stop if discomfort occurs

### 6.10 Wellness

Purpose: content and consultation.

Subscribed state:
- Show today’s featured wellness content.
- Show content list.
- Show AI Consultation entry.

Non-subscribed state:
- Show locked card and subscription CTA.

Sample content:
- Seasonal Care: Start with Liver and Spleen
- When is tangerine peel tea best?
- Shoulder-neck relief for desk workers

### 6.11 Profile

Entry: avatar on Home.

Display: bottom sheet modal.

Content:
- User name: Tea Wellness User
- Subscription card
- Language setting
- About Us
- Terms & Privacy Policy
- Log Out

Requirements:
- Subscription card navigates to subscription screen.
- Subscribed state shows Annual member · trial active.
- Unsubscribed state shows Not subscribed.
- Language setting supports English and Simplified Chinese.
- Language switching updates the visible app UI immediately without refreshing the page.
- About Us shows version V1.0.0.
- Log Out returns to Login and resets to non-subscribed state.

### 6.12 Multilingual Support

Entry: Profile modal > Language.

Supported languages:
- English
- Simplified Chinese

Requirements:
- Display a language setting row inside Profile.
- Provide a segmented control with EN and 中文.
- Default language is English.
- Tapping 中文 switches the main UI copy to Simplified Chinese.
- Tapping EN switches the main UI copy back to English.
- Switching language should not reset subscription status, current screen, selected goal, selected time, selected photo, check-in status, or baseline analysis state.
- Dynamic strings such as selected wellness goal, suggested massage area, AI feedback example, and check-in button labels must follow the selected language.

## 7. MVP Scope

Included:
- English UI
- Simplified Chinese language switch
- Apple sign-in entry simulation
- Subscription state simulation
- 3-step plan setup
- Plan result
- Notification permission prompt
- Home summary
- Baseline data upload flow simulation
- Photo permission and single-photo picker simulation
- Tea/massage check-in
- Wellness content and consultation entry
- Profile modal

Not included:
- Real Apple Sign In
- Real in-app purchases
- Real AI generation
- Real OCR analysis
- Real photo library access
- Backend account system
- Real persistent data storage
- Full content detail pages

## 8. Analytics Recommendations

Recommended events:
- sign_in_apple_tap
- paywall_view
- paywall_close
- subscription_continue_tap
- plan_goal_select
- plan_time_select
- ai_feedback_submit
- ai_feedback_skip
- plan_generated
- notification_allow
- notification_later
- checkin_tea_complete
- checkin_massage_complete
- baseline_upload_entry
- photo_permission_allow
- photo_permission_deny
- photo_selected
- report_upload_submit
- wellness_tab_open
- ai_consultation_tap
- profile_open
- language_switch
- logout_tap

## 9. Future Iterations

P1:
- Real subscription purchase.
- Real Apple Sign In.
- Real AI plan generation.
- OCR for health report screenshots.
- Dynamic tea and massage plans by goal.

P2:
- Multiple baseline data types, including weight, waistline, sleep, and digestion tracking.
- Trend charts after AI analysis.
- Content detail pages.
- AI consultation chat.
- Check-in reminders.

P3:
- Family member profiles.
- Wearable data integration.
- Exportable wellness reports.
- Expert content or consultation marketplace.
