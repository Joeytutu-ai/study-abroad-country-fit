# 自适应问卷

每次只提出一个问题。先使用用户已给出的信息；仅在答案会改变硬筛、评分或解释时追问。目标为22—28题，信息充分时可以提前结束。

## 通用问题

| 顺序 | 问题 | 记录字段 | 回答指引 |
|---:|---|---|---|
| 1 | 你当前是高中生、本科生、硕士生，还是已有工作经验？ | `current_stage` | 学段/工作年限 |
| 2 | 你想申请的目标学历是什么？ | `target_degree` | 本科/硕士/博士/成人学历提升 |
| 3 | 你希望哪一学年入学？ | `target_intake` | 年份和入学季 |
| 4 | 你是延续原专业，还是转专业/转行业？ | `change_direction` | 延续/轻度转向/明显转向 |
| 5 | 你可用于整个留学阶段的总预算上限是多少？ | `total_budget` | 金额、币种、是否含生活费 |
| 6 | 你能接受的授课语言和当前语言准备度是什么？ | `language_floor`、`language_readiness` | 可接受语言、已具备成绩或计划 |
| 7 | 你是否有身份、签证、拒签史或国籍相关限制？ | `identity_constraints` | 无/有，说明影响 |
| 8 | 家庭、伴侣、子女、照护或探亲对你的地点选择有哪些限制？ | `family_constraints` | 无/有，说明底线 |
| 9 | 有哪些绝不能接受的条件？ | `non_negotiables` | 气候、安全、距离、语言、成本等 |
| 10 | 请按重要性排列：学历、科研、就业、长期发展、回国、体验、低成本。 | `goal_ranking` | 至少给出前三项 |
| 11 | 毕业后更偏向回国、留当地、去第三国，还是暂未确定？ | `return_or_stay_preference` | 选择并说明 |
| 12 | 你对成本、竞争和政策变化的承受度如何？ | `risk_tolerance` | 低/中/高及原因 |
| 13 | 你的成绩、课程体系或既有学历情况如何？ | `academic_record` | 成绩/学历/课程 |
| 14 | 现有背景与目标学习方向的匹配度如何？ | `background_match` | 强/一般/弱及原因 |
| 15 | 申请材料准备到什么程度？ | `application_readiness` | 语言、推荐信、文书、作品集或研究计划 |
| 16 | 你的目标行业或职业方向是什么？ | `target_industry` | 行业/职位方向 |
| 17 | 你有多少相关工作经验？ | `work_experience` | 年限和相关性 |
| 18 | 你更喜欢大城市、小城市，还是无偏好？ | `city_preference` | 偏好及原因 |
| 19 | 对气候、饮食、文化差异和当地语言融入有什么要求？ | `climate_preference`、`cultural_adaptation` | 必须项与可适应项 |
| 20 | 你需要哪些支持条件？ | `support_needs` | 医疗、无障碍、安全、社群、心理支持等 |

## 路径追问

### 高中升本科

按需继续询问：课程体系和关键成绩（`school_curriculum`）、年龄与监护安排（`guardianship_needs`）、家庭能否持续承担全程预算（`budget_duration`）、是否需要保留专业探索空间（`major_exploration_need`）。

### 本科升硕士

按需继续询问：本科均分与课程（`undergraduate_average`）、专业衔接（`subject_continuity`）、转专业幅度（`career_shift_size`）、可接受学制（`program_duration_preference`）。

### 硕士升博士

按需继续询问：研究方向（`research_topic`）、科研/论文经历（`research_experience`）、导师匹配偏好（`supervisor_fit_need`）、对资助的依赖度（`funding_dependency`）、毕业后学术或产业去向（`doctoral_outcome_goal`）。

### 成人再教育或职业转型

按需继续询问：工作年限（`career_years`）、转行幅度（`career_shift_size`）、机会成本（`opportunity_cost`）、家庭责任（`adult_family_responsibility`）、既有学历（`existing_qualification`）、目标职位和学历回报预期（`credential_return_expectation`）。
