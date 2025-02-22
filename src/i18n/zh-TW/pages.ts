export default {
  accountPage: {
    accountTitle: '帳號',
    infoHeader: '資訊',
    emailLabel: '電子郵件',
    cloudSyncHeader: '雲同步',
    cloudSyncDescription:
      '跨裝置即時雲同步服務，能夠同步工作區、對話、助手、設定、插件等所有資料。',
    cloudSyncPrice: '價格為{price}元/月',
    statusLabel: '狀態',
    evalLabel: '試用中',
    evalDaysLeft: '剩餘試用天數：{days}',
    subscribeButton: '訂閱',
    subscribedLabel: '已訂閱',
    validUntil: '有效期至 {date}',
    renewButton: '續訂',
    modelServicesHeader: '模型服務',
    modelServicesDescription:
      '一站式地使用不同服務商的各種先進模型，包括 deepseek-reasoner、claude-3-5-sonnet、o3-mini 等，無需配置。額度隨用隨充，永久有效。按照官方API原價扣費（按USD/CNY=7計算）。',
    modelPricingLink: '模型價格',
    usingDefaultService: '正在使用（作為全域預設服務商）',
    customService: '未使用（已配置全域自定義服務商）',
    remainingBudget: '剩餘額度',
    topupButton: '儲值',
    orderHistoryHeader: '歷史訂單',
    contactDeveloper:
      '若訂單遇到異常，請聯絡開發者，Email：',
    logoutButton: '登出',
    licenseOk: '已啟用',
    licenseExpired: '已過期',
    licenseDeactivated: '已停用',
    licenseUnknown: '未知',
    orderId: '訂單號',
    paymentTime: '支付時間',
    orderType: '類型',
    syncServiceType: '雲同步服務',
    apiBudgetType: '模型額度',
    amount: '數量'
  },
  modelPricing: {
    modelPrice: '模型價格',
    modelPerformance: '模型效能',
    modelPerformanceDescription1:
      '以 gpt-4o 作為效能基準，與之相比，claude-3-5-sonnet 在程式碼方面更強，o1 系列特別擅長邏輯推理，gemini-1.5-pro 則是更便宜的替代選項。',
    modelPerformanceDescription2:
      'gpt-4o-mini 和 gemini-1.5-flash 是低價模型的優良選擇，比上述模型價格低了一個數量級，適合用於簡單問題和需要大量輸出的場景。',
    modelPerformanceDescription3:
      '國產模型的第一梯隊是通義千問（qwen）和 deepseek；deepseek v3（即目前的 deepseek-chat）是第一個真正達到 gpt-4o 等級的國產模型，deepseek r1 （即目前的 deepseek-reasoner）則是第一個對標 o1 的推理模型；其他國產模型（文心一言、豆包、kimi等）則還要排在後面。模型排行榜可參考 ',
    modelPerformanceDescription4:
      '此外，還有幾個免費模型（下方價格為 0 的），它們主要是實驗模型。免費模型不保證可用性。',
    disclaimer: '以上觀點僅供參考，模型效果以實際使用為準',
    usageCalculator: '用量計算機',
    usageCalculatorDescription: '所有模型以各服務商官方API價格扣費，按USD/CNY=7匯率計算。',
    budgetLabel: '使用額度（元）',
    modelLabel: '模型',
    outputLabel: '輸出字數',
    tokenCalculationDescription:
      '按每Token輸出1.4個漢字（新GPT模型）或1個漢字（其他模型）或1.8個漢字（國產模型）計算。實際比率有波動，平均而言略大於此值，但還需考慮輸入開銷',
    availableModels: '可用模型',
    getModelPriceFailed: '獲取模型價格失敗',
    inputPrice: '輸入價格',
    outputPrice: '輸出價格',
    freeModelDisclaimer: '此外，還有幾個免費模型（下方價格為 0 的），它們主要是實驗模型。免費模型不保證可用性。',
    performanceNote: '以上觀點僅供參考，模型效果以實際使用為準',
    usageDescription: '所有模型以各服務商官方API價格扣費，按USD/CNY=7匯率計算。',
    tokenOutputNote: '按每Token輸出1.4個漢字（新GPT模型）或1個漢字（其他模型）或1.8個漢字（國產模型）計算。實際比率有波動，平均而言略大於此值，但還需考慮輸入開銷',
    currencyCNY: '￥',
    currencyUSD: '$',
    unitKTokens: 'K Tokens',
    unitMTokens: 'M Tokens',
    modelName: '模型'
  },
  pluginsPage: {
    installedPlugins: '已安裝插件'
  },
  setProviderPage: {
    providerSet: '已設定服務商為：{baseURL}',
    restore: '還原',
    providerSetFailed: '設定服務商失敗：格式錯誤'
  },
  shortcutKeysPage: {
    keyboardShortcuts: '鍵盤快捷鍵',
    enableKeyboardShortcuts: '啟用鍵盤快捷鍵',
    dialogPage: '對話頁面',
    scrollUp: '向上滾動',
    scrollDown: '向下滾動',
    scrollToTop: '滾動到頂部',
    scrollToBottom: '滾動到底部',
    switchToPreviousThread: '切換到前一條訊息鏈',
    switchToNextThread: '切換到後一條訊息鏈',
    switchToFirstThread: '切換到第一條訊息鏈',
    switchToLastThread: '切換到最後一條訊息鏈',
    regenerateAssistantMessage: '重新生成助手訊息',
    editUserMessage: '編輯使用者訊息',
    focusInputBox: '聚焦輸入框',
    dialogList: '對話列表',
    newDialog: '新建對話',
    editArtifacts: '編輯 Artifacts',
    saveArtifact: '儲存 Artifact'
  },
  settingsPage: {
    title: '設定',
    customProviderHeader: '自定義服務商',
    shareLinkLabel: '分享連結',
    shareLinkCaption: '用於分享你的服務商設定。其他人開啟連結後，會自動應用此設定',
    copyLinkLabel: '複製連結',
    noProviderConfigured: '目前未配置自定義服務商，將預設使用我們提供的模型服務。詳見',
    accountPage: '帳號',
    pageSuffix: '頁面',
    defaultModelHeader: '預設模型',
    systemAssistantHeader: '系統助手',
    systemAssistantCaption: '用於總結對話標題、提取 Artifacts。如果留空，則使用預設服務商設定',
    operationHeader: '功能',
    autoSummarizeTitle: '自動總結對話標題',
    autoSummarizeCaption: '在第一輪對話結束時，自動總結標題',
    messageSelectionMenu: '訊息選中文本選單',
    messageSelectionCaption: '選中訊息文本時，顯示操作按鈕',
    codePasteOptimize: '程式碼貼上最佳化',
    codePasteCaption: '貼上從 VSCode 複製的程式碼時，自動用 markdown 程式碼區塊包裹',
    quickScrollButton: '快速滾動按鈕',
    quickScrollCaption: '在對話右下角顯示快速滾動按鈕。關閉後，你仍然可以使用鍵盤快捷鍵滾動',
    autoFocusInput: '自動聚焦對話輸入框',
    autoLockBottom: '生成時自動鎖定底部',
    messageContentCatalog: '訊息內容目錄',
    messageContentCatalogCaption: '空間足夠時，在訊息旁邊顯示目錄',
    artifactsSettings: 'Artifacts 設定',
    enableArtifacts: '啟用 Artifacts 功能',
    autoExtractArtifact: '自動提取 Artifact',
    autoExtractArtifactCaption: '自動提取助手回答中的 Artifact',
    reserveOriginalArtifact: '提取時保留原文',
    autoNameArtifact: '預設自動命名 Artifact',
    sendKeyShortcut: '傳送訊息快捷鍵',
    keyboardShortcuts: '鍵盤快捷鍵',
    uiHeader: '介面',
    appearance: '外觀',
    themeColor: '主題色',
    userAvatar: '使用者頭像',
    commonModels: '常用模型',
    commonModelsCaption: '用於在對話中快速切換模型。',
    getModelList: '獲取模型列表',
    showWarnings: '顯示警告',
    showWarningsCaption: '顯示響應中的警告訊息',
    markdownRendering: 'Markdown 渲染',
    theme: '主題',
    codeTheme: '程式碼主題',
    disableMermaid: '禁用 Mermaid',
    codeAutoFoldThreshold: '程式碼自動摺疊閾值',
    codeAutoFoldThresholdCaption: '程式碼區塊超過此行數後，自動摺疊。預設不摺疊',
    dataHeader: '資料',
    userData: '使用者資料',
    export: '導出',
    import: '導入',
    restoreDefaultSettings: '恢復預設設定',
    restoreSettingsConfirmation: '確定將所有設定恢復預設？',
    followSystem: '跟隨系統',
    light: '淺色',
    dark: '深色',
    selectCommonModels: '選擇常用模型',
    getModelListFailed: '獲取模型列表失敗',
    exportFailed: '導出失敗',
    auto: '自動',
    language: '語言'
  },
  errorNotFoundPage: {
    message: '這裡什麼都沒有...'
  },
  assistantsPage: {
    globalAssistant: '全域助手'
  },
  workspacePage: {
    closeArtifact: '關閉',
    closeAllArtifacts: '關閉全部 Artifacts',
    workspaceHome: '工作區主頁',
    workspaceSettings: '工作區設定',
    assistants: '助手',
    artifactsGuide: '可參考',
    artifactsGuideLink: 'Artifacts 使用指南',
    create: '建立',
    selectFile: '選擇檔案',
    dialogs: '對話',
    createArtifact: '建立 Artifact',
    name: '名稱',
    nonTextFile: '非文本檔案：{name}'
  },
  mainLayout: {
    workspace: '工作區',
    assistants: '助手',
    plugins: '插件',
    settings: '設定',
    usageGuide: '使用指南',
    currentVersion: '目前版本',
    changeLog: '更新日誌'
  }
}
