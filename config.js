var config = {
    style: 'mapbox://styles/daltonwb/clah4sat1000g14pcf03pi3p6',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: false,
    theme: 'light',
    projection: 'mercator',
    use3dTerrain: false,
    title: '<a href="https://www.crisisgroup.org" target="_blank"><img id="icg" src="images/icg-oj.png" /></a><br /><video id="background-video" autoplay loop muted poster="images/poster.jpg"><source src="images/aerial.mp4" type="video/mp4"></video><h1>Taiz in a Knot</h1><p class="hedp">Thanks to a UN-brokered truce, Yemen has enjoyed a protracted period of relative calm over the past six months, the first such lull since the civil war broke out almost eight years ago.</p><p class="hedp"><strong>The UN has proposed a six-month, expanded truce. But wrangling over a deal to reopen Huthi-controlled roads in and around the city of Taiz – and Huthi demands for salary payments as an inducement to continue the détente - has pushed the truce to the verge of collapse. If an agreement is not struck the conflict may return to, or even exceed, previous levels of destructive intensity, and the prospects of a negotiated settlement will become more distant.</p><a id="freeExplore" href="#INTRO"> BEGIN &nbsp;&nbsp; &#8595; </a>',
    subtitle: '',
    byline: '',
    footer: '<h4>Credits</h4><strong>Lead Contributors</strong>: Peter Salisbury<br /><strong>Visualizations & Design</strong>: Paul Franz and Claire Boccon-Gibod<br /><strong>Support</strong>: Kevin Mazur and Veena Ali-Khan<br /><br /><h4>Data Sources</h4> <div class="data-sources"><br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a></div>',
    chapters: [
      {
          id: 'INTRO',
          alignment: 'left',
          hidden: false,
          title: 'Yemen’s Major Cities',
          image: '',
          description: 'Before the ongoing civil war broke out in early 2015, Taiz City was Yemen’s second most populous urban centre.' + '<br /><br />' + '<strong>Explore the map by clicking and dragging your pointer, or use the controls in the top right. Throughout this story, you can freely explore the maps where there is a right arrow. &#8594;' + '<br /><br />' + 'Or scroll down to continue. &#8595;</strong>',
          location: {
            center: [47.4644, 15.8624],
            zoom: 4,
            pitch: 0,
            bearing: 0,
            bbox: [[41.3317, 11.9223], [54.6514, 19.5584]]
          },
          mapAnimation: 'flyTo',
          rotateAnimation: true,
          callback: 'enableFreetime',
          onChapterEnter: [
            {
              layer: 'yemen-cities',
              duration: 2000,
              opacity: 1
            },
            {
              layer: 'yemen-labels',
              duration: 2000,
              opacity: 1
            }
          ],
          onChapterExit: [
            {
              layer: 'yemen-cities',
              duration: 2000,
              opacity: 0
            },
            {
              layer: 'yemen-labels',
              duration: 2000,
              opacity: 0
            }
        ]
      },
      {
          id: '01',
          alignment: 'left',
          hidden: false,
          title: '',
          image: '',
          description: 'Taiz was also an economic and transportation hub.',
          location: {
            center: [44.01830, 13.57773],
            zoom: 13.70,
            pitch: 0.00,
            bearing: 0.00,
            speed: .5
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: 'disableFreetime',
          onChapterEnter: [

          ],
          onChapterExit: [

        ]
        },
        {
            id: '02',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Hawban, to the city’s northeast, was and is one of the country’s busiest industrial zones.',
            location: {
              center: [44.07033, 13.64270],
              zoom: 11.48,
              pitch: 0.00,
              bearing: 0.00,
              speed: .7,
              bbox: [[43.8660, 13.5085],[44.2447, 13.7447]]
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'hawban',
                duration: 2000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'hawban',
                duration: 2000,
                opacity: 0
              }
          ]
          },
          {
              id: '02',
              alignment: 'center',
              hidden: false,
              title: ' ',
              image: '',
              description: 'Taiz’s local tax revenues were second only to those generated by Sanaa, the capital, and the busy southern port of Aden.' + '<div class="spacer"></div>' + '<div class="video-container"><iframe src="charts/taxes.html" frameborder="0" scrolling="no" /></div>',
              location: {
                center: [44.07033, 13.64270],
                zoom: 11.48,
                pitch: 0.00,
                bearing: 0.00,
                speed: .7,
                bbox: [[43.8660, 13.5085],[44.2447, 13.7447]]
              },
              mapAnimation: 'flyTo',
              rotateAnimation: false,
              callback: '',
              onChapterEnter: [
                {
                  layer: 'city-lines',
                  duration: 2000,
                  opacity: 0
                }
              ],
              onChapterExit: [

            ]
        },
        {
            id: '03',
            alignment: 'left',
            hidden: false,
            title: ' ',
            image: '',
            description: 'The city is nestled between two of Yemen’s most important road routes. The N1 north-south highway, which connects the southern port of Aden with Sanaa, Yemen’s capital, passing through Hawban along the way. The N3 east-west highway that connects Taiz and the N1 with the Red Sea coast, including another major port, Hodeida',
            location: {
              center: [28.21862, 7.51420],
              zoom: 5,
              pitch: 0,
              bearing: 0,
              speed: .2,
              bbox: [[43.5788, 13.3466], [44.4736, 13.9278]]
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

          ]
        },
        {
            id: '04',
            alignment: 'left',
            hidden: false,
            title: ' ',
            image: '',
            description: 'Taiz city itself connects to these two highways via three branch roads that move out of the city’s north, east and west.',
            location: {
              center: [28.21862, 7.51420],
              zoom: 5,
              pitch: 0,
              bearing: 0,
              speed: .2,
              bbox: [[43.5788, 13.3466], [44.4736, 13.9278]]
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

          ]
        },
        {
            id: '05',
            alignment: 'left',
            hidden: false,
            title: '2015',
            image: '',
            description: 'Taiz city has been badly affected by the war that broke out in 2015. In 2015 the Huthis, the de facto authorities in Yemen’s north since they seized Sanaa by force, attempted to take over the city.',
            location: {
              center: [44.01830, 13.57773],
              zoom: 13.70,
              pitch: 0.00,
              bearing: 0.00,
              speed: .5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'control-taiz-2015',
                duration: 2000,
                opacity: 1
              },
              {
                layer: 'acled-heatmap-2015',
                duration: 2000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'control-taiz-2015',
                duration: 2000,
                opacity: 0
              },
              {
                layer: 'acled-heatmap-2015',
                duration: 2000,
                opacity: 0
              }
          ]
        },
        {
            id: '05B',
            alignment: 'left',
            hidden: false,
            title: '2016',
            image: '',
            description: 'In 2016....',
            location: {
              center: [44.01830, 13.57773],
              zoom: 13.70,
              pitch: 0.00,
              bearing: 0.00,
              speed: .5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'control-taiz-2016',
                duration: 2000,
                opacity: 1
              },
              {
                layer: 'acled-heatmap-2016',
                duration: 2000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'control-taiz-2016',
                duration: 2000,
                opacity: 0
              },
              {
                layer: 'acled-heatmap-2016',
                duration: 2000,
                opacity: 0
              }
          ]
        },
        {
            id: '05C',
            alignment: 'left',
            hidden: false,
            title: '2021',
            image: '',
            description: 'In 2021....',
            location: {
              center: [44.01830, 13.57773],
              zoom: 13.70,
              pitch: 0.00,
              bearing: 0.00,
              speed: .5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'control-taiz-2021',
                duration: 2000,
                opacity: 1
              },
              {
                layer: 'acled-heatmap-2021',
                duration: 2000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'control-taiz-2021',
                duration: 2000,
                opacity: 0
              },
              {
                layer: 'acled-heatmap-2021',
                duration: 2000,
                opacity: 0
              }
          ]
        },
        {
            id: '05D',
            alignment: 'left',
            hidden: false,
            title: '2022 30 September',
            image: '',
            description: 'Up until 30 September...',
            location: {
              center: [44.01830, 13.57773],
              zoom: 13.70,
              pitch: 0.00,
              bearing: 0.00,
              speed: .5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'control-taiz-2022',
                duration: 2000,
                opacity: 1
              },
              {
                layer: 'acled-heatmap-2022',
                duration: 2000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'control-taiz-2022',
                duration: 2000,
                opacity: 0
              },
              {
                layer: 'acled-heatmap-2022',
                duration: 2000,
                opacity: 0
              }
          ]
        },
        {
            id: '06',
            alignment: 'left',
            hidden: false,
            title: ' ',
            image: '',
            description: 'Forces aligned with Yemen’s internationally recognized government recovered control of Taiz city centre in mid 2015. But the Huthis retained territory to the city’s north, east, and west, including the road routes that connected the city to the N1 and N3 highways.',
            location: {
              center: [44.07033, 13.64270],
              zoom: 11.48,
              pitch: 0.00,
              bearing: 0.00,
              speed: .7,
              bbox: [[43.8660, 13.5085],[44.2447, 13.7447]]
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'satellite',
                duration: 2000,
                opacity: 0
              }
            ],
            onChapterExit: [

          ]
        },
        {
            id: '07',
            alignment: 'left',
            hidden: false,
            title: ' ',
            image: '',
            description: 'The only way in and out of the city is now a small road that connects the city’s southwest to a network of winding mountain roads.',
            location: {
              center: [43.99954, 13.55933],
              zoom: 14.29,
              pitch: 73.44,
              bearing: 170.70,
              speed: .6
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'satellite',
                duration: 2000,
                opacity: 1
              },
            ],
            onChapterExit: [

          ]
        },
        {
            id: '08',
            alignment: 'left',
            hidden: false,
            title: ' ',
            image: '',
            description: 'After exiting the city, travelers can move on to Aden, to Huthi-controlled Hawban or to Mokha on the Red Sea coast via a series of challenging, poorly maintained routes.',
            location: {
              center: [44.03496, 13.45168],
              zoom: 12.22,
              pitch: 69.94,
              bearing: 130.70,
              speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

          ]
        },
        {
            id: 'NARRATIVE-1',
            alignment: 'full',
            hidden: false,
            title: ' ',
            image: '',
            description: 'Fighting, frozen frontlines and severed road access in and around Taiz city have had three effects on life in Taiz city and across Yemen.' + '<div class="spacer"></div>' + 'First, they have throttled the economy of Taiz city and made the city one of the most expensive places to live in Yemen. Satellite images of nighttime light can be used as a rough measure of economic output. Remotely captured date from Taiz City shows that the local economy cratered at the beginning of the war and is yet to recover to prewar levels, unlike neighbouring areas like the Huthi-held industrial hub of Hawban.' + '<div class="spacer"></div>' + 'Second, they have made getting in and out of the city via treacherous ordeal for traders and ordinary people. All-too-regular traffic accidents on the few narrow and poorly-maintained roads connecting Taiz with the rest of the country cause regular shortages of food and fuel.' + '<div class="spacer"></div>' + 'Taizis traveling to Habwan for work, or to Aden for medical treatment, are forced to travel along long road routes.' + 'And third, it has cut off two of Yemen’s most important road routes, the N1 and N3, forcing travelers and traders to re-route along long, arduous routes through contested territory in Yemen’s east and west, increasing the risks and cost of travel, and the cost of living.',
            location: {
              center: [44.07033, 13.64270],
              zoom: 11.48,
              pitch: 0.00,
              bearing: 0.00,
              speed: .7,
              bbox: [[43.8660, 13.5085],[44.2447, 13.7447]]
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [
              {
                layer: 'satellite',
                duration: 2000,
                opacity: 0
              }
          ]
        },
        {
            id: '09',
            alignment: 'left',
            hidden: false,
            title: ' ',
            image: '',
            description: 'Adding to the challenge of travel, the forces who control the city are not aligned with other anti-Huthi groups who control Yemen’s south or territory along the Red Sea coast.',
            location: {
              center: [28.21862, 7.51420],
              zoom: 5.79,
              pitch: 20.50,
              bearing: 13.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

          ]
        },
        {
            id: '15',
            alignment: 'left',
            hidden: false,
            title: ' ',
            image: '',
            description: 'This tangle of forces, a profusion of poorly-managed checkpoints along the different road routes caused constant headaches for travelers who often have to pay fees at dozens of these checkpoints.',
            location: {
              center: [28.21862, 7.51420],
              zoom: 5.79,
              pitch: 20.50,
              bearing: 13.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

          ]
        },
        {
            id: 'NARRATIVE-END',
            alignment: 'full',
            hidden: false,
            title: ' ',
            image: '',
            description: 'Seeking to alleviate Taizis’ suffering, local mediators and latterly the UN have sought to negotiate the reopening of at least some roads connecting Taiz with the rest of the country. But their efforts have repeatedly stalled – because, local mediators say, the Huthis and the government have sought to gain the military upper hand rather than negotiate access.' + '<div class="spacer"></div>' + 'Many Taizis have come to feel abandoned, by local authorities, by the internationally recognized government, and by the UN, which has made sporadic efforts to reopen Taiz’s roads.' + '<div class="spacer"></div>' + 'The severing of Taiz’s roads registered relatively low on the international list of priorities until recently. Successive UN envoys largely sidestepped the issue, seeing it as a distraction from a national peace that would eventually unravel road closures. Even when road access was included in UN initiatives there was little follow-up on the issue.' + '<div class="spacer"></div>' + 'When the current UN envoy Hans Grundberg visited Taiz city in November 2021, he was the first diplomat of his rank to do so since the war began.' + 'Taiz’s status changed this April when Yemen’s government added its roads to a list of confidence-building measures tied to the UN-brokered nationwide truce.' + '<div class="spacer"></div>' + 'Other measures included reopening Huthi-controlled Sanaa International Airport to international commercial flights and increasing the number of fuel shipments that enter the Huthi-held port of Hodeida.' + '<div class="spacer"></div>' + 'Although there was progress on these last two measures - to the Huthis’ benefit - there has been no tangible progress on Taiz.' + '<div class="spacer"></div>' + 'Negotiations have narrowed down to four roads in and around Taiz city. The main sticking point is the only one of the three major connecting roads to remain on the table. The UN and Yemen’s internationally recognised government want the Huthis to open it.' + '<div class="spacer"></div>' + 'The Huthis refuse, and say they will instead open three relatively minor roads that would reduce travel times but would still pose a challenge for buses or heavy vehicles.' + '<div class="spacer"></div>' + 'Physical roadblocks around Taiz are now a political barrier to sustaining and expanding the truce the UN negotiated in April 2022. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
              center: [28.21862, 7.51420],
              zoom: 5.79,
              pitch: 20.50,
              bearing: 13.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

          ]
        }
    ]
};
