export interface Podcast {
  id: number
  slug: string
  name: string
  hosts: string
  description: string
  cover: string
  platforms: {
    spotify: string
    apple: string
    youtube?: string
  }
  recentEpisodes: string[]
}

export const PODCASTS: Podcast[] = [
  {
    id: 1,
    slug: 'gospelbound',
    name: 'Gospelbound',
    hosts: 'Hosted by Collin Hansen',
    description: "A podcast for those searching for firm faith in an anxious age. Collin Hansen interviews authors, pastors, scholars, and everyday Christians to discover how the gospel anchors them in an uncertain world.",
    cover: 'https://media.thegospelcoalition.org/wp-content/uploads/2025/09/09092225/Gospelbound-cover-768x768.jpg',
    platforms: {
      spotify: '#',
      apple: '#',
      youtube: '#',
    },
    recentEpisodes: [
      'How Your Church Witnesses to the World',
      'How Your Investing Could Change the World',
      'A Tool for Spiritual Formation in a Secular Age',
    ],
  },
  {
    id: 2,
    slug: 'recorded',
    name: 'Recorded',
    hosts: '',
    description: "A narrative podcast chronicling stories of God's redemptive and transformative work. Recorded explores the unexpected ways Christ changes lives across the globe.",
    cover: 'https://media.thegospelcoalition.org/wp-content/uploads/2021/08/31184052/Recorded-Podcast-Branding-Artwork-A-1x1-FINAL-768x768.jpg',
    platforms: {
      spotify: '#',
      apple: '#',
    },
    recentEpisodes: [
      'Where Gen Z Is Finding Jesus',
      'Can You Rely on AI for Theology?',
      'The Fatherless Epidemic: Raising Up Men in Urban America',
    ],
  },
  {
    id: 3,
    slug: 'carson-center-podcast',
    name: 'The Carson Center Podcast',
    hosts: 'Featuring D. A. Carson',
    description: "Weekly access to curated sermons and lectures featuring D.A. Carson's lifetime of theological insight. A rich resource for preachers, teachers, and serious students of Scripture.",
    cover: 'https://media.thegospelcoalition.org/wp-content/uploads/2024/06/04144941/Carson-Sermon-Podcast-Cover-768x768.jpg',
    platforms: {
      spotify: '#',
      apple: '#',
    },
    recentEpisodes: [
      'He Who Sits on the Throne: Unveiling God\'s Sovereignty (Revelation 4)',
      'The Function and Usefulness of Apocalyptic Preaching',
      'Unveiling the Heart of Apocalyptic Preaching',
    ],
  },
  {
    id: 4,
    slug: 'the-deep-dish',
    name: 'The Deep Dish',
    hosts: 'Hosted by Melissa Kruger and Courtney Doctor',
    description: "Inviting women into deep conversations about the deep truths of God. Every episode goes below the surface to explore Scripture, theology, and Christian living with warmth and rigor.",
    cover: 'https://media.thegospelcoalition.org/wp-content/uploads/2025/09/17185824/DeepDishAlbumArt_Launch-9.18.25-768x768.jpg',
    platforms: {
      spotify: '#',
      apple: '#',
    },
    recentEpisodes: [
      'Kickstart Your Prayer Life',
      'Fighting Materialism in a Materialistic World',
      'Remembering Death Teaches Us to Live',
    ],
  },
  {
    id: 5,
    slug: 'the-everyday-pastor',
    name: 'The Everyday Pastor',
    hosts: 'Hosted by Ligon Duncan and Matt Smethurst',
    description: "Practical wisdom on the nuts and bolts of ministry. Ligon Duncan and Matt Smethurst bring decades of pastoral experience to the joys, challenges, and ordinary rhythms of shepherding a local church.",
    cover: 'https://media.thegospelcoalition.org/wp-content/uploads/2024/10/08211539/The-Everyday-Pastor-768x768.jpg',
    platforms: {
      spotify: '#',
      apple: '#',
    },
    recentEpisodes: [
      'Spiritual Warfare in Ministry',
      'Union with Christ: The Most Underrated Doctrine (with Sam Allberry)',
      'Teach People How to Read Their Bibles',
    ],
  },
  {
    id: 6,
    slug: 'tgc-podcast',
    name: 'The Gospel Coalition Podcast',
    hosts: '',
    description: "Keynote and breakout sessions from TGC national, regional, and women's conferences. Hear from leading pastors, theologians, and ministry leaders on the most pressing questions facing the church today.",
    cover: 'https://media.thegospelcoalition.org/wp-content/uploads/2020/01/15004855/TGC-Podcast-Branding-Artwork-768x768.jpg',
    platforms: {
      spotify: '#',
      apple: '#',
      youtube: '#',
    },
    recentEpisodes: [
      'The Church Needs Men and Women to Serve Together',
      'A Distinctively Christian Approach to Marriage',
      'The Stories Culture Tells Us',
    ],
  },
  {
    id: 7,
    slug: 'as-in-heaven',
    name: 'As In Heaven',
    hosts: '',
    description: "One very challenging subject per season, explored with depth and nuance. The current season focuses on dechurching in America and what the church can do to faithfully engage those who have walked away.",
    cover: 'https://media.thegospelcoalition.org/wp-content/uploads/2020/10/01102659/As-In-Heaven-500x500.jpg',
    platforms: {
      spotify: '#',
      apple: '#',
    },
    recentEpisodes: [
      'Trevin Wax on Reconstructing Faith',
      'How to Be a Missional and Confessional Church That Motivates People for Faithful Ministry',
      'How to Faithfully Engage the Dechurched Movement as a Church in Exile',
    ],
  },
  {
    id: 8,
    slug: 'glo',
    name: 'Glo',
    hosts: 'Hosted by Blair Linne, Sharon Dickens, Aixa De Lopez, and Soojin Park',
    description: "Four women from four different cultural backgrounds discuss God's work around the world. Glo celebrates the global nature of the church and the beauty of the gospel across every culture and tongue.",
    cover: 'https://media.thegospelcoalition.org/wp-content/uploads/2023/04/28100912/Glo-flat-cover-art-2000x2000-768x768.jpeg',
    platforms: {
      spotify: '#',
      apple: '#',
    },
    recentEpisodes: [
      'Examining the Current and Future State of the Global Church',
      'Supporting Mental Health with Dignity and Grace',
      'Exploring the Intersection of Christianity and the Arts',
    ],
  },
  {
    id: 9,
    slug: 'post-christianity',
    name: 'Post-Christianity?',
    hosts: 'Hosted by Glen Scrivener and Andrew Wilson',
    description: "Glen Scrivener and Andrew Wilson trace the origins of post-Christianity in the Western world. How did we get here, and what does faithful witness look like in a culture that has rejected its Christian inheritance?",
    cover: 'https://media.thegospelcoalition.org/wp-content/uploads/2023/10/11172239/Post-Christianity-cover-art-768x768.jpg',
    platforms: {
      spotify: '#',
      apple: '#',
    },
    recentEpisodes: [
      'Welcome and Witness: How to Reach Out in a Secular Age',
      'Faith and Fruitfulness: How to Thrive in Our Cultural Moment',
      'Selves and Psychologies: The Rise of the Post-Christian Self',
    ],
  },
  {
    id: 10,
    slug: 'tgc-qa',
    name: 'TGC Q&A',
    hosts: '',
    description: "Weekly episodes featuring TGC council members providing biblical perspective on your most pressing questions. No topic is off limits as we seek to apply Scripture to every area of life and thought.",
    cover: 'https://media.thegospelcoalition.org/wp-content/uploads/2020/01/16154208/preview-full-QnA-Podcast-Artwork.jpg',
    platforms: {
      spotify: '#',
      apple: '#',
      youtube: '#',
    },
    recentEpisodes: [
      'How Do I Glorify God Even When My Work Seems Meaningless?',
      'How Should We Think Biblically About End-of-Life Care?',
      'How Can We Include the Poor in the Conversation?',
    ],
  },
  {
    id: 11,
    slug: 'lets-talk',
    name: "Let's Talk",
    hosts: 'Hosted by Jackie Hill Perry, Melissa Kruger, and Jasmine Holmes',
    description: "Three friends apply biblical wisdom to the questions women are really asking. From relationships and identity to work and suffering, Jackie, Melissa, and Jasmine bring honesty, humor, and Scripture to every conversation.",
    cover: 'https://media.thegospelcoalition.org/wp-content/uploads/2021/01/29092607/Lets-Talk-Season-Two-768x768.jpg',
    platforms: {
      spotify: '#',
      apple: '#',
    },
    recentEpisodes: [
      "Let's Talk Reunion: The Blessings of Bible Study with Friends",
      "Let's Talk (Live): Growing in Gratitude",
      "Let's Talk: Your Questions, Answered!",
    ],
  },
  {
    id: 12,
    slug: 'help-me-teach-the-bible',
    name: 'Help Me Teach the Bible',
    hosts: 'Hosted by Nancy Guthrie',
    description: "Nancy Guthrie talks with gifted teachers and preachers to equip all kinds of Bible teachers. Whether you teach a Sunday school class, a small group, or a congregation, this podcast will sharpen your craft and deepen your love for God's Word.",
    cover: 'https://media.thegospelcoalition.org/wp-content/uploads/2020/01/15005637/HMTTB-Artwork-768x768.jpg',
    platforms: {
      spotify: '#',
      apple: '#',
    },
    recentEpisodes: [
      'Getting Rid of Your Fear of the Book of Revelation',
      'Putting Passion and Personality into Your Teaching',
      'Putting Together a Christ-Centered Bible Talk',
    ],
  },
  {
    id: 13,
    slug: 'word-of-the-week',
    name: 'Word of the Week',
    hosts: '',
    description: "Feed on God's Word mid-week by listening to sound biblical sermons. Each episode features a full sermon from a trusted pastor or preacher, giving you nourishment for the days between Sundays.",
    cover: 'https://media.thegospelcoalition.org/wp-content/uploads/2020/01/15010756/WoTW-Artwork-768x768.jpg',
    platforms: {
      spotify: '#',
      apple: '#',
    },
    recentEpisodes: [
      'Looking for Love in All the Wrong Places: A Sermon from Julius Kim',
      'When Dry Riverbeds Flow Again (Psalm 126)',
      "I Can't Breathe: A Sermon by Charlie Dates",
    ],
  },
  {
    id: 14,
    slug: 'youre-not-crazy',
    name: "You're Not Crazy",
    hosts: 'Hosted by Ray Ortlund and Sam Allberry',
    description: "Ray Ortlund and Sam Allberry set out to encourage pastors and ministry leaders with warmth, wisdom, and the grace of the gospel. If you have ever wondered whether ministry is worth it, this podcast is for you.",
    cover: 'https://media.thegospelcoalition.org/wp-content/uploads/2021/07/29193446/YoureNotCrazy-Podcast-Branding-Artwork-768x768.png',
    platforms: {
      spotify: '#',
      apple: '#',
    },
    recentEpisodes: [
      'Character over Achievement: Gospel Culture with Paul Tripp',
      'Why Pastors Need Accountability (with Paul Tripp)',
      'Dry Seasons, Imposter Syndrome, and Reawakening: Season 4 Q&A with Sam and Ray',
    ],
  },
  {
    id: 15,
    slug: 'churches-planting-churches',
    name: 'Churches Planting Churches',
    hosts: 'Hosted by Tony Merida',
    description: "Produced by Acts 29 in partnership with TGC, Tony Merida shares stories and insights from church planters and leaders around the world. Practical encouragement for anyone engaged in the work of planting and strengthening local churches.",
    cover: 'https://media.thegospelcoalition.org/wp-content/uploads/2020/04/29092748/Acts-29-Churches-Planting-Churches-768x768.jpg',
    platforms: {
      spotify: '#',
      apple: '#',
    },
    recentEpisodes: [
      'Introducing The Acts 29 Podcast',
      'Church Planting and Cultural Engagement',
      'Church-Planting Momentum in Japan',
    ],
  },
]
