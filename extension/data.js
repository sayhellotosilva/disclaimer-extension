/* disclaimer — card data. Every fact links to its source.
   Edit this file to correct or add information. */
/* ---------- sources ---------- */
const S = {
  // shared
  usgs:{t:"US Geological Survey, Mineral Commodity Summaries 2026",u:"https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-gallium.pdf"},
  ceo:{t:"Corporate Europe Observatory & LobbyControl, Oct 2025 (EU Transparency Register data)",u:"https://corporateeurope.org/en/2025/10/big-tech-lobby-budgets-hit-record-levels"},
  ren:{t:"Li, Yang, Islam & Ren, “Making AI Less Thirsty” (UC Riverside / UT Arlington)",u:"https://arxiv.org/html/2304.03271v5"},
  // OpenAI
  oaPrice:{t:"Axios, Jan 2026",u:"https://axios.com/2026/01/16/chatgpt-ai-openai-ads"},
  ap:{t:"Associated Press, Sep 2023",u:"https://www.dailyherald.com/20230909/business/artificial-intelligence-technology-behind-chatgpt-was-built-in-iowa-with-a-lot-of-water/"},
  epoch:{t:"Epoch AI, Apr 2026",u:"https://epoch.ai/blog/openai-stargate-where-the-us-sites-stand"},
  oaNor:{t:"OpenAI, Jul 2025",u:"https://openai.com/index/introducing-stargate-norway/"},
  time:{t:"TIME, Jan 2023",u:"https://time.com/6247678/openai-chatgpt-kenya-workers/"},
  wapo:{t:"Washington Post, Aug 2023",u:"https://www.washingtonpost.com/world/2023/08/28/scale-ai-remotasks-philippines-artificial-intelligence/"},
  fort:{t:"Fortune, Jun 2025",u:"https://fortune.com/2025/06/19/openai-is-phasing-out-scale-ai-work-following-startups-meta-deal"},
  alt:{t:"Sam Altman, “The Gentle Singularity”, Jun 2025",u:"https://blog.samaltman.com/the-gentle-singularity"},
  oaTrain:{t:"OpenAI Help Center",u:"https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance"},
  lily:{t:"404 Media, Sep 2026",u:"https://404media.co/inside-project-lily-the-humans-reading-your-chatgpt-chats"},
  ads:{t:"Axios, Jan 2026",u:"https://axios.com/2026/01/16/chatgpt-ai-openai-ads"},
  oaNyt:{t:"OpenAI, Oct 2025",u:"https://openai.com/index/response-to-nyt-data-demands/"},
  nyt:{t:"NPR, Mar 2025",u:"https://www.stlpr.org/npr/2025-03-26/judge-allows-new-york-times-copyright-case-against-openai-to-go-forward"},
  oaLobby:{t:"EU Transparency Register via LobbyFacts",u:"https://www.lobbyfacts.eu/datacard/openai-opco-llc?rid=672219746759-76"},
  // Google
  gDc:{t:"Google, data center locations",u:"https://datacenters.google/locations/"},
  cnbcTpu:{t:"CNBC, Aug 2024",u:"https://www.nbclosangeles.com/news/business/money-report/how-google-makes-custom-chips-used-to-train-apple-ai-models-and-its-own-chatbot-gemini/3494623/"},
  wiredG:{t:"Wired, Sep 2025 (via Business & Human Rights Resource Centre)",u:"https://www.business-humanrights.org/es/últimas-noticias/usa-google-fires-over-200-ai-contractors-amid-concerns-over-precarity-and-wage-gaps/"},
  guardG:{t:"The Guardian, Sep 2025",u:"https://www.theguardian.com/technology/2025/sep/11/google-gemini-ai-training-humans"},
  mitG:{t:"MIT Technology Review, Aug 2025",u:"https://www.technologyreview.com/2025/08/21/1122288/google.gemini.ai.energy/"},
  axG:{t:"Axios, Jun 2026",u:"https://axios.com/2026/06/30/google-ai-boom-emissions-power-use"},
  monga:{t:"Mongabay, Nov 2023",u:"https://news.mongabay.com/2023/11/the-cloud-vs-drought-water-hog-data-centers-threaten-latin-america-critics-say/"},
  gPriv:{t:"Google, Gemini Apps Privacy Hub",u:"https://support.google.com/gemini/answer/13594961?hl=en"},
  nimbus:{t:"NBC News, Apr 2024",u:"https://www.nbcnews.com/news/us-news/google-fires-workers-protest-israel-contract-project-nimbus-rcna148333"},
  // Anthropic
  rainier:{t:"Amazon, Jun 2025",u:"https://aboutamazon.com/news/aws/aws-project-rainier-ai-trainium-chips-compute-cluster/"},
  nytIn:{t:"New York Times, Jun 2025 (Weise & Metz)",u:"https://thenightly.com.au/business/the-new-york-times-at-amazons-biggest-data-centre-everything-is-supersized-for-ai-c-19309860"},
  tpuA:{t:"SiliconANGLE, Oct 2025",u:"https://siliconangle.com/2025/10/23/anthropic-strikes-multibillion-dollar-deal-google-access-million-tpus/"},
  a50:{t:"Anthropic, Nov 2025",u:"https://www.anthropic.com/news/anthropic-invests-50-billion-in-american-ai-infrastructure"},
  surge:{t:"Surge AI case study",u:"https://surgehq.ai/blog/anthropic-surge-ai-rlhf-platform-train-llm-assistant-human-feedback"},
  heiseA:{t:"heise online, Aug 2025",u:"https://heise.de/-10625683"},
  bartz:{t:"JURIST, Jul 2026",u:"https://www.jurist.org/news/2026/07/judge-approves-record-1-5-billion-settlement-involving-anthropic/"},
  aLobby:{t:"EU Transparency Register via LobbyFacts",u:"https://www.lobbyfacts.eu/datacard/anthropic-pbc?rid=511227350325-42&sid=218820"},
  // Microsoft
  fair:{t:"Converge Digest, Sep 2025",u:"https://convergedigest.com/microsoft-unveils-fairwater-ai-data-center-in-wisconsin/"},
  msArag:{t:"DatacenterDynamics, Jun 2024",u:"https://datacenterdynamics.com/en/news/microsoft-to-invest-716bn-in-new-data-centers-in-aragon-spain"},
  msModels:{t:"TechCrunch, Jul 2026",u:"https://techcrunch.com/2026/07/09/openai-says-gpt-5-6-is-the-preferred-model-for-microsoft-copilot-amid-breakup-chatter"},
  msEnv:{t:"Microsoft, 2025 Environmental Sustainability Report",u:"https://blogs.microsoft.com/on-the-issues/2025/05/29/environmental-sustainability-report/"},
  msTrain:{t:"Microsoft, Aug 2024",u:"https://www.microsoft.com/en-us/microsoft-copilot/blog/2024/08/16/transparency-and-control-in-consumer-data-use/"},
  u8200:{t:"TechCrunch, Sep 2025 (on The Guardian’s investigation)",u:"https://techcrunch.com/2025/09/25/microsoft-cuts-cloud-services-to-israeli-military-unit-over-palestinian-surveillance"},
  // Meta
  lens:{t:"The Lens, Mar 2026",u:"https://thelensnola.org/2026/03/30/meta-triples-order-of-gas-fired-power-plants-for-its-ai-campus-in-louisiana/"},
  scaleM:{t:"SiliconANGLE, Jun 2025",u:"https://siliconangle.com/2025/06/12/scale-ai-ceo-alexandr-wang-departs-join-meta-securing-multibillion-investment/"},
  biMeta:{t:"Business Insider via Fortune, Aug 2025",u:"https://www.fortune.com/2025/08/06/meta-contractors-facebook-users-sharing-private-information-with-ai-chatbots"},
  hamb:{t:"Hamburg Data Protection Authority, May 2025",u:"https://datenschutz-hamburg.de/news/meta-starts-ai-training-with-personal-data"},
  metaAds:{t:"Tom’s Guide, Oct 2025",u:"https://www.tomsguide.com/ai/meta-will-start-using-your-ai-chats-to-target-ads-heres-what-that-means-and-why-critics-like-joseph-gordon-levitt-are-pushing-back"},
  amnBr:{t:"Amnesty International, Aug 2026",u:"https://www.amnesty.org/en/latest/news/2026/08/brazil-election-disinformation/"},
  lulaM:{t:"bne IntelliNews, Oct 2026",u:"https://new.intellinews.com/articles/brazil-s-lula-accuses-meta-of-election-interference-before-runoff-475372"},
  tseM:{t:"Brazil’s Superior Electoral Court (TSE), Oct 2026",u:"https://www.tse.jus.br/comunicacao/noticias/2026/Outubro/tse-ouve-meta-sobre-aprimoramento-de-medidas-para-enfrentamento-da-desinformacao-na-reta-final-das-eleicoes"},
  reutM:{t:"Reuters via TechCrunch, Aug 2025",u:"https://techcrunch.com/2025/08/14/leaked-meta-ai-rules-show-chatbots-were-allowed-to-have-romantic-chats-with-kids/"},
  // xAI
  tnl:{t:"Tennessee Lookout, Jul 2025",u:"https://tennesseelookout.com/2025/07/17/naacp-others-appeal-xai-turbine-permits-for-memphis-data-center/"},
  dcdX:{t:"DatacenterDynamics, Jun 2026",u:"https://www.datacenterdynamics.com/en/news/spacexai-to-restart-work-on-wastewater-treatment-facility-to-serve-memphis-data-centers-by-q1-2027/"},
  xLay:{t:"Business Insider via TechCrunch, Sep 2025",u:"https://techcrunch.com/2025/09/13/xai-reportedly-lays-off-500-workers-from-data-annotation-team"},
  dpc:{t:"Irish Data Protection Commission, Apr 2025",u:"https://dataprotection.ie/en/news-media/latest-news/data-protection-commission-announces-commencement-inquiry-x-internet-unlimited-company-xiuc"},
  regX:{t:"The Register, Jan 2026",u:"https://www.theregister.com/2026/01/15/ofcom_grok_probe/"},
  semX:{t:"Semafor, Jul 2025",u:"https://www.semafor.com/article/07/09/2025/elon-musks-xai-deletes-antisemitic-grok-posts"},
  // DeepSeek
  csis:{t:"CSIS (Gregory C. Allen), Apr 2025",u:"https://www.csis.org/analysis/deepseek-deep-dive"},
  dsPriv:{t:"DeepSeek Privacy Policy",u:"https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html"},
  row:{t:"Rest of World, Dec 2025",u:"https://restofworld.org/2025/kenya-china-ai-workers/"},
  euroDs:{t:"Euronews, Jan 2025",u:"https://www.euronews.com/2025/01/31/deepseek-ai-blocked-by-italian-authorities-as-others-member-states-open-probes"},
  dsCens:{t:"TechCrunch, Jan 2025",u:"https://techcrunch.com/2025/01/29/deepseeks-ai-avoids-answering-85-of-prompts-on-sensitive-topics-related-to-china"},
  // Perplexity
  awsP:{t:"Amazon Web Services case study",u:"https://aws.amazon.com/solutions/case-studies/perplexity-bedrock-case-study"},
  pData:{t:"Perplexity Help Center",u:"https://intercom.help/perplexity-ai/en/articles/11564572-data-collection-at-perplexity"},
  cf:{t:"TechRepublic, Aug 2025 (on Cloudflare’s report)",u:"https://www.techrepublic.com/article/news-cloudflare-accuses-perplexity-stealth-crawling-violations/"},
  // Midjourney
  mjG:{t:"Google Cloud, Mar 2023",u:"https://www.googlecloudpresscorner.com/2023-03-14-Midjourney-Selects-Google-Cloud-to-Power-AI-Generated-Creative-Platform"},
  mjTos:{t:"Midjourney Terms of Service",u:"https://docs.midjourney.com/docs/terms-of-service"},
  mjDis:{t:"Associated Press, Jun 2025",u:"https://virginiabusiness.com/disney-universal-sue-midjourney-ai-copyright/"},
  // Mistral
  qzM:{t:"Quartz, Mar 2026",u:"https://qz.com/mistral-830-million-debt-ai-data-center"},
  axM:{t:"Axios, Feb 2024",u:"https://www.axios.com/2024/02/29/mistral-french-ai-startup-microsoft"},
  mLca:{t:"Mistral AI with Carbone 4 & ADEME, Jul 2025",u:"https://mistral.ai/news/our-contribution-to-a-global-environmental-standard-for-ai"},
  mHelp:{t:"Mistral Help Center",u:"https://help.mistral.ai/en/articles/455207-can-i-opt-out-of-my-input-or-output-data-being-used-for-training"},
  mLobby:{t:"EU Transparency Register via LobbyFacts",u:"https://www.lobbyfacts.eu/datacard/mistral-ai?rid=539437350687-42"},
  // Seedance (ByteDance)
  bdMy:{t:"Reuters (citing the Wall Street Journal), Mar 2026",u:"https://www.thestandard.com.hk/finance/article/326579/Chinas-ByteDance-gets-access-to-top-Nvidia-AI-chips-WSJ-reports"},
  ttFine:{t:"Fortune, May 2025",u:"https://fortune.com/europe/2025/05/02/tiktok-fined-600-million-illegal-transfer-eu-personal-data-china-one-of-the-largest-fines/"},
  ccTos:{t:"Digital Camera World, Jun 2025 (on CapCut’s terms)",u:"https://www.digitalcameraworld.com/tech/social-media/capcuts-new-terms-of-service-are-angering-the-internet-and-so-confusing-that-video-editors-are-asking-chatgpt-to-decipher-them"},
  sdCc:{t:"TechCrunch, Mar 2026",u:"https://techcrunch.com/2026/03/26/bytedances-new-ai-video-generation-model-dreamina-seedance-2-0-comes-to-capcut/"},
  ttLobby:{t:"LobbyControl via heise online, 2024 (EU Transparency Register data)",u:"https://heise.de/-9840142"},
  sdDis:{t:"Reuters, Feb 2026",u:"https://www.dawn.com/news/1973649"},
  // Kling (Kuaishou)
  klPriv:{t:"Kling AI Privacy Policy, Apr 2026",u:"https://kling.ai/docs/privacy-policy"},
  klCens:{t:"TechCrunch, Jul 2024",u:"https://techcrunch.com/2024/07/24/a-new-chinese-video-generating-model-appears-to-be-censoring-politically-sensitive-topics"},
  // Higgsfield
  hfR:{t:"Reuters, Jan 2026",u:"https://www.thestar.com.my/tech/tech-news/2026/01/15/ai-video-startup-higgsfield-hits-13-billion-valuation-with-latest-funding"},
  hfF:{t:"Forbes, Feb 2026",u:"https://www.forbes.com/sites/rashishrivastava/2026/02/11/racist-videos-and-payment-problems-the-dark-side-of-this-ai-startups-super-fast-growth/"},
  // Figma Weave
  weave:{t:"Figma Weave pricing page",u:"https://weave.figma.com/pricing"},
  figma:{t:"Figma, 2025",u:"https://www.figma.com/blog/welcome-weavy-to-figma/"}
};

/* ---------- helpers ---------- */
const src = k => `<a class="src" href="${S[k].u}" target="_blank" rel="noopener">${S[k].t} ↗</a>`;
const ok  = '<span class="chip ok">sourced</span>';
const co  = '<span class="chip co">company says</span>';
const est = '<span class="chip est">estimate</span>';
const row = (k,v) => `<div class="row"><dt>${k}</dt><dd>${v}</dd></div>`;
const stub = (name, maker, country, models) => ({
  name, maker, meta:`${maker} · ${country}`,
  secs:[["Who makes it",[row("Company",`${maker}, headquartered in ${country}`),row("Models",models)]]],
  xray:`<p>This card hasn’t been researched yet. It only says who makes ${name}: every other section needs checked sources first.</p><p><a class="src" href="https://github.com/sayhellotosilva/disclaimer-extension/issues/new?title=Sources%20for%20${encodeURIComponent(name)}" target="_blank" rel="noopener">Suggest a source ↗</a></p>`
});
const jump = (id,label) => `<button class="jump" data-jump="${id}">${label} →</button>`;
const mine = (slug,name,where) => `<tr><th><a href="https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-${slug}.pdf" target="_blank" rel="noopener">${name}</a></th><td>${where}</td></tr>`;
const MINE_TABLE = `<table class="mines">
    ${mine("gallium","Gallium","China 99% (export controls since 2023)")}
    ${mine("copper","Copper","Chile 23% · DR Congo 14% · Peru 12%")}
    ${mine("tantalum","Tantalum","DR Congo 52% · Rwanda 16% · Nigeria 16%")}
    ${mine("tungsten","Tungsten","China 79%")}
    ${mine("tin","Tin","China 25% · Indonesia 21% · Peru 11%")}
    ${mine("rare-earths","Rare earths","China 69% · USA 13%")}
  </table>${ok} ${src("usgs")}`;
const minerals = chips => `<p style="margin:0 0 4px">${chips} These minerals go into them, and are mostly mined here (world share, 2025):</p>${MINE_TABLE}`;
const NVIDIA = "Runs on Nvidia GPUs, made mostly by TSMC in Taiwan.";

/* ---------- cards ---------- */
const DATA = {
  chatgpt:{name:"ChatGPT",maker:"OpenAI",meta:`OpenAI · USA · free, or Plus at $20/month (US) ${src("oaPrice")}`,
    secs:[
      ["Where it lives",[
        row("Trained",`GPT-4 was trained on a Microsoft supercomputer in <b>West Des Moines, Iowa</b>, USA. ${ok} ${src("ap")}`),
        row("Runs on",`Microsoft’s Azure cloud, plus OpenAI’s own “Stargate” sites. The first, in <b>Abilene, Texas</b>, has about 4 of 8 buildings running. Six more are being built in Texas, New Mexico, Wisconsin, Michigan and Ohio. ${ok} ${src("epoch")}`),
        row("Europe",`Stargate Norway in <b>Narvik</b>: hydropower, aiming for 100,000 Nvidia GPUs by the end of 2026. ${co} ${src("oaNor")}`)]],
      ["What it’s made of",[minerals(NVIDIA)]],
      ["Who trains it",[
        row("Kenya",`2021–22: OpenAI hired <b>Sama</b>, an outsourcing firm in Nairobi, to label violent and abusive text so ChatGPT could filter it. Workers took home <b>$1.32–2/hour</b>; OpenAI paid Sama $12.50/hour per worker. ${ok} ${src("time")}`),
        row("Philippines",`<b>Scale AI</b>’s Remotasks platform: at least 10,000 workers, often paid below the minimum wage, with delayed or cancelled payments. OpenAI was a client. ${ok} ${src("wapo")}`),
        row("Now",`OpenAI phased out Scale AI in 2025 and moved more work to <b>Mercor</b>, which hires experts to train advanced models. ${ok} ${src("fort")}`)]],
      ["Environment",[
        row("Gas",`ChatGPT’s new data centres are mostly powered by <b>gas</b>. Abilene runs on on-site gas plants plus the grid; the Texas and New Mexico sites are planned with their own gas power stations. Only the Wisconsin site says most of its power will be renewable. ${ok} ${src("epoch")}`),
        row("Water",`In July 2022, while GPT-4 was being built there, Microsoft’s Iowa cluster used <b>43.5 million litres</b>, 6% of the local district’s water, taken from the <b>Raccoon and Des Moines rivers</b>. ${ok} ${src("ap")}`),
        row("Per chat",`OpenAI says one query uses <b>0.34 Wh</b> and <b>0.3 ml</b> of water ${co} ${src("alt")}. Researchers estimate <b>10–50 ml</b> per response for the older GPT-3 ${est} ${src("ren")}`)]],
      ["Terms and conditions",[
        row("Training",`<b>What you type trains ChatGPT</b> unless you switch it off, on Free, Plus and Pro. Even if you opt out, a thumbs up or down sends that whole conversation for training. ${co} ${src("oaTrain")}`),
        row("Readers",`<b>People may read your chats.</b> In Sept 2026, 404 Media revealed hundreds of contractors reading real ChatGPT conversations to rate its answers. Some contained sensitive personal details. ${ok} ${src("lily")}`),
        row("Ads",`<b>Your chats shape the ads you see.</b> Since 2026, Free and Go users get ads based on their conversations, starting in the US. OpenAI says it doesn’t sell your data to advertisers. ${ok} ${src("ads")}`),
        row("Deleting",`<b>Deleted doesn’t always mean gone.</b> From mid-2025 to 26 Sept 2025, a court order made OpenAI keep chats users had deleted. Normally they’re erased within 30 days. ${co} ${src("oaNyt")}`),
        row("You can",`Switch off <b>Settings → Data controls → Improve the model for everyone</b>, turn off ad personalisation, and use <b>Temporary Chat</b> for anything sensitive.`)]],
      ["Politics",[
        row("EU lobbying",`OpenAI declares <b>€500,000–599,999</b> a year lobbying the EU (2025), mainly on the AI Act, with 76 meetings with senior Commission officials. ${ok} ${src("oaLobby")}`)]]
    ],
    xray:`<p><b>Dec 2023 to now:</b> The New York Times sued OpenAI and Microsoft for using millions of its articles to train ChatGPT without permission or payment. In March 2025 a judge let the main claims go ahead.</p>${ok} ${src("nyt")}`},

  gemini:{name:"Gemini",maker:"Google",meta:"Google · USA · free, or paid Google AI plans",
    secs:[
      ["Where it lives",[
        row("Runs on",`Google’s own data centres. In Europe: <b>St. Ghislain</b> (Belgium), <b>Fredericia</b> (Denmark), <b>Hamina</b> (Finland), <b>Hanau</b> (Germany), <b>Dublin</b> (Ireland), <b>Eemshaven</b> and <b>Middenmeer</b> (Netherlands), <b>Waltham Cross</b> (UK). In Latin America: <b>Quilicura</b> (Chile) and <b>Canelones</b> (Uruguay). ${co} ${src("gDc")}`),
        row("Chips",`Trained and run on Google’s own <b>TPU</b> chips, co-designed with Broadcom and made mainly by <b>TSMC in Taiwan</b>. ${ok} ${src("cnbcTpu")}`)]],
      ["What it’s made of",[minerals("Runs on Google TPUs, made mostly by TSMC in Taiwan.")]],
      ["Who trains it",[
        row("Raters",`Thousands of contracted “raters” check and correct Gemini’s answers, describing tight deadlines, poor pay and little transparency. ${ok} ${src("guardG")}`),
        row("GlobalLogic",`In Sept 2025, more than <b>200</b> raters working through the contractor <b>GlobalLogic</b> were fired amid a fight over pay and conditions. Those hired through agencies earned <b>$18–22/hour</b> for the same work as colleagues on $28–32. ${ok} ${src("wiredG")}`)]],
      ["Environment",[
        row("Water",`Google’s water use rose <b>34% in 2025</b>, to 10.9 billion gallons (about <b>41 billion litres</b>), more than double 2021. Data centres drove most of the increase. ${ok} ${src("axG")}`),
        row("Emissions",`Google’s emissions rose <b>18%</b> in 2025, its biggest annual increase, driven largely by making AI chips and servers. ${ok} ${src("axG")}`),
        row("Per prompt",`Google says a median Gemini text prompt uses <b>0.24 Wh</b> and <b>0.26 ml</b> of water. It excludes images, video and long reasoning tasks. ${co} ${src("mitG")}`),
        row("Uruguay",`Google’s data centre plans in Uruguay drew protests during the 2023 drought, when Montevideo was running out of drinking water. ${ok} ${src("monga")}`)]],
      ["Terms and conditions",[
        row("Training",`<b>Your Gemini chats train Google’s AI</b> while “Keep Activity” is on. Chats are kept for <b>18 months</b> by default. ${co} ${src("gPriv")}`),
        row("Readers",`<b>Human reviewers read a sample of chats</b>, including people at outside companies. Reviewed chats are kept for <b>up to 3 years</b>, even if you delete your activity. Google warns not to type anything you wouldn’t want a reviewer to see. ${co} ${src("gPriv")}`),
        row("You can",`Turn off <b>Keep Activity</b> at myactivity.google.com/product/gemini. Chats are then kept 72 hours and not used for training.`)]],
      ["Politics",[
        row("EU lobbying",`Google spends about <b>€4.5 million</b> a year lobbying the EU, and had 35 meetings with senior Commission officials in the first half of 2025. ${ok} ${src("ceo")}`)]]
    ],
    xray:`<p><b>Project Nimbus:</b> Google and Amazon hold a $1.2 billion cloud and AI contract with the Israeli government. In April 2024, Google fired 28 employees who protested against it.</p>${ok} ${src("nimbus")}`},

  claude:{name:"Claude",maker:"Anthropic",meta:"Anthropic · USA · free, or paid plans",
    secs:[
      ["Where it lives",[
        row("Indiana",`Amazon’s <b>Project Rainier</b> in <b>New Carlisle, Indiana</b>, built with Anthropic as its main user: 1,200 acres of former corn and soybean fields, drawing <b>2.2 gigawatts</b>, enough for about a million homes. ${ok} ${src("nytIn")}`),
        row("Google",`Anthropic can also use up to <b>one million Google TPUs</b>, over a gigawatt of capacity by 2026. ${ok} ${src("tpuA")}`),
        row("Own sites",`Anthropic is building its own data centres in <b>Texas</b> and <b>New York</b> with Fluidstack, coming online through 2026. ${co} ${src("a50")}`)]],
      ["What it’s made of",[minerals("Runs on Amazon Trainium and Google TPU chips, made mostly by TSMC in Taiwan.")]],
      ["Who trains it",[
        row("Surge AI",`Anthropic used <b>Surge AI</b>, a data-labelling company, for the human feedback that shaped Claude’s answers. Pay rates aren’t public. ${co} ${src("surge")}`),
        row("Readers",`Anthropic confirmed it uses human reviewers on chats from users who allow training. ${ok} ${src("lily")}`)]],
      ["Environment",[
        row("Disclosure",`Anthropic doesn’t publish its own energy or water figures.`),
        row("Water",`Near the Indiana site, state officials investigated whether construction water pumping caused neighbours’ wells to run dry. Amazon says the finished site uses cooling water only a few hours a day, April to September. ${ok} ${src("nytIn")} ${co} ${src("rainier")}`)]],
      ["Terms and conditions",[
        row("Training",`<b>Since Sept 2025, your chats train Claude</b> unless you opt out, on Free, Pro and Max. If you allow it, your data is kept for <b>5 years</b> instead of 30 days. ${ok} ${src("heiseA")}`),
        row("You can",`Switch off model training in Claude’s privacy settings. Work, education and API accounts aren’t used for training.`)]],
      ["Politics",[
        row("EU lobbying",`Anthropic declares <b>€200,000–299,999</b> a year lobbying the EU (2024), mainly on the AI Act, with 22 meetings with senior Commission officials. ${ok} ${src("aLobby")}`)]]
    ],
    xray:`<p><b>2026:</b> A judge approved a record <b>$1.5 billion</b> settlement after authors sued Anthropic for training Claude on pirated books: over 400,000 books, about $3,000 each.</p>${ok} ${src("bartz")}`},

  copilot:{name:"Copilot",maker:"Microsoft",meta:"Microsoft · USA · free, or with Microsoft 365",
    secs:[
      ["Where it lives",[
        row("Wisconsin",`Microsoft’s <b>Fairwater</b> AI data centre in <b>Mount Pleasant, Wisconsin</b>: 315 acres, hundreds of thousands of Nvidia GPUs. ${ok} ${src("fair")}`),
        row("Spain",`Microsoft plans <b>€6.69 billion</b> of data centres in <b>Aragón</b>, at Villamayor de Gállego near Zaragoza, over ten years. ${ok} ${src("msArag")}`),
        row("Models",`Copilot runs largely on <b>OpenAI’s GPT models</b>, plus Microsoft’s own MAI models. ${ok} ${src("msModels")} ${jump("chatgpt","OpenAI card")}`)]],
      ["What it’s made of",[minerals(NVIDIA)]],
      ["Who trains it",[
        row("OpenAI",`Copilot’s main models come from OpenAI, so their training labour includes OpenAI’s chain in Kenya and the Philippines. ${jump("chatgpt","See who trains them")}`)]],
      ["Environment",[
        row("Emissions",`Microsoft’s emissions are up <b>23.4%</b> since 2020 and its energy use up <b>168%</b>, which it attributes to AI and cloud growth. ${co} ${src("msEnv")}`),
        row("Water",`Microsoft’s Iowa cluster used 6% of a local water district’s supply in July 2022, while GPT-4 was being trained there. ${ok} ${src("ap")}`),
        row("Cooling",`Microsoft says its new data centre design uses <b>zero water</b> for cooling; Fairwater uses a closed loop. ${co} ${src("msEnv")}`)]],
      ["Terms and conditions",[
        row("Training",`Microsoft trains Copilot on signed-in consumers’ conversations, with an opt-out. <b>In the EU it doesn’t, “until further notice.”</b> ${co} ${src("msTrain")}`)]],
      ["Politics",[
        row("EU lobbying",`Microsoft spends about <b>€7 million</b> a year lobbying the EU, and had 36 meetings with senior Commission officials in the first half of 2025. ${ok} ${src("ceo")}`)]]
    ],
    xray:`<p><b>2025:</b> The Guardian revealed that Israel’s military intelligence Unit 8200 stored recordings of Palestinians’ phone calls on Microsoft’s Azure cloud. Microsoft cut off some of the unit’s services in September 2025.</p>${ok} ${src("u8200")}`},

  meta:{name:"Meta AI",maker:"Meta",meta:"Meta · USA · free in WhatsApp, Instagram, Facebook",
    secs:[
      ["Where it lives",[
        row("Louisiana",`<b>Hyperion</b>, Meta’s AI campus in <b>Richland Parish, Louisiana</b>: 3,650 acres, about 2,700 football fields. ${ok} ${src("lens")}`)]],
      ["What it’s made of",[minerals(NVIDIA)]],
      ["Who trains it",[
        row("Scale AI",`In 2025 Meta bought <b>49% of Scale AI</b>, the data-labelling company behind the Remotasks platform, for $14.3 billion. ${ok} ${src("scaleM")} ${jump("chatgpt","Scale AI’s workers")}`),
        row("Contractors",`Contractors hired through Alignerr and Scale AI’s Outlier said they could see users’ real names, phone numbers, emails and selfies in Meta AI chats. ${ok} ${src("biMeta")}`)]],
      ["Environment",[
        row("Gas",`Hyperion will be powered by <b>10 new gas plants</b> (7.5 gigawatts), more than a 30% increase to Louisiana’s entire grid capacity. ${ok} ${src("lens")}`)]],
      ["Terms and conditions",[
        row("Your posts",`<b>Since 27 May 2025, your public Facebook and Instagram posts train Meta’s AI</b>, including older posts, unless you objected. Data already used can’t be removed. ${ok} ${src("hamb")}`),
        row("Your chats",`Your conversations with Meta AI are used for training, with <b>no option to object</b>. ${ok} ${src("hamb")}`),
        row("Ads",`Outside the EU, UK and South Korea, your Meta AI chats are used to target ads since Dec 2025, with no full opt-out. ${ok} ${src("metaAds")}`),
        row("You can",`Object in the Facebook and Instagram privacy settings. Each account counts separately unless linked.`)]],
      ["Politics",[
        row("EU lobbying",`Meta is the EU’s biggest corporate lobbyist: about <b>€10 million</b> a year, with 27 meetings with senior Commission officials in the first half of 2025. ${ok} ${src("ceo")}`)]]
    ],
    xray:`<p><b>Brazil, Oct 2026:</b> Lula’s campaign accused Meta of limiting the reach of his posts to favour Flávio Bolsonaro, citing a network of 255 AI-run Instagram profiles attacking him. The electoral court ordered Meta to explain itself. Meta calls the claims “simply false”; the case is ongoing. ${ok} ${src("lulaM")} ${co} ${src("tseM")}</p>`},

  grok:{name:"Grok",maker:"xAI",meta:"xAI (now SpaceXAI) · USA · in X, free and paid",
    secs:[
      ["Where it lives",[
        row("Memphis",`<b>Colossus</b>, in South Memphis, Tennessee. xAI merged into SpaceX in Feb 2026. ${ok} ${src("dcdX")}`)]],
      ["What it’s made of",[minerals(NVIDIA)]],
      ["Who trains it",[
        row("AI tutors",`In Sept 2025, xAI laid off <b>500</b> of its 1,500 data annotators overnight, shifting to specialist “AI tutors”. ${ok} ${src("xLay")}`)]],
      ["Environment",[
        row("Turbines",`Colossus ran up to <b>35 gas turbines</b> without permits for over a year, residents’ groups say, in a neighbourhood already burdened by pollution. It later got a permit for 15. ${ok} ${src("tnl")}`),
        row("Water",`A promised plant to recycle wastewater for Colossus, instead of drawing on Memphis’s aquifer, stalled in April 2026. ${ok} ${src("dcdX")}`)]],
      ["Terms and conditions",[
        row("Your posts",`Ireland’s data regulator is investigating whether X used EU users’ public posts to train Grok without a legal basis. ${ok} ${src("dpc")}`)]]
    ],
    xray:`<p><b>Jan 2026:</b> Grok was used to digitally undress photos of real people, mostly women and in some cases children. The UK regulator Ofcom opened an investigation. In July 2025, Grok had also posted antisemitic messages praising Hitler.</p>${ok} ${src("regX")} ${src("semX")}`},

  deepseek:{name:"DeepSeek",maker:"DeepSeek",meta:"DeepSeek · China (Hangzhou) · free",
    secs:[
      ["Where it lives",[
        row("China",`DeepSeek says it collects, processes and stores your data in the <b>People’s Republic of China</b>. ${co} ${src("dsPriv")}`),
        row("Chips",`Trained on Nvidia chips, including the H800 made for China under US export rules. Its claimed $5.6 million training cost covers only the final training run. ${ok} ${src("csis")}`)]],
      ["What it’s made of",[minerals(NVIDIA)]],
      ["Who trains it",[
        row("Not disclosed",`DeepSeek doesn’t say who labels its data.`),
        row("Context",`Chinese AI companies hire Kenyan annotators through middlemen for as little as <b>$5.42 for a 12-hour day</b>, with no contracts. Which companies isn’t known. ${ok} ${src("row")}`)]],
      ["Environment",[row("Disclosure",`DeepSeek publishes no energy or water figures.`)]],
      ["Terms and conditions",[
        row("Training",`Your prompts and uploads train DeepSeek’s models. To opt out you have to email the company. ${co} ${src("dsPriv")}`),
        row("Sharing",`Your data can be shared with law enforcement and public authorities. ${co} ${src("dsPriv")}`),
        row("Italy",`Italy’s data regulator blocked DeepSeek in Jan 2025; Belgium, Ireland and France also asked questions. ${ok} ${src("euroDs")}`)]]
    ],
    xray:`<p><b>Censorship:</b> In tests with 1,360 prompts on topics sensitive to China, such as Tiananmen Square and Taiwan, DeepSeek’s R1 refused to answer about <b>85%</b>.</p>${ok} ${src("dsCens")}`},

  mistral:{name:"Le Chat",maker:"Mistral AI",meta:"Mistral AI · France · free, or paid plans",
    secs:[
      ["Where it lives",[
        row("France",`Mistral is building its own data centre <b>near Paris</b>, with 13,800 Nvidia chips, due to open in 2026. ${ok} ${src("qzM")}`),
        row("Microsoft",`Mistral’s models are also offered on Microsoft’s Azure cloud, under a 2024 partnership. ${ok} ${src("axM")}`)]],
      ["What it’s made of",[minerals(NVIDIA)]],
      ["Who trains it",[row("Not disclosed",`Mistral doesn’t say who labels its data.`)]],
      ["Environment",[
        row("Model",`Training Mistral Large 2 and 18 months of use: <b>20,400 tonnes of CO₂</b> and <b>281,000 m³ of water</b>, about 112 Olympic pools. ${co} ${src("mLca")} <span class="chip est">pools: estimate</span>`),
        row("Per chat",`One 400-token answer: <b>1.14 g CO₂</b> and <b>45 ml</b> of water, over 100 times OpenAI’s claim for ChatGPT. It’s the first full life-cycle study by an AI company, reviewed by outside auditors. ${co} ${src("mLca")}`)]],
      ["Terms and conditions",[
        row("Training",`Individual users’ chats are <b>used for training by default</b>; enterprise accounts are opted out. ${co} ${src("mHelp")}`),
        row("You can",`Turn off <b>Settings → Data & account controls → Enable data sharing</b>.`)]],
      ["Politics",[
        row("EU lobbying",`Mistral declares <b>€300,000–399,999</b> a year lobbying the EU, mainly on the AI Act, with 35 meetings with senior Commission officials. ${ok} ${src("mLobby")}`)]]
    ],
    xray:`<p><b>2023–24:</b> Mistral lobbied in Paris and Brussels while the AI Act was being negotiated, helping water down the rules for general-purpose AI. Weeks after the deal, it announced a partnership and investment from Microsoft.</p>${ok} ${src("axM")}`},

  midjourney:{name:"Midjourney",maker:"Midjourney",meta:"Midjourney · USA · paid plans",
    secs:[
      ["Where it lives",[
        row("Google",`Trained on <b>Google Cloud TPUs</b>; images are rendered on Nvidia GPUs in Google’s cloud. ${co} ${src("mjG")} ${jump("gemini","Google’s data centres")}`)]],
      ["What it’s made of",[minerals("Runs on Google TPUs and Nvidia GPUs, made mostly by TSMC in Taiwan.")]],
      ["Who trains it",[row("Not disclosed",`Midjourney doesn’t say who labels its data.`)]],
      ["Environment",[row("Disclosure",`Midjourney publishes no energy or water figures. It runs on Google’s cloud. ${jump("gemini","Google’s footprint")}`)]],
      ["Terms and conditions",[
        row("Public",`<b>Your images and prompts are public by default</b>, and other users can remix them. Hiding them (Stealth mode) needs the Pro or Mega plan. ${co} ${src("mjTos")}`),
        row("Licence",`You give Midjourney a <b>perpetual, irrevocable</b> licence to everything you type and make, which continues if you leave. ${co} ${src("mjTos")}`)]]
    ],
    xray:`<p><b>June 2025:</b> Disney and Universal sued Midjourney, calling it “a bottomless pit of plagiarism” for generating copies of characters like Darth Vader and the Minions.</p>${ok} ${src("mjDis")}`},

  perplexity:{type:"wrapper",name:"Perplexity",maker:"Perplexity",meta:"Perplexity · USA · free, or paid plans",
    intro:"Perplexity builds its search engine on other companies’ models and cloud:",
    groups:[
      ["USA",[["Amazon","Hosting on AWS"],["Anthropic","Claude, via Amazon","claude"]]],
      ["Europe",[["Mistral AI","Its own Sonar models were fine-tuned from Mistral’s · France","mistral"]]]
    ],
    note:`From Amazon’s 2024 case study ${src("awsP")}. Pro users can also pick other companies’ models.`,
    extra:[["Terms and conditions",[
      row("Training",`<b>Your searches train Perplexity’s models</b> by default, on Free, Pro and Max. Data already collected can’t be removed. ${co} ${src("pData")}`),
      row("You can",`Turn off <b>Account settings → Preferences → AI data retention</b>.`)]]],
    why:`<p><b>Aug 2025:</b> Cloudflare said Perplexity used hidden crawlers disguised as normal browsers to scrape websites that had blocked it: millions of requests a day across tens of thousands of sites. Perplexity called the report a “sales pitch”.</p>${ok} ${src("cf")}`},

  weave:{type:"wrapper",name:"Figma Weave",maker:"Figma",meta:`Figma · USA · formerly Weavy, bought by Figma in 2025 ${src("figma")}`,
    intro:"Figma Weave has no AI model of its own. It sends your work to these companies’ models:",
    groups:[
      ["USA",[["Google","Veo 3.1, Nano Banana","gemini"],["OpenAI","GPT Image 1.5","chatgpt"],["xAI","Grok Imagine","grok"],["Runway","Gen-4.5","runway"],["Luma AI","Ray 2","luma"]]],
      ["China",[["ByteDance","Seedream, Seedance","seedance"],["Alibaba","Wan, Qwen","qwen"],["Kuaishou","Kling","kling"],["Tencent","Hunyuan 3D","hunyuan"]]],
      ["Europe",[["Black Forest Labs","Flux · Germany","flux"],["Freepik","Mystic · Spain"]]],
      ["Israel",[["Lightricks","LTX 2","ltx"]]]
    ],
    note:`Model list from Figma’s own page ${src("weave")}. Makers grouped by headquarters ${est}`,
    why:`<p>The brand you see isn’t the company doing the work. One session in Figma Weave can send your prompts and images to <b>11 companies in 4 countries</b>, each with its own data centres, water use and labour chain.</p>`},

  /* Cards not researched yet: they say who makes the tool and ask for sources.
     Replace one with a full card once its facts are checked. */
  qwen:     stub("Qwen","Alibaba","China","Qwen and Wan (text, image and video)"),
  hunyuan:  stub("Hunyuan","Tencent","China","Hunyuan (text, image and 3D)"),
  runway:   stub("Runway","Runway","USA","Gen-4.5 and other video models"),
  luma:     stub("Luma AI","Luma AI","USA","Ray and Dream Machine (video)"),
  flux:     stub("Flux","Black Forest Labs","Germany","Flux (image)"),
  ltx:      stub("LTX","Lightricks","Israel","LTX (video)"),

  seedance:{name:"Seedance",maker:"ByteDance",meta:"ByteDance · China (Beijing) · in CapCut, Dreamina and Jianying",
    secs:[
      ["Where it lives",[
        row("Malaysia",`ByteDance is reported to be deploying about <b>36,000 Nvidia B200 chips</b> in Malaysia, through Aolani Cloud, for AI work outside China: a plan worth over $2.5 billion. ${ok} ${src("bdMy")}`),
        row("Your data",`TikTok, owned by the same company, was fined <b>€530 million</b> in 2025 by Ireland’s data regulator: staff in China could access European users’ data. ${ok} ${src("ttFine")}`)]],
      ["What it’s made of",[minerals(NVIDIA)]],
      ["Who trains it",[
        row("Not disclosed",`ByteDance doesn’t say who labels Seedance’s data.`),
        row("Context",`Chinese AI companies hire Kenyan annotators through middlemen for as little as <b>$5.42 for a 12-hour day</b>, with no contracts. Which companies isn’t known. ${ok} ${src("row")}`)]],
      ["Environment",[row("Disclosure",`ByteDance publishes no energy or water figures for Seedance.`)]],
      ["Terms and conditions",[
        row("Your content",`Seedance runs inside CapCut. CapCut’s terms give it a <b>perpetual, worldwide, royalty-free</b> licence to what you upload, plus your name, image and likeness. ${ok} ${src("ccTos")}`),
        row("Safeguards",`ByteDance says it blocks videos made from real faces and adds an invisible watermark. ${co} ${src("sdCc")}`)]],
      ["Politics",[row("EU lobbying",`TikTok, ByteDance’s company in Europe, declared about <b>€1.25 million</b> a year, with five lobbyists in Brussels. ${ok} ${src("ttLobby")}`)]]
    ],
    xray:`<p><b>Feb 2026:</b> Disney sent ByteDance a cease-and-desist letter, saying Seedance 2.0 was trained on and reproduced its characters, like <b>Spider-Man and Darth Vader</b>, without permission. Paramount sent one too. ByteDance said it would strengthen its safeguards.</p>${ok} ${src("sdDis")}`},

  kling:{name:"Kling",maker:"Kuaishou",meta:"Kuaishou · China (Beijing)",
    secs:[
      ["Where it lives",[
        row("Singapore",`Kling AI Pte. Ltd stores your data on servers in <b>Singapore</b>. Teams “around the world” can access it. ${co} ${src("klPriv")}`)]],
      ["What it’s made of",[minerals("Kuaishou doesn’t say which AI chips run Kling.")]],
      ["Who trains it",[
        row("Not disclosed",`Kuaishou doesn’t say who labels Kling’s data.`),
        row("Context",`Chinese AI companies hire Kenyan annotators through middlemen for as little as <b>$5.42 for a 12-hour day</b>, with no contracts. Which companies isn’t known. ${ok} ${src("row")}`)]],
      ["Environment",[row("Disclosure",`Kuaishou publishes no energy or water figures for Kling.`)]],
      ["Terms and conditions",[
        row("Review",`Your uploads and prompts can be scanned and reviewed, and used for product development. ${co} ${src("klPriv")}`),
        row("Sharing",`Your data can be shared with its corporate group and, in some cases, with authorities and law enforcement. ${co} ${src("klPriv")}`)]]
    ],
    xray:`<p><b>Censorship:</b> Prompts like “Democracy in China”, “Tiananmen Square protests” or “Chinese President Xi Jinping walking down the street” returned an error instead of a video.</p>${ok} ${src("klCens")}`},

  higgsfield:{type:"wrapper",name:"Higgsfield",maker:"Higgsfield AI",meta:`Higgsfield AI · USA (San Francisco) · founded 2023 ${src("hfR")}`,
    intro:"Higgsfield builds no foundation model of its own. It sends your prompts to other companies’ models, including:",
    groups:[
      ["USA",[["OpenAI","Sora 2 · Higgsfield is its biggest customer","chatgpt"],["Google","Nano Banana","gemini"]]]
    ],
    note:`It offers 12 video models; Forbes names these two ${src("hfF")}. It “integrates third-party models” ${src("hfR")}`,
    why:`<p><b>Feb 2026:</b> Creators promoting Higgsfield were given racist and sexual videos of cartoon characters like Moana and Mickey Mouse, and deepfakes of Sydney Sweeney, Zendaya and Donald Trump made without consent. Users also reported “unlimited” plans slowed to near-unusable. Its co-founder called the videos “a mistake”.</p>${ok} ${src("hfF")}`}
};


/* ---------- names the extension looks for ----------
   Each pattern points to a card. "ambiguous: true" means the word has other
   meanings (Claude Monet, the Gemini star sign, "le chat" = the cat), so it is
   only marked on pages that clearly talk about AI. */
const ALIASES = [
  {id:"chatgpt",   re:/\bChatGPT\b/},
  {id:"chatgpt",   re:/\bGPT-\d+(?:\.\d+)?(?:o|-mini|-nano|-turbo|-pro)?\b/},
  {id:"chatgpt",   re:/\bOpenAI\b/},
  {id:"chatgpt",   re:/\bDALL[·\-]?E(?: \d)?\b/},
  {id:"chatgpt",   re:/\bSora \d\b/},
  {id:"claude",    re:/\bAnthropic\b/},
  {id:"claude",    re:/\bClaude (?:Opus|Sonnet|Haiku|Fable|Mythos|Code|AI)(?: \d+(?:\.\d+)?)?\b/},
  {id:"claude",    re:/\b(?:Opus|Sonnet|Haiku|Fable|Mythos) \d+(?:\.\d+)?\b/},
  {id:"claude",    re:/\bClaude\b/, ambiguous:true},
  {id:"gemini",    re:/\bGemini \d+(?:\.\d+)?(?: (?:Pro|Flash|Ultra|Nano))?\b/},
  {id:"gemini",    re:/\bGoogle Gemini\b/},
  {id:"gemini",    re:/\bNano Banana(?: Pro)?\b/},
  {id:"gemini",    re:/\bVeo \d(?:\.\d)?\b/},
  {id:"gemini",    re:/\bGemini\b/, ambiguous:true},
  {id:"copilot",   re:/\b(?:Microsoft|GitHub) Copilot\b/},
  {id:"copilot",   re:/\bCopilot\b/, ambiguous:true},
  {id:"meta",      re:/\bMeta AI\b/},
  {id:"meta",      re:/\bLlama \d+(?:\.\d+)?\b/},
  {id:"grok",      re:/\bGrok(?: \d+(?:\.\d+)?)?\b/},
  {id:"grok",      re:/\bxAI\b/},
  {id:"deepseek",  re:/\bDeepSeek(?:[- ](?:R\d|V\d(?:\.\d)?))?\b/},
  {id:"perplexity",re:/\bPerplexity AI\b/},
  {id:"perplexity",re:/\bPerplexity\b/, ambiguous:true},
  {id:"mistral",   re:/\bMistral AI\b/},
  {id:"mistral",   re:/\bMistral (?:Large|Medium|Small)(?: \d+(?:\.\d+)?)?\b/},
  {id:"mistral",   re:/\bCodestral\b/},
  {id:"mistral",   re:/\bLe Chat\b/, ambiguous:true},
  {id:"mistral",   re:/\bMistral\b/, ambiguous:true},
  {id:"midjourney",re:/\bMidjourney(?: V?\d+)?\b/},
  {id:"weave",     re:/\bFigma Weave\b/},
  {id:"weave",     re:/\bWeavy\b/},
  {id:"seedance",  re:/\bSeedance(?: \d+(?:\.\d+)?)?(?: (?:Pro|Lite))?\b/},
  {id:"seedance",  re:/\bSeedream(?: \d+(?:\.\d+)?)?\b/},
  {id:"kling",     re:/\bKling(?: AI)?(?: \d+(?:\.\d+)?)?\b/},
  {id:"qwen",      re:/\bQwen[\d.]*(?:-[\w.]+)?\b/},
  {id:"qwen",      re:/\bWan \d+(?:\.\d+)?\b/},
  {id:"hunyuan",   re:/\bHunyuan(?: ?3D| Video| Image)?(?: \d+(?:\.\d+)?)?\b/},
  {id:"runway",    re:/\bRunway(?:ML| ML| Gen-\d+(?:\.\d+)?| Aleph)\b/},
  {id:"runway",    re:/\bGen-4(?:\.5)?\b/, ambiguous:true},
  {id:"luma",      re:/\bLuma (?:AI|Ray ?\d+(?:\.\d+)?|Dream Machine)\b/},
  {id:"luma",      re:/\bDream Machine\b/, ambiguous:true},
  {id:"flux",      re:/\bBlack Forest Labs\b/},
  {id:"flux",      re:/\bFLUX\.\d(?: \[?(?:pro|dev|schnell|Kontext)\]?)?/i},
  {id:"flux",      re:/\bFlux (?:Kontext|Pro|Dev|Schnell|\d(?:\.\d)?)\b/},
  {id:"ltx",       re:/\bLTX[- ](?:Video|2)\b/},
  {id:"ltx",       re:/\bLightricks\b/},
  {id:"higgsfield",re:/\bHiggsfield(?: AI)?\b/}
];

/* Words that show a page is about AI (needed before ambiguous names are marked). */
const AI_CONTEXT = /\b(?:AI|A\.I\.|IA|LLMs?|chatbots?|artificial intelligence|inteligencia artificial|intel·ligència artificial|intelligence artificielle|OpenAI|ChatGPT|Anthropic|DeepSeek|Midjourney|GPT-\d)\b/;
