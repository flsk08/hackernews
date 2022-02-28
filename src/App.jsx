import "./App.css";
import React, { useState } from "react";
import Post from "./component/Post";

function App() {
  const [news, setNews] = useState([
    {
      hits: [
        {
          created_at: "2021-01-31T11:05:47.000Z",
          title: "Python vs. JavaScript – What Are the Key Differences?",
          url: "https://www.freecodecamp.org/news/python-vs-javascript-what-are-the-key-differences-between-the-two-popular-programming-languages/",
          author: "oedmarap",
          points: 1,
          story_text: null,
          comment_text: null,
          num_comments: 0,
          story_id: null,
          story_title: null,
          story_url: null,
          parent_id: null,
          created_at_i: 1612091147,
          _tags: ["story", "author_oedmarap", "story_25977892"],
          objectID: "25977892",
          _highlightResult: {
            title: {
              value:
                "Python vs. <em>JavaScript</em> – What Are the Key Differences?",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            url: {
              value:
                "https://www.freecodecamp.org/news/python-vs-<em>javascript</em>-what-are-the-key-differences-between-the-two-popular-programming-languages/",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            author: {
              value: "oedmarap",
              matchLevel: "none",
              matchedWords: [],
            },
          },
        },
        {
          created_at: "2021-01-31T06:31:13.000Z",
          title: "Sorry Java, Write Once Run Anywhere (WORA) Is Now JavaScript",
          url: "https://medium.com/swlh/sorry-java-write-once-run-anywhere-wora-is-now-javascript-92641161a73f",
          author: "uscoderjs",
          points: 14,
          story_text: null,
          comment_text: null,
          num_comments: 16,
          story_id: null,
          story_title: null,
          story_url: null,
          parent_id: null,
          created_at_i: 1612074673,
          _tags: ["story", "author_uscoderjs", "story_25976601"],
          objectID: "25976601",
          _highlightResult: {
            title: {
              value:
                "Sorry Java, Write Once Run Anywhere (WORA) Is Now <em>JavaScript</em>",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            url: {
              value:
                "https://medium.com/swlh/sorry-java-write-once-run-anywhere-wora-is-now-<em>javascript</em>-92641161a73f",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            author: {
              value: "uscoderjs",
              matchLevel: "none",
              matchedWords: [],
            },
          },
        },
        {
          created_at: "2021-01-30T19:36:58.000Z",
          title: "Show HN: Nodewood, a JavaScript SaaS web app starter kit",
          url: "https://nodewood.com/",
          author: "DanHulton",
          points: 3,
          story_text: null,
          comment_text: null,
          num_comments: 1,
          story_id: null,
          story_title: null,
          story_url: null,
          parent_id: null,
          created_at_i: 1612035418,
          _tags: ["story", "author_DanHulton", "story_25972197", "show_hn"],
          objectID: "25972197",
          _highlightResult: {
            title: {
              value:
                "Show HN: Nodewood, a <em>JavaScript</em> SaaS web app starter kit",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            url: {
              value: "https://nodewood.com/",
              matchLevel: "none",
              matchedWords: [],
            },
            author: {
              value: "DanHulton",
              matchLevel: "none",
              matchedWords: [],
            },
          },
        },
        {
          created_at: "2021-01-30T18:25:19.000Z",
          title: "Software Development on Windows 10 with WSL2",
          url: "https://www.jackfranklin.co.uk/blog/software-javascript-development-windows-10-wsl/",
          author: "jackfranklin",
          points: 2,
          story_text: null,
          comment_text: null,
          num_comments: 0,
          story_id: null,
          story_title: null,
          story_url: null,
          parent_id: null,
          created_at_i: 1612031119,
          _tags: ["story", "author_jackfranklin", "story_25971485"],
          objectID: "25971485",
          _highlightResult: {
            title: {
              value: "Software Development on Windows 10 with WSL2",
              matchLevel: "none",
              matchedWords: [],
            },
            url: {
              value:
                "https://www.jackfranklin.co.uk/blog/software-<em>javascript</em>-development-windows-10-wsl/",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            author: {
              value: "jackfranklin",
              matchLevel: "none",
              matchedWords: [],
            },
          },
        },
        {
          created_at: "2021-01-30T17:01:10.000Z",
          title:
            "NeDB – Embedded persistent or in memory database for JavaScript",
          url: "https://github.com/louischatriot/nedb",
          author: "tonyjstark",
          points: 2,
          story_text: null,
          comment_text: null,
          num_comments: 0,
          story_id: null,
          story_title: null,
          story_url: null,
          parent_id: null,
          created_at_i: 1612026070,
          _tags: ["story", "author_tonyjstark", "story_25970691"],
          objectID: "25970691",
          _highlightResult: {
            title: {
              value:
                "NeDB – Embedded persistent or in memory database for <em>JavaScript</em>",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            url: {
              value: "https://github.com/louischatriot/nedb",
              matchLevel: "none",
              matchedWords: [],
            },
            author: {
              value: "tonyjstark",
              matchLevel: "none",
              matchedWords: [],
            },
          },
        },
        {
          created_at: "2021-01-30T13:46:37.000Z",
          title:
            "Python vs JavaScript–Key Differences Between the Two Popular Programming Langs",
          url: "https://www.freecodecamp.org/news/python-vs-javascript-what-are-the-key-differences-between-the-two-popular-programming-languages/",
          author: "kiyanwang",
          points: 2,
          story_text: null,
          comment_text: null,
          num_comments: 0,
          story_id: null,
          story_title: null,
          story_url: null,
          parent_id: null,
          created_at_i: 1612014397,
          _tags: ["story", "author_kiyanwang", "story_25969013"],
          objectID: "25969013",
          _highlightResult: {
            title: {
              value:
                "Python vs <em>JavaScript</em>–Key Differences Between the Two Popular Programming Langs",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            url: {
              value:
                "https://www.freecodecamp.org/news/python-vs-<em>javascript</em>-what-are-the-key-differences-between-the-two-popular-programming-languages/",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            author: {
              value: "kiyanwang",
              matchLevel: "none",
              matchedWords: [],
            },
          },
        },
        {
          created_at: "2021-01-29T21:10:50.000Z",
          title:
            "JavaScript on the latest Android phones are embarrassing compared to iOS",
          url: "https://twitter.com/dhh/status/1354802203756617732",
          author: "throwaway888abc",
          points: 5,
          story_text: null,
          comment_text: null,
          num_comments: 0,
          story_id: null,
          story_title: null,
          story_url: null,
          parent_id: null,
          created_at_i: 1611954650,
          _tags: ["story", "author_throwaway888abc", "story_25962591"],
          objectID: "25962591",
          _highlightResult: {
            title: {
              value:
                "<em>JavaScript</em> on the latest Android phones are embarrassing compared to iOS",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            url: {
              value: "https://twitter.com/dhh/status/1354802203756617732",
              matchLevel: "none",
              matchedWords: [],
            },
            author: {
              value: "throwaway888abc",
              matchLevel: "none",
              matchedWords: [],
            },
          },
        },
        {
          created_at: "2021-01-29T18:57:00.000Z",
          title: "FOSS JavaScript Lib for mobile-friendly interactive maps",
          url: "https://leafletjs.com/",
          author: "wrycoder",
          points: 3,
          story_text: null,
          comment_text: null,
          num_comments: 0,
          story_id: null,
          story_title: null,
          story_url: null,
          parent_id: null,
          created_at_i: 1611946620,
          _tags: ["story", "author_wrycoder", "story_25960900"],
          objectID: "25960900",
          _highlightResult: {
            title: {
              value:
                "FOSS <em>JavaScript</em> Lib for mobile-friendly interactive maps",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            url: {
              value: "https://leafletjs.com/",
              matchLevel: "none",
              matchedWords: [],
            },
            author: {
              value: "wrycoder",
              matchLevel: "none",
              matchedWords: [],
            },
          },
        },
        {
          created_at: "2021-01-29T17:35:16.000Z",
          title: "The No-Framework Framework: JavaScript Without React [video]",
          url: "https://www.youtube.com/watch?v=BpFtR8U_sjw",
          author: "jackkinsella",
          points: 2,
          story_text: null,
          comment_text: null,
          num_comments: 0,
          story_id: null,
          story_title: null,
          story_url: null,
          parent_id: null,
          created_at_i: 1611941716,
          _tags: ["story", "author_jackkinsella", "story_25959945"],
          objectID: "25959945",
          _highlightResult: {
            title: {
              value:
                "The No-Framework Framework: <em>JavaScript</em> Without React [video]",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            url: {
              value: "https://www.youtube.com/watch?v=BpFtR8U_sjw",
              matchLevel: "none",
              matchedWords: [],
            },
            author: {
              value: "jackkinsella",
              matchLevel: "none",
              matchedWords: [],
            },
          },
        },
        {
          created_at: "2021-01-29T10:57:35.000Z",
          title:
            "Comprehensive Intro to Testing JavaScript and React (Jest, Cypress, RTL)",
          url: "https://www.rrebase.com/posts/full-guide-to-testing-javascript-react",
          author: "WinDoctor",
          points: 1,
          story_text: null,
          comment_text: null,
          num_comments: 1,
          story_id: null,
          story_title: null,
          story_url: null,
          parent_id: null,
          created_at_i: 1611917855,
          _tags: ["story", "author_WinDoctor", "story_25956076"],
          objectID: "25956076",
          _highlightResult: {
            title: {
              value:
                "Comprehensive Intro to Testing <em>JavaScript</em> and React (Jest, Cypress, RTL)",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            url: {
              value:
                "https://www.rrebase.com/posts/full-guide-to-testing-<em>javascript</em>-react",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            author: {
              value: "WinDoctor",
              matchLevel: "none",
              matchedWords: [],
            },
          },
        },
        {
          created_at: "2021-01-29T10:33:24.000Z",
          title: "We are using JavaScript for our SaaS-Backend",
          url: null,
          author: "ftreml",
          points: 5,
          story_text:
            "For our SaaS-product Botium Box - a full functional and non-functional testing infrastructure for chatbot - we decided to go for Node.js in the backend. ... The one single argument why we decided for Node.js was that in our small developer team (4 people) everyone is a full-stack-developer, and it will ultimately safe time to develop client and server in the same programming language.",
          comment_text: null,
          num_comments: 1,
          story_id: null,
          story_title: null,
          story_url: null,
          parent_id: null,
          created_at_i: 1611916404,
          _tags: ["story", "author_ftreml", "story_25955945"],
          objectID: "25955945",
          _highlightResult: {
            title: {
              value: "We are using <em>JavaScript</em> for our SaaS-Backend",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            author: {
              value: "ftreml",
              matchLevel: "none",
              matchedWords: [],
            },
            story_text: {
              value:
                "For our SaaS-product Botium Box - a full functional and non-functional testing infrastructure for chatbot - we decided to go for Node.js in the backend. ... The one single argument why we decided for Node.js was that in our small developer team (4 people) everyone is a full-stack-developer, and it will ultimately safe time to develop client and server in the same programming language.",
              matchLevel: "none",
              matchedWords: [],
            },
          },
        },
        {
          created_at: "2021-01-29T08:56:31.000Z",
          title: "JavaScript ES2021 Features",
          url: "https://v8.dev/features/tags/es2021",
          author: "undefinednull",
          points: 1,
          story_text: null,
          comment_text: null,
          num_comments: 0,
          story_id: null,
          story_title: null,
          story_url: null,
          parent_id: null,
          created_at_i: 1611910591,
          _tags: ["story", "author_undefinednull", "story_25955415"],
          objectID: "25955415",
          _highlightResult: {
            title: {
              value: "<em>JavaScript</em> ES2021 Features",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            url: {
              value: "https://v8.dev/features/tags/es2021",
              matchLevel: "none",
              matchedWords: [],
            },
            author: {
              value: "undefinednull",
              matchLevel: "none",
              matchedWords: [],
            },
          },
        },
        {
          created_at: "2021-01-29T05:03:02.000Z",
          title: "Interlude: Rethinking the JavaScript Pipeline Operator",
          url: "https://www.wix.engineering/post/interlude-rethinking-the-javascript-pipeline-operator",
          author: "fagnerbrack",
          points: 1,
          story_text: null,
          comment_text: null,
          num_comments: 0,
          story_id: null,
          story_title: null,
          story_url: null,
          parent_id: null,
          created_at_i: 1611896582,
          _tags: ["story", "author_fagnerbrack", "story_25954178"],
          objectID: "25954178",
          _highlightResult: {
            title: {
              value:
                "Interlude: Rethinking the <em>JavaScript</em> Pipeline Operator",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            url: {
              value:
                "https://www.wix.engineering/post/interlude-rethinking-the-<em>javascript</em>-pipeline-operator",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            author: {
              value: "fagnerbrack",
              matchLevel: "none",
              matchedWords: [],
            },
          },
        },
        {
          created_at: "2021-01-29T01:14:26.000Z",
          title:
            "The challenges of building a SPA with vanilla JavaScript, HTML&CSS",
          url: "https://nassimsaboundji.medium.com/the-challenges-of-building-a-spa-with-vanilla-javascript-html-css-242cf35b66bd",
          author: "nassims12",
          points: 2,
          story_text: null,
          comment_text: null,
          num_comments: 0,
          story_id: null,
          story_title: null,
          story_url: null,
          parent_id: null,
          created_at_i: 1611882866,
          _tags: ["story", "author_nassims12", "story_25952250"],
          objectID: "25952250",
          _highlightResult: {
            title: {
              value:
                "The challenges of building a SPA with vanilla <em>JavaScript</em>, HTML&CSS",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            url: {
              value:
                "https://nassimsaboundji.medium.com/the-challenges-of-building-a-spa-with-vanilla-<em>javascript</em>-html-css-242cf35b66bd",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            author: {
              value: "nassims12",
              matchLevel: "none",
              matchedWords: [],
            },
          },
        },
        {
          created_at: "2021-01-28T19:52:03.000Z",
          title: "Lambda Calculus for JavaScript Part IV",
          url: "https://www.47deg.com/blog/lambda-calculus-javascript-4/",
          author: "MRElsberry",
          points: 3,
          story_text: null,
          comment_text: null,
          num_comments: 0,
          story_id: null,
          story_title: null,
          story_url: null,
          parent_id: null,
          created_at_i: 1611863523,
          _tags: ["story", "author_MRElsberry", "story_25948011"],
          objectID: "25948011",
          _highlightResult: {
            title: {
              value: "Lambda Calculus for <em>JavaScript</em> Part IV",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            url: {
              value:
                "https://www.47deg.com/blog/lambda-calculus-<em>javascript</em>-4/",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            author: {
              value: "MRElsberry",
              matchLevel: "none",
              matchedWords: [],
            },
          },
        },
        {
          created_at: "2021-01-28T08:29:31.000Z",
          title:
            "Alan Turing Proved Why All Programmers Should Be Writing Tests",
          url: "https://medium.com/javascript-in-plain-english/alan-turing-proved-why-all-programmers-should-be-writing-tests-a0c3d4be42a6",
          author: "vicnicius",
          points: 1,
          story_text: null,
          comment_text: null,
          num_comments: 0,
          story_id: null,
          story_title: null,
          story_url: null,
          parent_id: null,
          created_at_i: 1611822571,
          _tags: ["story", "author_vicnicius", "story_25939555"],
          objectID: "25939555",
          _highlightResult: {
            title: {
              value:
                "Alan Turing Proved Why All Programmers Should Be Writing Tests",
              matchLevel: "none",
              matchedWords: [],
            },
            url: {
              value:
                "https://medium.com/<em>javascript</em>-in-plain-english/alan-turing-proved-why-all-programmers-should-be-writing-tests-a0c3d4be42a6",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            author: {
              value: "vicnicius",
              matchLevel: "none",
              matchedWords: [],
            },
          },
        },
        {
          created_at: "2021-01-28T02:46:06.000Z",
          title: "Show HN: Python's __add__ and __mul__ in JavaScript",
          url: "https://github.com/nuchi/js_add_and_mul",
          author: "matheist",
          points: 3,
          story_text: null,
          comment_text: null,
          num_comments: 0,
          story_id: null,
          story_title: null,
          story_url: null,
          parent_id: null,
          created_at_i: 1611801966,
          _tags: ["story", "author_matheist", "story_25937503", "show_hn"],
          objectID: "25937503",
          _highlightResult: {
            title: {
              value:
                "Show HN: Python's __add__ and __mul__ in <em>JavaScript</em>",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            url: {
              value: "https://github.com/nuchi/js_add_and_mul",
              matchLevel: "none",
              matchedWords: [],
            },
            author: {
              value: "matheist",
              matchLevel: "none",
              matchedWords: [],
            },
          },
        },
        {
          created_at: "2021-01-27T16:37:34.000Z",
          title: "Glassmorphism Working Calculator Using HTML, CSS",
          url: "https://dev.to/backlinknweb/glassmorphism-working-calculator-using-html-css-javascript-ig7",
          author: "monalisamondol",
          points: 1,
          story_text: null,
          comment_text: null,
          num_comments: 0,
          story_id: null,
          story_title: null,
          story_url: null,
          parent_id: null,
          created_at_i: 1611765454,
          _tags: ["story", "author_monalisamondol", "story_25930291"],
          objectID: "25930291",
          _highlightResult: {
            title: {
              value: "Glassmorphism Working Calculator Using HTML, CSS",
              matchLevel: "none",
              matchedWords: [],
            },
            url: {
              value:
                "https://dev.to/backlinknweb/glassmorphism-working-calculator-using-html-css-<em>javascript</em>-ig7",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            author: {
              value: "monalisamondol",
              matchLevel: "none",
              matchedWords: [],
            },
          },
        },
        {
          created_at: "2021-01-27T15:05:57.000Z",
          title: "JavaScript: Undefined vs. Null Revisited",
          url: "https://2ality.com/2021/01/undefined-null-revisited.html",
          author: "ingve",
          points: 2,
          story_text: null,
          comment_text: null,
          num_comments: 0,
          story_id: null,
          story_title: null,
          story_url: null,
          parent_id: null,
          created_at_i: 1611759957,
          _tags: ["story", "author_ingve", "story_25929036"],
          objectID: "25929036",
          _highlightResult: {
            title: {
              value: "<em>JavaScript</em>: Undefined vs. Null Revisited",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
            url: {
              value: "https://2ality.com/2021/01/undefined-null-revisited.html",
              matchLevel: "none",
              matchedWords: [],
            },
            author: {
              value: "ingve",
              matchLevel: "none",
              matchedWords: [],
            },
          },
        },
        {
          created_at: "2021-01-27T14:11:29.000Z",
          title: "Open Redirect on Archive.org",
          url: null,
          author: "hamiltonians",
          points: 2,
          story_text:
            "this is being abused  on various social networks such as twitter<p>the high authority of the archive.org domain makes it hard to bloc and the nature of the redirect means spiders cannot crawl it, making better for spamming purposes<p>Here it is<p>https:&#x2F;&#x2F;t.co&#x2F;jyCOKb4E3h?amp=1<p>It involves a long piece of JavaScript which I have not been able to decrypt what it does but I can modify the exploit to redirect to any page. This piece of JavaScript is able to break the frame in way that is undetectable to archive.org.<p>Steps to reproduce: You create a webpage with the JavaScript, archive it, and then point to the page like this<p>http:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;XXXXXXX&#x2F;http:yourdomainhere.com<p>the JavaScript https:&#x2F;&#x2F;jsfiddle.net&#x2F;hnu4q5bm&#x2F;<p>this part &quot;:&#x2F;&#x2F;wi&quot; which is the only obvious readable  part of the code can be changed to any url<p>I have tired emailing archive.og about it no fu3ks given",
          comment_text: null,
          num_comments: 0,
          story_id: null,
          story_title: null,
          story_url: null,
          parent_id: null,
          created_at_i: 1611756689,
          _tags: ["story", "author_hamiltonians", "story_25928445"],
          objectID: "25928445",
          _highlightResult: {
            title: {
              value: "Open Redirect on Archive.org",
              matchLevel: "none",
              matchedWords: [],
            },
            author: {
              value: "hamiltonians",
              matchLevel: "none",
              matchedWords: [],
            },
            story_text: {
              value:
                "this is being abused  on various social networks such as twitter<p>the high authority of the archive.org domain makes it hard to bloc and the nature of the redirect means spiders cannot crawl it, making better for spamming purposes<p>Here it is<p>https://t.co/jyCOKb4E3h?amp=1<p>It involves a long piece of <em>JavaScript</em> which I have not been able to decrypt what it does but I can modify the exploit to redirect to any page. This piece of <em>JavaScript</em> is able to break the frame in way that is undetectable to archive.org.<p>Steps to reproduce: You create a webpage with the <em>JavaScript</em>, archive it, and then point to the page like this<p>http://web.archive.org/web/XXXXXXX/http:yourdomainhere.com<p>the <em>JavaScript</em> https://jsfiddle.net/hnu4q5bm/<p>this part &quot;://wi&quot; which is the only obvious readable  part of the code can be changed to any url<p>I have tired emailing archive.og about it no fu3ks given",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["javascript"],
            },
          },
        },
      ],
      nbHits: 31642,
      page: 0,
      nbPages: 50,
      hitsPerPage: 20,
      exhaustiveNbHits: false,
      query: "javascript",
      params:
        "advancedSyntax=true&analytics=true&analyticsTags=backend&query=javascript&tags=story",
      processingTimeMS: 12,
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        {news.map((post) => (
          <Post
            key={post.id}
            objectID={post.objectID}
            title={post.title}
            author={post.author}
            url={post.url}
          />
        ))}
        ;
      </header>
    </div>
  );
}

export default App;
