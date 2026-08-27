# Study Abroad Country Fit / 留学国家匹配

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> Find the country that fits your study-abroad plan before comparing schools.
>
> 先选适合自己的留学国家，再进入院校和专业选择。

`study-abroad-country-fit` is an open-source agent skill for AI agents and skill runtimes that can load a local `SKILL.md` file. It interviews a degree-seeking applicant, removes destinations that conflict with their non-negotiables, and returns an explainable country-level Top3.

`study-abroad-country-fit`是一个面向AI Agent与skill运行环境的开源skill。只要环境支持加载本地`SKILL.md`文件，就可以接入。它会通过逐题访谈建立申请人画像，先排除与硬条件冲突的目的地，再给出可解释的国家Top3。

## What it covers / 覆盖范围

The skill compares these 12 destinations:

- United Kingdom / 英国
- Australia / 澳大利亚
- Canada / 加拿大
- United States / 美国
- Singapore / 新加坡
- Hong Kong SAR, China / 中国香港
- Japan / 日本
- South Korea / 韩国
- Malaysia / 马来西亚
- New Zealand / 新西兰
- Switzerland / 瑞士
- Germany / 德国

It supports degree-oriented pathways:

- High school to bachelor's degree / 高中升本科
- Bachelor's degree to master's degree / 本科升硕士
- Master's degree to PhD / 硕士升博士
- Adult degree study or career-transition study / 成人再教育或职业转型留学

## What you get / 你会得到什么

The final response contains **country Top3 only**, each with a distinct role:

| Role / 角色 | Meaning / 含义 |
| --- | --- |
| Safe choice / 稳妥选择 | Best balance of feasibility and risk under current conditions / 以当前条件看，可行性与风险最平衡 |
| Ideal fit / 理想匹配 | Closest to the applicant's long-term goals, with any gaps stated / 最贴近长期目标，同时写明待补齐条件 |
| Ambitious choice / 进取选择 | Higher upside with explicit cost, competition, timing, or policy risks / 上限更高，但成本、竞争、时间或政策风险更清晰 |

For each selected country, the skill explains:

- Why it fits / 适合原因
- Main trade-off / 主要代价
- Key risk / 关键风险
- Conditions to meet / 需要达到的条件

It also lists only the destinations that are currently blocked by a relevant hard condition, together with a reversible condition when one exists.

## How it works / 如何匹配

1. **Identify the pathway / 识别路径** — confirms that the request is degree-oriented and identifies the relevant study stage.
2. **Build an applicant profile / 建立画像** — asks one focused question at a time and prioritizes budget, timeline, language, identity or family constraints, and non-negotiables.
3. **Apply hard filters / 先做硬筛** — budget floor, minimum language arrangement, feasible time window, and direct constraint conflicts cannot be offset by soft preferences.
4. **Score feasible options / 比较可行目的地** — scores core goal, budget pressure, career plan, academic fit, readiness, life adaptation, and risk tolerance.
5. **Verify current facts / 核验时效信息** — checks official sources in the current session for material, changeable facts such as visas, work permissions, costs, scholarships, and post-study pathways.
6. **Return an explainable Top3 / 输出可解释Top3** — never fills the list with unsuitable countries just to reach three results.

## Install in your agent / 在你的Agent中安装

### Option A: Download ZIP / 下载ZIP

1. On GitHub, choose **Code → Download ZIP** and unzip the repository.
2. Import the unzipped folder as a local skill in your agent, or copy the entire folder into that agent's local skills directory.
3. Refresh the agent's skill list or start a new session if the skill is not shown immediately.

Keep the folder structure intact. In the installed copy, `SKILL.md` must remain at the folder root and the `agents/`, `assets/`, and `references/` folders must stay alongside it.

请保留完整目录结构。安装后的skill目录根部必须有`SKILL.md`，且`agents/`、`assets/`与`references/`目录不能丢失或单独移动。

### Option B: Clone with Git / 使用Git克隆

```bash
git clone https://github.com/Joeytutu-ai/study-abroad-country-fit.git
```

Then import the cloned `study-abroad-country-fit` folder through your agent's local-skill workflow.

> The repository root is the skill folder itself. After installation, `SKILL.md` should be located at `<your-agent-skill-directory>/study-abroad-country-fit/SKILL.md`.
>
> 本仓库根目录就是skill目录。安装后应确认`SKILL.md`位于`<你的Agent的skill目录>/study-abroad-country-fit/SKILL.md`。

### Example: Codex / 示例：Codex

Codex users can install it with:

```bash
mkdir -p ~/.codex/skills
cp -R study-abroad-country-fit ~/.codex/skills/study-abroad-country-fit
```

Other agents use different local-skill directories and import commands. Follow the documentation of the agent you use; the portable unit is the complete `study-abroad-country-fit` folder.

不同Agent的本地skill目录和导入命令并不相同，请以所用Agent的文档为准；可移植的最小单位是完整的`study-abroad-country-fit`文件夹。

## Use it / 使用方法

After your agent has loaded the skill, ask it to use `study-abroad-country-fit` and describe the applicant's situation. You do not need to prepare every detail before starting; the skill asks one question at a time.

在任意已加载本skill的Agent中，要求它使用`study-abroad-country-fit`，再直接说明申请人的情况即可。无需一次填完所有信息，skill会每次只问一个关键问题。

### Example prompts / 示例提问

```text
Use study-abroad-country-fit to help me choose a study-abroad country.
我本科毕业3年，计划2027年读硕士。总预算45万元人民币，英语可以准备，毕业后优先考虑进入消费品行业，能接受中等风险。请帮我选最适合的留学国家。
```

```text
使用study-abroad-country-fit，帮我判断最适合去哪个国家留学。
I have a master's degree and want to apply for a PhD. I need a feasible funding route, care most about research fit, and may return to China after graduation.
```

## Boundaries / 使用边界

This skill is for **country selection only**. It does not provide:

- School, program, major, or city recommendations / 院校、项目、专业或城市推荐
- Language-school, short-course, study-tour, or working-holiday recommendations / 语言学校、短期研修、游学或工作假期推荐
- Guarantees of admission, visa approval, scholarships, employment, or immigration outcomes / 对录取、签证、奖学金、就业或身份结果的保证

Visa policy, work permissions, tuition and living costs, scholarships, and post-study pathways can change. The skill treats its country profiles as comparison guides, not current policy. It must check official sources during the relevant assessment and state the verification date; when a fact cannot be verified, it should say so rather than invent an answer.

签证政策、兼职权限、费用、奖学金和毕业后路径都会变化。skill中的国家画像用于比较，不等同于现行政策。实际评估时必须重新核验官方来源并标注核验日期；无法核验的信息应明确说明，不能编造。

## Repository structure / 仓库结构

```text
.
├── SKILL.md                         # Workflow and guardrails / 工作流与边界
├── agents/openai.yaml               # Skill metadata / skill元数据
├── assets/result-template.md        # Output structure / 输出模板
└── references/
    ├── questionnaire.md             # Applicant questions / 画像问题
    ├── scoring-rubric.md            # Hard filters and scoring / 硬筛与评分
    ├── source-update-rules.md       # Evidence and freshness rules / 证据与时效规则
    └── country-profiles/            # Comparison profiles for 12 destinations / 12国画像
```

## Contributing / 参与改进

Issues and pull requests are welcome. When updating country profiles, keep policy claims traceable to official sources and preserve the distinction between verified facts and experience-based judgment.

欢迎提交Issue或Pull Request。更新国家画像时，请让政策类信息可追溯到官方来源，并明确区分已核验事实与经验判断。

## License / 许可证

This project is released under the [MIT License](LICENSE).

本项目采用[MIT许可证](LICENSE)开源。
