'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
const patch = require('./patch-318939d3.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patch.patchEsm().then(() => {
  return index.bootstrapLazy(JSON.parse("[[\"snt-layout.cjs\",[[4,\"snt-layout\",{\"viewport\":[513],\"padding\":[513]}]]],[\"header-example.cjs\",[[0,\"header-example\"]]],[\"connect-offers-example.cjs\",[[0,\"connect-offers-example\"]]],[\"three-column-mixed-example.cjs\",[[0,\"three-column-mixed-example\"]]],[\"hero-example.cjs\",[[0,\"hero-example\"]]],[\"vertical-tab-example.cjs\",[[0,\"vertical-tab-example\"]]],[\"link-example.cjs\",[[0,\"link-example\"]]],[\"modal-example.cjs\",[[0,\"modal-example\"]]],[\"multi-column-example.cjs\",[[0,\"multi-column-example\"]]],[\"responsive-images-example.cjs\",[[0,\"responsive-images-example\"]]],[\"three-column-example.cjs\",[[0,\"three-column-example\"]]],[\"two-column-feature-example.cjs\",[[0,\"two-column-feature-example\"]]],[\"ad-example.cjs\",[[0,\"ad-example\"]]],[\"footer-example.cjs\",[[0,\"footer-example\"]]],[\"icon-copy-example.cjs\",[[0,\"icon-copy-example\"]]],[\"common-styles-example.cjs\",[[0,\"common-styles-example\"]]],[\"cta-highlight-example.cjs\",[[0,\"cta-highlight-example\"]]],[\"cta-reminder-example.cjs\",[[0,\"cta-reminder-example\"]]],[\"form-example.cjs\",[[0,\"form-example\"]]],[\"treeview-example.cjs\",[[0,\"treeview-example\"]]],[\"blog-feature-articles-example.cjs\",[[0,\"blog-feature-articles-example\"]]],[\"blog-results-example.cjs\",[[0,\"blog-results-example\"]]],[\"page-not-found-example.cjs\",[[0,\"page-not-found-example\"]]],[\"two-column-example.cjs\",[[0,\"two-column-example\"]]],[\"blog-example.cjs\",[[0,\"blog-example\"]]],[\"faq-block-example.cjs\",[[0,\"faq-block-example\"]]],[\"search-combobox-example.cjs\",[[0,\"search-combobox-example\"]]],[\"search-results-example.cjs\",[[0,\"search-results-example\"]]],[\"snt-tabs-example.cjs\",[[0,\"snt-tabs-example\"]]],[\"accordion-example.cjs\",[[0,\"accordion-example\"]]],[\"breadcrumb-example.cjs\",[[0,\"breadcrumb-example\"]]],[\"panel-example.cjs\",[[0,\"panel-example\"]]],[\"source-list-example.cjs\",[[0,\"source-list-example\"]]],[\"testimonial-example.cjs\",[[0,\"testimonial-example\"]]],[\"video-example.cjs\",[[0,\"video-example\"]]],[\"article-list-example.cjs\",[[0,\"article-list-example\"]]],[\"dropdown-example.cjs\",[[0,\"dropdown-example\"]]],[\"faq-filter-slider-example.cjs\",[[0,\"faq-filter-slider-example\"]]],[\"faq-pagination-example.cjs\",[[0,\"faq-pagination-example\"]]],[\"feature-left-example.cjs\",[[0,\"feature-left-example\",{\"viewport\":[513]}]]],[\"feature-right-example.cjs\",[[0,\"feature-right-example\",{\"viewport\":[513]}]]],[\"image-icon-example.cjs\",[[0,\"image-icon-example\"]]],[\"skiptomain-example.cjs\",[[0,\"skiptomain-example\",{\"mainContentId\":[513,\"main-content-id\"]}]]],[\"snt-login.cjs\",[[0,\"snt-login\",{\"authed\":[1],\"languageJson\":[1,\"language-json\"],\"accountLoginUrl\":[1,\"account-login-url\"],\"accountDashboardUrl\":[1,\"account-dashboard-url\"]}]]],[\"tip-example.cjs\",[[0,\"tip-example\"]]],[\"title-copy-example.cjs\",[[0,\"title-copy-example\"]]],[\"title-example.cjs\",[[0,\"title-example\"]]],[\"button-link-example.cjs\",[[0,\"button-link-example\"]]],[\"image-example.cjs\",[[0,\"image-example\"]]],[\"recaptcha-example.cjs\",[[0,\"recaptcha-example\",{\"captchas\":[32]}]]],[\"snt-alert.cjs\",[[4,\"snt-alert\",{\"dismissible\":[4],\"animatable\":[4],\"type\":[1],\"explorerOnly\":[513,\"explorer-only\"],\"show\":[32],\"fade\":[32],\"dismiss\":[64]}]]],[\"snt-navbar-brand.cjs\",[[0,\"snt-navbar-brand\",{\"href\":[513],\"imgAlt\":[513,\"img-alt\"],\"imgSrc\":[513,\"img-src\"]}]]],[\"context-consumer.cjs\",[[0,\"context-consumer\",{\"context\":[16],\"renderer\":[16],\"subscribe\":[16],\"unsubscribe\":[32]}]]],[\"demo-app-home.cjs\",[[0,\"demo-app-home\"]]],[\"snt-accordion-builder.cjs\",[[0,\"snt-accordion-builder\"]]],[\"snt-accordion-group-builder.cjs\",[[0,\"snt-accordion-group-builder\"]]],[\"snt-multi-button.cjs\",[[0,\"snt-multi-button\",{\"styles\":[32]}]]],[\"snt-toggle.cjs\",[[0,\"snt-toggle\"]]],[\"snt-viewport.cjs\",[[0,\"snt-viewport\",{\"name\":[1],\"devices\":[1],\"height\":[1],\"spacing\":[1]}]]],[\"snt-wysiwyg.cjs\",[[4,\"snt-wysiwyg\"]]],[\"stencil-async-content.cjs\",[[0,\"stencil-async-content\",{\"documentLocation\":[1,\"document-location\"],\"content\":[32]}]]],[\"stencil-route-title.cjs\",[[0,\"stencil-route-title\",{\"titleSuffix\":[1,\"title-suffix\"],\"pageTitle\":[1,\"page-title\"]}]]],[\"stencil-router-prompt.cjs\",[[0,\"stencil-router-prompt\",{\"when\":[4],\"message\":[1],\"history\":[16],\"unblock\":[32]}]]],[\"stencil-router-redirect.cjs\",[[0,\"stencil-router-redirect\",{\"history\":[16],\"root\":[1],\"url\":[1]}]]],[\"snt-header.cjs\",[[4,\"snt-header\",{\"styleClasses\":[513,\"style-classes\"],\"fixed\":[516],\"languageJson\":[513,\"language-json\"],\"mainContentId\":[513,\"main-content-id\"],\"active\":[516],\"toggleActive\":[64],\"setActive\":[64]},[[0,\"toggleSearch\",\"onToggleSearch\"],[9,\"scroll\",\"onScroll\"],[16,\"viewportChanged\",\"onViewportChanged\"]]]]],[\"snt-connect-offers.cjs\",[[0,\"snt-connect-offers\",{\"offerAvailable\":[1,\"offer-available\"],\"logoSources\":[1,\"logo-sources\"],\"altTag\":[1,\"alt-tag\"],\"offerTitle\":[1,\"offer-title\"],\"titleString\":[513,\"title-string\"],\"href\":[513],\"target\":[513],\"description\":[513],\"buttonLabel\":[513,\"button-label\"],\"ariaLabel\":[513,\"aria-label\"],\"actionReference\":[513,\"action-reference\"],\"actionData\":[513,\"action-data\"],\"modalData\":[1,\"modal-data\"],\"modalDataObj\":[32]}]]],[\"snt-cta-highlight.cjs\",[[4,\"snt-cta-highlight\",{\"cta\":[1],\"actionReference\":[1,\"action-reference\"],\"actionData\":[1,\"action-data\"],\"url\":[513],\"urlTarget\":[513,\"url-target\"],\"buttonId\":[1,\"button-id\"]}]]],[\"snt-cta-reminder.cjs\",[[0,\"snt-cta-reminder\",{\"titleString\":[513,\"title-string\"],\"linkTitle\":[513,\"link-title\"],\"url\":[513],\"urlTarget\":[513,\"url-target\"],\"actionReference\":[1,\"action-reference\"],\"actionData\":[1,\"action-data\"],\"styleClasses\":[513,\"style-classes\"],\"buttonId\":[1,\"button-id\"]}]]],[\"snt-blog-results.cjs\",[[0,\"snt-blog-results\",{\"blogResultsString\":[513,\"blog-results-string\"]}]]],[\"snt-faq-block-list.cjs\",[[0,\"snt-faq-block-list\",{\"faqBlockList\":[16],\"menuAriaLabel\":[513,\"menu-aria-label\"]}]]],[\"snt-video.cjs\",[[4,\"snt-video\",{\"headline\":[1],\"shareUrl\":[1,\"share-url\"],\"oembedUrl\":[1,\"oembed-url\"],\"playUrl\":[1,\"play-url\"],\"transcriptSummaryOpen\":[1,\"transcript-summary-open\"],\"transcriptSummaryClose\":[1,\"transcript-summary-close\"],\"playerEmbed\":[32]}]]],[\"snt-blog-feature-articles.cjs\",[[4,\"snt-blog-feature-articles\"]]],[\"snt-blog-info.cjs\",[[0,\"snt-blog-info\",{\"titleText\":[1,\"title-text\"],\"blogLink\":[1,\"blog-link\"],\"publishedTime\":[1,\"published-time\"],\"timeToRead\":[1,\"time-to-read\"],\"accessibilityText\":[1,\"accessibility-text\"]}]]],[\"snt-faq-filter-slider.cjs\",[[0,\"snt-faq-filter-slider\",{\"filterItems\":[513,\"filter-items\"],\"menuAriaLabel\":[1,\"menu-aria-label\"],\"currentActive\":[513,\"current-active\"]}]]],[\"snt-image-icon.cjs\",[[0,\"snt-image-icon\",{\"properties\":[1],\"imgAlt\":[1,\"img-alt\"],\"styleClasses\":[513,\"style-classes\"]}]]],[\"snt-tabs.cjs\",[[4,\"snt-tabs\",{\"selected\":[32]}]]],[\"snt-three-column.cjs\",[[4,\"snt-three-column\",{\"styleClasses\":[513,\"style-classes\"]},[[16,\"viewportChanged\",\"onResize\"]]]]],[\"snt-three-column-mixed.cjs\",[[4,\"snt-three-column-mixed\",{\"styleClasses\":[513,\"style-classes\"]},[[16,\"viewportChanged\",\"onResize\"]]]]],[\"snt-tip.cjs\",[[4,\"snt-tip\",{\"iconPath\":[1,\"icon-path\"]}]]],[\"snt-vertical-tabs.cjs\",[[4,\"snt-vertical-tabs\",{\"selected\":[32]}]]],[\"legal-component.cjs\",[[0,\"legal-component\"]]],[\"snt-enhanced-button.cjs\",[[0,\"snt-enhanced-button\",{\"styleClasses\":[513,\"style-classes\"],\"discountText\":[1,\"discount-text\"],\"ctaText\":[1,\"cta-text\"],\"href\":[1],\"target\":[1],\"ariaLabel\":[1,\"aria-label\"],\"leftIconSources\":[1,\"left-icon-sources\"],\"rightIconSources\":[1,\"right-icon-sources\"],\"linkId\":[1,\"link-id\"]},[[0,\"keydown\",\"handleKeyDown\"],[0,\"click\",\"handleClick\"]]]]],[\"snt-form.cjs\",[[4,\"snt-form\",{\"text\":[513],\"submitCallBackhandler\":[8,\"submit-call-backhandler\"],\"openErrorModal\":[64],\"openSuccessModal\":[64],\"reset\":[64],\"getData\":[64]}]]],[\"snt-treeview.cjs\",[[0,\"snt-treeview\",{\"structure\":[1],\"treeitems\":[32],\"getTreeitems\":[64],\"updateExpandedTreeitems\":[64],\"updateVisibleTreeitems\":[64],\"updateFocusedTreeitems\":[64],\"updateSelectedTreeitems\":[64],\"findNodeByProperty\":[64],\"selectNodeByUrlOrKey\":[64],\"updateTreeView\":[64]}]]],[\"snt-two-column.cjs\",[[4,\"snt-two-column\",{\"styleClasses\":[513,\"style-classes\"]},[[16,\"viewportChanged\",\"onResize\"]]]]],[\"snt-data.cjs\",[[0,\"snt-data\",{\"type\":[1],\"lazyLoad\":[4,\"lazy-load\"],\"src\":[1],\"data\":[1],\"getData\":[64]}]]],[\"snt-image.cjs\",[[0,\"snt-image\",{\"dataSrc\":[1,\"data-src\"],\"srcImage\":[1,\"src-image\"],\"width\":[1],\"height\":[1],\"srcset\":[1],\"imgAlt\":[1,\"img-alt\"],\"sizes\":[1],\"styleClasses\":[513,\"style-classes\"]}]]],[\"snt-two-column-feature.cjs\",[[0,\"snt-two-column-feature\",{\"titleString\":[513,\"title-string\"],\"copyText\":[513,\"copy-text\"],\"imagePath\":[513,\"image-path\"],\"imageAltText\":[513,\"image-alt-text\"],\"imagePosition\":[513,\"image-position\"],\"primaryButtonText\":[1,\"primary-button-text\"],\"primaryButtonAction\":[1,\"primary-button-action\"],\"primaryButtonData\":[1,\"primary-button-data\"],\"secondaryButtonText\":[1,\"secondary-button-text\"],\"secondaryButtonAction\":[1,\"secondary-button-action\"],\"secondaryButtonData\":[1,\"secondary-button-data\"],\"linkTitle\":[1,\"link-title\"],\"linkUrl\":[1,\"link-url\"],\"openLinkInNewWindow\":[4,\"open-link-in-new-window\"],\"properties\":[1]}]]],[\"button-link-group.cjs\",[[4,\"button-link-group\"]]],[\"snt-ad.cjs\",[[4,\"snt-ad\",{\"titleString\":[513,\"title-string\"],\"styleClasses\":[513,\"style-classes\"],\"iconSources\":[1,\"icon-sources\"],\"logoSources\":[1,\"logo-sources\"],\"href\":[513],\"target\":[513],\"buttonLabel\":[513,\"button-label\"],\"linkLabel\":[513,\"link-label\"],\"ariaLabel\":[513,\"aria-label\"],\"actionReference\":[513,\"action-reference\"],\"actionData\":[513,\"action-data\"]}]]],[\"snt-hero.cjs\",[[4,\"snt-hero\",{\"propertiesSrc\":[1,\"properties-src\"],\"properties\":[1]},[[0,\"viewportChanged\",\"onResize\"]]]]],[\"snt-breadcrumb.cjs\",[[0,\"snt-breadcrumb\",{\"trail\":[8]}]]],[\"snt-source-link_2.cjs\",[[4,\"snt-source-list\",{\"panelId\":[1,\"panel-id\"],\"sourceHeading\":[1,\"source-heading\"]}],[4,\"snt-source-link\",{\"href\":[513],\"target\":[513],\"ariaLabel\":[513,\"aria-label\"],\"rel\":[513]}]]],[\"testimonial-quote_2.cjs\",[[4,\"testimonials-group\",{\"groupId\":[1,\"group-id\"],\"groupHeadline\":[1,\"group-headline\"],\"selected\":[2],\"slideSelector\":[1,\"slide-selector\"],\"indicatorSelector\":[1,\"indicator-selector\"],\"prevSelector\":[1,\"prev-selector\"],\"nextSelector\":[1,\"next-selector\"],\"cycleType\":[8,\"cycle-type\"],\"ride\":[4],\"wrap\":[4],\"onShow\":[64],\"onHide\":[64],\"next\":[64],\"prev\":[64]}],[4,\"testimonial-quote\",{\"containerId\":[1,\"container-id\"],\"fill\":[1],\"from\":[1],\"headline\":[1],\"single\":[32]}]]],[\"snt-accordion-group.cjs\",[[4,\"snt-accordion-group\",{\"multiExpand\":[4,\"multi-expand\"],\"expandAll\":[64],\"collapseAll\":[64],\"addAccordion\":[64]},[[0,\"accordionEvent\",\"onAccordionEvent\"]]]]],[\"snt-dropdown.cjs\",[[0,\"snt-dropdown\",{\"opened\":[516],\"placeholderText\":[513,\"placeholder-text\"],\"labelText\":[513,\"label-text\"],\"itemConfiguration\":[16],\"required\":[516],\"name\":[513],\"selectedItem\":[32],\"currentItem\":[32],\"open\":[64],\"close\":[64],\"toggle\":[64],\"isOpen\":[64],\"setValue\":[64],\"getValue\":[64],\"setIndex\":[64],\"getIndex\":[64]}]]],[\"snt-feature-left.cjs\",[[0,\"snt-feature-left\",{\"imgSrc\":[513,\"img-src\"],\"imgSrcSet\":[513,\"img-src-set\"],\"titleText\":[513,\"title-text\"],\"timeToRead\":[513,\"time-to-read\"],\"tagText\":[513,\"tag-text\"],\"blogLink\":[513,\"blog-link\"],\"imgAltText\":[513,\"img-alt-text\"],\"openInNewWindow\":[516,\"open-in-new-window\"]}]]],[\"snt-feature-right.cjs\",[[0,\"snt-feature-right\",{\"imgSrc\":[513,\"img-src\"],\"imgSrcSet\":[513,\"img-src-set\"],\"titleText\":[513,\"title-text\"],\"timeToRead\":[513,\"time-to-read\"],\"tagText\":[513,\"tag-text\"],\"blogLink\":[513,\"blog-link\"],\"imgAltText\":[513,\"img-alt-text\"],\"openInNewWindow\":[516,\"open-in-new-window\"]}]]],[\"snt-footer.cjs\",[[4,\"snt-footer\",{\"styleClasses\":[1,\"style-classes\"]}]]],[\"snt-image-column.cjs\",[[0,\"snt-image-column\",{\"imageSrc\":[513,\"image-src\"],\"imgAlt\":[1,\"img-alt\"]}]]],[\"snt-title.cjs\",[[4,\"snt-title\",{\"titleType\":[1,\"title-type\"],\"clampLines\":[2,\"clamp-lines\"],\"truncationString\":[1,\"truncation-string\"],\"clampTitle\":[64],\"setTitle\":[64]}]]],[\"snt-faq-block.cjs\",[[0,\"snt-faq-block\",{\"titleText\":[513,\"title-text\"],\"bodyText\":[513,\"body-text\"],\"articlesCount\":[513,\"articles-count\"],\"blockLink\":[513,\"block-link\"]}]]],[\"snt-recaptcha.cjs\",[[4,\"snt-recaptcha\",{\"sitekey\":[1],\"language\":[1],\"reset\":[64]},[[4,\"grecaptchaLoaded\",\"handleGrecaptchaLoaded\"]]]]],[\"snt-pagination.cjs\",[[0,\"snt-pagination\",{\"prevLinkLang\":[513,\"prev-link-lang\"],\"nextLinkLang\":[513,\"next-link-lang\"],\"pageNumLang\":[513,\"page-num-lang\"],\"pageNumAriaLang\":[513,\"page-num-aria-lang\"],\"paginationNavLang\":[513,\"pagination-nav-lang\"],\"totalPages\":[514,\"total-pages\"],\"curr\":[2],\"setPageNumber\":[64]}]]],[\"demo-app_5.cjs\",[[0,\"demo-app\"],[0,\"stencil-route\",{\"group\":[513],\"componentUpdated\":[16],\"match\":[1040],\"url\":[1],\"component\":[1],\"componentProps\":[16],\"exact\":[4],\"routeRender\":[16],\"scrollTopOffset\":[2,\"scroll-top-offset\"],\"routeViewsUpdated\":[16],\"location\":[16],\"history\":[16],\"historyType\":[1,\"history-type\"]}],[4,\"stencil-route-link\",{\"url\":[1],\"urlMatch\":[1,\"url-match\"],\"activeClass\":[1,\"active-class\"],\"exact\":[4],\"strict\":[4],\"custom\":[1],\"anchorClass\":[1,\"anchor-class\"],\"anchorRole\":[1,\"anchor-role\"],\"anchorTitle\":[1,\"anchor-title\"],\"anchorTabIndex\":[1,\"anchor-tab-index\"],\"anchorId\":[1,\"anchor-id\"],\"history\":[16],\"location\":[16],\"root\":[1],\"ariaHaspopup\":[1,\"aria-haspopup\"],\"ariaPosinset\":[1,\"aria-posinset\"],\"ariaSetsize\":[2,\"aria-setsize\"],\"ariaLabel\":[1,\"aria-label\"],\"match\":[32]}],[4,\"stencil-route-switch\",{\"group\":[513],\"scrollTopOffset\":[2,\"scroll-top-offset\"],\"location\":[16],\"routeViewsUpdated\":[16]}],[4,\"stencil-router\",{\"root\":[1],\"historyType\":[1,\"history-type\"],\"titleSuffix\":[1,\"title-suffix\"],\"scrollTopOffset\":[2,\"scroll-top-offset\"],\"location\":[32],\"history\":[32]}]]],[\"snt-blog.cjs\",[[0,\"snt-blog\",{\"imgSrc\":[513,\"img-src\"],\"imgSrcSet\":[513,\"img-src-set\"],\"titleText\":[513,\"title-text\"],\"timeToRead\":[513,\"time-to-read\"],\"tagText\":[513,\"tag-text\"],\"blogLink\":[513,\"blog-link\"],\"imgAltText\":[513,\"img-alt-text\"],\"openInNewWindow\":[516,\"open-in-new-window\"]}]]],[\"snt-panel.cjs\",[[4,\"snt-panel\"]]],[\"snt-icon-copy.cjs\",[[4,\"snt-icon-copy\",{\"titleString\":[513,\"title-string\"],\"styleClasses\":[513,\"style-classes\"],\"propertiesSrc\":[1,\"properties-src\"],\"properties\":[1],\"resizeEl\":[16],\"logoIsSet\":[4,\"logo-is-set\"],\"linkHref\":[1,\"link-href\"],\"linkTitle\":[1,\"link-title\"],\"linkTarget\":[1,\"link-target\"],\"linkRel\":[1,\"link-rel\"],\"linkActionReference\":[1,\"link-action-reference\"],\"linkActionData\":[1,\"link-action-data\"],\"linkId\":[1,\"link-id\"],\"registerViewport\":[64]}]]],[\"snt-search-result_2.cjs\",[[0,\"snt-search-result-list\",{\"searchResultListJson\":[513,\"search-result-list-json\"],\"noResultMsg\":[513,\"no-result-msg\"],\"separator\":[4]}],[0,\"snt-search-result\",{\"searchResult\":[16]}]]],[\"snt-article-link_2.cjs\",[[0,\"snt-article-list\",{\"articlesJson\":[513,\"articles-json\"],\"articles\":[16],\"heading\":[513]}],[0,\"snt-article-link\",{\"href\":[513],\"copy\":[513],\"ariaLabel\":[513,\"aria-label\"],\"hiddenTitle\":[513,\"hidden-title\"]}]]],[\"snt-accordion.cjs\",[[4,\"snt-accordion\",{\"expanded\":[1540],\"isCollapsed\":[64],\"isExpanded\":[64],\"collapse\":[64],\"expand\":[64],\"toggle\":[64]}]]],[\"snt-modal_2.cjs\",[[4,\"snt-modal\",{\"shown\":[1540],\"modalTitle\":[1537,\"modal-title\"],\"options\":[16],\"styleClasses\":[1,\"style-classes\"],\"languageString\":[1537,\"language-string\"],\"show\":[64],\"hide\":[64],\"toggle\":[64],\"isShown\":[64]},[[0,\"modalEvent\",\"modalEventHandler\"]]],[4,\"snt-title-copy\",{\"titleString\":[513,\"title-string\"],\"styleClasses\":[513,\"style-classes\"]}]]],[\"snt-link.cjs\",[[4,\"snt-link\",{\"linkId\":[1,\"link-id\"],\"href\":[513],\"target\":[513],\"ariaLabel\":[513,\"aria-label\"],\"current\":[516],\"downloadName\":[513,\"download-name\"],\"ariaCurrent\":[520,\"aria-current\"],\"rel\":[513],\"hiddenTitle\":[513,\"hidden-title\"],\"isExternal\":[4,\"is-external\"],\"classNames\":[1,\"class-names\"]},[[0,\"keydown\",\"handleKeyDown\"],[0,\"click\",\"handleClick\"],[1,\"mouseover\",\"handleMouseover\"]]]]],[\"snt-icon.cjs\",[[0,\"snt-icon\",{\"styleClasses\":[1,\"style-classes\"]}]]],[\"snt-action-button_3.cjs\",[[4,\"snt-action-button\",{\"actionReference\":[513,\"action-reference\"],\"actionData\":[513,\"action-data\"],\"iconClassName\":[1,\"icon-class-name\"],\"linkTitle\":[1,\"link-title\"],\"styleClasses\":[513,\"style-classes\"],\"buttonId\":[1,\"button-id\"],\"getEventConfiguration\":[64]},[[0,\"sntButtonClick\",\"onSntButtonClick\"],[0,\"sntButtonKeyDown\",\"onSntButtonKeyDown\"]]],[4,\"snt-button\",{\"iconClassName\":[1,\"icon-class-name\"],\"styleClasses\":[513,\"style-classes\"],\"hiddenTitle\":[513,\"hidden-title\"],\"buttonId\":[1,\"button-id\"]},[[0,\"keydown\",\"handleKeyDown\"],[0,\"click\",\"handleClick\"]]],[4,\"snt-event\",{\"type\":[513],\"filters\":[513]}]]],[\"snt-nav_2.cjs\",[[4,\"snt-nav-item\",{\"href\":[513],\"target\":[513],\"linkTitle\":[513,\"link-title\"],\"iconClassName\":[513,\"icon-class-name\"],\"expanded\":[516],\"current\":[516],\"styleClasses\":[513,\"style-classes\"],\"isExternal\":[4,\"is-external\"],\"expand\":[64],\"collapse\":[64],\"toggleExpanded\":[64],\"setCurrent\":[64],\"unsetCurrent\":[64],\"toggleCurrent\":[64],\"registerParent\":[64],\"isType\":[64]},[[1,\"mouseover\",\"handleMouseOver\"],[1,\"mouseleave\",\"handleMouseleave\"]]],[4,\"snt-nav\",{\"expander\":[513],\"separator\":[516],\"styleClasses\":[513,\"style-classes\"]},[[0,\"navItemEvent\",\"handleNavItemEvent\"]]]]],[\"snt-multi-column-mixed.cjs\",[[4,\"snt-multi-column-mixed\",{\"styleClasses\":[513,\"style-classes\"],\"columnCount\":[1,\"column-count\"],\"tagLastRow\":[64],\"setColumns\":[64]},[[9,\"resize\",\"adjustLayout\"]]]]],[\"snt-backdrop.cjs\",[[0,\"snt-backdrop\",{\"tappable\":[16],\"stopPropagation\":[16]},[[2,\"touchstart\",\"onTouchStart\"],[2,\"click\",\"onMouseDown\"],[2,\"mousedown\",\"onMouseDown\"]]]]],[\"snt-search-combobox_2.cjs\",[[0,\"snt-search-typeahead\",{\"languageJson\":[513,\"language-json\"],\"searchComboboxId\":[1,\"search-combobox-id\"]},[[0,\"sntButtonClick\",\"handleSearchButtonClick\"]]],[0,\"snt-search-combobox\",{\"autoComplete\":[4,\"auto-complete\"],\"ariaLabelledby\":[1,\"aria-labelledby\"],\"ariaLabel\":[1,\"aria-label\"],\"languageJson\":[1,\"language-json\"],\"languageString\":[1,\"language-string\"],\"searchFunctionRef\":[1,\"search-function-ref\"],\"value\":[1025],\"padding\":[513],\"activeIndex\":[2,\"active-index\"],\"focused\":[32],\"expanded\":[32],\"SearchSuggestion\":[32],\"setFocus\":[64],\"getInputElement\":[64],\"setSearchSuggestions\":[64]},[[32,\"sntBackdropTap\",\"onClick\"]]]]],[\"snt-action-link.cjs\",[[4,\"snt-action-link\",{\"actionReference\":[513,\"action-reference\"],\"actionData\":[513,\"action-data\"],\"linkTitle\":[1,\"link-title\"],\"iconClassName\":[1,\"icon-class-name\"],\"styleClasses\":[513,\"style-classes\"],\"linkId\":[1,\"link-id\"],\"getEventConfiguration\":[64]},[[0,\"linkEvent\",\"sntBtnEvent\"]]]]],[\"button-link.cjs\",[[4,\"button-link\",{\"href\":[513],\"target\":[513],\"ariaLabel\":[513,\"aria-label\"],\"ariaDescribedByText\":[513,\"aria-described-by-text\"],\"classNames\":[1,\"class-names\"],\"buttonId\":[1,\"button-id\"]},[[0,\"keydown\",\"handleKeyDown\"],[0,\"click\",\"handleClick\"],[1,\"mouseover\",\"handleMouseover\"]]]]],[\"snt-navbar_8.cjs\",[[0,\"snt-search-bar\",{\"active\":[516],\"styleClasses\":[513,\"style-classes\"],\"languageJson\":[513,\"language-json\"],\"toggleActive\":[64]}],[0,\"snt-search-panel\",{\"active\":[516],\"styleClasses\":[1,\"style-classes\"],\"languageJson\":[513,\"language-json\"],\"toggleActive\":[64]}],[4,\"snt-navbar\",{\"styleClasses\":[1,\"style-classes\"],\"active\":[516],\"viewport\":[513],\"languageString\":[1,\"language-string\"],\"toggleActive\":[64]},[[0,\"navbarToggled\",\"listenNavbarTogglerEvent\"]]],[4,\"snt-navbar-collapse\",{\"shown\":[516],\"viewport\":[513],\"logoUrl\":[1,\"logo-url\"],\"toggleShown\":[64]}],[0,\"snt-shopping-cart\",{\"cartValue\":[1,\"cart-value\"]}],[0,\"snt-navbar-toggle\",{\"collapsed\":[516],\"ariaControls\":[1,\"aria-controls\"],\"languageString\":[1,\"language-string\"],\"toggleCollapsed\":[64]}],[4,\"snt-skip-to-main\",{\"mainContentId\":[513,\"main-content-id\"],\"linkText\":[513,\"link-text\"],\"ariaLabel\":[513,\"aria-label\"]}],[4,\"snt-pane\",{\"collapsed\":[516],\"animated\":[516],\"styleClasses\":[513,\"style-classes\"],\"toggleCollapsed\":[64]},[[0,\"close\",\"listenButtonEvent\"]]]]]]"), options);
  });
};

exports.defineCustomElements = defineCustomElements;
