const TOOL_DATA = [
        {
          id: 1,
          name: 'Arduino',
          about:'Empower scientists and artists of the future with creative STEM programs.',
          offer:'Free Arduino Create Maker plan for 6 months and discounts on selected hardware.',
          connect: 'https://www.arduino.cc/github/students',
          support: 'https://www.arduino.cc/education/contact-us'
        },
        {
          id: 2,
          name: 'Yakindu',
          about:'An integrated modelling environment for the specification and development of reactive, event-driven systems based on the concept of state machines.',
          offer:'Yakindu Professional Edition free for 1 year',
          connect: 'https://info.itemis.com/en/yakindu/state-machine/github-pack',
          support: 'mailto:sct-pro@itemis.de'
        },{
          id: 3,
          name: 'Xojo',
          about:'A cross-platform development tool for making native apps for the Desktop.',
          offer:'Xojo Desktop license free while you are a student.',
          connect: 'https://www.xojo.com/githubstudent/',
          support: 'mailto:hello@xojo.com'
        },{
          id: 4,
          name: 'Unity',
          about:'Accomplish your creative goals using the world’s leading real-time development platform, used to create half of the world’s games.',
          offer:'Unity Student Plan free while you are a student.',
          connect: 'https://unity.com/student-plan',
          support: 'mailto:support@unity3d.com'
        },{
          id: 5,
          name: 'Sider',
          about: "Maximize your engineering team's productivity by automatically analyzing every pull request.",
          offer:'Free Arduino Create Maker plan for 6 months and discounts on selected hardware.',
          connect: 'https://sider.review/github-student',
          support: 'mailto:sales@sider.review'
        },{
          id: 6,
          name: 'Raygun',
          about: "Error, crash and performance monitoring for web and mobile apps.",
          offer:'Startup Platform plan, free for one year.',
          connect: 'https://raygun.com/rg/campaign/github-student-developer-pack',
          support: 'mailto:support@raygun.com'
        },{
          id: 7,
          name: 'Polypane',
          about: "A powerful browser and developer tool that lets developers and designers make better websites and web apps in less time.",
          offer:'Polypane free for 1 year.',
          connect: 'https://polypane.app/github-students',
          support: 'https://polypane.app/support'
        },{
          id: 8,
          name: 'MongoDB',
          about: "A general purpose, document-based, distributed database built for modern application developers and for the cloud era.",
          offer:'$200 in MongoDB Atlas Credits, plus access to MongoDB Compass and MongoDB University.',
          connect: 'https://www.mongodb.com/students/',
          support: 'https://community.mongodb.com/c/42'
        },{
          id: 9,
          name: 'Kodika',
          about: "Build iOS applications with drag & drop.",
          offer:'Kodika Unlimited Pro subscription free for 6 months.',
          connect: 'https://kodika.io/github-student-pack/',
          support: 'mailto:support@kodika.io'
        },{
          id: 10,
          name: 'Jaamly',
          about: "Helping developers, designers, and startups to launch their apps on the App Store.",
          offer:'Jaamly Startup plan free for 6 months.',
          connect: 'https://www.jaamly.com/jaamly-github-student-pack',
          support: 'mailto:support@jaamly.com'
        },{
          id: 11,
          name: 'Freshpaint',
          about: "Integrate your marketing and analytics tools with one click.",
          offer:'Free Freshpaint Growth Plan while you are a student.',
          connect: 'https://www.freshpaint.io/students',
          support: 'https://www.freshpaint.io/contact'
        },{
          id: 12,
          name: 'Dashlane',
          about: "Cloud-based password manager.",
          offer:'Dashlane Premium free for 6 months.',
          connect: 'https://dashlane.com/github-students',
          support: 'https://support.dashlane.com/'
        },{
          id: 13,
          name: 'DailyBot',
          about: "Automate daily stand-ups, follow-ups, retrospectives, surveys and feedback for your team.",
          offer:'DailyBot Business plan free for 1 year.',
          connect: 'https://www.dailybot.co/github-students/',
          support : 'https://dailybot.freshdesk.com/support/home'
        },{
          id: 14,
          name: 'Customerly',
          about: "Live chat, behavioural funnels, newsletters, and in-app surveys for SaaS.",
          offer:'Customerly Pro free for 6 months.',
          connect: 'https://www.customerly.io/github',
          support: 'https://docs.customerly.help/'
        },{
          id: 15,
          name: 'Blockchair',
          about: "Connect to the world of blockchains through Blockchair’s professional APIs — supports most major cryptocurrencies.",
          offer:'100,000 free requests.',
          connect: 'https://blockchair.com/student-pack',
          support: 'https://blockchair.com/about'
        },{
          id: 16,
          name: 'Tower',
          about: "The Git client that brings all of Git and GitHub's power to the desktop, for Mac and Windows.",
          offer:'Free Pro account for 1 year.',
          connect: 'https://www.git-tower.com/students/github',
          support: 'mailto:support@git-tower.com'
        },{
          id: 17,
          name: 'Themeisle',
          about: "Neve’s mobile-first approach, compatibility with AMP and popular page-builders makes website building accessible for everyone.",
          offer:'Free year of Neve Agency WordPress theme exclusively for students.',
          connect: 'https://themeisle.com/github-students',
          support: 'https://themeisle.com/contact/'
        },{
          id: 18,
          name: 'SQLGate',
          about: "Simple but powerful IDE for multiple SQL databases.",
          offer:'Access to most Standard Subscription features for 1 year.',
          connect: 'https://www.sqlgate.com/student-pack',
          support: 'https://support.sqlgate.com/hc/en-us/requests/new'
        },{
          id: 19,
          name: 'SOFY',
          about: "SOFY automates your software testing, uses machine learning to create tests, suggests test scenarios based on product changes, customer usage data and runs at scale.",
          offer:'6 months of free website and mobile app testing.',
          connect: 'https://info.sofy.ai/github-students',
          support: 'https://sofy.ai/contact'
        },{
          id: 20,
          name: 'SimpleAnalytics',
          logo: 'https://education.github.com/assets/pack/logo-simpleanalytics-c8f4bfbc16a694c67685b2f01f9b614475fdb85222644d6990924284a3a56286.jpg',
          about: "Privacy-friendly analytics with a simple interface and API.",
          offer:'Starter plan free for one year, including 100k page views per month.',
          connect: 'https://simpleanalytics.com/students',
          support: 'https://simpleanalytics.com/contact'
        },{
          id: 21,
          name: 'Restyled',
          about: "With Restyled, automatically re-format Pull Requests to have consistent style.",
          offer:"Run Restyled for free on private repositories while you're a student.",
          connect: 'https://restyled.io/github-students',
          support: 'mailto:support@restyled.io'
        },{
          id: 22,
          name: 'PopSQL',
          about: "Modern, collaborative SQL editor for your team — write queries, visualize data, and share your results.",
          offer:"Free Premium subscription for PopSQL while you're a student.",
          connect: 'https://popsql.com/github-students',
          support: 'mailto:students@popsql.com'
        },{
          id: 23,
          name: 'POEditor',
          about: "POEditor is a highly scalable localization management platform for teams.",
          offer:"Plus Plan for free for one year.",
          connect: 'https://poeditor.com/register/github_education',
          support: 'https://poeditor.com/contact/'
        },{
          id: 24,
          name: 'Pageclip',
          about: "A server for your static websites and HTML forms.",
          offer:"Free basic plan while you are a student.",
          connect: 'https://pageclip.co/github-students',
          support: 'mailto:support@pageclip.co'
        },{
          id: 25,
          name: 'Lingohub',
          about: "Translation management service for web, desktop and mobile apps.",
          offer:"Free Professional Plan containing 10,000 text segments for students.",
          connect: 'https://lingohub.com/github-students',
          support: 'https://lingohub.com/support'
        },{
          id: 26,
          name: 'LambdaTest',
          about: "Perform automated and live interactive cross browser testing on 2000+ real browsers and operating systems online.",
          offer:"Free LambdaTest Live Plan for one year.",
          connect: 'https://www.lambdatest.com/github-students',
          support: 'mailto:support@lambdatest.com'
        },{
          id: 27,
          name: 'Imgbot',
          about: "Imgbot is a GitHub App that automatically optimizes your images.",
          offer:"Free image optimization for all your public and private projects while you are a student.",
          connect: 'support@lambdatest.com',
          support: 'mailto:help@imgbot.net'
        },{
          id: 28,
          name: 'DeepSource',
          about: "Static code analyzer for Python and Go. Detect bug risks, anti-patterns and security vulnerabilities.",
          offer:"Free Pro subscription for students.",
          connect: 'https://deepsource.io/gh-education/',
          support: ''
        },{
          id: 29,
          name: 'DeepScan',
          about: "DeepScan is a platform for building better and more reliable JavaScript apps.",
          offer:"Free 6-month trial while you are a student.",
          connect: 'https://deepscan.io/github-student-pack',
          support: 'https://deepscan.io/contact'
        },{
          id: 30,
          name: 'Datree',
          about: "Datree is a git-based rules engine for enforcing best development practices, coding standards, and security policies on every commit.",
          offer:"Free Pro subscription while you are a student.",
          connect: 'https://deepscan.io/contact',
          support: 'mailto:support@datree.io'
        },{
          id: 31,
          name: 'DataCamp',
          about: "DataCamp helps companies and individuals make better use of data. Our users build data fluency while learning from the world’s top data scientists.",
          offer:"Free 3-month individual subscription for students.",
          connect: 'https://www.datacamp.com/github-students/',
          support: 'https://support.datacamp.com/hc/en-us'
        },{
          id: 32,
          name: 'Coveralls',
          about: "We help you deliver code confidently by showing which parts of your code aren’t covered by your test suite.",
          offer:"Free coverage for unlimited private repos on your personal account.",
          connect: 'https://coveralls.io/github-students',
          support: 'mailto:student-support@coveralls.io'
        },{
          id: 33,
          name: 'CodeScene',
          about: "A powerful visualization tool that uses Predictive Analytics to identify social patterns in your code, detect delivery risks and manage technical debt.",
          offer:"A free Student account to analyze private GitHub repositories.",
          connect: 'https://education.github.com/pack/redeem/codescene-student',
          support: 'mailto:info@empear.com'
        },{
          id: 34,
          name: 'Baremetrics',
          about: "Metrics, dunning, and engagement tools for SaaS & subscription businesses.",
          offer:"Get Baremetrics for free up to $2.5k Monthly Recurring Revenue while you are a student.",
          connect: 'https://baremetrics.com/github-students',
          support: 'mailto:hello@baremetrics.com'
        },{
          id: 35,
          name: 'Adafruit',
          about: "Adafruit is an open-source hardware and open-source educational electronics company based in NYC, USA.",
          offer:"One year of Adafruit IO+ and discounts on selected hardware.",
          connect: 'https://www.adafruit.com/github-students',
          support: 'https://www.adafruit.com/support'
        },{
          id: 36,
          name: 'AccessLint',
          about: "AccessLint brings automated web accessibility testing into your development workflow.",
          offer:"Unlimited use for public and private repositories while you are a student.",
          connect: 'https://www.accesslint.com/github-students/',
          support: 'mailto:students@accesslint.com'
        },{
          id: 37,
          name: 'Github Campus Experts',
          about: "GitHub Campus Experts are students who build technical communities on campus, with training and support from GitHub.",
          offer: "Apply to become part of the program while you’re a student.",
          connect: 'https://apply.githubcampus.expert/',
          support: 'https://support.github.com/contact'
        },{
          id: 38,
          name: 'Wisej',
          about: "Build powerful web applications in Visual Studio with C# or VB.NET.",
          offer:"Free Wisej Developer license plus free updates for a year.",
          connect: 'https://wisej.com/github-studentpack/',
          support: 'https://wisej.com/support'
        },{
          id: 39,
          name: 'Weglot',
          about: "Make any website multilingual and manage your translations through a single platform.",
          offer:"Free 1-year Pro Plan giving you access to unlimited languages + up to 200k translated words.",
          connect: 'https://weglot.com/github-students/',
          support: 'mailto:support@weglot.com'
        }
      ]

export default TOOL_DATA;