// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  prompt: {
    alias: { fd: 'docs: fix typos' },
    messages: {
      // type: "Select the type of change that you're committing:",
      // scope: 'Denote the SCOPE of this change (optional):',
      // customScope: 'Denote the SCOPE of this change:',
      // subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
      // body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      // breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      // footerPrefixesSelect: 'Select the ISSUES type of changeList by this change (optional):',
      // customFooterPrefix: 'Input ISSUES prefix:',
      // footer: 'List any ISSUES by this change. E.g.: #31, #34:\n',
      // generatingByAI: 'Generating your AI commit subject...',
      // generatedSelectByAI: 'Select suitable subject by AI generated:',
      // confirmCommit: 'Are you sure you want to proceed with the commit above?'
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: '选择关联issue前缀(可选):',
      customFooterPrefix: '输入自定义issue前缀 :',
      footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      generatingByAI: '正在通过 AI 生成你的提交简短描述...',
      generatedSelectByAI: '选择一个 AI 生成的简短描述:',
      confirmCommit: '是否提交或修改commit ?'
    },
    types: [
      { value: 'feat', name: 'feat:     ✨  A new feature', emoji: ':sparkles:' }, // 特性 新增功能
      { value: 'fix', name: 'fix:      🐛  A bug fix', emoji: ':bug:' }, // 修复 修复bug
      { value: 'docs', name: 'docs:     📝  Documentation only changes', emoji: ':memo:' }, // 文档 修改了文档
      { value: 'style', name: 'style:    💄  Changes that do not affect the meaning of the code', emoji: ':lipstick:' }, // 样式 代码格式化
      { value: 'refactor', name: 'refactor: ♻️   A code change that neither fixes a bug nor adds a feature', emoji: ':recycle:' }, // 重构 代码重构
      { value: 'perf', name: 'perf:     ⚡️  A code change that improves performance', emoji: ':zap:' }, // 性能 优化相关
      { value: 'test', name: 'test:     ✅  Adding missing tests or correcting existing tests', emoji: ':white_check_mark:' }, // 测试 测试相关
      { value: 'build', name: 'build:    📦️   Changes that affect the build system or external dependencies', emoji: ':package:' }, // 构建 项目构建相关
      { value: 'ci', name: 'ci:       🎡  Changes to our CI configuration files and scripts', emoji: ':ferris_wheel:' }, // CI 持续集成相关
      { value: 'chore', name: "chore:    🔨  Other changes that don't modify src or test files", emoji: ':hammer:' }, // 其他 其他杂项
      { value: 'revert', name: 'revert:   ⏪️  Reverts a previous commit', emoji: ':rewind:' } // 回滚 回滚相关
    ],
    useEmoji: true,
    emojiAlign: 'center',
    useAI: false,
    aiNumber: 1,
    themeColorCode: '',
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixes: [{ value: 'closed', name: 'closed:   ISSUES has been processed' }],
    customIssuePrefixAlign: 'top',
    emptyIssuePrefixAlias: 'skip',
    customIssuePrefixAlias: 'custom',
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: ''
  }
}
