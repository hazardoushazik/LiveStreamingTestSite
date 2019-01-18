





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-pWLt6abkYhNeAHaDrPVG0yXCtIGRuCkwSUqQpsyN6smAIpIt+Iuq2IZKmoH9l3Cy/9ZnjvVrFZnvFFjGiqE3EA==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-a3b8a10d4a9e37a78f033ef4a4f525f5.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-G7mYHEt7Y7zFn7hm7gLgJ5Ia5PcZHK28iGvw/rgXS3YlUDB0FDZGpUIXVgyLQmFkCchdlLcw48n2EqPZnJCC1Q==" rel="stylesheet" href="https://github.githubassets.com/assets/github-23be9924dc912cdb790c326e87efcc44.css" />
  
  
  <link crossorigin="anonymous" media="all" integrity="sha512-CI0aupM7vyUlK4oJNrqFAf5JIxoBncTsq0c/iMiOLZntDApSFucc1nz8GfM4T4XGcjdix0j7PcsEXih5rGV9+g==" rel="stylesheet" href="https://github.githubassets.com/assets/site-4e4e109cc582394de1859288564895a7.css" />
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>socket.io-client/socket.io.js at master · socketio/socket.io-client · GitHub</title>
    <meta name="description" content="Realtime application framework (client). Contribute to socketio/socket.io-client development by creating an account on GitHub.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta property="og:image" content="https://avatars3.githubusercontent.com/u/10566080?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="socketio/socket.io-client" /><meta property="og:url" content="https://github.com/socketio/socket.io-client" /><meta property="og:description" content="Realtime application framework (client). Contribute to socketio/socket.io-client development by creating an account on GitHub." />

  <link rel="assets" href="https://github.githubassets.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="D78F:17EA:C5BA4:1D8A31:5C3D134E" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="D78F:17EA:C5BA4:1D8A31:5C3D134E" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">


<meta class="js-ga-set" name="dimension1" content="Logged Out">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="ZThhYzM5MTFhOTg3ZmI3NjUxZTUxMjhlMzZiODNkMDEwOWVkNzg1NzYzMmIxODExOGU5YzQ3MzI3MzUzZGI5OHx7InJlbW90ZV9hZGRyZXNzIjoiMTQyLjExNC4yNDAuNiIsInJlcXVlc3RfaWQiOiJENzhGOjE3RUE6QzVCQTQ6MUQ4QTMxOjVDM0QxMzRFIiwidGltZXN0YW1wIjoxNTQ3NTA2NTE4LCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="DASHBOARD_V2_LAYOUT_OPT_IN,EXPLORE_DISCOVER_REPOSITORIES,UNIVERSE_BANNER,MARKETPLACE_PLAN_RESTRICTION_EDITOR">

  <meta name="html-safe-nonce" content="92f7fcd8286572bf64f6338a7c73c2754518615a">

  <meta http-equiv="x-pjax-version" content="66858dd07d82618189ce937329019057">
  

      <link href="https://github.com/socketio/socket.io-client/commits/master.atom" rel="alternate" title="Recent Commits to socket.io-client:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/socketio/socket.io-client git https://github.com/socketio/socket.io-client.git">

  <meta name="octolytics-dimension-user_id" content="10566080" /><meta name="octolytics-dimension-user_login" content="socketio" /><meta name="octolytics-dimension-repository_id" content="557977" /><meta name="octolytics-dimension-repository_nwo" content="socketio/socket.io-client" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="557977" /><meta name="octolytics-dimension-repository_network_root_nwo" content="socketio/socket.io-client" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-out env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    


        
<header class="Header header-logged-out  position-relative f4 py-3" role="banner">
  <div class="container-lg d-flex px-3">
    <div class="d-flex flex-justify-between flex-items-center">
        <a class="mr-4" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark; experiment:site_header_dropdowns; group:dropdowns">
          <svg height="32" class="octicon octicon-mark-github text-white" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
        </a>
    </div>

    <div class="HeaderMenu HeaderMenu--logged-out d-flex flex-justify-between flex-items-center flex-auto">
      <div class="d-none">
        <button class="btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <svg height="24" class="octicon octicon-x text-gray" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
        </button>
      </div>

        <nav class="mt-0" aria-label="Global">
          <ul class="d-flex list-style-none">
              <li class=" mr-3 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap  d-inline-block">
                    Why GitHub?
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-relative">
                      <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>
                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 mt-0  p-4 left-n4 position-absolute">
                    <a href="/features" class="py-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Features">Features <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a>
                    <ul class="list-style-none f5 pb-3">
                      <li class="edge-item-fix"><a href="/features/code-review/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Code review">Code review</a></li>
                      <li class="edge-item-fix"><a href="/features/project-management/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Project management">Project management</a></li>
                      <li class="edge-item-fix"><a href="/features/integrations" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Integrations">Integrations</a></li>
                      <li class="edge-item-fix"><a href="/features#team-management" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Team management">Team management</a></li>
                      <li class="edge-item-fix"><a href="/features#social-coding" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Social coding">Social coding</a></li>
                      <li class="edge-item-fix"><a href="/features#documentation" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Documentation">Documentation</a></li>
                      <li class="edge-item-fix"><a href="/features#code-hosting" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Code hosting">Code hosting</a></li>
                    </ul>

                    <ul class="list-style-none mb-0 border-lg-top pt-lg-3">
                      <li class="edge-item-fix"><a href="/case-studies" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Case studies">Case Studies <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                      <li class="edge-item-fix"><a href="/security" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Security">Security <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>
              <li class=" mr-3 mr-lg-3">
                <a href="/enterprise" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, go to Enterprise">Enterprise</a>
              </li>

              <li class=" mr-3 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap  d-inline-block">
                    Explore
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-relative">
                      <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>

                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-0 mt-0  p-4 left-n4 position-absolute">
                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/explore" class="py-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Features">Explore GitHub <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>

                    <h4 class="text-gray-light text-normal text-mono f5 mb-2  border-top pt-3">Learn &amp; contribute</h4>
                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/topics" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Topics">Topics</a></li>
                      <li class="edge-item-fix"><a href="/collections" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Collections">Collections</a></li>
                      <li class="edge-item-fix"><a href="/trending" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Trending">Trending</a></li>
                      <li class="edge-item-fix"><a href="https://lab.github.com/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Learning lab">Learning Lab</a></li>
                      <li class="edge-item-fix"><a href="https://opensource.guide" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Open source guides">Open source guides</a></li>
                    </ul>

                    <h4 class="text-gray-light text-normal text-mono f5 mb-2  border-top pt-3">Connect with others</h4>
                    <ul class="list-style-none mb-0">
                      <li class="edge-item-fix"><a href="/events" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Events">Events</a></li>
                      <li class="edge-item-fix"><a href="https://github.community" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Community forum">Community forum</a></li>
                      <li class="edge-item-fix"><a href="https://education.github.com" class="py-2 pb-0 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to GitHub Education">GitHub Education</a></li>
                    </ul>
                  </div>
                </details>
              </li>

              <li class=" mr-3 mr-lg-3">
                <a href="/marketplace" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, go to Marketplace">Marketplace</a>
              </li>

              <li class=" mr-3 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap  d-inline-block">
                    Pricing
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-relative">
                       <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>

                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-4 mt-0  p-4 left-n4 position-absolute">
                    <a href="/pricing" class="pb-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Pricing">Plans <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a>

                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/pricing#feature-comparison" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Compare features">Compare plans</a></li>
                      <li class="edge-item-fix"><a href="https://enterprise.github.com/contact" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Compare features">Contact Sales</a></li>
                    </ul>

                    <ul class="list-style-none mb-0  border-top pt-3">
                      <li class="edge-item-fix"><a href="/nonprofit" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Nonprofits">Nonprofit <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                      <li class="edge-item-fix"><a href="https://education.github.com/discount_requests/new" class="py-2 pb-0 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover"  data-ga-click="(Logged out) Header, go to Education">Education <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>
          </ul>
        </nav>

      <div class="d-flex flex-items-center px-0 text-center text-left">
          <div class="d-lg-flex mr-3">
            <div class="header-search scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" data-scope-type="Repository" data-scope-id="557977" data-scoped-search-url="/socketio/socket.io-client/search" data-unscoped-search-url="/search" action="/socketio/socket.io-client/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control header-search-wrapper header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search"
          data-unscoped-placeholder="Search GitHub"
          data-scoped-placeholder="Search"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=LyLPZ8QEHLqMZ3cbCshArpS6BYPWj18pcGuR28vEOfIxPkN1r0sCb+iVKbB5PvOXJJfx8n/Z4W9wn5WcWlwr8w=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


</ul>

            </div>
      </label>
</form>  </div>
</div>

          </div>

        <a class="HeaderMenu-link no-underline mr-3" href="/login?return_to=%2Fsocketio%2Fsocket.io-client%2Fblob%2Fmaster%2Fdist%2Fsocket.io.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign&nbsp;in</a>
          <a class="HeaderMenu-link d-inline-block no-underline border border-gray-dark rounded-1 px-2 py-1" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign&nbsp;up</a>
      </div>
    </div>
  </div>
</header>

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">

</div>



  <div role="main" class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <div id="js-repo-pjax-container" data-pjax-container >
      


  


  




  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2Fsocketio%2Fsocket.io-client"
    class="btn btn-sm btn-with-count tooltipped tooltipped-s"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/socketio/socket.io-client/watchers"
     aria-label="314 users are watching this repository">
    314
  </a>

  </li>

  <li>
        <a href="/login?return_to=%2Fsocketio%2Fsocket.io-client"
      class="btn btn-sm btn-with-count tooltipped tooltipped-s"
      aria-label="You must be signed in to star a repository" rel="nofollow">
      <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
      Star
    </a>

    <a class="social-count js-social-count" href="/socketio/socket.io-client/stargazers"
      aria-label="6755 users starred this repository">
      6,755
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fsocketio%2Fsocket.io-client"
        class="btn btn-sm btn-with-count tooltipped tooltipped-s"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/socketio/socket.io-client/network/members" class="social-count"
       aria-label="2316 users forked this repository">
      2,316
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" data-hovercard-type="organization" data-hovercard-url="/orgs/socketio/hovercard" href="/socketio">socketio</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/socketio/socket.io-client">socket.io-client</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /socketio/socket.io-client" href="/socketio/socket.io-client">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /socketio/socket.io-client/issues" href="/socketio/socket.io-client/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">127</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /socketio/socket.io-client/pulls" href="/socketio/socket.io-client/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">13</span>
      <meta itemprop="position" content="3">
</a>  </span>


    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /socketio/socket.io-client/projects" href="/socketio/socket.io-client/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>


    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse alerts security /socketio/socket.io-client/pulse" href="/socketio/socket.io-client/pulse">
      <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
      Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    
    



  
    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/socketio/socket.io-client/blob/3020e455ab9a81341722e6c1e6cd8ef6b4b0ea28/dist/socket.io.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v21:b4a4348ae8bb0d558ca21ca4d23d41e7 -->

        <div class="signup-prompt-bg rounded-1">
      <div class="signup-prompt p-4 text-center mb-4 rounded-1">
        <div class="position-relative">
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/site/dismiss_signup_prompt" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="qUHkzbEL9bW56vC/q5K1wkEZphRAFna6FjZ2TA/Ikal53KQW8vePJYpmGMfGy0pZXR75bAMsZ4Nufr3BFHl7Nw==" />
            <button type="submit" class="position-absolute top-0 right-0 btn-link link-gray" data-ga-click="(Logged out) Sign up prompt, clicked Dismiss, text:dismiss">
              Dismiss
            </button>
</form>          <h3 class="pt-2">Join GitHub today</h3>
          <p class="col-6 mx-auto">GitHub is home to over 28 million developers working together to host and review code, manage projects, and build software together.</p>
          <a class="btn btn-primary" href="/join?source=prompt-blob-show" data-ga-click="(Logged out) Sign up prompt, clicked Sign up, text:sign-up">Sign up</a>
        </div>
      </div>
    </div>


    <div class="file-navigation">
      
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left js-load-contents"
  data-contents-url="/socketio/socket.io-client/ref-list/master/dist/socket.io.js?source_action=show&amp;source_controller=blob">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>
    <div class="select-menu-modal">
      <div class="js-select-menu-deferred-content"></div>
      <div class="select-menu-loading-overlay anim-pulse">
        <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
      </div>
    </div>
  </div>
</div>

      <div class="BtnGroup float-right">
        <a href="/socketio/socket.io-client/find/master"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy for="blob-path" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
      <div id="blob-path" class="breadcrumb">
        <span class="repo-root js-repo-root"><span class="js-path-segment"><a data-pjax="true" href="/socketio/socket.io-client"><span>socket.io-client</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/socketio/socket.io-client/tree/master/dist"><span>dist</span></a></span><span class="separator">/</span><strong class="final-path">socket.io.js</strong>
      </div>
    </div>


    
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/socketio/socket.io-client/commit/3020e455ab9a81341722e6c1e6cd8ef6b4b0ea28" data-pjax>
          3020e45
        </a>
        <relative-time datetime="2018-11-28T23:15:03Z">Nov 28, 2018</relative-time>
      </span>
      <div>
        <a rel="contributor" data-skip-pjax="true" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=13031701" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/darrachequesne"><img class="avatar" src="https://avatars3.githubusercontent.com/u/13031701?s=40&amp;v=4" width="20" height="20" alt="@darrachequesne" /></a>
        <a class="user-mention" rel="contributor" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=13031701" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/darrachequesne">darrachequesne</a>
          <a data-pjax="true" title="[chore] Release 2.2.0" class="message" href="/socketio/socket.io-client/commit/3020e455ab9a81341722e6c1e6cd8ef6b4b0ea28">[chore] Release 2.2.0</a>
      </div>

    <div class="commit-tease-contributors">
      
<details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark float-left mr-2" id="blob_contributors_box">
  <summary class="btn-link" aria-haspopup="dialog"  >
    
    <span><strong>9</strong> contributors</span>
  </summary>
  <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast " aria-label="Users who have contributed to this file">
    <div class="Box-header">
      <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <h3 class="Box-title">Users who have contributed to this file</h3>
    </div>
    
        <ul class="list-style-none overflow-auto">
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/rauchg">
                <img class="avatar mr-2" alt="" src="https://avatars1.githubusercontent.com/u/13041?s=40&amp;v=4" width="20" height="20" />
                rauchg
</a>            </li>
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/3rd-Eden">
                <img class="avatar mr-2" alt="" src="https://avatars0.githubusercontent.com/u/28071?s=40&amp;v=4" width="20" height="20" />
                3rd-Eden
</a>            </li>
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/darrachequesne">
                <img class="avatar mr-2" alt="" src="https://avatars3.githubusercontent.com/u/13031701?s=40&amp;v=4" width="20" height="20" />
                darrachequesne
</a>            </li>
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/einaros">
                <img class="avatar mr-2" alt="" src="https://avatars3.githubusercontent.com/u/394360?s=40&amp;v=4" width="20" height="20" />
                einaros
</a>            </li>
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/ycarmel">
                <img class="avatar mr-2" alt="" src="https://avatars0.githubusercontent.com/u/1690830?s=40&amp;v=4" width="20" height="20" />
                ycarmel
</a>            </li>
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/mreinsch">
                <img class="avatar mr-2" alt="" src="https://avatars1.githubusercontent.com/u/33982?s=40&amp;v=4" width="20" height="20" />
                mreinsch
</a>            </li>
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/jdahlq">
                <img class="avatar mr-2" alt="" src="https://avatars1.githubusercontent.com/u/1686569?s=40&amp;v=4" width="20" height="20" />
                jdahlq
</a>            </li>
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/fat">
                <img class="avatar mr-2" alt="" src="https://avatars2.githubusercontent.com/u/169705?s=40&amp;v=4" width="20" height="20" />
                fat
</a>            </li>
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/dvv">
                <img class="avatar mr-2" alt="" src="https://avatars0.githubusercontent.com/u/211335?s=40&amp;v=4" width="20" height="20" />
                dvv
</a>            </li>
        </ul>

  </details-dialog>
</details>
          <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=13041" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=rauchg">
      <img class="avatar" src="https://avatars1.githubusercontent.com/u/13041?s=40&amp;v=4" width="20" height="20" alt="@rauchg" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=28071" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=3rd-Eden">
      <img class="avatar" src="https://avatars0.githubusercontent.com/u/28071?s=40&amp;v=4" width="20" height="20" alt="@3rd-Eden" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=13031701" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=darrachequesne">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/13031701?s=40&amp;v=4" width="20" height="20" alt="@darrachequesne" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=394360" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=einaros">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/394360?s=40&amp;v=4" width="20" height="20" alt="@einaros" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=1690830" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=ycarmel">
      <img class="avatar" src="https://avatars0.githubusercontent.com/u/1690830?s=40&amp;v=4" width="20" height="20" alt="@ycarmel" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=33982" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=mreinsch">
      <img class="avatar" src="https://avatars1.githubusercontent.com/u/33982?s=40&amp;v=4" width="20" height="20" alt="@mreinsch" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=1686569" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=jdahlq">
      <img class="avatar" src="https://avatars1.githubusercontent.com/u/1686569?s=40&amp;v=4" width="20" height="20" alt="@jdahlq" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=169705" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=fat">
      <img class="avatar" src="https://avatars2.githubusercontent.com/u/169705?s=40&amp;v=4" width="20" height="20" alt="@fat" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=211335" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=dvv">
      <img class="avatar" src="https://avatars0.githubusercontent.com/u/211335?s=40&amp;v=4" width="20" height="20" alt="@dvv" /> 
</a>

    </div>
  </div>




    <div class="file ">
      
<div class="file-header">

  <div class="file-actions">


    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/socketio/socket.io-client/raw/master/dist/socket.io.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/socketio/socket.io-client/blame/master/dist/socket.io.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/socketio/socket.io-client/commits/master/dist/socket.io.js">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://desktop.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      9 lines (9 sloc)
      <span class="file-info-divider"></span>
    61 KB
  </div>
</div>

      

  <div itemprop="text" class="blob-wrapper data type-javascript ">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">/*!</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"> * Socket.IO v2.2.0</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"> * (c) 2014-2018 Guillermo Rauch</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"> * Released under the MIT License.</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"> */</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">!function(t,e){&quot;object&quot;==typeof exports&amp;&amp;&quot;object&quot;==typeof module?module.exports=e():&quot;function&quot;==typeof define&amp;&amp;define.amd?define([],e):&quot;object&quot;==typeof exports?exports.io=e():t.io=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p=&quot;&quot;,e(0)}([function(t,e,n){&quot;use strict&quot;;function r(t,e){&quot;object&quot;===(&quot;undefined&quot;==typeof t?&quot;undefined&quot;:o(t))&amp;&amp;(e=t,t=void 0),e=e||{};var n,r=i(t),s=r.source,u=r.id,h=r.path,f=p[u]&amp;&amp;h in p[u].nsps,l=e.forceNew||e[&quot;force new connection&quot;]||!1===e.multiplex||f;return l?(c(&quot;ignoring socket cache for %s&quot;,s),n=a(s,e)):(p[u]||(c(&quot;new io instance for %s&quot;,s),p[u]=a(s,e)),n=p[u]),r.query&amp;&amp;!e.query&amp;&amp;(e.query=r.query),n.socket(r.path,e)}var o=&quot;function&quot;==typeof Symbol&amp;&amp;&quot;symbol&quot;==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&amp;&amp;&quot;function&quot;==typeof Symbol&amp;&amp;t.constructor===Symbol&amp;&amp;t!==Symbol.prototype?&quot;symbol&quot;:typeof t},i=n(1),s=n(7),a=n(12),c=n(3)(&quot;socket.io-client&quot;);t.exports=e=r;var p=e.managers={};e.protocol=s.protocol,e.connect=r,e.Manager=n(12),e.Socket=n(36)},function(t,e,n){&quot;use strict&quot;;function r(t,e){var n=t;e=e||&quot;undefined&quot;!=typeof location&amp;&amp;location,null==t&amp;&amp;(t=e.protocol+&quot;//&quot;+e.host),&quot;string&quot;==typeof t&amp;&amp;(&quot;/&quot;===t.charAt(0)&amp;&amp;(t=&quot;/&quot;===t.charAt(1)?e.protocol+t:e.host+t),/^(https?|wss?):\/\//.test(t)||(i(&quot;protocol-less url %s&quot;,t),t=&quot;undefined&quot;!=typeof e?e.protocol+&quot;//&quot;+t:&quot;https://&quot;+t),i(&quot;parse %s&quot;,t),n=o(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port=&quot;80&quot;:/^(http|ws)s$/.test(n.protocol)&amp;&amp;(n.port=&quot;443&quot;)),n.path=n.path||&quot;/&quot;;var r=n.host.indexOf(&quot;:&quot;)!==-1,s=r?&quot;[&quot;+n.host+&quot;]&quot;:n.host;return n.id=n.protocol+&quot;://&quot;+s+&quot;:&quot;+n.port,n.href=n.protocol+&quot;://&quot;+s+(e&amp;&amp;e.port===n.port?&quot;&quot;:&quot;:&quot;+n.port),n}var o=n(2),i=n(3)(&quot;socket.io-client:url&quot;);t.exports=r},function(t,e){var n=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,r=[&quot;source&quot;,&quot;protocol&quot;,&quot;authority&quot;,&quot;userInfo&quot;,&quot;user&quot;,&quot;password&quot;,&quot;host&quot;,&quot;port&quot;,&quot;relative&quot;,&quot;path&quot;,&quot;directory&quot;,&quot;file&quot;,&quot;query&quot;,&quot;anchor&quot;];t.exports=function(t){var e=t,o=t.indexOf(&quot;[&quot;),i=t.indexOf(&quot;]&quot;);o!=-1&amp;&amp;i!=-1&amp;&amp;(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,&quot;;&quot;)+t.substring(i,t.length));for(var s=n.exec(t||&quot;&quot;),a={},c=14;c--;)a[r[c]]=s[c]||&quot;&quot;;return o!=-1&amp;&amp;i!=-1&amp;&amp;(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,&quot;:&quot;),a.authority=a.authority.replace(&quot;[&quot;,&quot;&quot;).replace(&quot;]&quot;,&quot;&quot;).replace(/;/g,&quot;:&quot;),a.ipv6uri=!0),a}},function(t,e,n){(function(r){function o(){return!(&quot;undefined&quot;==typeof window||!window.process||&quot;renderer&quot;!==window.process.type)||(&quot;undefined&quot;==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&amp;&amp;(&quot;undefined&quot;!=typeof document&amp;&amp;document.documentElement&amp;&amp;document.documentElement.style&amp;&amp;document.documentElement.style.WebkitAppearance||&quot;undefined&quot;!=typeof window&amp;&amp;window.console&amp;&amp;(window.console.firebug||window.console.exception&amp;&amp;window.console.table)||&quot;undefined&quot;!=typeof navigator&amp;&amp;navigator.userAgent&amp;&amp;navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&amp;&amp;parseInt(RegExp.$1,10)&gt;=31||&quot;undefined&quot;!=typeof navigator&amp;&amp;navigator.userAgent&amp;&amp;navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function i(t){var n=this.useColors;if(t[0]=(n?&quot;%c&quot;:&quot;&quot;)+this.namespace+(n?&quot; %c&quot;:&quot; &quot;)+t[0]+(n?&quot;%c &quot;:&quot; &quot;)+&quot;+&quot;+e.humanize(this.diff),n){var r=&quot;color: &quot;+this.color;t.splice(1,0,r,&quot;color: inherit&quot;);var o=0,i=0;t[0].replace(/%[a-zA-Z%]/g,function(t){&quot;%%&quot;!==t&amp;&amp;(o++,&quot;%c&quot;===t&amp;&amp;(i=o))}),t.splice(i,0,r)}}function s(){return&quot;object&quot;==typeof console&amp;&amp;console.log&amp;&amp;Function.prototype.apply.call(console.log,console,arguments)}function a(t){try{null==t?e.storage.removeItem(&quot;debug&quot;):e.storage.debug=t}catch(n){}}function c(){var t;try{t=e.storage.debug}catch(n){}return!t&amp;&amp;&quot;undefined&quot;!=typeof r&amp;&amp;&quot;env&quot;in r&amp;&amp;(t=r.env.DEBUG),t}function p(){try{return window.localStorage}catch(t){}}e=t.exports=n(5),e.log=s,e.formatArgs=i,e.save=a,e.load=c,e.useColors=o,e.storage=&quot;undefined&quot;!=typeof chrome&amp;&amp;&quot;undefined&quot;!=typeof chrome.storage?chrome.storage.local:p(),e.colors=[&quot;#0000CC&quot;,&quot;#0000FF&quot;,&quot;#0033CC&quot;,&quot;#0033FF&quot;,&quot;#0066CC&quot;,&quot;#0066FF&quot;,&quot;#0099CC&quot;,&quot;#0099FF&quot;,&quot;#00CC00&quot;,&quot;#00CC33&quot;,&quot;#00CC66&quot;,&quot;#00CC99&quot;,&quot;#00CCCC&quot;,&quot;#00CCFF&quot;,&quot;#3300CC&quot;,&quot;#3300FF&quot;,&quot;#3333CC&quot;,&quot;#3333FF&quot;,&quot;#3366CC&quot;,&quot;#3366FF&quot;,&quot;#3399CC&quot;,&quot;#3399FF&quot;,&quot;#33CC00&quot;,&quot;#33CC33&quot;,&quot;#33CC66&quot;,&quot;#33CC99&quot;,&quot;#33CCCC&quot;,&quot;#33CCFF&quot;,&quot;#6600CC&quot;,&quot;#6600FF&quot;,&quot;#6633CC&quot;,&quot;#6633FF&quot;,&quot;#66CC00&quot;,&quot;#66CC33&quot;,&quot;#9900CC&quot;,&quot;#9900FF&quot;,&quot;#9933CC&quot;,&quot;#9933FF&quot;,&quot;#99CC00&quot;,&quot;#99CC33&quot;,&quot;#CC0000&quot;,&quot;#CC0033&quot;,&quot;#CC0066&quot;,&quot;#CC0099&quot;,&quot;#CC00CC&quot;,&quot;#CC00FF&quot;,&quot;#CC3300&quot;,&quot;#CC3333&quot;,&quot;#CC3366&quot;,&quot;#CC3399&quot;,&quot;#CC33CC&quot;,&quot;#CC33FF&quot;,&quot;#CC6600&quot;,&quot;#CC6633&quot;,&quot;#CC9900&quot;,&quot;#CC9933&quot;,&quot;#CCCC00&quot;,&quot;#CCCC33&quot;,&quot;#FF0000&quot;,&quot;#FF0033&quot;,&quot;#FF0066&quot;,&quot;#FF0099&quot;,&quot;#FF00CC&quot;,&quot;#FF00FF&quot;,&quot;#FF3300&quot;,&quot;#FF3333&quot;,&quot;#FF3366&quot;,&quot;#FF3399&quot;,&quot;#FF33CC&quot;,&quot;#FF33FF&quot;,&quot;#FF6600&quot;,&quot;#FF6633&quot;,&quot;#FF9900&quot;,&quot;#FF9933&quot;,&quot;#FFCC00&quot;,&quot;#FFCC33&quot;],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(e){return&quot;[UnexpectedJSONParseError]: &quot;+e.message}},e.enable(c())}).call(e,n(4))},function(t,e){function n(){throw new Error(&quot;setTimeout has not been defined&quot;)}function r(){throw new Error(&quot;clearTimeout has not been defined&quot;)}function o(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&amp;&amp;setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(h===clearTimeout)return clearTimeout(t);if((h===r||!h)&amp;&amp;clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t)}catch(e){try{return h.call(null,t)}catch(e){return h.call(this,t)}}}function s(){y&amp;&amp;l&amp;&amp;(y=!1,l.length?d=l.concat(d):m=-1,d.length&amp;&amp;a())}function a(){if(!y){var t=o(s);y=!0;for(var e=d.length;e;){for(l=d,d=[];++m&lt;e;)l&amp;&amp;l[m].run();m=-1,e=d.length}l=null,y=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function p(){}var u,h,f=t.exports={};!function(){try{u=&quot;function&quot;==typeof setTimeout?setTimeout:n}catch(t){u=n}try{h=&quot;function&quot;==typeof clearTimeout?clearTimeout:r}catch(t){h=r}}();var l,d=[],y=!1,m=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length&gt;1)for(var n=1;n&lt;arguments.length;n++)e[n-1]=arguments[n];d.push(new c(t,e)),1!==d.length||y||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title=&quot;browser&quot;,f.browser=!0,f.env={},f.argv=[],f.version=&quot;&quot;,f.versions={},f.on=p,f.addListener=p,f.once=p,f.off=p,f.removeListener=p,f.removeAllListeners=p,f.emit=p,f.prependListener=p,f.prependOnceListener=p,f.listeners=function(t){return[]},f.binding=function(t){throw new Error(&quot;process.binding is not supported&quot;)},f.cwd=function(){return&quot;/&quot;},f.chdir=function(t){throw new Error(&quot;process.chdir is not supported&quot;)},f.umask=function(){return 0}},function(t,e,n){function r(t){var n,r=0;for(n in t)r=(r&lt;&lt;5)-r+t.charCodeAt(n),r|=0;return e.colors[Math.abs(r)%e.colors.length]}function o(t){function n(){if(n.enabled){var t=n,r=+new Date,i=r-(o||r);t.diff=i,t.prev=o,t.curr=r,o=r;for(var s=new Array(arguments.length),a=0;a&lt;s.length;a++)s[a]=arguments[a];s[0]=e.coerce(s[0]),&quot;string&quot;!=typeof s[0]&amp;&amp;s.unshift(&quot;%O&quot;);var c=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(n,r){if(&quot;%%&quot;===n)return n;c++;var o=e.formatters[r];if(&quot;function&quot;==typeof o){var i=s[c];n=o.call(t,i),s.splice(c,1),c--}return n}),e.formatArgs.call(t,s);var p=n.log||e.log||console.log.bind(console);p.apply(t,s)}}var o;return n.namespace=t,n.enabled=e.enabled(t),n.useColors=e.useColors(),n.color=r(t),n.destroy=i,&quot;function&quot;==typeof e.init&amp;&amp;e.init(n),e.instances.push(n),n}function i(){var t=e.instances.indexOf(this);return t!==-1&amp;&amp;(e.instances.splice(t,1),!0)}function s(t){e.save(t),e.names=[],e.skips=[];var n,r=(&quot;string&quot;==typeof t?t:&quot;&quot;).split(/[\s,]+/),o=r.length;for(n=0;n&lt;o;n++)r[n]&amp;&amp;(t=r[n].replace(/\*/g,&quot;.*?&quot;),&quot;-&quot;===t[0]?e.skips.push(new RegExp(&quot;^&quot;+t.substr(1)+&quot;$&quot;)):e.names.push(new RegExp(&quot;^&quot;+t+&quot;$&quot;)));for(n=0;n&lt;e.instances.length;n++){var i=e.instances[n];i.enabled=e.enabled(i.namespace)}}function a(){e.enable(&quot;&quot;)}function c(t){if(&quot;*&quot;===t[t.length-1])return!0;var n,r;for(n=0,r=e.skips.length;n&lt;r;n++)if(e.skips[n].test(t))return!1;for(n=0,r=e.names.length;n&lt;r;n++)if(e.names[n].test(t))return!0;return!1}function p(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=o.debug=o[&quot;default&quot;]=o,e.coerce=p,e.disable=a,e.enable=s,e.enabled=c,e.humanize=n(6),e.instances=[],e.names=[],e.skips=[],e.formatters={}},function(t,e){function n(t){if(t=String(t),!(t.length&gt;100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]),r=(e[2]||&quot;ms&quot;).toLowerCase();switch(r){case&quot;years&quot;:case&quot;year&quot;:case&quot;yrs&quot;:case&quot;yr&quot;:case&quot;y&quot;:return n*u;case&quot;days&quot;:case&quot;day&quot;:case&quot;d&quot;:return n*p;case&quot;hours&quot;:case&quot;hour&quot;:case&quot;hrs&quot;:case&quot;hr&quot;:case&quot;h&quot;:return n*c;case&quot;minutes&quot;:case&quot;minute&quot;:case&quot;mins&quot;:case&quot;min&quot;:case&quot;m&quot;:return n*a;case&quot;seconds&quot;:case&quot;second&quot;:case&quot;secs&quot;:case&quot;sec&quot;:case&quot;s&quot;:return n*s;case&quot;milliseconds&quot;:case&quot;millisecond&quot;:case&quot;msecs&quot;:case&quot;msec&quot;:case&quot;ms&quot;:return n;default:return}}}}function r(t){return t&gt;=p?Math.round(t/p)+&quot;d&quot;:t&gt;=c?Math.round(t/c)+&quot;h&quot;:t&gt;=a?Math.round(t/a)+&quot;m&quot;:t&gt;=s?Math.round(t/s)+&quot;s&quot;:t+&quot;ms&quot;}function o(t){return i(t,p,&quot;day&quot;)||i(t,c,&quot;hour&quot;)||i(t,a,&quot;minute&quot;)||i(t,s,&quot;second&quot;)||t+&quot; ms&quot;}function i(t,e,n){if(!(t&lt;e))return t&lt;1.5*e?Math.floor(t/e)+&quot; &quot;+n:Math.ceil(t/e)+&quot; &quot;+n+&quot;s&quot;}var s=1e3,a=60*s,c=60*a,p=24*c,u=365.25*p;t.exports=function(t,e){e=e||{};var i=typeof t;if(&quot;string&quot;===i&amp;&amp;t.length&gt;0)return n(t);if(&quot;number&quot;===i&amp;&amp;isNaN(t)===!1)return e[&quot;long&quot;]?o(t):r(t);throw new Error(&quot;val is not a non-empty string or a valid number. val=&quot;+JSON.stringify(t))}},function(t,e,n){function r(){}function o(t){var n=&quot;&quot;+t.type;if(e.BINARY_EVENT!==t.type&amp;&amp;e.BINARY_ACK!==t.type||(n+=t.attachments+&quot;-&quot;),t.nsp&amp;&amp;&quot;/&quot;!==t.nsp&amp;&amp;(n+=t.nsp+&quot;,&quot;),null!=t.id&amp;&amp;(n+=t.id),null!=t.data){var r=i(t.data);if(r===!1)return g;n+=r}return f(&quot;encoded %j as %s&quot;,t,n),n}function i(t){try{return JSON.stringify(t)}catch(e){return!1}}function s(t,e){function n(t){var n=d.deconstructPacket(t),r=o(n.packet),i=n.buffers;i.unshift(r),e(i)}d.removeBlobs(t,n)}function a(){this.reconstructor=null}function c(t){var n=0,r={type:Number(t.charAt(0))};if(null==e.types[r.type])return h(&quot;unknown packet type &quot;+r.type);if(e.BINARY_EVENT===r.type||e.BINARY_ACK===r.type){for(var o=&quot;&quot;;&quot;-&quot;!==t.charAt(++n)&amp;&amp;(o+=t.charAt(n),n!=t.length););if(o!=Number(o)||&quot;-&quot;!==t.charAt(n))throw new Error(&quot;Illegal attachments&quot;);r.attachments=Number(o)}if(&quot;/&quot;===t.charAt(n+1))for(r.nsp=&quot;&quot;;++n;){var i=t.charAt(n);if(&quot;,&quot;===i)break;if(r.nsp+=i,n===t.length)break}else r.nsp=&quot;/&quot;;var s=t.charAt(n+1);if(&quot;&quot;!==s&amp;&amp;Number(s)==s){for(r.id=&quot;&quot;;++n;){var i=t.charAt(n);if(null==i||Number(i)!=i){--n;break}if(r.id+=t.charAt(n),n===t.length)break}r.id=Number(r.id)}if(t.charAt(++n)){var a=p(t.substr(n)),c=a!==!1&amp;&amp;(r.type===e.ERROR||y(a));if(!c)return h(&quot;invalid payload&quot;);r.data=a}return f(&quot;decoded %s as %j&quot;,t,r),r}function p(t){try{return JSON.parse(t)}catch(e){return!1}}function u(t){this.reconPack=t,this.buffers=[]}function h(t){return{type:e.ERROR,data:&quot;parser error: &quot;+t}}var f=n(3)(&quot;socket.io-parser&quot;),l=n(8),d=n(9),y=n(10),m=n(11);e.protocol=4,e.types=[&quot;CONNECT&quot;,&quot;DISCONNECT&quot;,&quot;EVENT&quot;,&quot;ACK&quot;,&quot;ERROR&quot;,&quot;BINARY_EVENT&quot;,&quot;BINARY_ACK&quot;],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=r,e.Decoder=a;var g=e.ERROR+&#39;&quot;encode error&quot;&#39;;r.prototype.encode=function(t,n){if(f(&quot;encoding packet %j&quot;,t),e.BINARY_EVENT===t.type||e.BINARY_ACK===t.type)s(t,n);else{var r=o(t);n([r])}},l(a.prototype),a.prototype.add=function(t){var n;if(&quot;string&quot;==typeof t)n=c(t),e.BINARY_EVENT===n.type||e.BINARY_ACK===n.type?(this.reconstructor=new u(n),0===this.reconstructor.reconPack.attachments&amp;&amp;this.emit(&quot;decoded&quot;,n)):this.emit(&quot;decoded&quot;,n);else{if(!m(t)&amp;&amp;!t.base64)throw new Error(&quot;Unknown type: &quot;+t);if(!this.reconstructor)throw new Error(&quot;got binary data when not reconstructing a packet&quot;);n=this.reconstructor.takeBinaryData(t),n&amp;&amp;(this.reconstructor=null,this.emit(&quot;decoded&quot;,n))}},a.prototype.destroy=function(){this.reconstructor&amp;&amp;this.reconstructor.finishedReconstruction()},u.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=d.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},u.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,n){function r(t){if(t)return o(t)}function o(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[&quot;$&quot;+t]=this._callbacks[&quot;$&quot;+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks[&quot;$&quot;+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks[&quot;$&quot;+t],this;for(var r,o=0;o&lt;n.length;o++)if(r=n[o],r===e||r.fn===e){n.splice(o,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks[&quot;$&quot;+t];if(n){n=n.slice(0);for(var r=0,o=n.length;r&lt;o;++r)n[r].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[&quot;$&quot;+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,n){function r(t,e){if(!t)return t;if(s(t)){var n={_placeholder:!0,num:e.length};return e.push(t),n}if(i(t)){for(var o=new Array(t.length),a=0;a&lt;t.length;a++)o[a]=r(t[a],e);return o}if(&quot;object&quot;==typeof t&amp;&amp;!(t instanceof Date)){var o={};for(var c in t)o[c]=r(t[c],e);return o}return t}function o(t,e){if(!t)return t;if(t&amp;&amp;t._placeholder)return e[t.num];if(i(t))for(var n=0;n&lt;t.length;n++)t[n]=o(t[n],e);else if(&quot;object&quot;==typeof t)for(var r in t)t[r]=o(t[r],e);return t}var i=n(10),s=n(11),a=Object.prototype.toString,c=&quot;function&quot;==typeof Blob||&quot;undefined&quot;!=typeof Blob&amp;&amp;&quot;[object BlobConstructor]&quot;===a.call(Blob),p=&quot;function&quot;==typeof File||&quot;undefined&quot;!=typeof File&amp;&amp;&quot;[object FileConstructor]&quot;===a.call(File);e.deconstructPacket=function(t){var e=[],n=t.data,o=t;return o.data=r(n,e),o.attachments=e.length,{packet:o,buffers:e}},e.reconstructPacket=function(t,e){return t.data=o(t.data,e),t.attachments=void 0,t},e.removeBlobs=function(t,e){function n(t,a,u){if(!t)return t;if(c&amp;&amp;t instanceof Blob||p&amp;&amp;t instanceof File){r++;var h=new FileReader;h.onload=function(){u?u[a]=this.result:o=this.result,--r||e(o)},h.readAsArrayBuffer(t)}else if(i(t))for(var f=0;f&lt;t.length;f++)n(t[f],f,t);else if(&quot;object&quot;==typeof t&amp;&amp;!s(t))for(var l in t)n(t[l],l,t)}var r=0,o=t;n(o),r||e(o)}},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return&quot;[object Array]&quot;==n.call(t)}},function(t,e){function n(t){return r&amp;&amp;Buffer.isBuffer(t)||o&amp;&amp;(t instanceof ArrayBuffer||i(t))}t.exports=n;var r=&quot;function&quot;==typeof Buffer&amp;&amp;&quot;function&quot;==typeof Buffer.isBuffer,o=&quot;function&quot;==typeof ArrayBuffer,i=function(t){return&quot;function&quot;==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer}},function(t,e,n){&quot;use strict&quot;;function r(t,e){if(!(this instanceof r))return new r(t,e);t&amp;&amp;&quot;object&quot;===(&quot;undefined&quot;==typeof t?&quot;undefined&quot;:o(t))&amp;&amp;(e=t,t=void 0),e=e||{},e.path=e.path||&quot;/socket.io&quot;,this.nsps={},this.subs=[],this.opts=e,this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new l({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState=&quot;closed&quot;,this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[];var n=e.parser||c;this.encoder=new n.Encoder,this.decoder=new n.Decoder,this.autoConnect=e.autoConnect!==!1,this.autoConnect&amp;&amp;this.open()}var o=&quot;function&quot;==typeof Symbol&amp;&amp;&quot;symbol&quot;==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&amp;&amp;&quot;function&quot;==typeof Symbol&amp;&amp;t.constructor===Symbol&amp;&amp;t!==Symbol.prototype?&quot;symbol&quot;:typeof t},i=n(13),s=n(36),a=n(8),c=n(7),p=n(38),u=n(39),h=n(3)(&quot;socket.io-client:manager&quot;),f=n(35),l=n(40),d=Object.prototype.hasOwnProperty;t.exports=r,r.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var t in this.nsps)d.call(this.nsps,t)&amp;&amp;this.nsps[t].emit.apply(this.nsps[t],arguments)},r.prototype.updateSocketIds=function(){for(var t in this.nsps)d.call(this.nsps,t)&amp;&amp;(this.nsps[t].id=this.generateId(t))},r.prototype.generateId=function(t){return(&quot;/&quot;===t?&quot;&quot;:t+&quot;#&quot;)+this.engine.id},a(r.prototype),r.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},r.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},r.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&amp;&amp;this.backoff.setMin(t),this):this._reconnectionDelay},r.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&amp;&amp;this.backoff.setJitter(t),this):this._randomizationFactor},r.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&amp;&amp;this.backoff.setMax(t),this):this._reconnectionDelayMax},r.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},r.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&amp;&amp;this._reconnection&amp;&amp;0===this.backoff.attempts&amp;&amp;this.reconnect()},r.prototype.open=r.prototype.connect=function(t,e){if(h(&quot;readyState %s&quot;,this.readyState),~this.readyState.indexOf(&quot;open&quot;))return this;h(&quot;opening %s&quot;,this.uri),this.engine=i(this.uri,this.opts);var n=this.engine,r=this;this.readyState=&quot;opening&quot;,this.skipReconnect=!1;var o=p(n,&quot;open&quot;,function(){r.onopen(),t&amp;&amp;t()}),s=p(n,&quot;error&quot;,function(e){if(h(&quot;connect_error&quot;),r.cleanup(),r.readyState=&quot;closed&quot;,r.emitAll(&quot;connect_error&quot;,e),t){var n=new Error(&quot;Connection error&quot;);n.data=e,t(n)}else r.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout;h(&quot;connect attempt will timeout after %d&quot;,a);var c=setTimeout(function(){h(&quot;connect attempt timed out after %d&quot;,a),o.destroy(),n.close(),n.emit(&quot;error&quot;,&quot;timeout&quot;),r.emitAll(&quot;connect_timeout&quot;,a)},a);this.subs.push({destroy:function(){clearTimeout(c)}})}return this.subs.push(o),this.subs.push(s),this},r.prototype.onopen=function(){h(&quot;open&quot;),this.cleanup(),this.readyState=&quot;open&quot;,this.emit(&quot;open&quot;);var t=this.engine;this.subs.push(p(t,&quot;data&quot;,u(this,&quot;ondata&quot;))),this.subs.push(p(t,&quot;ping&quot;,u(this,&quot;onping&quot;))),this.subs.push(p(t,&quot;pong&quot;,u(this,&quot;onpong&quot;))),this.subs.push(p(t,&quot;error&quot;,u(this,&quot;onerror&quot;))),this.subs.push(p(t,&quot;close&quot;,u(this,&quot;onclose&quot;))),this.subs.push(p(this.decoder,&quot;decoded&quot;,u(this,&quot;ondecoded&quot;)))},r.prototype.onping=function(){this.lastPing=new Date,this.emitAll(&quot;ping&quot;)},r.prototype.onpong=function(){this.emitAll(&quot;pong&quot;,new Date-this.lastPing)},r.prototype.ondata=function(t){this.decoder.add(t)},r.prototype.ondecoded=function(t){this.emit(&quot;packet&quot;,t)},r.prototype.onerror=function(t){h(&quot;error&quot;,t),this.emitAll(&quot;error&quot;,t)},r.prototype.socket=function(t,e){function n(){~f(o.connecting,r)||o.connecting.push(r)}var r=this.nsps[t];if(!r){r=new s(this,t,e),this.nsps[t]=r;var o=this;r.on(&quot;connecting&quot;,n),r.on(&quot;connect&quot;,function(){r.id=o.generateId(t)}),this.autoConnect&amp;&amp;n()}return r},r.prototype.destroy=function(t){var e=f(this.connecting,t);~e&amp;&amp;this.connecting.splice(e,1),this.connecting.length||this.close()},r.prototype.packet=function(t){h(&quot;writing packet %j&quot;,t);var e=this;t.query&amp;&amp;0===t.type&amp;&amp;(t.nsp+=&quot;?&quot;+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(n){for(var r=0;r&lt;n.length;r++)e.engine.write(n[r],t.options);e.encoding=!1,e.processPacketQueue()}))},r.prototype.processPacketQueue=function(){if(this.packetBuffer.length&gt;0&amp;&amp;!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},r.prototype.cleanup=function(){h(&quot;cleanup&quot;);for(var t=this.subs.length,e=0;e&lt;t;e++){var n=this.subs.shift();n.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},r.prototype.close=r.prototype.disconnect=function(){h(&quot;disconnect&quot;),this.skipReconnect=!0,this.reconnecting=!1,&quot;opening&quot;===this.readyState&amp;&amp;this.cleanup(),this.backoff.reset(),this.readyState=&quot;closed&quot;,this.engine&amp;&amp;this.engine.close()},r.prototype.onclose=function(t){h(&quot;onclose&quot;),this.cleanup(),this.backoff.reset(),this.readyState=&quot;closed&quot;,this.emit(&quot;close&quot;,t),this._reconnection&amp;&amp;!this.skipReconnect&amp;&amp;this.reconnect()},r.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts&gt;=this._reconnectionAttempts)h(&quot;reconnect failed&quot;),this.backoff.reset(),this.emitAll(&quot;reconnect_failed&quot;),this.reconnecting=!1;else{var e=this.backoff.duration();h(&quot;will wait %dms before reconnect attempt&quot;,e),this.reconnecting=!0;var n=setTimeout(function(){t.skipReconnect||(h(&quot;attempting reconnect&quot;),t.emitAll(&quot;reconnect_attempt&quot;,t.backoff.attempts),t.emitAll(&quot;reconnecting&quot;,t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(h(&quot;reconnect attempt error&quot;),t.reconnecting=!1,t.reconnect(),t.emitAll(&quot;reconnect_error&quot;,e.data)):(h(&quot;reconnect success&quot;),t.onreconnect())}))},e);this.subs.push({destroy:function(){clearTimeout(n)}})}},r.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll(&quot;reconnect&quot;,t)}},function(t,e,n){t.exports=n(14),t.exports.parser=n(21)},function(t,e,n){function r(t,e){return this instanceof r?(e=e||{},t&amp;&amp;&quot;object&quot;==typeof t&amp;&amp;(e=t,t=null),t?(t=u(t),e.hostname=t.host,e.secure=&quot;https&quot;===t.protocol||&quot;wss&quot;===t.protocol,e.port=t.port,t.query&amp;&amp;(e.query=t.query)):e.host&amp;&amp;(e.hostname=u(e.host).host),this.secure=null!=e.secure?e.secure:&quot;undefined&quot;!=typeof location&amp;&amp;&quot;https:&quot;===location.protocol,e.hostname&amp;&amp;!e.port&amp;&amp;(e.port=this.secure?&quot;443&quot;:&quot;80&quot;),this.agent=e.agent||!1,this.hostname=e.hostname||(&quot;undefined&quot;!=typeof location?location.hostname:&quot;localhost&quot;),this.port=e.port||(&quot;undefined&quot;!=typeof location&amp;&amp;location.port?location.port:this.secure?443:80),this.query=e.query||{},&quot;string&quot;==typeof this.query&amp;&amp;(this.query=h.decode(this.query)),this.upgrade=!1!==e.upgrade,this.path=(e.path||&quot;/engine.io&quot;).replace(/\/$/,&quot;&quot;)+&quot;/&quot;,this.forceJSONP=!!e.forceJSONP,this.jsonp=!1!==e.jsonp,this.forceBase64=!!e.forceBase64,this.enablesXDR=!!e.enablesXDR,this.timestampParam=e.timestampParam||&quot;t&quot;,this.timestampRequests=e.timestampRequests,this.transports=e.transports||[&quot;polling&quot;,&quot;websocket&quot;],this.transportOptions=e.transportOptions||{},this.readyState=&quot;&quot;,this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=e.policyPort||843,this.rememberUpgrade=e.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=e.onlyBinaryUpgrades,this.perMessageDeflate=!1!==e.perMessageDeflate&amp;&amp;(e.perMessageDeflate||{}),!0===this.perMessageDeflate&amp;&amp;(this.perMessageDeflate={}),this.perMessageDeflate&amp;&amp;null==this.perMessageDeflate.threshold&amp;&amp;(this.perMessageDeflate.threshold=1024),this.pfx=e.pfx||null,this.key=e.key||null,this.passphrase=e.passphrase||null,this.cert=e.cert||null,this.ca=e.ca||null,this.ciphers=e.ciphers||null,this.rejectUnauthorized=void 0===e.rejectUnauthorized||e.rejectUnauthorized,this.forceNode=!!e.forceNode,this.isReactNative=&quot;undefined&quot;!=typeof navigator&amp;&amp;&quot;string&quot;==typeof navigator.product&amp;&amp;&quot;reactnative&quot;===navigator.product.toLowerCase(),(&quot;undefined&quot;==typeof self||this.isReactNative)&amp;&amp;(e.extraHeaders&amp;&amp;Object.keys(e.extraHeaders).length&gt;0&amp;&amp;(this.extraHeaders=e.extraHeaders),e.localAddress&amp;&amp;(this.localAddress=e.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,void this.open()):new r(t,e)}function o(t){var e={};for(var n in t)t.hasOwnProperty(n)&amp;&amp;(e[n]=t[n]);return e}var i=n(15),s=n(8),a=n(3)(&quot;engine.io-client:socket&quot;),c=n(35),p=n(21),u=n(2),h=n(29);t.exports=r,r.priorWebsocketSuccess=!1,s(r.prototype),r.protocol=p.protocol,r.Socket=r,r.Transport=n(20),r.transports=n(15),r.parser=n(21),r.prototype.createTransport=function(t){a(&#39;creating transport &quot;%s&quot;&#39;,t);var e=o(this.query);e.EIO=p.protocol,e.transport=t;var n=this.transportOptions[t]||{};this.id&amp;&amp;(e.sid=this.id);var r=new i[t]({query:e,socket:this,agent:n.agent||this.agent,hostname:n.hostname||this.hostname,port:n.port||this.port,secure:n.secure||this.secure,path:n.path||this.path,forceJSONP:n.forceJSONP||this.forceJSONP,jsonp:n.jsonp||this.jsonp,forceBase64:n.forceBase64||this.forceBase64,enablesXDR:n.enablesXDR||this.enablesXDR,timestampRequests:n.timestampRequests||this.timestampRequests,timestampParam:n.timestampParam||this.timestampParam,policyPort:n.policyPort||this.policyPort,pfx:n.pfx||this.pfx,key:n.key||this.key,passphrase:n.passphrase||this.passphrase,cert:n.cert||this.cert,ca:n.ca||this.ca,ciphers:n.ciphers||this.ciphers,rejectUnauthorized:n.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:n.perMessageDeflate||this.perMessageDeflate,extraHeaders:n.extraHeaders||this.extraHeaders,forceNode:n.forceNode||this.forceNode,localAddress:n.localAddress||this.localAddress,requestTimeout:n.requestTimeout||this.requestTimeout,protocols:n.protocols||void 0,isReactNative:this.isReactNative});return r},r.prototype.open=function(){var t;if(this.rememberUpgrade&amp;&amp;r.priorWebsocketSuccess&amp;&amp;this.transports.indexOf(&quot;websocket&quot;)!==-1)t=&quot;websocket&quot;;else{if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit(&quot;error&quot;,&quot;No transports available&quot;)},0)}t=this.transports[0]}this.readyState=&quot;opening&quot;;try{t=this.createTransport(t)}catch(n){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},r.prototype.setTransport=function(t){a(&quot;setting transport %s&quot;,t.name);var e=this;this.transport&amp;&amp;(a(&quot;clearing existing transport %s&quot;,this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on(&quot;drain&quot;,function(){e.onDrain()}).on(&quot;packet&quot;,function(t){e.onPacket(t)}).on(&quot;error&quot;,function(t){e.onError(t)}).on(&quot;close&quot;,function(){e.onClose(&quot;transport close&quot;)})},r.prototype.probe=function(t){function e(){if(f.onlyBinaryUpgrades){var e=!this.supportsBinary&amp;&amp;f.transport.supportsBinary;h=h||e}h||(a(&#39;probe transport &quot;%s&quot; opened&#39;,t),u.send([{type:&quot;ping&quot;,data:&quot;probe&quot;}]),u.once(&quot;packet&quot;,function(e){if(!h)if(&quot;pong&quot;===e.type&amp;&amp;&quot;probe&quot;===e.data){if(a(&#39;probe transport &quot;%s&quot; pong&#39;,t),f.upgrading=!0,f.emit(&quot;upgrading&quot;,u),!u)return;r.priorWebsocketSuccess=&quot;websocket&quot;===u.name,a(&#39;pausing current transport &quot;%s&quot;&#39;,f.transport.name),f.transport.pause(function(){h||&quot;closed&quot;!==f.readyState&amp;&amp;(a(&quot;changing transport and sending upgrade packet&quot;),p(),f.setTransport(u),u.send([{type:&quot;upgrade&quot;}]),f.emit(&quot;upgrade&quot;,u),u=null,f.upgrading=!1,f.flush())})}else{a(&#39;probe transport &quot;%s&quot; failed&#39;,t);var n=new Error(&quot;probe error&quot;);n.transport=u.name,f.emit(&quot;upgradeError&quot;,n)}}))}function n(){h||(h=!0,p(),u.close(),u=null)}function o(e){var r=new Error(&quot;probe error: &quot;+e);r.transport=u.name,n(),a(&#39;probe transport &quot;%s&quot; failed because of error: %s&#39;,t,e),f.emit(&quot;upgradeError&quot;,r)}function i(){o(&quot;transport closed&quot;)}function s(){o(&quot;socket closed&quot;)}function c(t){u&amp;&amp;t.name!==u.name&amp;&amp;(a(&#39;&quot;%s&quot; works - aborting &quot;%s&quot;&#39;,t.name,u.name),n())}function p(){u.removeListener(&quot;open&quot;,e),u.removeListener(&quot;error&quot;,o),u.removeListener(&quot;close&quot;,i),f.removeListener(&quot;close&quot;,s),f.removeListener(&quot;upgrading&quot;,c)}a(&#39;probing transport &quot;%s&quot;&#39;,t);var u=this.createTransport(t,{probe:1}),h=!1,f=this;r.priorWebsocketSuccess=!1,u.once(&quot;open&quot;,e),u.once(&quot;error&quot;,o),u.once(&quot;close&quot;,i),this.once(&quot;close&quot;,s),this.once(&quot;upgrading&quot;,c),u.open()},r.prototype.onOpen=function(){if(a(&quot;socket open&quot;),this.readyState=&quot;open&quot;,r.priorWebsocketSuccess=&quot;websocket&quot;===this.transport.name,this.emit(&quot;open&quot;),this.flush(),&quot;open&quot;===this.readyState&amp;&amp;this.upgrade&amp;&amp;this.transport.pause){a(&quot;starting upgrade probes&quot;);for(var t=0,e=this.upgrades.length;t&lt;e;t++)this.probe(this.upgrades[t])}},r.prototype.onPacket=function(t){if(&quot;opening&quot;===this.readyState||&quot;open&quot;===this.readyState||&quot;closing&quot;===this.readyState)switch(a(&#39;socket receive: type &quot;%s&quot;, data &quot;%s&quot;&#39;,t.type,t.data),this.emit(&quot;packet&quot;,t),this.emit(&quot;heartbeat&quot;),t.type){case&quot;open&quot;:this.onHandshake(JSON.parse(t.data));break;case&quot;pong&quot;:this.setPing(),this.emit(&quot;pong&quot;);break;case&quot;error&quot;:var e=new Error(&quot;server error&quot;);e.code=t.data,this.onError(e);break;case&quot;message&quot;:this.emit(&quot;data&quot;,t.data),this.emit(&quot;message&quot;,t.data)}else a(&#39;packet received with socket readyState &quot;%s&quot;&#39;,this.readyState)},r.prototype.onHandshake=function(t){this.emit(&quot;handshake&quot;,t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),&quot;closed&quot;!==this.readyState&amp;&amp;(this.setPing(),this.removeListener(&quot;heartbeat&quot;,this.onHeartbeat),this.on(&quot;heartbeat&quot;,this.onHeartbeat))},r.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){&quot;closed&quot;!==e.readyState&amp;&amp;e.onClose(&quot;ping timeout&quot;)},t||e.pingInterval+e.pingTimeout)},r.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){a(&quot;writing ping packet - expecting pong within %sms&quot;,t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},r.prototype.ping=function(){var t=this;this.sendPacket(&quot;ping&quot;,function(){t.emit(&quot;ping&quot;)})},r.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit(&quot;drain&quot;):this.flush()},r.prototype.flush=function(){&quot;closed&quot;!==this.readyState&amp;&amp;this.transport.writable&amp;&amp;!this.upgrading&amp;&amp;this.writeBuffer.length&amp;&amp;(a(&quot;flushing %d packets in socket&quot;,this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit(&quot;flush&quot;))},r.prototype.write=r.prototype.send=function(t,e,n){return this.sendPacket(&quot;message&quot;,t,e,n),this},r.prototype.sendPacket=function(t,e,n,r){if(&quot;function&quot;==typeof e&amp;&amp;(r=e,e=void 0),&quot;function&quot;==typeof n&amp;&amp;(r=n,n=null),&quot;closing&quot;!==this.readyState&amp;&amp;&quot;closed&quot;!==this.readyState){n=n||{},n.compress=!1!==n.compress;var o={type:t,data:e,options:n};this.emit(&quot;packetCreate&quot;,o),this.writeBuffer.push(o),r&amp;&amp;this.once(&quot;flush&quot;,r),this.flush()}},r.prototype.close=function(){function t(){r.onClose(&quot;forced close&quot;),a(&quot;socket closing - telling transport to close&quot;),r.transport.close()}function e(){r.removeListener(&quot;upgrade&quot;,e),r.removeListener(&quot;upgradeError&quot;,e),t()}function n(){r.once(&quot;upgrade&quot;,e),r.once(&quot;upgradeError&quot;,e)}if(&quot;opening&quot;===this.readyState||&quot;open&quot;===this.readyState){this.readyState=&quot;closing&quot;;var r=this;this.writeBuffer.length?this.once(&quot;drain&quot;,function(){this.upgrading?n():t()}):this.upgrading?n():t()}return this},r.prototype.onError=function(t){a(&quot;socket error %j&quot;,t),r.priorWebsocketSuccess=!1,this.emit(&quot;error&quot;,t),this.onClose(&quot;transport error&quot;,t)},r.prototype.onClose=function(t,e){if(&quot;opening&quot;===this.readyState||&quot;open&quot;===this.readyState||&quot;closing&quot;===this.readyState){a(&#39;socket close with reason: &quot;%s&quot;&#39;,t);var n=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners(&quot;close&quot;),this.transport.close(),this.transport.removeAllListeners(),this.readyState=&quot;closed&quot;,this.id=null,this.emit(&quot;close&quot;,t,e),n.writeBuffer=[],n.prevBufferLen=0}},r.prototype.filterUpgrades=function(t){for(var e=[],n=0,r=t.length;n&lt;r;n++)~c(this.transports,t[n])&amp;&amp;e.push(t[n]);return e}},function(t,e,n){function r(t){var e,n=!1,r=!1,a=!1!==t.jsonp;</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">if(&quot;undefined&quot;!=typeof location){var c=&quot;https:&quot;===location.protocol,p=location.port;p||(p=c?443:80),n=t.hostname!==location.hostname||p!==t.port,r=t.secure!==c}if(t.xdomain=n,t.xscheme=r,e=new o(t),&quot;open&quot;in e&amp;&amp;!t.forceJSONP)return new i(t);if(!a)throw new Error(&quot;JSONP disabled&quot;);return new s(t)}var o=n(16),i=n(18),s=n(32),a=n(33);e.polling=r,e.websocket=a},function(t,e,n){var r=n(17);t.exports=function(t){var e=t.xdomain,n=t.xscheme,o=t.enablesXDR;try{if(&quot;undefined&quot;!=typeof XMLHttpRequest&amp;&amp;(!e||r))return new XMLHttpRequest}catch(i){}try{if(&quot;undefined&quot;!=typeof XDomainRequest&amp;&amp;!n&amp;&amp;o)return new XDomainRequest}catch(i){}if(!e)try{return new(self[[&quot;Active&quot;].concat(&quot;Object&quot;).join(&quot;X&quot;)])(&quot;Microsoft.XMLHTTP&quot;)}catch(i){}}},function(t,e){try{t.exports=&quot;undefined&quot;!=typeof XMLHttpRequest&amp;&amp;&quot;withCredentials&quot;in new XMLHttpRequest}catch(n){t.exports=!1}},function(t,e,n){function r(){}function o(t){if(c.call(this,t),this.requestTimeout=t.requestTimeout,this.extraHeaders=t.extraHeaders,&quot;undefined&quot;!=typeof location){var e=&quot;https:&quot;===location.protocol,n=location.port;n||(n=e?443:80),this.xd=&quot;undefined&quot;!=typeof location&amp;&amp;t.hostname!==location.hostname||n!==t.port,this.xs=t.secure!==e}}function i(t){this.method=t.method||&quot;GET&quot;,this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function s(){for(var t in i.requests)i.requests.hasOwnProperty(t)&amp;&amp;i.requests[t].abort()}var a=n(16),c=n(19),p=n(8),u=n(30),h=n(3)(&quot;engine.io-client:polling-xhr&quot;);if(t.exports=o,t.exports.Request=i,u(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new i(t)},o.prototype.doWrite=function(t,e){var n=&quot;string&quot;!=typeof t&amp;&amp;void 0!==t,r=this.request({method:&quot;POST&quot;,data:t,isBinary:n}),o=this;r.on(&quot;success&quot;,e),r.on(&quot;error&quot;,function(t){o.onError(&quot;xhr post error&quot;,t)}),this.sendXhr=r},o.prototype.doPoll=function(){h(&quot;xhr poll&quot;);var t=this.request(),e=this;t.on(&quot;data&quot;,function(t){e.onData(t)}),t.on(&quot;error&quot;,function(t){e.onError(&quot;xhr poll error&quot;,t)}),this.pollXhr=t},p(i.prototype),i.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var e=this.xhr=new a(t),n=this;try{h(&quot;xhr open %s: %s&quot;,this.method,this.uri),e.open(this.method,this.uri,this.async);try{if(this.extraHeaders){e.setDisableHeaderCheck&amp;&amp;e.setDisableHeaderCheck(!0);for(var r in this.extraHeaders)this.extraHeaders.hasOwnProperty(r)&amp;&amp;e.setRequestHeader(r,this.extraHeaders[r])}}catch(o){}if(&quot;POST&quot;===this.method)try{this.isBinary?e.setRequestHeader(&quot;Content-type&quot;,&quot;application/octet-stream&quot;):e.setRequestHeader(&quot;Content-type&quot;,&quot;text/plain;charset=UTF-8&quot;)}catch(o){}try{e.setRequestHeader(&quot;Accept&quot;,&quot;*/*&quot;)}catch(o){}&quot;withCredentials&quot;in e&amp;&amp;(e.withCredentials=!0),this.requestTimeout&amp;&amp;(e.timeout=this.requestTimeout),this.hasXDR()?(e.onload=function(){n.onLoad()},e.onerror=function(){n.onError(e.responseText)}):e.onreadystatechange=function(){if(2===e.readyState)try{var t=e.getResponseHeader(&quot;Content-Type&quot;);n.supportsBinary&amp;&amp;&quot;application/octet-stream&quot;===t&amp;&amp;(e.responseType=&quot;arraybuffer&quot;)}catch(r){}4===e.readyState&amp;&amp;(200===e.status||1223===e.status?n.onLoad():setTimeout(function(){n.onError(e.status)},0))},h(&quot;xhr data %s&quot;,this.data),e.send(this.data)}catch(o){return void setTimeout(function(){n.onError(o)},0)}&quot;undefined&quot;!=typeof document&amp;&amp;(this.index=i.requestsCount++,i.requests[this.index]=this)},i.prototype.onSuccess=function(){this.emit(&quot;success&quot;),this.cleanup()},i.prototype.onData=function(t){this.emit(&quot;data&quot;,t),this.onSuccess()},i.prototype.onError=function(t){this.emit(&quot;error&quot;,t),this.cleanup(!0)},i.prototype.cleanup=function(t){if(&quot;undefined&quot;!=typeof this.xhr&amp;&amp;null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=r:this.xhr.onreadystatechange=r,t)try{this.xhr.abort()}catch(e){}&quot;undefined&quot;!=typeof document&amp;&amp;delete i.requests[this.index],this.xhr=null}},i.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader(&quot;Content-Type&quot;)}catch(n){}t=&quot;application/octet-stream&quot;===e?this.xhr.response||this.xhr.responseText:this.xhr.responseText}catch(n){this.onError(n)}null!=t&amp;&amp;this.onData(t)},i.prototype.hasXDR=function(){return&quot;undefined&quot;!=typeof XDomainRequest&amp;&amp;!this.xs&amp;&amp;this.enablesXDR},i.prototype.abort=function(){this.cleanup()},i.requestsCount=0,i.requests={},&quot;undefined&quot;!=typeof document)if(&quot;function&quot;==typeof attachEvent)attachEvent(&quot;onunload&quot;,s);else if(&quot;function&quot;==typeof addEventListener){var f=&quot;onpagehide&quot;in self?&quot;pagehide&quot;:&quot;unload&quot;;addEventListener(f,s,!1)}},function(t,e,n){function r(t){var e=t&amp;&amp;t.forceBase64;u&amp;&amp;!e||(this.supportsBinary=!1),o.call(this,t)}var o=n(20),i=n(29),s=n(21),a=n(30),c=n(31),p=n(3)(&quot;engine.io-client:polling&quot;);t.exports=r;var u=function(){var t=n(16),e=new t({xdomain:!1});return null!=e.responseType}();a(r,o),r.prototype.name=&quot;polling&quot;,r.prototype.doOpen=function(){this.poll()},r.prototype.pause=function(t){function e(){p(&quot;paused&quot;),n.readyState=&quot;paused&quot;,t()}var n=this;if(this.readyState=&quot;pausing&quot;,this.polling||!this.writable){var r=0;this.polling&amp;&amp;(p(&quot;we are currently polling - waiting to pause&quot;),r++,this.once(&quot;pollComplete&quot;,function(){p(&quot;pre-pause polling complete&quot;),--r||e()})),this.writable||(p(&quot;we are currently writing - waiting to pause&quot;),r++,this.once(&quot;drain&quot;,function(){p(&quot;pre-pause writing complete&quot;),--r||e()}))}else e()},r.prototype.poll=function(){p(&quot;polling&quot;),this.polling=!0,this.doPoll(),this.emit(&quot;poll&quot;)},r.prototype.onData=function(t){var e=this;p(&quot;polling got data %s&quot;,t);var n=function(t,n,r){return&quot;opening&quot;===e.readyState&amp;&amp;e.onOpen(),&quot;close&quot;===t.type?(e.onClose(),!1):void e.onPacket(t)};s.decodePayload(t,this.socket.binaryType,n),&quot;closed&quot;!==this.readyState&amp;&amp;(this.polling=!1,this.emit(&quot;pollComplete&quot;),&quot;open&quot;===this.readyState?this.poll():p(&#39;ignoring poll - transport state &quot;%s&quot;&#39;,this.readyState))},r.prototype.doClose=function(){function t(){p(&quot;writing close packet&quot;),e.write([{type:&quot;close&quot;}])}var e=this;&quot;open&quot;===this.readyState?(p(&quot;transport open - closing&quot;),t()):(p(&quot;transport not open - deferring close&quot;),this.once(&quot;open&quot;,t))},r.prototype.write=function(t){var e=this;this.writable=!1;var n=function(){e.writable=!0,e.emit(&quot;drain&quot;)};s.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,n)})},r.prototype.uri=function(){var t=this.query||{},e=this.secure?&quot;https&quot;:&quot;http&quot;,n=&quot;&quot;;!1!==this.timestampRequests&amp;&amp;(t[this.timestampParam]=c()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&amp;&amp;(&quot;https&quot;===e&amp;&amp;443!==Number(this.port)||&quot;http&quot;===e&amp;&amp;80!==Number(this.port))&amp;&amp;(n=&quot;:&quot;+this.port),t.length&amp;&amp;(t=&quot;?&quot;+t);var r=this.hostname.indexOf(&quot;:&quot;)!==-1;return e+&quot;://&quot;+(r?&quot;[&quot;+this.hostname+&quot;]&quot;:this.hostname)+n+this.path+t}},function(t,e,n){function r(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState=&quot;&quot;,this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.isReactNative=t.isReactNative,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=n(21),i=n(8);t.exports=r,i(r.prototype),r.prototype.onError=function(t,e){var n=new Error(t);return n.type=&quot;TransportError&quot;,n.description=e,this.emit(&quot;error&quot;,n),this},r.prototype.open=function(){return&quot;closed&quot;!==this.readyState&amp;&amp;&quot;&quot;!==this.readyState||(this.readyState=&quot;opening&quot;,this.doOpen()),this},r.prototype.close=function(){return&quot;opening&quot;!==this.readyState&amp;&amp;&quot;open&quot;!==this.readyState||(this.doClose(),this.onClose()),this},r.prototype.send=function(t){if(&quot;open&quot;!==this.readyState)throw new Error(&quot;Transport not open&quot;);this.write(t)},r.prototype.onOpen=function(){this.readyState=&quot;open&quot;,this.writable=!0,this.emit(&quot;open&quot;)},r.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},r.prototype.onPacket=function(t){this.emit(&quot;packet&quot;,t)},r.prototype.onClose=function(){this.readyState=&quot;closed&quot;,this.emit(&quot;close&quot;)}},function(t,e,n){function r(t,n){var r=&quot;b&quot;+e.packets[t.type]+t.data.data;return n(r)}function o(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=v[t.type];for(var a=0;a&lt;i.length;a++)s[a+1]=i[a];return r(s.buffer)}function i(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var o=new FileReader;return o.onload=function(){e.encodePacket({type:t.type,data:o.result},n,!0,r)},o.readAsArrayBuffer(t.data)}function s(t,n,r){if(!n)return e.encodeBase64Packet(t,r);if(g)return i(t,n,r);var o=new Uint8Array(1);o[0]=v[t.type];var s=new k([o.buffer,t.data]);return r(s)}function a(t){try{t=d.decode(t,{strict:!1})}catch(e){return!1}return t}function c(t,e,n){for(var r=new Array(t.length),o=l(t.length,n),i=function(t,n,o){e(n,function(e,n){r[t]=n,o(e,r)})},s=0;s&lt;t.length;s++)i(s,t[s],o)}var p,u=n(22),h=n(23),f=n(24),l=n(25),d=n(26);&quot;undefined&quot;!=typeof ArrayBuffer&amp;&amp;(p=n(27));var y=&quot;undefined&quot;!=typeof navigator&amp;&amp;/Android/i.test(navigator.userAgent),m=&quot;undefined&quot;!=typeof navigator&amp;&amp;/PhantomJS/i.test(navigator.userAgent),g=y||m;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=u(v),w={type:&quot;error&quot;,data:&quot;parser error&quot;},k=n(28);e.encodePacket=function(t,e,n,i){&quot;function&quot;==typeof e&amp;&amp;(i=e,e=!1),&quot;function&quot;==typeof n&amp;&amp;(i=n,n=null);var a=void 0===t.data?void 0:t.data.buffer||t.data;if(&quot;undefined&quot;!=typeof ArrayBuffer&amp;&amp;a instanceof ArrayBuffer)return o(t,e,i);if(&quot;undefined&quot;!=typeof k&amp;&amp;a instanceof k)return s(t,e,i);if(a&amp;&amp;a.base64)return r(t,i);var c=v[t.type];return void 0!==t.data&amp;&amp;(c+=n?d.encode(String(t.data),{strict:!1}):String(t.data)),i(&quot;&quot;+c)},e.encodeBase64Packet=function(t,n){var r=&quot;b&quot;+e.packets[t.type];if(&quot;undefined&quot;!=typeof k&amp;&amp;t.data instanceof k){var o=new FileReader;return o.onload=function(){var t=o.result.split(&quot;,&quot;)[1];n(r+t)},o.readAsDataURL(t.data)}var i;try{i=String.fromCharCode.apply(null,new Uint8Array(t.data))}catch(s){for(var a=new Uint8Array(t.data),c=new Array(a.length),p=0;p&lt;a.length;p++)c[p]=a[p];i=String.fromCharCode.apply(null,c)}return r+=btoa(i),n(r)},e.decodePacket=function(t,n,r){if(void 0===t)return w;if(&quot;string&quot;==typeof t){if(&quot;b&quot;===t.charAt(0))return e.decodeBase64Packet(t.substr(1),n);if(r&amp;&amp;(t=a(t),t===!1))return w;var o=t.charAt(0);return Number(o)==o&amp;&amp;b[o]?t.length&gt;1?{type:b[o],data:t.substring(1)}:{type:b[o]}:w}var i=new Uint8Array(t),o=i[0],s=f(t,1);return k&amp;&amp;&quot;blob&quot;===n&amp;&amp;(s=new k([s])),{type:b[o],data:s}},e.decodeBase64Packet=function(t,e){var n=b[t.charAt(0)];if(!p)return{type:n,data:{base64:!0,data:t.substr(1)}};var r=p.decode(t.substr(1));return&quot;blob&quot;===e&amp;&amp;k&amp;&amp;(r=new k([r])),{type:n,data:r}},e.encodePayload=function(t,n,r){function o(t){return t.length+&quot;:&quot;+t}function i(t,r){e.encodePacket(t,!!s&amp;&amp;n,!1,function(t){r(null,o(t))})}&quot;function&quot;==typeof n&amp;&amp;(r=n,n=null);var s=h(t);return n&amp;&amp;s?k&amp;&amp;!g?e.encodePayloadAsBlob(t,r):e.encodePayloadAsArrayBuffer(t,r):t.length?void c(t,i,function(t,e){return r(e.join(&quot;&quot;))}):r(&quot;0:&quot;)},e.decodePayload=function(t,n,r){if(&quot;string&quot;!=typeof t)return e.decodePayloadAsBinary(t,n,r);&quot;function&quot;==typeof n&amp;&amp;(r=n,n=null);var o;if(&quot;&quot;===t)return r(w,0,1);for(var i,s,a=&quot;&quot;,c=0,p=t.length;c&lt;p;c++){var u=t.charAt(c);if(&quot;:&quot;===u){if(&quot;&quot;===a||a!=(i=Number(a)))return r(w,0,1);if(s=t.substr(c+1,i),a!=s.length)return r(w,0,1);if(s.length){if(o=e.decodePacket(s,n,!1),w.type===o.type&amp;&amp;w.data===o.data)return r(w,0,1);var h=r(o,c+i,p);if(!1===h)return}c+=i,a=&quot;&quot;}else a+=u}return&quot;&quot;!==a?r(w,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){return n(null,t)})}return t.length?void c(t,r,function(t,e){var r=e.reduce(function(t,e){var n;return n=&quot;string&quot;==typeof e?e.length:e.byteLength,t+n.toString().length+n+2},0),o=new Uint8Array(r),i=0;return e.forEach(function(t){var e=&quot;string&quot;==typeof t,n=t;if(e){for(var r=new Uint8Array(t.length),s=0;s&lt;t.length;s++)r[s]=t.charCodeAt(s);n=r.buffer}e?o[i++]=0:o[i++]=1;for(var a=n.byteLength.toString(),s=0;s&lt;a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(var r=new Uint8Array(n),s=0;s&lt;r.length;s++)o[i++]=r[s]}),n(o.buffer)}):n(new ArrayBuffer(0))},e.encodePayloadAsBlob=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,&quot;string&quot;==typeof t){for(var r=new Uint8Array(t.length),o=0;o&lt;t.length;o++)r[o]=t.charCodeAt(o);t=r.buffer,e[0]=0}for(var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1),o=0;o&lt;s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,k){var c=new k([e.buffer,a.buffer,t]);n(null,c)}})}c(t,r,function(t,e){return n(new k(e))})},e.decodePayloadAsBinary=function(t,n,r){&quot;function&quot;==typeof n&amp;&amp;(r=n,n=null);for(var o=t,i=[];o.byteLength&gt;0;){for(var s=new Uint8Array(o),a=0===s[0],c=&quot;&quot;,p=1;255!==s[p];p++){if(c.length&gt;310)return r(w,0,1);c+=s[p]}o=f(o,2+c.length),c=parseInt(c);var u=f(o,0,c);if(a)try{u=String.fromCharCode.apply(null,new Uint8Array(u))}catch(h){var l=new Uint8Array(u);u=&quot;&quot;;for(var p=0;p&lt;l.length;p++)u+=String.fromCharCode(l[p])}i.push(u),o=f(o,c)}var d=i.length;i.forEach(function(t,o){r(e.decodePacket(t,n,!0),o,d)})}},function(t,e){t.exports=Object.keys||function(t){var e=[],n=Object.prototype.hasOwnProperty;for(var r in t)n.call(t,r)&amp;&amp;e.push(r);return e}},function(t,e,n){function r(t){if(!t||&quot;object&quot;!=typeof t)return!1;if(o(t)){for(var e=0,n=t.length;e&lt;n;e++)if(r(t[e]))return!0;return!1}if(&quot;function&quot;==typeof Buffer&amp;&amp;Buffer.isBuffer&amp;&amp;Buffer.isBuffer(t)||&quot;function&quot;==typeof ArrayBuffer&amp;&amp;t instanceof ArrayBuffer||s&amp;&amp;t instanceof Blob||a&amp;&amp;t instanceof File)return!0;if(t.toJSON&amp;&amp;&quot;function&quot;==typeof t.toJSON&amp;&amp;1===arguments.length)return r(t.toJSON(),!0);for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&amp;&amp;r(t[i]))return!0;return!1}var o=n(10),i=Object.prototype.toString,s=&quot;function&quot;==typeof Blob||&quot;undefined&quot;!=typeof Blob&amp;&amp;&quot;[object BlobConstructor]&quot;===i.call(Blob),a=&quot;function&quot;==typeof File||&quot;undefined&quot;!=typeof File&amp;&amp;&quot;[object FileConstructor]&quot;===i.call(File);t.exports=r},function(t,e){t.exports=function(t,e,n){var r=t.byteLength;if(e=e||0,n=n||r,t.slice)return t.slice(e,n);if(e&lt;0&amp;&amp;(e+=r),n&lt;0&amp;&amp;(n+=r),n&gt;r&amp;&amp;(n=r),e&gt;=r||e&gt;=n||0===r)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(n-e),s=e,a=0;s&lt;n;s++,a++)i[a]=o[s];return i.buffer}},function(t,e){function n(t,e,n){function o(t,r){if(o.count&lt;=0)throw new Error(&quot;after called too many times&quot;);--o.count,t?(i=!0,e(t),e=n):0!==o.count||i||e(null,r)}var i=!1;return n=n||r,o.count=t,0===t?e():o}function r(){}t.exports=n},function(t,e){function n(t){for(var e,n,r=[],o=0,i=t.length;o&lt;i;)e=t.charCodeAt(o++),e&gt;=55296&amp;&amp;e&lt;=56319&amp;&amp;o&lt;i?(n=t.charCodeAt(o++),56320==(64512&amp;n)?r.push(((1023&amp;e)&lt;&lt;10)+(1023&amp;n)+65536):(r.push(e),o--)):r.push(e);return r}function r(t){for(var e,n=t.length,r=-1,o=&quot;&quot;;++r&lt;n;)e=t[r],e&gt;65535&amp;&amp;(e-=65536,o+=d(e&gt;&gt;&gt;10&amp;1023|55296),e=56320|1023&amp;e),o+=d(e);return o}function o(t,e){if(t&gt;=55296&amp;&amp;t&lt;=57343){if(e)throw Error(&quot;Lone surrogate U+&quot;+t.toString(16).toUpperCase()+&quot; is not a scalar value&quot;);return!1}return!0}function i(t,e){return d(t&gt;&gt;e&amp;63|128)}function s(t,e){if(0==(4294967168&amp;t))return d(t);var n=&quot;&quot;;return 0==(4294965248&amp;t)?n=d(t&gt;&gt;6&amp;31|192):0==(4294901760&amp;t)?(o(t,e)||(t=65533),n=d(t&gt;&gt;12&amp;15|224),n+=i(t,6)):0==(4292870144&amp;t)&amp;&amp;(n=d(t&gt;&gt;18&amp;7|240),n+=i(t,12),n+=i(t,6)),n+=d(63&amp;t|128)}function a(t,e){e=e||{};for(var r,o=!1!==e.strict,i=n(t),a=i.length,c=-1,p=&quot;&quot;;++c&lt;a;)r=i[c],p+=s(r,o);return p}function c(){if(l&gt;=f)throw Error(&quot;Invalid byte index&quot;);var t=255&amp;h[l];if(l++,128==(192&amp;t))return 63&amp;t;throw Error(&quot;Invalid continuation byte&quot;)}function p(t){var e,n,r,i,s;if(l&gt;f)throw Error(&quot;Invalid byte index&quot;);if(l==f)return!1;if(e=255&amp;h[l],l++,0==(128&amp;e))return e;if(192==(224&amp;e)){if(n=c(),s=(31&amp;e)&lt;&lt;6|n,s&gt;=128)return s;throw Error(&quot;Invalid continuation byte&quot;)}if(224==(240&amp;e)){if(n=c(),r=c(),s=(15&amp;e)&lt;&lt;12|n&lt;&lt;6|r,s&gt;=2048)return o(s,t)?s:65533;throw Error(&quot;Invalid continuation byte&quot;)}if(240==(248&amp;e)&amp;&amp;(n=c(),r=c(),i=c(),s=(7&amp;e)&lt;&lt;18|n&lt;&lt;12|r&lt;&lt;6|i,s&gt;=65536&amp;&amp;s&lt;=1114111))return s;throw Error(&quot;Invalid UTF-8 detected&quot;)}function u(t,e){e=e||{};var o=!1!==e.strict;h=n(t),f=h.length,l=0;for(var i,s=[];(i=p(o))!==!1;)s.push(i);return r(s)}/*! https://mths.be/utf8js v2.1.2 by @mathias */</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">var h,f,l,d=String.fromCharCode;t.exports={version:&quot;2.1.2&quot;,encode:a,decode:u}},function(t,e){!function(){&quot;use strict&quot;;for(var t=&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/&quot;,n=new Uint8Array(256),r=0;r&lt;t.length;r++)n[t.charCodeAt(r)]=r;e.encode=function(e){var n,r=new Uint8Array(e),o=r.length,i=&quot;&quot;;for(n=0;n&lt;o;n+=3)i+=t[r[n]&gt;&gt;2],i+=t[(3&amp;r[n])&lt;&lt;4|r[n+1]&gt;&gt;4],i+=t[(15&amp;r[n+1])&lt;&lt;2|r[n+2]&gt;&gt;6],i+=t[63&amp;r[n+2]];return o%3===2?i=i.substring(0,i.length-1)+&quot;=&quot;:o%3===1&amp;&amp;(i=i.substring(0,i.length-2)+&quot;==&quot;),i},e.decode=function(t){var e,r,o,i,s,a=.75*t.length,c=t.length,p=0;&quot;=&quot;===t[t.length-1]&amp;&amp;(a--,&quot;=&quot;===t[t.length-2]&amp;&amp;a--);var u=new ArrayBuffer(a),h=new Uint8Array(u);for(e=0;e&lt;c;e+=4)r=n[t.charCodeAt(e)],o=n[t.charCodeAt(e+1)],i=n[t.charCodeAt(e+2)],s=n[t.charCodeAt(e+3)],h[p++]=r&lt;&lt;2|o&gt;&gt;4,h[p++]=(15&amp;o)&lt;&lt;4|i&gt;&gt;2,h[p++]=(3&amp;i)&lt;&lt;6|63&amp;s;return u}}()},function(t,e){function n(t){return t.map(function(t){if(t.buffer instanceof ArrayBuffer){var e=t.buffer;if(t.byteLength!==e.byteLength){var n=new Uint8Array(t.byteLength);n.set(new Uint8Array(e,t.byteOffset,t.byteLength)),e=n.buffer}return e}return t})}function r(t,e){e=e||{};var r=new i;return n(t).forEach(function(t){r.append(t)}),e.type?r.getBlob(e.type):r.getBlob()}function o(t,e){return new Blob(n(t),e||{})}var i=&quot;undefined&quot;!=typeof i?i:&quot;undefined&quot;!=typeof WebKitBlobBuilder?WebKitBlobBuilder:&quot;undefined&quot;!=typeof MSBlobBuilder?MSBlobBuilder:&quot;undefined&quot;!=typeof MozBlobBuilder&amp;&amp;MozBlobBuilder,s=function(){try{var t=new Blob([&quot;hi&quot;]);return 2===t.size}catch(e){return!1}}(),a=s&amp;&amp;function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(e){return!1}}(),c=i&amp;&amp;i.prototype.append&amp;&amp;i.prototype.getBlob;&quot;undefined&quot;!=typeof Blob&amp;&amp;(r.prototype=Blob.prototype,o.prototype=Blob.prototype),t.exports=function(){return s?a?Blob:o:c?r:void 0}()},function(t,e){e.encode=function(t){var e=&quot;&quot;;for(var n in t)t.hasOwnProperty(n)&amp;&amp;(e.length&amp;&amp;(e+=&quot;&amp;&quot;),e+=encodeURIComponent(n)+&quot;=&quot;+encodeURIComponent(t[n]));return e},e.decode=function(t){for(var e={},n=t.split(&quot;&amp;&quot;),r=0,o=n.length;r&lt;o;r++){var i=n[r].split(&quot;=&quot;);e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){t.exports=function(t,e){var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e){&quot;use strict&quot;;function n(t){var e=&quot;&quot;;do e=s[t%a]+e,t=Math.floor(t/a);while(t&gt;0);return e}function r(t){var e=0;for(u=0;u&lt;t.length;u++)e=e*a+c[t.charAt(u)];return e}function o(){var t=n(+new Date);return t!==i?(p=0,i=t):t+&quot;.&quot;+n(p++)}for(var i,s=&quot;0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_&quot;.split(&quot;&quot;),a=64,c={},p=0,u=0;u&lt;a;u++)c[s[u]]=u;o.encode=n,o.decode=r,t.exports=o},function(t,e,n){(function(e){function r(){}function o(){return&quot;undefined&quot;!=typeof self?self:&quot;undefined&quot;!=typeof window?window:&quot;undefined&quot;!=typeof e?e:{}}function i(t){if(s.call(this,t),this.query=this.query||{},!c){var e=o();c=e.___eio=e.___eio||[]}this.index=c.length;var n=this;c.push(function(t){n.onData(t)}),this.query.j=this.index,&quot;function&quot;==typeof addEventListener&amp;&amp;addEventListener(&quot;beforeunload&quot;,function(){n.script&amp;&amp;(n.script.onerror=r)},!1)}var s=n(19),a=n(30);t.exports=i;var c,p=/\n/g,u=/\\n/g;a(i,s),i.prototype.supportsBinary=!1,i.prototype.doClose=function(){this.script&amp;&amp;(this.script.parentNode.removeChild(this.script),this.script=null),this.form&amp;&amp;(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),s.prototype.doClose.call(this)},i.prototype.doPoll=function(){var t=this,e=document.createElement(&quot;script&quot;);this.script&amp;&amp;(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError(&quot;jsonp poll error&quot;,e)};var n=document.getElementsByTagName(&quot;script&quot;)[0];n?n.parentNode.insertBefore(e,n):(document.head||document.body).appendChild(e),this.script=e;var r=&quot;undefined&quot;!=typeof navigator&amp;&amp;/gecko/i.test(navigator.userAgent);r&amp;&amp;setTimeout(function(){var t=document.createElement(&quot;iframe&quot;);document.body.appendChild(t),document.body.removeChild(t)},100)},i.prototype.doWrite=function(t,e){function n(){r(),e()}function r(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(t){o.onError(&quot;jsonp polling iframe removal error&quot;,t)}try{var e=&#39;&lt;iframe src=&quot;javascript:0&quot; name=&quot;&#39;+o.iframeId+&#39;&quot;&gt;&#39;;i=document.createElement(e)}catch(t){i=document.createElement(&quot;iframe&quot;),i.name=o.iframeId,i.src=&quot;javascript:0&quot;}i.id=o.iframeId,o.form.appendChild(i),o.iframe=i}var o=this;if(!this.form){var i,s=document.createElement(&quot;form&quot;),a=document.createElement(&quot;textarea&quot;),c=this.iframeId=&quot;eio_iframe_&quot;+this.index;s.className=&quot;socketio&quot;,s.style.position=&quot;absolute&quot;,s.style.top=&quot;-1000px&quot;,s.style.left=&quot;-1000px&quot;,s.target=c,s.method=&quot;POST&quot;,s.setAttribute(&quot;accept-charset&quot;,&quot;utf-8&quot;),a.name=&quot;d&quot;,s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a}this.form.action=this.uri(),r(),t=t.replace(u,&quot;\\\n&quot;),this.area.value=t.replace(p,&quot;\\n&quot;);try{this.form.submit()}catch(h){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){&quot;complete&quot;===o.iframe.readyState&amp;&amp;n()}:this.iframe.onload=n}}).call(e,function(){return this}())},function(t,e,n){function r(t){var e=t&amp;&amp;t.forceBase64;e&amp;&amp;(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=o&amp;&amp;!t.forceNode,this.protocols=t.protocols,this.usingBrowserWebSocket||(l=i),s.call(this,t)}var o,i,s=n(20),a=n(21),c=n(29),p=n(30),u=n(31),h=n(3)(&quot;engine.io-client:websocket&quot;);if(&quot;undefined&quot;==typeof self)try{i=n(34)}catch(f){}else o=self.WebSocket||self.MozWebSocket;var l=o||i;t.exports=r,p(r,s),r.prototype.name=&quot;websocket&quot;,r.prototype.supportsBinary=!0,r.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=this.protocols,n={agent:this.agent,perMessageDeflate:this.perMessageDeflate};n.pfx=this.pfx,n.key=this.key,n.passphrase=this.passphrase,n.cert=this.cert,n.ca=this.ca,n.ciphers=this.ciphers,n.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&amp;&amp;(n.headers=this.extraHeaders),this.localAddress&amp;&amp;(n.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket&amp;&amp;!this.isReactNative?e?new l(t,e):new l(t):new l(t,e,n)}catch(r){return this.emit(&quot;error&quot;,r)}void 0===this.ws.binaryType&amp;&amp;(this.supportsBinary=!1),this.ws.supports&amp;&amp;this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType=&quot;nodebuffer&quot;):this.ws.binaryType=&quot;arraybuffer&quot;,this.addEventListeners()}},r.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError(&quot;websocket error&quot;,e)}},r.prototype.write=function(t){function e(){n.emit(&quot;flush&quot;),setTimeout(function(){n.writable=!0,n.emit(&quot;drain&quot;)},0)}var n=this;this.writable=!1;for(var r=t.length,o=0,i=r;o&lt;i;o++)!function(t){a.encodePacket(t,n.supportsBinary,function(o){if(!n.usingBrowserWebSocket){var i={};if(t.options&amp;&amp;(i.compress=t.options.compress),n.perMessageDeflate){var s=&quot;string&quot;==typeof o?Buffer.byteLength(o):o.length;s&lt;n.perMessageDeflate.threshold&amp;&amp;(i.compress=!1)}}try{n.usingBrowserWebSocket?n.ws.send(o):n.ws.send(o,i)}catch(a){h(&quot;websocket closed before onclose event&quot;)}--r||e()})}(t[o])},r.prototype.onClose=function(){s.prototype.onClose.call(this)},r.prototype.doClose=function(){&quot;undefined&quot;!=typeof this.ws&amp;&amp;this.ws.close()},r.prototype.uri=function(){var t=this.query||{},e=this.secure?&quot;wss&quot;:&quot;ws&quot;,n=&quot;&quot;;this.port&amp;&amp;(&quot;wss&quot;===e&amp;&amp;443!==Number(this.port)||&quot;ws&quot;===e&amp;&amp;80!==Number(this.port))&amp;&amp;(n=&quot;:&quot;+this.port),this.timestampRequests&amp;&amp;(t[this.timestampParam]=u()),this.supportsBinary||(t.b64=1),t=c.encode(t),t.length&amp;&amp;(t=&quot;?&quot;+t);var r=this.hostname.indexOf(&quot;:&quot;)!==-1;return e+&quot;://&quot;+(r?&quot;[&quot;+this.hostname+&quot;]&quot;:this.hostname)+n+this.path+t},r.prototype.check=function(){return!(!l||&quot;__initialize&quot;in l&amp;&amp;this.name===r.prototype.name)}},function(t,e){},function(t,e){var n=[].indexOf;t.exports=function(t,e){if(n)return t.indexOf(e);for(var r=0;r&lt;t.length;++r)if(t[r]===e)return r;return-1}},function(t,e,n){&quot;use strict&quot;;function r(t,e,n){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,this.flags={},n&amp;&amp;n.query&amp;&amp;(this.query=n.query),this.io.autoConnect&amp;&amp;this.open()}var o=&quot;function&quot;==typeof Symbol&amp;&amp;&quot;symbol&quot;==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&amp;&amp;&quot;function&quot;==typeof Symbol&amp;&amp;t.constructor===Symbol&amp;&amp;t!==Symbol.prototype?&quot;symbol&quot;:typeof t},i=n(7),s=n(8),a=n(37),c=n(38),p=n(39),u=n(3)(&quot;socket.io-client:socket&quot;),h=n(29),f=n(23);t.exports=e=r;var l={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},d=s.prototype.emit;s(r.prototype),r.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[c(t,&quot;open&quot;,p(this,&quot;onopen&quot;)),c(t,&quot;packet&quot;,p(this,&quot;onpacket&quot;)),c(t,&quot;close&quot;,p(this,&quot;onclose&quot;))]}},r.prototype.open=r.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),&quot;open&quot;===this.io.readyState&amp;&amp;this.onopen(),this.emit(&quot;connecting&quot;),this)},r.prototype.send=function(){var t=a(arguments);return t.unshift(&quot;message&quot;),this.emit.apply(this,t),this},r.prototype.emit=function(t){if(l.hasOwnProperty(t))return d.apply(this,arguments),this;var e=a(arguments),n={type:(void 0!==this.flags.binary?this.flags.binary:f(e))?i.BINARY_EVENT:i.EVENT,data:e};return n.options={},n.options.compress=!this.flags||!1!==this.flags.compress,&quot;function&quot;==typeof e[e.length-1]&amp;&amp;(u(&quot;emitting packet with ack id %d&quot;,this.ids),this.acks[this.ids]=e.pop(),n.id=this.ids++),this.connected?this.packet(n):this.sendBuffer.push(n),this.flags={},this},r.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},r.prototype.onopen=function(){if(u(&quot;transport is open - connecting&quot;),&quot;/&quot;!==this.nsp)if(this.query){var t=&quot;object&quot;===o(this.query)?h.encode(this.query):this.query;u(&quot;sending connect packet with query %s&quot;,t),this.packet({type:i.CONNECT,query:t})}else this.packet({type:i.CONNECT})},r.prototype.onclose=function(t){u(&quot;close (%s)&quot;,t),this.connected=!1,this.disconnected=!0,delete this.id,this.emit(&quot;disconnect&quot;,t)},r.prototype.onpacket=function(t){var e=t.nsp===this.nsp,n=t.type===i.ERROR&amp;&amp;&quot;/&quot;===t.nsp;if(e||n)switch(t.type){case i.CONNECT:this.onconnect();break;case i.EVENT:this.onevent(t);break;case i.BINARY_EVENT:this.onevent(t);break;case i.ACK:this.onack(t);break;case i.BINARY_ACK:this.onack(t);break;case i.DISCONNECT:this.ondisconnect();break;case i.ERROR:this.emit(&quot;error&quot;,t.data)}},r.prototype.onevent=function(t){var e=t.data||[];u(&quot;emitting event %j&quot;,e),null!=t.id&amp;&amp;(u(&quot;attaching ack callback to event&quot;),e.push(this.ack(t.id))),this.connected?d.apply(this,e):this.receiveBuffer.push(e)},r.prototype.ack=function(t){var e=this,n=!1;return function(){if(!n){n=!0;var r=a(arguments);u(&quot;sending ack %j&quot;,r),e.packet({type:f(r)?i.BINARY_ACK:i.ACK,id:t,data:r})}}},r.prototype.onack=function(t){var e=this.acks[t.id];&quot;function&quot;==typeof e?(u(&quot;calling ack %s with %j&quot;,t.id,t.data),e.apply(this,t.data),delete this.acks[t.id]):u(&quot;bad ack %s&quot;,t.id)},r.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit(&quot;connect&quot;),this.emitBuffered()},r.prototype.emitBuffered=function(){var t;for(t=0;t&lt;this.receiveBuffer.length;t++)d.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t&lt;this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},r.prototype.ondisconnect=function(){u(&quot;server disconnect (%s)&quot;,this.nsp),this.destroy(),this.onclose(&quot;io server disconnect&quot;)},r.prototype.destroy=function(){if(this.subs){for(var t=0;t&lt;this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},r.prototype.close=r.prototype.disconnect=function(){return this.connected&amp;&amp;(u(&quot;performing disconnect (%s)&quot;,this.nsp),this.packet({type:i.DISCONNECT})),this.destroy(),this.connected&amp;&amp;this.onclose(&quot;io client disconnect&quot;),this},r.prototype.compress=function(t){return this.flags.compress=t,this},r.prototype.binary=function(t){return this.flags.binary=t,this}},function(t,e){function n(t,e){var n=[];e=e||0;for(var r=e||0;r&lt;t.length;r++)n[r-e]=t[r];return n}t.exports=n},function(t,e){&quot;use strict&quot;;function n(t,e,n){return t.on(e,n),{destroy:function(){t.removeListener(e,n)}}}t.exports=n},function(t,e){var n=[].slice;t.exports=function(t,e){if(&quot;string&quot;==typeof e&amp;&amp;(e=t[e]),&quot;function&quot;!=typeof e)throw new Error(&quot;bind() requires a function&quot;);var r=n.call(arguments,2);return function(){return e.apply(t,r.concat(n.call(arguments)))}}},function(t,e){function n(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter&gt;0&amp;&amp;t.jitter&lt;=1?t.jitter:0,this.attempts=0}t.exports=n,n.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=0==(1&amp;Math.floor(10*e))?t-n:t+n}return 0|Math.min(t,this.max)},n.prototype.reset=function(){this.attempts=0},n.prototype.setMin=function(t){this.ms=t},n.prototype.setMax=function(t){this.max=t},n.prototype.setJitter=function(t){this.jitter=t}}])});</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">//# sourceMappingURL=socket.io.js.map</td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2">
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;" data-original-text="Copy lines">Copy lines</clipboard-copy></li>
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</clipboard-copy></li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/socketio/socket.io-client/blame/3020e455ab9a81341722e6c1e6cd8ef6b4b0ea28/dist/socket.io.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/socketio/socket.io-client/issues/new">Open new issue</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>



  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

        
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2019 <span title="0.15102s from unicorn-7dc9b56c46-tv5ss">GitHub</span>, Inc.</li>
        <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3"><a href="/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon mr-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3"><a href="https://blog.github.com" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-dHmPQivMlASgpXpwWHCs+zWS5+cYN3uvZwUlVzDP8/rlIEY6w7OyfwtMd9hC7xX0smxqhAHM0z4lVdddSZXzEw==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-b017eef8922fe066cbe4f9340ae4088c.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-9fP4MYvNUM0JRKVahL+pFvmdO3G1yjxT9m7htPRkdRzxXyGeTFSXuWbqNKGtYRrXbSKr2kHw1LhKEH3MA9gT0g==" type="application/javascript" src="https://github.githubassets.com/assets/github-66d23b100310117a11a84d0173d30fb8.js"></script>
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
  </div>
</div>

  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark" open>
    <summary aria-haspopup="dialog" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

<div id="hovercard-aria-description" class="sr-only">
  Press h to open a hovercard with more details.
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>

