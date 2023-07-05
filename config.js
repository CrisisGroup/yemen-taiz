var config = {
  style: "mapbox://styles/daltonwb/cljn2hs7h009x01pme54w8jke",
  accessToken:
    "pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw",
  showMarkers: false,
  markerColor: "#3FB1CE",
  inset: false,
  theme: "light",
  projection: "mercator",
  use3dTerrain: false,
  title:
    '<a href="https://www.crisisgroup.org" target="_blank"><img id="icg" src="images/icg-oj.png" /></a><br /><video id="background-video" autoplay loop muted poster="images/poster1.jpg"><source src="images/aerial.mp4" type="video/mp4"></video><h1>Taiz in a Knot</h1><p class="hedp"><strong>Road closures in Yemen have deepened a cost-of-living crisis, created huge barriers to movement for Yemenis seeking medical treatment and work in other parts of the country, and deepened social and political divides. Reopening them could lead to significant improvements in the humanitarian and political situation. But doing so will not be easy.</strong></p><p class="hedp">Taiz city is a case study for the cost and challenge of road closures in Yemen. The city has been partially besieged for much of the last seven years. Local and international initiatives have done little to change the status quo. Most recently, in April 2022, Taiz’s roads were included as a confidence-building measure in a UN-brokered nationwide truce. But little progress was made before the truce lapsed in October 2022.</p><p class="hedp">The good news is that Yemen’s roads are now part of nationwide negotiations. The bad news is that reopening them, either as part of a truce or ceasefire or a national political settlement, will not be easy. Control of roads is embedded in the parties’ military and political strategies. Preventing road access is a tool for limiting rivals’ scope for military advance, and economic activity in rival zones of control.</p><p class="hedp" id="center">Crisis Group tells the story of the power struggle for Taiz and how that fits into Yemen’s war for its roads.</p><a id="freeExplore" href="#PREFACE-1"> BEGIN &nbsp;&nbsp; &#8595; </a>',
  subtitle: "",
  byline: "",
  footer:
    '<h4>Credits</h4><strong>Lead Contributors</strong>: Peter Salisbury<br /><strong>Visualizations & Design</strong>: Paul Franz and Claire Boccon-Gibod<br /><strong>Support</strong>: Kevin Mazur and Veena Ali-Khan<br /><br /><h4>Data Sources</h4> <div class="data-sources"><br /><br /></div><h4></h4><a href="https://www.crisisgroup.org/legal" target="_blank" style="color: #b65d61;">Privacy Policy & Legal</a></h4>',
  chapters: [
    {
      id: "PREFACE-1",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description:
        "Yemen is a country of about 30 million people. It occupies the southwestern tip of the Arabian Peninsula and borders Saudi Arabia, Oman, and the shipping lanes of the Red Sea and Gulf of Aden.",
      location: {
        center: [47.4644, 15.8624],
        zoom: 4,
        pitch: 0,
        bearing: 0,
        bbox: [
          [41.3317, 11.9223],
          [54.6514, 19.5584],
        ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "YEMEN",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "yemen-cities",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "yemen-labels",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "cliff",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "hillshade",
          duration: 2000,
          opacity: 1,
        }
      ],
      onChapterExit: [
        {
          layer: "YEMEN",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "cliff",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "hillshade",
          duration: 2000,
          opacity: 0,
        }
      ],
    },
    {
      id: "PREFACE-2",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description:
        "Unlike many of its Arab neighbours, Yemen is a highly rural country. The majority of Yemen’s population live in rural areas that host around 140,000 towns, villages and small settlements." +
        '<div class="spacer"></div>' +
        "Yemen is also heavily <u class='red'>import dependent</u>: 90% of wheat and all rice, staples in the national diet, are imported from abroad." +
        '<div class="spacer"></div>' +
        "<strong>This makes road transportation essential to the economic and social health of ordinary Yemenis.</strong>",
      location: {
        center: [47.4644, 15.8624],
        zoom: 4,
        pitch: 0,
        bearing: 0,
        bbox: [
          [40.05557, 12.7568],
          [49.87632, 17.52111],
        ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "settlements",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "all-roads",
          duration: 2000,
          opacity: 1,
        }
      ],
      onChapterExit: [
        {
          layer: "settlements",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "all-roads",
          duration: 2000,
          opacity: 0,
        }
      ],
    },
    {
      id: "PREFACE-4",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description:
        "The most important of these roads were three north-south highways.",
      location: {
        center: [47.4644, 15.8624],
        zoom: 4,
        pitch: 0,
        bearing: 0,
        bbox: [
          [41.3317, 11.9223],
          [54.6514, 19.5584],
        ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "intro-highways",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "intro-highways",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "PREFACE-4B",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "Two east-west highway routes.",
      location: {
        center: [47.4644, 15.8624],
        zoom: 4,
        pitch: 0,
        bearing: 0,
        bbox: [
          [41.3317, 11.9223],
          [54.6514, 19.5584],
        ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "intro-highways-2",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "intro-highways-2",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "PREFACE-4C",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "A series of smaller trunk roads.",
      location: {
        center: [47.4644, 15.8624],
        zoom: 4,
        pitch: 0,
        bearing: 0,
        bbox: [
          [41.3317, 11.9223],
          [54.6514, 19.5584],
        ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "intro-trunks",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "intro-trunks",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "PREFACE-4D",
      alignment: "right",
      hidden: true,
      title: "",
      image: "",
      description: "And hundreds of smaller paved and dirt roads.",
      location: {
        center: [47.4644, 15.8624],
        zoom: 4,
        pitch: 0,
        bearing: 0,
        bbox: [
          [41.3317, 11.9223],
          [54.6514, 19.5584],
        ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "territorial-control",
          duration: 2000,
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "PREFACE-5",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description:
        "Over the course of the conflict, Yemen has fragmented into multiple zones of political-military control.",
      location: {
        center: [44.0183, 13.57773],
        zoom: 13.7,
        pitch: 0.0,
        bearing: 0.0,
        bbox: [
          [39.18748, 12.32372],
          [52.1522, 18.32817],
        ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "territorial-control",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "airstrikes_2021_inner",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "airstrikes_2021_outer",
          duration: 2000,
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "PREFACE-5B",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description:
        "Frontline flighting has clustered around the borders between areas controlled by the Huthi rebels and their rivals; and around the main roads connecting the different areas.",
      location: {
        center: [44.0183, 13.57773],
        zoom: 13.7,
        pitch: 0.0,
        bearing: 0.0,
        bbox: [
          [39.18748, 12.32372],
          [52.1522, 18.32817],
        ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "airstrikes_2021_inner",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "airstrikes_2021_outer",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "airstrikes_2021_inner",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "airstrikes_2021_outer",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "territorial-control",
          duration: 2000,
          opacity: 0,
        }
      ],
    },
    {
      id: "PREFACE-5C",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description:
        "In turn, the fighting has led to a severing of most of Yemen’s highways and a number of important trunk roads connecting Huthi-controlled areas with the rest of Yemen. It has also led to the border routes between Saudi Arabia and western Yemen, once vital trade routes between the two countries, being closed off.",
      location: {
        center: [44.0183, 13.57773],
        zoom: 13.7,
        pitch: 0.0,
        bearing: 0.0,
        bbox: [
          [39.18748, 12.32372],
          [52.1522, 18.32817],
        ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "closures",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "closure-hatch",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "all-roads",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "territorial-control",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "closures",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "closure-hatch",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "airstrikes_2021_inner",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "airstrikes_2021_outer",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "all-roads",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "PREFACE-6A",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description:
        "Road closures have forced commercial and passenger traffic moving between rival zones of control to travel along small, poorly maintained and often untarmacked roads.",
      location: {
        center: [44.0183, 13.57773],
        zoom: 13.7,
        pitch: 0.0,
        bearing: 0.0,
        bbox: [
          [39.18748, 12.32372],
          [52.1522, 18.32817],
        ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "PREFACE-6B",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description:
        "Compounding these barriers to movement, beyond the frontlines major road routes are dotted with checkpoints where uncoordinated armed groups charge commercial and passenger traffic a litany of fees, increasing the cost of travel.",
      location: {
        center: [44.0183, 13.57773],
        zoom: 13.7,
        pitch: 0.0,
        bearing: 0.0,
        bbox: [
          [39.18748, 12.32372],
          [52.1522, 18.32817],
        ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "INTRO",
      alignment: "right",
      hidden: false,
      title: "Yemen’s Major Cities",
      image: "",
      description:
        "No part of Yemen has been worse affected by the loss of road access than Taiz city." +
        '<div class="spacer"></div>' +
        "Before the ongoing civil war broke out in early 2015, Taiz City was Yemen’s second most populous urban centre." +
        "<br /><br />" +
        "<strong>Explore the map by clicking and dragging your pointer, or use the controls in the top right. Throughout this story, you can freely explore the maps where there is a right arrow. &#8594;" +
        "<br /><br />" +
        "Or scroll down to continue. &#8595;</strong>",
      location: {
        center: [47.4644, 15.8624],
        zoom: 4,
        pitch: 0,
        bearing: 0,
        bbox: [
          [41.3317, 11.9223],
          [54.6514, 19.5584],
        ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "enableFreetime",
      onChapterEnter: [
        {
          layer: "yemen-cities",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "yemen-labels",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "taiz-label",
          duration: 2000,
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "yemen-cities",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "yemen-labels",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "01",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description:
        "Taiz was Yemen’s prewar commercial and cultural capital. It was also an important economic and transportation hub.",
      location: {
        center: [44.0183, 13.57773],
        zoom: 13.7,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.5,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "disableFreetime",
      onChapterEnter: [
        {
          layer: "taiz-label",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "photo02",
      alignment: "center",
      hidden: false,
      title: "",
      image: "images/hawban_sat.jpg",
      description:
        "<h3>Hawban's Industrial Sector</h3>" + "Hawban, to the city’s northeast, was the engine of Taiz’s economy. It was one of the country’s busiest industrial zones.",
      location: {
        center: [44.07033, 13.6427],
        zoom: 11.48,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7,
        bbox: [[43.96355, 13.5474, 44.11175, 13.62708]],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "taiz-hawban",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "taiz-hawban",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "taiz-label",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "info02",
      alignment: "center",
      hidden: false,
      title: "",
      image: "images/revenues.png",
      description:
        "",
      location: {
        center: [44.07033, 13.6427],
        zoom: 11.48,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7,
        bbox: [
          [43.866, 13.5085],
          [44.2447, 13.7447],
        ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "city-lines",
          duration: 2000,
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "03",
      alignment: "left",
      hidden: false,
      title: " ",
      image: "",
      description:
        "The city is nestled between two of Yemen’s most important road routes. The N1 north-south highway, which connects the southern port of Aden with Sanaa, Yemen’s capital, passing through Hawban along the way. The N3 east-west highway that connects Taiz and the N1 with the Red Sea coast, including another major port, Hodeida",
      location: {
        center: [28.21862, 7.5142],
        zoom: 5,
        pitch: 0,
        bearing: 0,
        speed: 0.2,
        bbox: [
          [43.5788, 13.3466],
          [44.4736, 13.9278],
        ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "highways",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "highways",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "04",
      alignment: "left",
      hidden: false,
      title: " ",
      image: "",
      description:
        "Taiz city itself connects to these two highways via three branch roads that move out of the city’s north, east and west.",
      location: {
        center: [28.21862, 7.5142],
        zoom: 5,
        pitch: 0,
        bearing: 0,
        speed: 0.2,
        bbox: [
          [43.5788, 13.3466],
          [44.4736, 13.9278],
        ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "branch-roads",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "branch-roads",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "photo05",
      alignment: "center",
      hidden: false,
      title: "",
      image: "images/conclusion.jpg",
      description:
        "<h3>Conflict in Taiz</h3>" + "Taiz city has been badly affected by the war. In March 2015 the Huthis, who had seized Sanaa by force the previous September, attempted to take over the city." + "<div class='spacer'></div>" + "Forces aligned with Yemen’s internationally recognized government recovered control of Taiz city centre in mid 2015. But the Huthis retained territory to the city’s north, east, and west, including the road routes that connected the city to the N1 and N3 highways.",
      location: {
        center: [44.0183, 13.57773],
        zoom: 13.7,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.5,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "08",
      alignment: "right",
      hidden: false,
      title: " ",
      image: "",
      description:
        "The only way in and out of the city is now a small road that connects the city’s southwest to a network of winding mountain roads. After exiting the city, travelers can move on to Aden, to Huthi-controlled Hawban or to Mokha on the Red Sea coast via a series of challenging, poorly maintained routes.",
      location: {
        center: [44.40431, 13.24581],
        zoom: 9,
        pitch: 0,
        bearing: 0,
        speed: 0.4,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "roadDraw",
      onChapterEnter: [
        {
          layer: "road-draw-line",
          duration: 2000,
          opacity: 0.7,
        },
        {
          layer: "yemen-cities",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "yemen-labels",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "road-draw-line",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "yemen-cities",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "yemen-labels",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "09",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description:
        "Fighting, frozen frontlines and severed road access in and around Taiz city have had three effects on life in Taiz city and across Yemen." +
        '<div class="spacer"></div>' +
        "First, they have throttled the economy of Taiz city and made the city one of the most expensive places to live in Yemen. Satellite images of nighttime light can be used as a rough measure of economic output. Remotely captured date from Taiz City shows that the local economy cratered at the beginning of the war and is yet to recover to prewar levels, unlike neighbouring areas like the Huthi-held industrial hub of Hawban.",
      location: {
        center: [44.056635, 13.572282],
        zoom: 11,
        pitch: 51.5,
        bearing: 0,
        speed: 0.7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "nightlights",
          duration: 2000,
          opacity: 0.7,
        },
        {
          layer: "all-taiz-roads",
          duration: 2000,
          opacity: .5
        }
      ],
      onChapterExit: [
        {
          layer: "nightlights",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "all-taiz-roads",
          duration: 2000,
          opacity: 0
        }
      ],
    },
    {
      id: "VIDEO",
      alignment: "full",
      hidden: false,
      title: " ",
      image: "",
      description:
        '<span class="html-video-container"><video width="100%" height="100%" autoplay loop muted playsinline>&gt;<source src="images/hajat.mp4" poster="images/poster2.jpg type="video/mp4"></video></span>',
      location: {
        center: [44.07033, 13.6427],
        zoom: 11.48,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7,
        bbox: [
          [43.866, 13.5085],
          [44.2447, 13.7447],
        ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "NARRATIVE-1",
      alignment: "full",
      hidden: false,
      title: " ",
      image: "",
      description:
        "Second, they have made getting in and out of the city via treacherous ordeal for traders and ordinary people. All-too-regular traffic accidents on the few narrow and poorly-maintained roads connecting Taiz with the rest of the country cause regular shortages of food and fuel." +
        '<div class="spacer"></div>' +
        "Taizis traveling to Habwan for work, or to Aden for medical treatment, are forced to travel along long road routes." +
        "And third, it has cut off two of Yemen’s most important road routes, the N1 and N3, forcing travelers and traders to re-route along long, arduous routes through contested territory in Yemen’s east and west, increasing the risks and cost of travel, and the cost of living.",
      location: {
        center: [44.07033, 13.6427],
        zoom: 11.48,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7,
        bbox: [
          [43.866, 13.5085],
          [44.2447, 13.7447],
        ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "territorial-control",
          duration: 2000,
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "11",
      alignment: "left",
      hidden: false,
      title: " ",
      image: "",
      description:
        "Adding to the challenge of travel, the forces who control the city are not aligned with other anti-Huthi groups who control Yemen’s south or territory along the Red Sea coast. This tangle of forces, a profusion of poorly-managed checkpoints along the different road routes caused constant headaches for travelers who often have to pay fees at dozens of these checkpoints.",
      location: {
        center: [45.5241, 15.08855],
        zoom: 6.57,
        pitch: 47.0,
        bearing: 20.65,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "checkpoints",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "territorial-control",
          duration: 2000,
          opacity: 1,
        }
      ],
      onChapterExit: [
        {
          layer: "checkpoints",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "territorial-control",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "NARRATIVE-END",
      alignment: "full",
      hidden: false,
      title: " ",
      image: "",
      description:
        '<img src="images/conclusion.jpg" />' +
        '<div class="spacer"></div>' +
        "Seeking to alleviate Taizis’ suffering, local mediators and latterly the UN have sought to negotiate the reopening of at least some roads connecting Taiz with the rest of the country. But their efforts have repeatedly stalled – because, local mediators say, the Huthis and the government have sought to gain the military upper hand rather than negotiate access." +
        '<div class="spacer"></div>' +
        "Many Taizis have come to feel abandoned, by local authorities, by the internationally recognized government, and by the UN, which has made sporadic efforts to reopen Taiz’s roads." +
        '<div class="spacer"></div>' +
        "The severing of Taiz’s roads registered relatively low on the international list of priorities until recently. Successive UN envoys largely sidestepped the issue, seeing it as a distraction from a national peace that would eventually unravel road closures. Even when road access was included in UN initiatives there was little follow-up on the issue." +
        '<div class="spacer"></div>' +
        '<img src="images/hans.jpg" />' +
        '<div class="spacer"></div>' +
        "When the current UN envoy Hans Grundberg visited Taiz city in November 2021, he was the first diplomat of his rank to do so since the war began." +
        "Taiz’s status changed this April when Yemen’s government added its roads to a list of confidence-building measures tied to the UN-brokered nationwide truce." +
        '<div class="spacer"></div>' +
        "Other measures included reopening Huthi-controlled Sanaa International Airport to international commercial flights and increasing the number of fuel shipments that enter the Huthi-held port of Hodeida." +
        '<div class="spacer"></div>' +
        "Although there was progress on these last two measures - to the Huthis’ benefit - there has been no tangible progress on Taiz." +
        '<div class="spacer"></div>' +
        "Negotiations have narrowed down to four roads in and around Taiz city. The main sticking point is the only one of the three major connecting roads to remain on the table. The UN and Yemen’s internationally recognised government want the Huthis to open it." +
        '<div class="spacer"></div>' +
        "The Huthis refuse, and say they will instead open three relatively minor roads that would reduce travel times but would still pose a challenge for buses or heavy vehicles." +
        '<div class="spacer"></div>' +
        "Physical roadblocks around Taiz are now a political barrier to sustaining and expanding the truce the UN negotiated in April 2022. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      location: {
        center: [45.5241, 15.08855],
        zoom: 6.57,
        pitch: 47.0,
        bearing: 20.65,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
