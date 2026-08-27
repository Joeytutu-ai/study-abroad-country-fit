# 匹配与排序规则

## 1. 先应用硬条件

对每个目的地逐项检查下列条件：

- `total_budget`是否达到基于本次官方核验得到的最低可行总成本；
- `language_floor`是否满足目标路径的最低可行语言安排；
- `identity_constraints`是否与当前签证/入境规则直接冲突；
- `target_degree`、`current_stage`和`target_intake`是否存在可行路径与时间窗口；
- `family_constraints`和`non_negotiables`是否存在用户明确不可接受的冲突。

硬条件不通过时标为`excluded`，不得进入Top3。若预算、语言、时间或材料可以补齐，标为`conditional`并记录解除条件；不可逆冲突标为`excluded_nonreversible`。

## 2. 计算软匹配

只为`eligible`和`conditional`目的地评分。每项使用0—5分：0=明确不匹配，1=明显偏弱，2=有重大代价，3=基本匹配，4=明显匹配，5=高度匹配且有可靠证据。

| 维度 | 默认权重 | 对应字段 |
|---|---:|---|
| 留学核心目标 | 20% | `goal_ranking`、`target_degree` |
| 预算与资金压力 | 20% | `total_budget`、`budget_duration`、`funding_dependency` |
| 职业与长期规划 | 20% | `target_industry`、`return_or_stay_preference`、`doctoral_outcome_goal` |
| 学术背景与申请匹配 | 15% | `academic_record`、`background_match`、路径追问 |
| 语言与准备度 | 10% | `language_floor`、`language_readiness`、`application_readiness` |
| 生活适应 | 10% | `city_preference`、`climate_preference`、`cultural_adaptation`、`support_needs` |
| 风险偏好 | 5% | `risk_tolerance`、`non_negotiables` |

用户可以覆盖默认权重，但总和必须为100%。记录每项评分对应的证据和不确定性；不完整或无法核验的信息不能得到4分或5分。

## 3. 分配Top3角色

- **稳妥选择：**在当前条件下硬条件通过、总匹配高，且成本、政策或竞争风险较低的目的地。
- **理想匹配：**最贴合用户前3项长期目标的目的地；允许存在明确、可补齐的条件缺口。
- **进取选择：**与用户目标上限高度相关，但成本、竞争、时间或政策不确定性较高的目的地。

三个角色必须是不同国家。若硬筛后不足3个，输出真实数量，不将`excluded`目的地补入Top3。

## 4. 规则自检案例

**案例A：**本科升硕士、预算有限、英语已准备、毕业后就业优先、风险偏好低。高成本或高不确定性目的地不能仅凭行业标签成为稳妥选择；必须先满足预算与风险硬条件。

**案例B：**硕士升博士、有研究经历、科研优先、资助依赖高。无法形成可行资助路径或不适配研究要求的目的地应标为待条件满足或排除，不得因“进取”角色而进入Top3。
