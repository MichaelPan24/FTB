const API_URL = "https://api.dribbble.com/v2/",
    ACCESS_TOKEN = "9f061d26c5a8be96b17a81718959a67dd54ca9669ca41752777193f7cc5be7c3";

const User = 'user',
    shots = '/shots';


export const mockData = [
  {
      "animated": true,
      "description": "<p>Testing out an entrance animation sequence...  💫</p>\n\n<p>Made with <strong>Invision Studio</strong>\n<br />@InVisionApp </p>",
      "height": 600,
      "html_url": "https://dribbble.com/shots/6059653-Sliding-S-Animation",
      "id": 6059653,
      "images": {
          "hidpi": "https://cdn.dribbble.com/users/475748/screenshots/6059653/s_mark-slideentrance_sequence.gif",
          "normal": "https://cdn.dribbble.com/users/475748/screenshots/6059653/s_mark-slideentrance_sequence_1x.gif",
          "one_x": "https://cdn.dribbble.com/users/475748/screenshots/6059653/s_mark-slideentrance_sequence_1x.gif",
          "two_x": "https://cdn.dribbble.com/users/475748/screenshots/6059653/s_mark-slideentrance_sequence.gif",
          "teaser": "https://cdn.dribbble.com/users/475748/screenshots/6059653/s_mark-slideentrance_sequence_teaser.gif"
      },
      "low_profile": false,
      "tags": [
          "$",
          "animated",
          "branding",
          "icon",
          "invision studio",
          "logo",
          "typography"
      ],
      "title": "Sliding S Animation",
      "width": 800,
      "published_at": "2019-02-21T11:24:53Z",
      "updated_at": "2019-02-22T01:12:42Z",
      "attachments": [],
      "projects": [],
      "video": null
  },
  {
      "animated": false,
      "description": "<p>Geometry for a wealth management company logo I have been working on...</p>\n\n<p>Mixing a bit of 💲with a bit of <strong>S</strong></p>\n\n<p>One lo❤️e!\n</p>",
      "height": 600,
      "html_url": "https://dribbble.com/shots/6053082-S-Mark-Grid",
      "id": 6053082,
      "images": {
          "hidpi": "https://cdn.dribbble.com/users/475748/screenshots/6053082/s_mark_grid.png",
          "normal": "https://cdn.dribbble.com/users/475748/screenshots/6053082/s_mark_grid_1x.png",
          "one_x": "https://cdn.dribbble.com/users/475748/screenshots/6053082/s_mark_grid_1x.png",
          "two_x": "https://cdn.dribbble.com/users/475748/screenshots/6053082/s_mark_grid.png",
          "teaser": "https://cdn.dribbble.com/users/475748/screenshots/6053082/s_mark_grid_teaser.png"
      },
      "low_profile": false,
      "tags": [
          "$",
          "branding",
          "geometric",
          "grid",
          "icon",
          "mark",
          "money",
          "s",
          "symbol"
      ],
      "title": "S Mark Grid",
      "width": 800,
      "published_at": "2019-02-20T12:53:26Z",
      "updated_at": "2019-02-20T12:53:26Z",
      "attachments": [],
      "projects": [],
      "video": null
  },
  {
      "animated": false,
      "description": "<p>Lynx Branding Concept. </p>\n\n<p>🐾🐾🐾🐾🐾</p>",
      "height": 600,
      "html_url": "https://dribbble.com/shots/5969935-Lynx-Branding",
      "id": 5969935,
      "images": {
          "hidpi": "https://cdn.dribbble.com/users/475748/screenshots/5969935/lynx_exploration_01_identity.jpg",
          "normal": "https://cdn.dribbble.com/users/475748/screenshots/5969935/lynx_exploration_01_identity_1x.jpg",
          "one_x": "https://cdn.dribbble.com/users/475748/screenshots/5969935/lynx_exploration_01_identity_1x.jpg",
          "two_x": "https://cdn.dribbble.com/users/475748/screenshots/5969935/lynx_exploration_01_identity.jpg",
          "teaser": "https://cdn.dribbble.com/users/475748/screenshots/5969935/lynx_exploration_01_identity_teaser.jpg"
      },
      "low_profile": false,
      "tags": [
          "branding",
          "cat",
          "connected",
          "gold",
          "icon",
          "illustration",
          "logo",
          "lynx",
          "mark",
          "typography",
          "vector"
      ],
      "title": "Lynx Branding",
      "width": 800,
      "published_at": "2019-02-06T00:55:44Z",
      "updated_at": "2019-02-06T00:55:44Z",
      "attachments": [],
      "projects": [],
      "video": null
  },
  {
      "animated": false,
      "description": "<p>Branding concept for Lynx app. 🐈</p>",
      "height": 600,
      "html_url": "https://dribbble.com/shots/5969925-Lynx-App-Icon",
      "id": 5969925,
      "images": {
          "hidpi": "https://cdn.dribbble.com/users/475748/screenshots/5969925/lynx_exploration_01_app.jpg",
          "normal": "https://cdn.dribbble.com/users/475748/screenshots/5969925/lynx_exploration_01_app_1x.jpg",
          "one_x": "https://cdn.dribbble.com/users/475748/screenshots/5969925/lynx_exploration_01_app_1x.jpg",
          "two_x": "https://cdn.dribbble.com/users/475748/screenshots/5969925/lynx_exploration_01_app.jpg",
          "teaser": "https://cdn.dribbble.com/users/475748/screenshots/5969925/lynx_exploration_01_app_teaser.jpg"
      },
      "low_profile": false,
      "tags": [
          "app",
          "bobcat",
          "branding",
          "cat",
          "connected",
          "icon",
          "illustration",
          "ios icon",
          "logo",
          "lynx",
          "profile"
      ],
      "title": "Lynx App Icon",
      "width": 800,
      "published_at": "2019-02-06T00:53:02Z",
      "updated_at": "2019-02-06T00:53:19Z",
      "attachments": [],
      "projects": [],
      "video": null
  },
  {
      "animated": false,
      "description": "<p>Testing colourways for a fashion magazine rebrand 🤔</p>",
      "height": 396,
      "html_url": "https://dribbble.com/shots/5895401-The-New-Order-Branding",
      "id": 5895401,
      "images": {
          "hidpi": "https://cdn.dribbble.com/users/475748/screenshots/5895401/theneworder_logo.png",
          "normal": "https://cdn.dribbble.com/users/475748/screenshots/5895401/theneworder_logo_1x.png",
          "one_x": "https://cdn.dribbble.com/users/475748/screenshots/5895401/theneworder_logo_1x.png",
          "teaser": "https://cdn.dribbble.com/users/475748/screenshots/5895401/theneworder_logo_teaser.png"
      },
      "low_profile": false,
      "tags": [
          "blue",
          "branding",
          "contrast",
          "geometric",
          "logo",
          "pink",
          "type"
      ],
      "title": "The New Order Branding",
      "width": 530,
      "published_at": "2019-01-23T15:57:42Z",
      "updated_at": "2019-01-23T15:57:42Z",
      "attachments": [],
      "projects": [],
      "video": null
  },
  {
      "animated": false,
      "description": "<p>Web design for a fashion illustrator - I wanted to use a responsive grid and minimalist type to showcase the awesome artwork 👩🏼\u200d🎨🎨</p>\n\n<p>See the parallax effects at https://thebrushlady.com </p>",
      "height": 600,
      "html_url": "https://dribbble.com/shots/5895310-The-Brush-Lady-Website",
      "id": 5895310,
      "images": {
          "hidpi": "https://cdn.dribbble.com/users/475748/screenshots/5895310/thebrushlady_web.png",
          "normal": "https://cdn.dribbble.com/users/475748/screenshots/5895310/thebrushlady_web_1x.png",
          "one_x": "https://cdn.dribbble.com/users/475748/screenshots/5895310/thebrushlady_web_1x.png",
          "two_x": "https://cdn.dribbble.com/users/475748/screenshots/5895310/thebrushlady_web.png",
          "teaser": "https://cdn.dribbble.com/users/475748/screenshots/5895310/thebrushlady_web_teaser.png"
      },
      "low_profile": false,
      "tags": [
          "gallery",
          "grid",
          "grotesk",
          "responsive",
          "typography",
          "ui",
          "web"
      ],
      "title": "The Brush Lady Website",
      "width": 800,
      "published_at": "2019-01-23T15:53:27Z",
      "updated_at": "2019-01-23T15:53:56Z",
      "attachments": [],
      "projects": [],
      "video": null
  },
  {
      "animated": true,
      "description": "<p><strong>GIVEAWAY CLOSED!</strong></p>\n\n<p>Please welcome our new dribbblers: </p>\n\n<p><strong><a href=\"https://dribbble.com/dantens\" rel=\"nofollow noreferrer\">https://dribbble.com/dantens</a></strong>\n<br /> <strong><a href=\"https://dribbble.com/vaniaisfandari\" rel=\"nofollow noreferrer\">https://dribbble.com/vaniaisfandari</a></strong></p>\n\n<p>Thanks for sending in all your portfolios!</p>",
      "height": 600,
      "html_url": "https://dribbble.com/shots/4496698-2-Dribbble-Invites",
      "id": 4496698,
      "images": {
          "hidpi": "https://cdn.dribbble.com/users/475748/screenshots/4496698/dribbbleinvitations_201804.gif",
          "normal": "https://cdn.dribbble.com/users/475748/screenshots/4496698/dribbbleinvitations_201804_1x.gif",
          "one_x": "https://cdn.dribbble.com/users/475748/screenshots/4496698/dribbbleinvitations_201804_1x.gif",
          "two_x": "https://cdn.dribbble.com/users/475748/screenshots/4496698/dribbbleinvitations_201804.gif",
          "teaser": "https://cdn.dribbble.com/users/475748/screenshots/4496698/dribbbleinvitations_201804_teaser.gif"
      },
      "low_profile": false,
      "tags": [
          "draft",
          "dribbble",
          "giveaway",
          "invitations",
          "invites",
          "shot"
      ],
      "title": "2 Dribbble Invites",
      "width": 800,
      "published_at": "2018-04-20T05:29:33Z",
      "updated_at": "2018-05-02T01:06:36Z",
      "attachments": [],
      "projects": [],
      "video": null
  },
  {
      "animated": true,
      "description": "<p>Loading interaction for a list of QR code invitations (WeChat) used by physicians to register their patients to a health monitoring app.</p>",
      "height": 600,
      "html_url": "https://dribbble.com/shots/4492382-Animated-Invitation-List",
      "id": 4492382,
      "images": {
          "hidpi": "https://cdn.dribbble.com/users/475748/screenshots/4492382/animation_invitationiphonex.gif",
          "normal": "https://cdn.dribbble.com/users/475748/screenshots/4492382/animation_invitationiphonex_1x.gif",
          "one_x": "https://cdn.dribbble.com/users/475748/screenshots/4492382/animation_invitationiphonex_1x.gif",
          "two_x": "https://cdn.dribbble.com/users/475748/screenshots/4492382/animation_invitationiphonex.gif",
          "teaser": "https://cdn.dribbble.com/users/475748/screenshots/4492382/animation_invitationiphonex_teaser.gif"
      },
      "low_profile": false,
      "tags": [
          "animated",
          "app",
          "invitation",
          "invite",
          "list",
          "principle",
          "purple",
          "qr code",
          "scan"
      ],
      "title": "Animated Invitation List",
      "width": 800,
      "published_at": "2018-04-19T07:18:46Z",
      "updated_at": "2018-04-19T07:18:47Z",
      "attachments": [],
      "projects": [],
      "video": null
  },
  {
      "animated": true,
      "description": "<p>Testing an animation for that old hamburger button... 🍔❌</p>",
      "height": 600,
      "html_url": "https://dribbble.com/shots/4322190-Animated-Hamburger-Menu-Button",
      "id": 4322190,
      "images": {
          "hidpi": "https://cdn.dribbble.com/users/475748/screenshots/4322190/animation_menubutton.gif",
          "normal": "https://cdn.dribbble.com/users/475748/screenshots/4322190/animation_menubutton_1x.gif",
          "one_x": "https://cdn.dribbble.com/users/475748/screenshots/4322190/animation_menubutton_1x.gif",
          "two_x": "https://cdn.dribbble.com/users/475748/screenshots/4322190/animation_menubutton.gif",
          "teaser": "https://cdn.dribbble.com/users/475748/screenshots/4322190/animation_menubutton_teaser.gif"
      },
      "low_profile": false,
      "tags": [
          "animated",
          "arrow",
          "bounce",
          "button",
          "close",
          "hamburger",
          "menu",
          "principle"
      ],
      "title": "Animated Hamburger Menu Button",
      "width": 800,
      "published_at": "2018-03-09T09:21:53Z",
      "updated_at": "2018-03-09T09:23:08Z",
      "attachments": [],
      "projects": [],
      "video": null
  },
  {
      "animated": false,
      "description": "<p>A dashboard app I am working on for a client, this view aims to provide marketing teams with a birds-eye view of their projected revenue. </p>",
      "height": 600,
      "html_url": "https://dribbble.com/shots/4317620-Marketing-Dashboard",
      "id": 4317620,
      "images": {
          "hidpi": "https://cdn.dribbble.com/users/475748/screenshots/4317620/marketmetrics_dashboard.png",
          "normal": "https://cdn.dribbble.com/users/475748/screenshots/4317620/marketmetrics_dashboard_1x.png",
          "one_x": "https://cdn.dribbble.com/users/475748/screenshots/4317620/marketmetrics_dashboard_1x.png",
          "two_x": "https://cdn.dribbble.com/users/475748/screenshots/4317620/marketmetrics_dashboard.png",
          "teaser": "https://cdn.dribbble.com/users/475748/screenshots/4317620/marketmetrics_dashboard_teaser.png"
      },
      "low_profile": false,
      "tags": [
          "app",
          "business",
          "dashboard",
          "design",
          "green",
          "layout",
          "ui",
          "web"
      ],
      "title": "Marketing Dashboard",
      "width": 800,
      "published_at": "2018-03-08T10:19:18Z",
      "updated_at": "2018-03-08T10:19:18Z",
      "attachments": [],
      "projects": [],
      "video": null
  },
  {
      "animated": false,
      "description": "<p>Minimalist design and layout for a healthy eating guide, targeting people with diabetes.</p>",
      "height": 600,
      "html_url": "https://dribbble.com/shots/3971389-Minimalist-Healthy-Eating-Guide",
      "id": 3971389,
      "images": {
          "hidpi": "https://cdn.dribbble.com/users/475748/screenshots/3971389/healthy_eating_guide.png",
          "normal": "https://cdn.dribbble.com/users/475748/screenshots/3971389/healthy_eating_guide_1x.png",
          "one_x": "https://cdn.dribbble.com/users/475748/screenshots/3971389/healthy_eating_guide_1x.png",
          "two_x": "https://cdn.dribbble.com/users/475748/screenshots/3971389/healthy_eating_guide.png",
          "teaser": "https://cdn.dribbble.com/users/475748/screenshots/3971389/healthy_eating_guide_teaser.png"
      },
      "low_profile": false,
      "tags": [
          "design",
          "eat",
          "food",
          "guide",
          "healthcare",
          "healthy",
          "layout",
          "minimalist",
          "tablet",
          "ui"
      ],
      "title": "Minimalist Healthy Eating Guide",
      "width": 800,
      "published_at": "2017-11-24T06:44:45Z",
      "updated_at": "2017-11-24T06:47:26Z",
      "attachments": [],
      "projects": [],
      "video": null
  },
  {
      "animated": false,
      "description": "<p>Layout and design of presentation materials for a corporate client. </p>\n\n<p>My client was after a single page scrollable design that showcased their project story and highlighted their product's success.</p>\n\n<p>(<a href=\"https://dribbble.com/shots/3971389-Healthy-Eating-Guide\" rel=\"nofollow noreferrer\">Here's the product</a> - I designed that too...)</p>",
      "height": 600,
      "html_url": "https://dribbble.com/shots/3969376-Project-Showcase-Design",
      "id": 3969376,
      "images": {
          "hidpi": "https://cdn.dribbble.com/users/475748/screenshots/3969376/corporate_casestudy_digital_transformation.png",
          "normal": "https://cdn.dribbble.com/users/475748/screenshots/3969376/corporate_casestudy_digital_transformation_1x.png",
          "one_x": "https://cdn.dribbble.com/users/475748/screenshots/3969376/corporate_casestudy_digital_transformation_1x.png",
          "two_x": "https://cdn.dribbble.com/users/475748/screenshots/3969376/corporate_casestudy_digital_transformation.png",
          "teaser": "https://cdn.dribbble.com/users/475748/screenshots/3969376/corporate_casestudy_digital_transformation_teaser.png"
      },
      "low_profile": false,
      "tags": [
          "blue",
          "case study",
          "corporate",
          "design",
          "icons",
          "one page",
          "presentation",
          "scroll",
          "stripes",
          "tablet",
          "ui",
          "white"
      ],
      "title": "Project Showcase Design",
      "width": 800,
      "published_at": "2017-11-23T09:16:27Z",
      "updated_at": "2017-11-24T06:46:41Z",
      "attachments": [],
      "projects": [],
      "video": null
  }
]

function fetchData(URL) {
    return fetch(URL, {
        headers: {
            "Authorization": "Bearer " + ACCESS_TOKEN
        }
    }).then((response) => response.json())
}

export default {
      //获取所有用户的作品
      getUsersShots: (type=(User+shots)) => {
        const URL = API_URL + type
        return fetchData(URL)
      },
      //获取具体的用户作品
      getExactShots: (type=shots,id) => {
        const URL = API_URL + type + `:${id}`
        return fetchData(URL)
      },
      getResources: function(url) {
        return fetchData(url);
      } 
};