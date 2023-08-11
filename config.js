var config = {
  style: "mapbox://styles/daltonwb/cljyq71w500ei01qg5j021az0",
  accessToken:
    "pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw",
  showMarkers: false,
  markerColor: "#3FB1CE",
  inset: false,
  theme: "light",
  projection: "mercator",
  use3dTerrain: false,
  title:
    '<a href="https://www.crisisgroup.org" target="_blank"><img id="icg" src="images/icg-oj.png" /></a><br /><video id="background-video" autoplay loop muted poster="images/poster1.jpg"><source src="images/aerial.mp4" type="video/mp4"></video><h1>Taiz in a Knot</h1><p class="hedp"><strong>Road closures in Yemen have deepened a cost-of-living crisis, created huge barriers to movement for Yemenis seeking medical treatment and work in other parts of the country, and deepened social and political divides. Reopening them could lead to significant improvements in the humanitarian and political situation. But doing so will not be easy.</strong></p><p class="hedp">Taiz city is a case study for the cost and challenge of road closures in Yemen. The city has been partially besieged for much of the last seven years. Local and international initiatives have done little to change the status quo. Most recently, in April 2022, the reopening of Taiz’s roads was included as a proposed confidence-building measure in a UN-brokered nationwide truce. But little progress was made before the truce lapsed in October 2022.</p><p class="hedp">The good news is that Yemen’s roads are now part of nationwide negotiations. The bad news is that reopening them, either as part of a truce or ceasefire or a national political settlement, will not be easy. Control of roads is embedded in the parties’ military and political strategies. Preventing road access is a tool for limiting rivals’ scope for military advance and economic activity in their respective zones of control.</p><p class="hedp" id="center">Crisis Group tells the story of the power struggle for Taiz and how that fits into Yemen’s war for its roads.</p><a id="freeExplore" href="#PREFACE-1"> BEGIN &nbsp;&nbsp; &#8595; </a>',
  subtitle: "",
  byline: "",
  footer:
    '<h4>Credits</h4><strong>Lead Contributor</strong>: Peter Salisbury<br /><strong>Visualisations & Design</strong>: Paul Franz and Claire Boccon-Gibod<br /><strong>Data & Research Lead</strong>: Kevin Mazur and Veena Ali-Khan<br /><br /><h4>Data Sources</h4> <div class="data-sources"><br /><br /></div><h4></h4><a href="https://www.crisisgroup.org/legal" target="_blank" style="color: #b65d61;">Privacy Policy & Legal</a></h4>',
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
        "Unlike many of its Arab neighbours, Yemen is a highly rural country. The majority of <u class='grau'>Yemen’s population</u> live in rural areas that host around 140,000 towns, villages and small settlements. <u class='green'>The roads connecting them</u> are <strong>an essential lifeline for the local population.</strong>",
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
        "The most important of these roads are three north-south highways.",
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
      description: "Two east-west highways.",
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
        "Over the course of the conflict, Yemen has <strong>fragmented into multiple zones</strong> of political-military control.",
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
        "<u class='black'>Frontline fighting</u> has clustered around the borders between areas controlled by the Huthi rebels and their rivals, and around the main roads connecting the different areas.",
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
        "In turn, the fighting has led to a severing of most of Yemen’s highways and a number of important trunk roads connecting Huthi-controlled areas with the rest of Yemen. It has also led to the border crossings between Saudi Arabia and western Yemen, once vital trade routes between the two countries, being <u class='red'>closed off.</u>",
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
      onChapterEnter: [
        {
          layer: "all-roads",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "PREFACE-6B",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description:
        "Compounding these barriers to movement, major roads beyond the frontlines are <u class='red'>dotted with checkpoints</u>, where uncoordinated armed groups extort fees from commercial and passenger traffic, significantly increasing the cost of travel.",
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
          layer: "all-roads",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "checkpoints",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "checkpoints-circle",
          duration: 2000,
          opacity: 1,
        },
    ],
      onChapterExit: [
        {
          layer: "all-roads",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "checkpoints",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "checkpoints-circle",
          duration: 2000,
          opacity: 0,
        },
      ],
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
        "Before the ongoing civil war broke out in early 2015, Taiz City was Yemen’s second most populous urban centre.",
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
      callback: "",
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
        "Taiz was Yemen’s prewar commercial and cultural capital. It was also an important <u class='green'>economic and transportation hub</u>.",
      location: {
        center: [44.0183, 13.57773],
        zoom: 12,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.5,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "taiz-label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "all-roads",
          duration: 5000,
          opacity: 1,
        },
        {
          layer: "hawban",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "all-roads",
          duration: 5000,
          opacity: 0,
        },
        {
          layer: "hawban",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "photo02",
      alignment: "center",
      hidden: false,
      title: "",
      image: "images/hawban_sat.jpg",
      description:
        "<h3>Hawban’s Industrial Sector</h3>" + "Hawban, to the city’s northeast, was the engine of Taiz’s economy. It was one of the country’s busiest industrial zones.",
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
          layer: "highways",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "road-number-shield",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "branch-roads",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "highways",
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
        "Taiz is nestled between two of Yemen’s most important roads. The <strong>N1 north-south highway</strong> connects the southern port of Aden with Sanaa, Yemen’s capital, passing through Hawban. The <strong>N3 east-west highway</strong> connects Taiz and the N1 with the Red Sea coast, including another major port, Hodeida.",
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
        {
          layer: "road-number-shield",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "branch-roads",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "highways",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "road-number-shield",
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
        "The city centre connects to these two highways via three branch roads to the north, east and west.",
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
        {
          layer: "highways",
          duration: 2000,
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "branch-roads",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "road-number-shield",
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
      image: "images/taiz-conflict.jpg",
      description:
        "<h3>Conflict in Taiz</h3>" + "Taiz city has been badly affected by the war. In March 2015, the Huthis, who had seized Sanaa by force the previous September, attempted to take over this city as well, but forces aligned with Yemen’s internationally recognised government recovered control of Taiz city centre in mid-2015." + "<div class='spacer'></div>" + "Despite their setback, the Huthis retained territory to the city’s north, east and west, including the roads that connect the city to the N1 and N3 highways.",
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
      onChapterEnter: [        {
        layer: "road-draw-line",
        duration: 2000,
        opacity: 0,
      },],
      onChapterExit: [],
    },
    {
      id: "08",
      alignment: "right",
      hidden: false,
      title: " ",
      image: "",
      description:
        "Today, the only way in and out of the city is by a small road that connects the city’s southwest to a network of winding mountain roads.",
      location: {
        center: [44.40431, 13.24581],
        zoom: 9,
        pitch: 0,
        bearing: 0,
        bbox: [[43.70485, 13.14014],[44.56582, 13.69476]],
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
      ],
      onChapterExit: [
 
      ],
    },
    {
      id: "08B",
      alignment: "right",
      hidden: false,
      title: " ",
      image: "",
      description:
        "After exiting the city, travelers can move on to Aden, Huthi-controlled Hawban or Mokha on the Red Sea coast via a series of challenging, poorly maintained roads.",
      location: {
        center: [44.40431, 13.24581],
        zoom: 9,
        pitch: 0,
        bearing: 0,
        bbox: [[42.70432, 12.52876], [45.50441, 13.89066]],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "detours",
          duration: 4000,
          opacity: 1,
        },
        {
          layer: "detour-cities",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "detour-cities-labels",
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
          layer: "detours",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "detour-cities",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "detour-cities-labels",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "09",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description:
        "The ongoing fighting, frozen frontlines and severed road access in and around Taiz city have had three effects on life in the city and across Yemen." +
        '<div class="spacer"></div>' +
        "First, they have <strong>throttled the city’s economy</strong> and made it one of the most expensive places to live in Yemen. Satellite images of <u class='red'>nighttime light</u> can be used as a rough measure of economic output. Remotely captured data from the city shows that the local economy cratered at the beginning of the war and is yet to recover to prewar levels, unlike neighbouring areas such as Hawban.",
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
          opacity: 0.6,
        },
        {
          layer: "all-roads-grey",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "nightlights",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "all-roads-grey",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "PRENARRATIVE",
      alignment: "center",
      hidden: false,
      title: "",
      image: "",
      description:
        "Second, they have made getting in and out of the city a <strong>treacherous ordeal for traders and ordinary people</strong>. All-too-regular traffic accidents on the few narrow and <u class='red'>poorly-maintained roads</u> connecting Taiz with the rest of the country cause regular shortages of food and fuel. Taizis going to work in Habwan or to Aden for medical treatment are forced to make major detours, significantly prolonging travel." + "<div class='spacer'></div>" + "And third, it has <strong>cut off two of Yemen’s most important arteries</strong>, the N1 and N3, forcing travelers and traders to undertake extended travel along arduous routes through contested territory in Yemen’s east and west, increasing the risks and cost of travel, and thus the cost of living.",
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

      ],
      onChapterExit: [

      ],
    },
    {
      id: "NARRATIVE-1",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description:
      "<span class='html-video-container'><video width='100%' height='100%' autoplay loop muted playsinline>&gt;<source src='images/hajat.mp4' poster='images/poster2.jpg' type='video/mp4'></video></span>" + "<div class='video-overlay'>" + "<p>The Hajat Al Abad Pass is one of the most dangerous one of these roads. Because of its steep grade and sharp switchbacks, it commonly is blocked in major accidents.</p></div>",
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
      id: "11",
      alignment: "left",
      hidden: false,
      title: " ",
      image: "",
      description:
        "Adding to the challenge of travel, the forces that control the city are not aligned with other anti-Huthi groups that control Yemen’s south or territory along the Red Sea coast. This tangle of forces and a profusion of <u class='red'>checkpoints</u> run by armed groups that often <strong>extort, detain or assault passengers</strong> are a constant headache for travelers.",
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
          layer: "territory-final",
          duration: 2000,
          opacity: .3,
        },
        {
          layer: "all-roads-grey",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "checkpoints-final",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "city-dots-final",
          duration: 2000,
          opacity: .8,
        },
        {
          layer: "city-labels-final",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "territory-final",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "all-roads-grey",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "checkpoints-final",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "city-dots-final",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "city-labels-final",
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
        "Seeking to alleviate Taizis’ suffering, local mediators and latterly the UN have sought to negotiate the reopening of at least some roads connecting Taiz with the rest of the country. But their efforts have stalled repeatedly because, local mediators say, the Huthis and the government have sought to gain the military upper hand rather than grant access. Many Taizis have come to feel abandoned &dash; by local authorities, the Yemeni government and the UN." +
        '<div class="spacer"></div>' +
        "The severing of Taiz’s roads registered relatively low on the international list of priorities until recently. Successive UN envoys largely sidestepped the issue, seeing it as a distraction from forging a national peace that would eventually undo road closures. Even when the UN included road access in its initiatives, it did little to follow up. When the current UN envoy, Hans Grundberg, visited Taiz city in November 2021, he was the first diplomat of his rank to do so since the war began." +
        '<div class="spacer"></div>' +
        "Taiz’s status changed this April when Yemen’s government added roads to a list of proposed confidence-building measures tied to a UN-brokered nationwide truce. Other measures included reopening Huthi-controlled Sanaa International Airport to international commercial flights and increasing the number of fuel shipments that enter the Huthi-held port of Hodeida. Although there was progress on these last two measures -- to the Huthis’ benefit -- there has been no tangible progress on Taiz." +
        '<div class="spacer"></div>' +
        '<img src="images/hans.jpg" />' +
        '<div class="spacer"></div>' +
        "Negotiations have zeroed in on four roads in and around Taiz city. While the government initially demanded to reopen all of the major roads, the UN proposed that only certain roads be opened. The main sticking point is one of these. The UN and the Yemeni government want the Huthis to open it. The Huthis refuse, and say they will instead open three relatively minor roads that would reduce travel times but would still pose a challenge for buses and heavy vehicles." +
        '<div class="spacer"></div>' +
        "Physical roadblocks around Taiz are now one of the main political barriers to sustaining and expanding the truce the UN negotiated in April 2022." +
        '<div class="spacer"></div>' +
        "[POLICY CONCLUSION TK] Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
