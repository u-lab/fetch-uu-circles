const appSelector = '.js-fetch-uu-circles-app' as const
const REQUEST_URL = process.env.NODE_ENV || 'development' === 'development'
  ? 'http://localhost:8000'
  : 'https://uu-circles.com'
const DATA_ATTRIBUTE_NAME = 'data-uu-circles'
const DATA_ATTRIBUTE_COLUMN = 'data-column'

export interface Circle {
  type: 'Circle'
  id: number
  slug: string
  release: boolean
  circleType: string
  /** サークル名 */ name: string
  nameKana: string
  shortName: string
  prefixName: string
  /** サークル紹介文 */ description: string
  commonPlaceOfActivity: string
  commonPlaceOfActivityDetail: string
  commonDateOfActivityMonday: boolean
  commonDateOfActivityTuesday: boolean
  commonDateOfActivityWednesday: boolean
  commonDateOfActivityThursday: boolean
  commonDateOfActivityFriday: boolean
  commonDateOfActivitySaturday: boolean
  commonDateOfActivitySunday: boolean
  commonDateOfActivityDetail: string
  isOnlineActivity: boolean
  onlinePlaceOfActivityDetail: string
  onlineDateOfActivityMonday: boolean
  onlineDateOfActivityTuesday: boolean
  onlineDateOfActivityWednesday: boolean
  onlineDateOfActivityThursday: boolean
  onlineDateOfActivityFriday: boolean
  onlineDateOfActivitySaturday: boolean
  onlineDateOfActivitySunday: boolean
  onlineDateOfActivityDetail: string
  admissionFeePerYear: number
  numberOfMembers: number
  isClubActivities: boolean
  appealingPoint1: string
  appealingPoint2: string
  appealingPoint3: string
  publicEmail: string
  twitterUrl: string
  facebookUrl: string
  instagramUrl: string
  lineUrl: string
  youtubeUrl: string
  homepageUrl: string
  peingUrl: string
  githubUrl: string
  tiktokUrl: string
  participationUrl: string
  mainImageUrl: string
  handbillImageUrl: string
  activityImageUrl1: string
  activityImageUrl2: string
  activityImageUrl3: string
  activityImageUrl4: string
  activityImageUrl5: string
  activityImageUrl6: string
  /** 週の活動日数 */ weeklyActivityDays: number
  createdAt: string
  updatedAt: string
}


const handler = async () => {
  const appElms = document.querySelectorAll(appSelector)
  const data = await fetchedUuCircles()
  console.log(data)

  appElms.forEach((appElm) => {
    if (appElm.getAttribute(DATA_ATTRIBUTE_NAME) === 'card') {
      const parentDiv = document.createElement('div');
      parentDiv.className = `grid grid-cols-${appElm.getAttribute(DATA_ATTRIBUTE_COLUMN)}`


      for (let i = 0; i < 4; i++) {
        const circle = data.data[i]

        const childDiv = document.createElement('div');
        const a = document.createElement('a');
        a.href = `https://uu-circles.com/circle/${circle.slug}`

        const image = document.createElement('img');
        image.setAttribute('src', circle.handbillImageUrl);
        image.setAttribute('alt', `${circle.name} UU-Circles`);
        image.setAttribute('width', '300')
        image.className = 'mx-auto'
        a.insertAdjacentElement("beforeend", image)

        // div > a > img
        childDiv.insertAdjacentElement("beforeend", a)

        const p = document.createElement('p');
        p.textContent = circle.name
        p.className = 'text-center'

        // div > p
        childDiv.insertAdjacentElement("beforeend", p)

        parentDiv.insertAdjacentElement("beforeend", childDiv)
      }

      appElm.insertAdjacentElement('beforebegin', parentDiv)
    }
  })
}

const fetchedUuCircles = async (): Promise<{
  data: Circle[]
}> => {
  const res = await fetch(`${REQUEST_URL}/api/main`)

  //レスポンスのボディーからJSONデータを取得
  return res.json() as Promise<{
    data: Circle[]
  }>
}

(async () => {
  await handler()
})()
