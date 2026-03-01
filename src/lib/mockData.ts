import { Article, Author, Category } from './types'

// Authors
export const AUTHORS: Author[] = [
  {
    id: 1,
    name: 'Kevin DeYoung',
    slug: 'kevin-deyoung',
    avatar: 'https://picsum.photos/seed/author1/80/80',
    bio: 'Kevin DeYoung is the senior pastor at Christ Covenant Church in Matthews, North Carolina, and a council member of The Gospel Coalition.',
    role: 'Senior Pastor, Christ Covenant Church',
  },
  {
    id: 2,
    name: 'Brett McCracken',
    slug: 'brett-mccracken',
    avatar: 'https://picsum.photos/seed/author2/80/80',
    bio: 'Brett McCracken is a senior editor at The Gospel Coalition and the author of The Wisdom Pyramid: Feeding Your Soul in a Post-Truth World.',
    role: 'Senior Editor, The Gospel Coalition',
  },
  {
    id: 3,
    name: 'Paul David Tripp',
    slug: 'paul-david-tripp',
    avatar: 'https://picsum.photos/seed/author3/80/80',
    bio: 'Paul David Tripp is a pastor, author, and international conference speaker. He is the founder and president of Paul Tripp Ministries.',
    role: 'Pastor & Author',
  },
  {
    id: 4,
    name: 'Joe Carter',
    slug: 'joe-carter',
    avatar: 'https://picsum.photos/seed/author4/80/80',
    bio: 'Joe Carter is a senior editor at The Gospel Coalition, the editor of the NIV Lifehacks Bible, and the author of several books.',
    role: 'Senior Editor, The Gospel Coalition',
  },
  {
    id: 5,
    name: 'Collin Hansen',
    slug: 'collin-hansen',
    avatar: 'https://picsum.photos/seed/author5/80/80',
    bio: 'Collin Hansen is the editorial director of The Gospel Coalition and the host of the Gospelbound podcast.',
    role: 'Editorial Director, The Gospel Coalition',
  },
  {
    id: 6,
    name: 'Sam Allberry',
    slug: 'sam-allberry',
    avatar: 'https://picsum.photos/seed/author6/80/80',
    bio: 'Sam Allberry is a pastor, author, and apologist based in the United Kingdom. He is a global speaker for Ravi Zacharias International Ministries.',
    role: 'Pastor & Author',
  },
  {
    id: 7,
    name: 'Melissa Kruger',
    slug: 'melissa-kruger',
    avatar: 'https://picsum.photos/seed/author7/80/80',
    bio: "Melissa Kruger is The Gospel Coalition’s director of women’s initiatives and the author of several books on Christian womanhood.",
    role: "Director of Women’s Initiatives, TGC",
  },
]

// Categories
export const CATEGORIES: Category[] = [
  { id: 1, name: 'Arts & Culture', slug: 'arts-culture', description: 'Exploring the intersection of Christian faith and human creativity' },
  { id: 2, name: 'Bible & Theology', slug: 'bible-theology', description: 'Deep dives into Scripture and Christian doctrine' },
  { id: 3, name: 'Christian Living', slug: 'christian-living', description: 'Practical wisdom for faithful daily life' },
  { id: 4, name: 'Current Events', slug: 'current-events', description: 'A biblical lens on news and culture' },
  { id: 5, name: 'Faith & Work', slug: 'faith-work', description: 'Integrating Christian faith with professional life' },
  { id: 6, name: 'Ministry', slug: 'ministry', description: 'Resources for pastors and church leaders' },
  { id: 7, name: 'The Carson Center', slug: 'carson-center', description: 'Biblical theology and expository preaching' },
  { id: 8, name: 'The Keller Center', slug: 'keller-center', description: 'Gospel-centered ministry for urban contexts' },
]

// Sample Articles
export const ARTICLES: Article[] = [
  {
    id: 1,
    slug: 'resurrection-changes-everything-about-how-we-grieve',
    title: 'The Resurrection Changes Everything About How We Grieve',
    subheading: "Paul’s words in 1 Thessalonians 4 don’t eliminate sorrow—they transform it into something the world has never seen before.",
    excerpt: 'Christians grieve differently, not because we feel less but because we know more. The resurrection is not a comfort we recite; it is the tectonic ground beneath every tear we shed.',
    author: AUTHORS[0],
    category: CATEGORIES[1],
    tags: ['resurrection', 'grief', 'death', 'hope', '1 Thessalonians'],
    publishedAt: '2025-03-15T09:00:00Z',
    updatedAt: '2025-03-15T09:00:00Z',
    readingTime: 8,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/grief/1920/1080',
      alt: 'A lone figure standing in a field at dawn',
      caption: 'Photo by Thomas Lefebvre on Unsplash',
    },
    isFeatured: true,
    isEditorsPick: true,
    content: `
<p class="article-lead">There is a peculiar phrase tucked inside the apostle Paul’s instructions to the Thessalonians. Addressing believers who had lost loved ones and feared they might miss the resurrection, Paul writes: “We do not want you to be ignorant, brothers and sisters, so that you may not grieve like the rest of mankind, who have no hope” (1 Thess. 4:13).</p>

<p>Notice what he does not say. He does not say, “Do not grieve.” He says, “Do not grieve <em>like</em> those who have no hope.” The grief remains. But it is transfigured by resurrection light.</p>

<h2>The Anatomy of Christian Grief</h2>

<p>Western culture has grown increasingly uncomfortable with grief. We move people through stages, offer closure, and encourage them to get back to normal as quickly as possible. But Christian grief resists this tidy sequencing. It is not a problem to be solved but a wound that must be honored before it can heal.</p>

<p>The Psalms give us permission—even a mandate—to cry out with full throats. “How long, O Lord?” is not faithlessness; it is the prayer of someone who believes that God is present enough, powerful enough, and good enough to hear complaint. The lament tradition in Scripture assumes that honest grief addressed to God is itself an act of faith.</p>

<blockquote class="pull-quote">
  <p>Christian grief is not less than ordinary grief. It is more. It is grief that has somewhere to go, someone to go to, and something to expect when it arrives.</p>
</blockquote>

<p>The key distinction Paul draws is not emotional depth but theological direction. To grieve without hope is to grieve into a void—tears that disappear into silence. To grieve as a Christian is to grieve toward something: a risen Lord, a promised reunion, a new creation that will swallow death itself.</p>

<h2>What the Resurrection Actually Promises</h2>

<p>Paul’s argument in 1 Thessalonians 4 is breathtaking in its specificity. He doesn’t offer a vague spiritual comfort—"she’s in a better place"—but a concrete eschatological promise. The dead in Christ will rise first. Then we who are alive will be caught up together with them. And so we will always be with the Lord.</p>

<p>These are not metaphors. Paul is describing an event—a literal, bodily, historical future event as certain as the resurrection of Jesus on the third day. The Christian hope is not that our spirits float to heaven and merge with the divine. The Christian hope is resurrection: bodies reformed, relationships restored, a creation made new.</p>

<p>This matters because grief is, at its core, a protest against loss. We grieve because something good has been taken from us—a person, a relationship, a future we had imagined. The resurrection does not say that loss doesn’t matter. It says that loss is not permanent. It does not minimize the wound; it promises the healing.</p>

<h3>The Weight of “With the Lord”</h3>

<p>Perhaps the most overlooked phrase in Paul’s comfort is the one that ends it: “and so we will <em>always</em> be with the Lord” (v. 17). The resurrection reunion is not a moment but an eternity. We are not catching a glimpse of those we love across an unbridgeable chasm. We are being reunited in a manner that will never again be severed.</p>

<p>Jonathan Edwards, in his celebrated sermon on heaven, argued that the joy of heaven would be constituted in large part by the joy of unbroken fellowship—with God, yes, but also with one another. Heaven is not solitary. It is a community of the redeemed. When we bury our dead, we are not saying goodbye forever. We are saying, “Until the morning.”</p>

<h2>How This Changes How We Sit with the Grieving</h2>

<p>Understanding resurrection hope should change how we <em>accompany</em> the grieving, not just how we grieve ourselves. The church has a peculiar ministry here that the world cannot replicate.</p>

<p>We can sit with suffering without rushing to resolve it because we know the resolution is coming. We can weep with those who weep—genuinely, fully, without needing to dry tears before their time—because we believe that weeping endures for the night but joy comes in the morning (Ps. 30:5). We are not afraid of lament because we live on the far side of the resurrection.</p>

<p>This is what makes the Christian community’s presence at the graveside unlike anything else in human culture. We wear black and we weep, yes. But we also sing. We speak of hope not to escape the grief but to carry it somewhere—to set it down at the feet of One who has promised to make all things new.</p>

<h2>Grieving Well Is a Witness</h2>

<p>Paul’s phrase—"not like the rest of mankind, who have no hope"—implies that pagan grief looks different. It does. Ancient Greco-Roman funerary inscriptions are haunting in their finality: “I was not; I was; I am not; I do not care.” No resurrection. No reunion. No morning after the longest night.</p>

<p>How we grieve is a form of testimony. The community that weeps real tears and still sings resurrection hymns is proclaiming something about the nature of reality that cannot be argued away. It is embodied apologetics. It is the church doing what the church alone can do: holding together, in tension but not contradiction, the full weight of sorrow and the full brightness of hope.</p>

<p>So grieve. Grieve deeply, honestly, without performance. Let the tears come. Let the nights be long. And in the grieving, remember: this is not the end of the story. The same God who raised Jesus from the dead has promised to raise your loved one, and you, and to reunite what death has sundered. That is not a cliché. It is the very center of the Christian faith. And it changes everything.</p>
    `,
  },
  {
    id: 2,
    slug: 'rethinking-christian-relationship-to-technology',
    title: "Rethinking the Christian’s Relationship to Technology",
    subheading: "Our devices are not neutral. They form habits, shape desires, and compete for our ultimate allegiance. It’s time the church took this seriously.",
    excerpt: 'Technology promises connection but often delivers distraction. The church needs a robust theology of attention, formation, and the good use of digital tools.',
    author: AUTHORS[1],
    category: CATEGORIES[0],
    tags: ['technology', 'social media', 'digital formation', 'wisdom', 'attention'],
    publishedAt: '2025-04-02T09:00:00Z',
    updatedAt: '2025-04-02T09:00:00Z',
    readingTime: 10,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/tech/1920/1080',
      alt: 'Hands holding a smartphone with a glowing screen',
      caption: 'Photo by Rodion Kutsaiev on Unsplash',
    },
    isEditorsPick: true,
    content: `
<p class="article-lead">I did not intend to check Twitter during my daughter’s piano recital. But I did. Twice. In the moment I told myself it was harmless—just a quick glance. But it wasn’t harmless. It was a tiny, telling vote for what I actually valued in that moment, and what I actually valued was not my daughter’s musical debut but the steady dopamine of an always-on feed.</p>

<p>This is the insidious character of our technology moment. Our devices don’t demand loyalty; they earn it incrementally, one harmless glance at a time, until we discover—usually with shock—that we’ve handed over something we didn’t intend to give.</p>

<h2>The Myth of the Neutral Tool</h2>

<p>Christians have often reached for the hammer-and-nail analogy when discussing technology: a hammer can build a house or break a window; it’s just a tool, morally inert. What matters is how you use it. This framework has the virtue of rejecting technophobia and the vice of being dangerously naive.</p>

<p>Neil Postman argued decades ago that technologies are not neutral—they have built-in biases, they change what we are able to think about, they reward certain behaviors and punish others. The printing press didn’t just distribute the Bible; it restructured the entire epistemological order of Western civilization. Television didn’t just provide entertainment; it changed the nature of political discourse, public thought, and attention span.</p>

<blockquote class="pull-quote">
  <p>We should ask not just “What am I doing with this technology?” but “What is this technology doing to me?”</p>
</blockquote>

<p>Our smartphones are not hammers. They are environments we live in. The average American spends four to seven hours per day on their phone—more time than they spend with their families, more time than they spend sleeping, certainly more time than they spend in prayer or Scripture. When something occupies that much of a human life, calling it “neutral” is not careful thinking. It is willful blindness.</p>

<h2>What Smartphone Formation Actually Does</h2>

<p>James K. A. Smith’s work on cultural liturgies offers a useful framework here. Smith argues, following Augustine, that we are fundamentally desiring creatures shaped by practices, not just idea-receptacles shaped by beliefs. The question is not only “What do you think?” but “What do you love, and what has made you love it?”</p>

<p>Smartphone habits are formative liturgies. The gesture of reaching for your phone as soon as you wake—before prayer, before gratitude, before human contact—is not neutral. It is a ritual that says something about the ordering of your loves. The habit of checking social media in moments of boredom, anxiety, or loneliness is not neutral. It is practicing a particular answer to the question “Where do I turn when I am empty?”</p>

<h3>The Attention Economy and the Distracted Soul</h3>

<p>The business model of every major platform—Instagram, TikTok, Facebook, Twitter/X—is built on the commodification of human attention. Your attention is the product being sold to advertisers. The entire architecture of these platforms is designed, by teams of the world’s most talented engineers and behavioral psychologists, to maximize the time you spend on them.</p>

<p>They are not designed to help you flourish. They are not designed to deepen your relationships, strengthen your faith, or clarify your thinking. They are designed to capture and hold your attention, which is the same as saying: they are designed to <em>fragment</em> your attention, to habituate you to distraction, to make sustained, single-minded attention feel uncomfortable.</p>

<p>This is precisely counter to the attentive, still, receptive posture that Scripture describes as the foundation of wisdom. “Be still, and know that I am God” (Ps. 46:10) requires an attentional capacity that the smartphone economy is systematically destroying.</p>

<h2>A Christian Response: Not Rejection, But Wisdom</h2>

<p>None of this means Christians should smash their iPhones and retreat to the woods. The answer to technological over-reach is not technophobia but wisdom—the kind of hard-won, practice-shaped wisdom that the book of Proverbs describes as the beginning of the good life.</p>

<p>Practically, this looks like several things:</p>

<p><strong>Honest self-examination.</strong> Take a week to track how you actually use your phone, not how you think you use it. Screen Time data is humbling for most people. The gap between our self-image and our actual behavior is the beginning of wisdom.</p>

<p><strong>Deliberate liturgies of disconnection.</strong> The phone-free dinner table, the morning hour before screens, the sabbath rest from digital consumption—these are not legalistic rules but protective structures, the equivalent of the guardrails God gave Israel in the wilderness.</p>

<p><strong>A theology of attention.</strong> Cultivating the capacity for sustained, single-minded focus—through Scripture reading, through prayer, through slow books and long walks—is not merely self-improvement. It is the recovery of the kind of soul capable of knowing God.</p>

<p>The poet and farmer Wendell Berry wrote, before smartphones existed, that we need to ask of any new technology: “What will this do to our community? What is my need for this? What are the costs?” These remain the right questions. And Christians, of all people, are equipped to ask them—because we know that the good life is not defined by what we consume but by whom we love and what we attend to in loving them.</p>
    `,
  },
  {
    id: 3,
    slug: 'forgotten-virtue-recovering-silence-in-a-noisy-world',
    title: 'The Forgotten Virtue: Recovering Silence in a Noisy World',
    subheading: 'We have filled every silent corner of our lives with noise. But silence is not emptiness—it is the space where God does his deepest work in the soul.',
    excerpt: 'In an age of curated noise and algorithmic distraction, the ancient Christian discipline of silence is not an optional luxury for mystics. It is survival.',
    author: AUTHORS[2],
    category: CATEGORIES[2],
    tags: ['silence', 'spiritual discipline', 'prayer', 'solitude', 'formation'],
    publishedAt: '2025-02-20T09:00:00Z',
    updatedAt: '2025-02-20T09:00:00Z',
    readingTime: 15,
    format: 'longread',
    featuredImage: {
      src: 'https://picsum.photos/seed/silence/1920/1080',
      alt: 'A misty forest path in early morning light',
      caption: 'Photo by Simon Migaj on Unsplash',
    },
    isFeatured: true,
    content: `
<p class="article-lead">My spiritual director once asked me a question I wasn’t prepared for: “When was the last time you sat in complete silence for thirty minutes?” I started to answer—and then realized I couldn’t. Not because I’d forgotten, but because it had been so long that I had no memory to draw on. Silence, in my life, had become the rarest of experiences.</p>

<p>I don’t think I’m unusual. We are the most relentlessly noisy civilization in human history. The average American encounters between 4,000 and 10,000 advertisements per day. We sleep with televisions on, exercise with earbuds in, commute in a bubble of curated audio. Silence, when it appears, feels strange—a problem to be fixed rather than a gift to be received.</p>

<h2>Why We Fear Silence</h2>

<p>Blaise Pascal, writing in the seventeenth century, identified something essential: “All of humanity’s problems stem from man’s inability to sit quietly in a room alone.” It is a remarkable diagnosis, and it has only grown more acute in the centuries since.</p>

<p>We fill silence because silence is confronting. When the noise stops, we are alone with ourselves—with the accumulation of choices we have made and avoided making, with the longing we have not yet named, with the voice of conscience we have been carefully drowning out. Silence strips away the distractions we use to avoid the deeper questions of existence.</p>

<blockquote class="pull-quote">
  <p>Silence is not the absence of something. It is the presence of everything we have been running from—and the God who has been waiting to meet us there.</p>
</blockquote>

<p>For the Christian, this confrontation is not something to fear but something to seek. The mystics of the Christian tradition—Ignatius, John of the Cross, Thomas Merton, and before them the Desert Fathers—understood that silence is the necessary precondition for encountering God in his fullness. You cannot hear a still, small voice above a din of your own making.</p>

<h2>The Biblical Case for Silence</h2>

<p>Scripture does not merely tolerate silence; it commands it and illustrates its necessity. “Be still before the Lord and wait patiently for him” (Ps. 37:7). “Be still, and know that I am God” (Ps. 46:10). “In returning and rest you shall be saved; in quietness and trust shall be your strength” (Isa. 30:15).</p>

<p>The great moments of divine encounter in Scripture happen in silence or near-silence. Elijah, fleeing in exhaustion and despair, meets God not in the earthquake or the fire but in “the sound of a low whisper” (1 Kings 19:12, ESV)—a translation of the Hebrew that conveys something like “a thin silence.” Moses meets God in the solitary wilderness. Jesus himself withdraws repeatedly to “lonely places” and to prayer, modeling for his disciples a rhythm that includes withdrawal, silence, and listening.</p>

<p>The early church took this seriously. The Desert Fathers left Alexandria in the late third century—not because the city was wicked, though it was—but because they understood that the formation of souls requires conditions that cities systematically undermine. Abba Moses, when asked for “a word” by a young monk, replied: “Go, sit in your cell, and your cell will teach you everything.” The cell, the silence, the absence of distraction—these were not deprivations but disciplines.</p>

<h3>What Silence Does to the Soul</h3>

<p>Contemporary neuroscience, somewhat inadvertently, has confirmed what the contemplative tradition knew. Research from Duke Medical Center in 2013 found that silence—even two hours of silence per day—stimulates neurogenesis in the hippocampus, the brain region associated with learning, memory, and emotional regulation. The resting brain, disengaged from external stimulation, processes and integrates experience in ways that cannot happen during active engagement.</p>

<p>But the spiritual effects are harder to measure and more important. In silence, we discover what we actually believe, as opposed to what we believe we believe. In silence, our prayers become something other than a performance or a shopping list—they become a genuine conversation, slow and fumbling, with the living God. In silence, we discover the specific texture of our own soul—its weaknesses, its longings, its particular susceptibilities to sin and grace.</p>

<p>John of the Cross called this the “dark night of the soul"—not a crisis of faith but a purification that can only happen when the soul is stripped of its ordinary consolations and left in naked dependence on God alone. The dark night is not enjoyable. But it is not destruction; it is preparation. The mystics who entered it and stayed emerged with a depth of faith that comfortable, noisy Christianity cannot produce.</p>

<h2>Practical Recovery of Silence</h2>

<p>How does an ordinary Christian, living in the twenty-first century with a smartphone and a mortgage and demanding children, recover the practice of silence? Gently, gradually, and with realistic expectations.</p>

<p>Start small. Five minutes of intentional silence before morning prayer is not nothing—it is a beginning. The great enemy of the good life is the perfect; we don’t sit in silence because we imagine we need an hour of mystical attentiveness, and since we can’t manage that, we settle for zero.</p>

<p>Create space for silence structurally. The commute without the podcast. The lunch break without the phone. The walk without the earbuds. These are not grand spiritual achievements; they are small recoveries of the quiet attentiveness that human beings were designed for.</p>

<p>Take a silent retreat. Even a single afternoon, alone, in a park or a chapel or a quiet room, with a Bible and nothing else, is transformative. The first twenty minutes will be uncomfortable. The second twenty will be strange. The third will begin to resemble rest—the rest that the author of Hebrews says remains for the people of God.</p>

<p>The contemplative writer Thomas Merton observed that “the rush and pressure of modern life are a form—perhaps the most common form—of its innate violence.” The recovery of silence is, among other things, an act of resistance against that violence. It is the quiet insistence that we are not consumers of experience but creatures made for communion—with God, with others, with the depths of our own God-given souls.</p>

<p>The silence is waiting. It has always been waiting. The question is whether we will finally stop running from it long enough to discover what—and Who—we find there.</p>
    `,
  },
  {
    id: 4,
    slug: 'gospel-speaks-to-political-anxiety',
    title: 'How the Gospel Speaks to Political Anxiety',
    subheading: "When the political world feels like it’s coming apart, Christians have a resource the world doesn’t: a hope anchored outside the political order entirely.",
    excerpt: "The gospel doesn’t offer a political platform, but it does offer something far more powerful: a reordering of ultimate allegiances that frees us to engage wisely without being enslaved.",
    author: AUTHORS[3],
    category: CATEGORIES[3],
    tags: ['politics', 'anxiety', 'hope', 'citizenship', 'kingdom of God'],
    publishedAt: '2025-05-10T09:00:00Z',
    updatedAt: '2025-05-10T09:00:00Z',
    readingTime: 7,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/politics/1920/1080',
      alt: 'An American flag against a cloudy sky',
    },
    content: `
<p class="article-lead">I have a rule I violate constantly: don’t read news after 9 p.m. Every time I break it, I regret it. I go to bed anxious, my mind churning through scenarios of political catastrophe, and I wake up the next morning having slept poorly and thought fruitlessly. The news did not improve my capacity to act; it only degraded my capacity to rest.</p>

<p>Political anxiety is perhaps the defining spiritual pathology of our moment. Christians are not immune. In fact, Christians who take seriously their responsibility as citizens—and who care deeply about justice, human dignity, and the common good—are often especially vulnerable to it.</p>

<h2>Why Political Anxiety Is a Spiritual Problem</h2>

<p>Anxiety is not merely a psychological condition; it is a theological one. It is what happens when we locate our ultimate hope in something that can fail us. Jesus, in the Sermon on the Mount, directly connects anxiety to misplaced ultimate concern: “Do not be anxious about your life... For the pagans run after all these things, and your heavenly Father knows that you need them” (Matt. 6:25, 32).</p>

<p>Political anxiety follows the same logic. It arises when we have, consciously or not, located our ultimate hope in political outcomes—when the right party winning feels like salvation and the wrong party winning feels like catastrophe. This is not citizenship; it is idolatry, and the idol’s name is power.</p>

<blockquote class="pull-quote">
  <p>Every empire eventually falls. Every political movement eventually disappoints. The kingdom of God alone endures forever—and it advances not through the machinery of political power but through the proclamation of the gospel.</p>
</blockquote>

<h2>What the Gospel Says to the Anxious Citizen</h2>

<p>The gospel is not a political platform, but it does make claims with profound political implications. Chief among them: Jesus is Lord. Not a lord, not a lord among lords, but Lord—the one to whom “every knee will bow and every tongue confess” (Phil. 2:10-11). This is not pious decoration. It is the most revolutionary political claim ever made.</p>

<p>If Jesus is Lord, then Caesar is not. And if Caesar is not Lord, then neither is the president, the Congress, the Supreme Court, or the electoral process. These institutions are not nothing—Paul calls them God’s servants for good (Rom. 13:4)—but they are not ultimate. They are temporary, fallen, and limited.</p>

<h3>The Prophetic Posture</h3>

<p>The Hebrew prophets modeled a posture toward political power that is neither naïve optimism nor corrosive cynicism. They engaged deeply with political realities—they named injustice, called leaders to account, and grieved the failures of their nations. But they did so from a position of security, rooted in the sovereignty of the God who raises up kings and brings them down.</p>

<p>Jeremiah, writing to exiles in Babylon, gives perhaps the most surprising political counsel in all of Scripture: “Seek the welfare of the city where I have sent you into exile, and pray to the Lord on its behalf, for in its welfare you will find your welfare” (Jer. 29:7). This is engaged, hopeful citizenship—without the anxious grasping of those who have no other hope.</p>

<h2>Practical Wisdom for the Political Season</h2>

<p>First: limit news consumption. Not because the world doesn’t matter but because you have limited capacity for productive engagement with it, and consuming news past your capacity to act produces anxiety without yielding wisdom.</p>

<p>Second: pray for leaders you disagree with. This is not submission to injustice; it is the radical practice Paul commands (1 Tim. 2:1-2), and it is nearly impossible to hate someone you regularly pray for. The practice itself transforms the practitioner.</p>

<p>Third: invest in your local community. The political despair of our moment is partly a product of a nationalized political imagination that has left us alienated from the only politics we can actually participate in: the politics of our neighborhoods, our schools, our local governments. Show up at a school board meeting. Know your city council member. Volunteer at the food bank. The kingdom of God advances through the patient, unglamorous work of love in specific places.</p>

<p>The world is not safe, and the political order is not reliable. This has always been true. But the Christian is not called to safety; we are called to faithfulness. And faithfulness begins with rightly ordered hope—hope that is anchored not in a candidate or a party or a nation, but in the Lord who sits enthroned above the flood, who is enthroned as King forever (Ps. 29:10).</p>
    `,
  },
  {
    id: 5,
    slug: 'work-rest-rhythms-of-creation',
    title: 'Work, Rest, and the Rhythms of Creation',
    subheading: 'The sabbath is not a religious regulation imposed on nature; it is woven into the fabric of reality itself. Christians who miss this miss something essential about what it means to be human.',
    excerpt: 'Genesis 1–2 gives us a theology of work and rest that transforms both. Work is not the curse—it predates the fall. And rest is not laziness—it is an imitation of God.',
    author: AUTHORS[4],
    category: CATEGORIES[4],
    tags: ['sabbath', 'work', 'rest', 'creation', 'Genesis', 'vocation'],
    publishedAt: '2025-04-28T09:00:00Z',
    updatedAt: '2025-04-28T09:00:00Z',
    readingTime: 9,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/work/1920/1080',
      alt: 'A craftsman\'s hands working at a wooden workbench',
    },
    isEditorsPick: true,
    content: `
<p class="article-lead">The first worker in the Bible is God. “In the beginning, God created.” Before there are humans, before there is a Sabbath, before there is sin or law or covenant, there is a God who works. He speaks, he forms, he fills, he evaluates. He is, in the most original sense, a craftsman—and he calls his work good.</p>

<p>This matters immensely for how Christians think about their own work. Work is not a post-fall punishment. The ground being cursed to produce thorns and thistles (Gen. 3:17-18) is not the origin of work but the distortion of it. Adam was given the garden to “work and keep” (Gen. 2:15) before the serpent slithered into the story. Work is a creation good, an imitation of God, a participation in his ongoing governance of the world.</p>

<h2>Imaging God Through Work</h2>

<p>The doctrine of the imago Dei—that humans are made in God’s image—has often been interpreted in primarily rational or relational terms. But there is a case to be made that the image of God as presented in Genesis 1 is specifically a working image. God creates; Adam names. God subdues and fills; humans are commissioned to do the same. The image-bearing creature imitates the image-giving Creator, and one of the primary ways it does so is through purposeful, creative, ordered work.</p>

<p>This sanctifies an enormous range of human activity that we might not normally think of as spiritual. The nurse who tends a patient with care is imaging a God who heals. The engineer who designs a bridge that does not fall is imitating a Creator who makes things that hold together. The teacher who opens a child’s mind to the structure of the world participates in God’s own work of revelation.</p>

<blockquote class="pull-quote">
  <p>Your Monday morning does not exist outside God’s concern. Every act of faithful, honest, skillful work is an act of worship, even when no one is watching and no hymns are being sung.</p>
</blockquote>

<h2>The Theology of Rest</h2>

<p>But God did not only work. “And on the seventh day God finished his work that he had done, and he rested on the seventh day from all his work that he had done. So God blessed the seventh day and made it holy” (Gen. 2:2-3). This is remarkable: the first holy day in Scripture is not a fast, not a sacrifice, not a ceremony. It is a rest.</p>

<p>The Sabbath is built into the architecture of creation before the law. When Moses receives the Sabbath commandment at Sinai (Ex. 20:8-11), he grounds it not in a new religious institution but in an original creation pattern: “For in six days the Lord made heaven and earth... and he rested on the seventh day. Therefore the Lord blessed the Sabbath day and made it holy.” This is not arbitrary—it is ecological. Reality has a rhythm, and creatures who ignore it do so at their peril.</p>

<h3>Why We Are So Bad at Rest</h3>

<p>Most workers in the developed world are bad at rest, including Christian workers. We are bad at it partly because our economic system rewards productivity and punishes stillness. We are bad at it partly because our technological environment does not distinguish between working hours and non-working hours. But we are also bad at it for a theological reason: we have confused rest with laziness, and we fear what the accusation of laziness says about us.</p>

<p>But Sabbath rest is not laziness. Laziness refuses work out of indolence; Sabbath rest completes work and then stops. Laziness says the work doesn’t matter; Sabbath rest says the work is finished—for now, today, this week. Laziness is a flight from responsibility; Sabbath rest is a trust that the world will continue to turn without my management of it.</p>

<p>The hard theological implication is this: to refuse Sabbath rest is, in a quiet way, to refuse to acknowledge that God is God and we are not. The person who cannot stop working is making an implicit claim that the world depends on them—that without their constant management, things will fall apart. This is not diligence; it is a subtle form of unbelief.</p>

<h2>Integrating Work and Rest</h2>

<p>The Christian vision of human flourishing is neither the frantic productivity of the workaholic nor the empty leisure of the person who has given up on meaningful work. It is the rhythmic alternation between engaged, purposeful work and genuine, trusting rest—six days of participation in God’s ongoing creation, and one day of ceasing, reflecting, and worshiping the God whose creation it ultimately is.</p>

<p>This rhythm is available to all workers, not just those with flexible schedules. It begins with the daily rhythms of beginning and ending—of working hours that have a shape, and of sleep that is genuinely trusted rather than anxiously deferred. It includes the weekly rhythm of one day genuinely set apart. And it culminates in the grand Sabbath rest that Hebrews 4 describes as already inaugurated in Christ and not yet fully consummated.</p>

<p>We are working toward a rest we have not yet fully entered. And that eschatological rest gives our present work both urgency and ease—urgency because the work matters, ease because its ultimate outcome is not in our hands.</p>
    `,
  },
  {
    id: 6,
    slug: 'how-to-read-the-psalms',
    title: 'How to Read the Psalms: A Guide for the Spiritually Hungry',
    subheading: 'The Psalter is the prayer book of the Bible. But learning to pray with it—and not just about it—requires a kind of attentiveness most of us have never been taught.',
    excerpt: 'The Psalms are not a museum of ancient religious sentiment. They are a training ground for the full range of human experience in conversation with a living God.',
    author: AUTHORS[5],
    category: CATEGORIES[1],
    tags: ['Psalms', 'Bible study', 'prayer', 'lament', 'worship'],
    publishedAt: '2025-01-15T09:00:00Z',
    updatedAt: '2025-01-15T09:00:00Z',
    readingTime: 18,
    format: 'darkread',
    featuredImage: {
      src: 'https://picsum.photos/seed/psalms/1920/1080',
      alt: 'An open ancient book with warm candlelight',
      caption: 'Photo by Tim Wildsmith on Unsplash',
    },
    isFeatured: true,
    content: `
<p class="article-lead">C. S. Lewis called the Psalms “the most clearly miraculous element” in the Old Testament—not because of their doctrinal precision but because of their honesty. Nowhere else in the ancient world, Lewis observed, do we find a literature in which human beings speak to God with such rawness, such need, such fury, and such desperate love.</p>

<p>There are 150 Psalms, spanning perhaps five centuries of composition, covering the full range of human spiritual experience from exaltation to despair, from confidence to terror, from individual need to cosmic vision. They are, taken together, the most complete portrait of what it means to be a human creature before the face of God.</p>

<h2>Reading Psalms as Prayers, Not Poems</h2>

<p>The first mistake most readers make is approaching the Psalms as religious poetry to be analyzed rather than prayers to be prayed. While they are certainly poetry—sophisticated, artistically constructed poetry in the Hebrew tradition—their primary genre is prayer. They are addressed to God, spoken <em>to</em> a divine “you,” and they expect a response.</p>

<p>This distinction changes everything about how we read them. We approach poems with the detached appreciation of a critic; we approach prayers with the engaged vulnerability of a petitioner. The Psalms demand the latter. They require us to bring our actual lives into the text, not as an interpretive grid that distorts the meaning, but as the living situation that the text is designed to address.</p>

<blockquote class="pull-quote">
  <p>When you read Psalm 22—“My God, my God, why have you forsaken me?"—you are not observing someone else’s crisis from a safe distance. You are being given the words for your own.</p>
</blockquote>

<h2>The Shape of the Psalter</h2>

<p>The book of Psalms is not a random anthology. It was deliberately arranged, edited, and structured over centuries of use in Israel’s worship. Understanding its shape helps us read individual psalms with greater depth.</p>

<p>The Psalter is divided into five books (Pss. 1–41; 42–72; 73–89; 90–106; 107–150), perhaps mirroring the five books of Moses. Each book ends with a doxology, and the whole collection concludes with five consecutive “Hallelujah” psalms (146–150)—the liturgical crescendo of Israel’s songbook.</p>

<p>Psalms 1 and 2 function as a joint introduction to the whole collection. Psalm 1 presents the two ways—the way of the righteous and the way of the wicked—and frames the entire Psalter as a meditation on Torah. Psalm 2 introduces the Davidic king as the means by which God’s purposes are accomplished in the world. Together, they suggest that reading the Psalms is an act of meditative, royal discipleship—learning to see the world as God’s faithful servant does.</p>

<h3>Types of Psalms</h3>

<p>Form criticism has identified several recurring types in the Psalter, and recognizing these types helps the reader understand what a given psalm is doing and how to enter into it:</p>

<p><strong>Lament Psalms</strong> are the most common type, constituting roughly a third of the Psalter. They move (usually) through complaint, appeal, and trust, often ending with a vow of praise. Laments teach us that honest protest addressed to God is itself an act of faith—not the opposite of faith.</p>

<p><strong>Praise Psalms</strong> call the congregation to worship, often with a specific reason introduced by “for” or “because.” They teach us that praise is not merely emotional expression but reasoned acknowledgment of who God is and what he has done.</p>

<p><strong>Thanksgiving Psalms</strong> recount a specific instance of divine deliverance and offer gratitude for it. They train our memory—teaching us to rehearse God’s faithfulness rather than only our present need.</p>

<p><strong>Royal Psalms</strong> celebrate the Davidic king as the mediator of God’s rule. Read through a New Testament lens, they become messianic—pointing toward the one who fulfills what the Davidic dynasty only prefigured.</p>

<h2>Reading Psalms Christologically</h2>

<p>Perhaps the most important principle for Christian reading of the Psalms is this: Jesus prayed them. The Psalms are not merely Old Testament documents that Christians have borrowed; they are the prayer book of the Son of God himself. From the cross, Jesus quotes Psalm 22. In the upper room, he sings a hymn from the Hallel (Pss. 113–118). In Gethsemane, his anguish echoes the anguish of the lament psalms.</p>

<p>This means that when we pray the Psalms, we are not merely using ancient words; we are joining a prayer that the Son of God himself has prayed. We are being caught up into a conversation that has already happened between the eternal Son and the eternal Father. This is the mystical depth of Psalter prayer—not merely human words reaching up to God, but the Son’s own words, now placed on human lips.</p>

<h2>A Simple Practice</h2>

<p>If you have never read the Psalms devotionally, here is a simple beginning: read one psalm per day for five months. Don’t rush. Don’t try to learn everything about it. Read it slowly, out loud if possible. Ask: What is this psalm’s emotional register? What does it say about God? What is it asking for? Can I pray these words honestly today?</p>

<p>Some psalms will fit your situation; others won’t. The ones that don’t fit you today will fit someone else—pray them on their behalf. The Psalter was always intended to be prayed corporately, in community, as the voice of God’s people together, not just the isolated individual.</p>

<p>The Psalms will not give you easy answers. They will give you something better: a vocabulary for the full range of your experience before God, and the reassurance that nothing you feel is too raw, too desperate, or too dark to bring to him. As the Psalter teaches us, God can handle honesty. He prefers it.</p>
    `,
  },
  {
    id: 7,
    slug: 'marriage-singleness-kingdom-of-god',
    title: 'Marriage, Singleness, and the Kingdom of God',
    subheading: 'The New Testament presents both marriage and singleness as gifts—and equally valid ways of bearing witness to the coming kingdom. Why does the church struggle to believe this?',
    excerpt: "Christians have often elevated marriage to a status the New Testament doesn’t give it, leaving single people feeling like second-class citizens in the body of Christ. The gospel has a better story.",
    author: AUTHORS[5],
    category: CATEGORIES[2],
    tags: ['marriage', 'singleness', 'kingdom of God', 'sexuality', 'community'],
    publishedAt: '2025-03-28T09:00:00Z',
    updatedAt: '2025-03-28T09:00:00Z',
    readingTime: 11,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/marriage/1920/1080',
      alt: 'Two chairs on an empty porch looking at a sunset',
    },
    content: `
<p class="article-lead">I am a single man in my forties who pastors churches and travels the world speaking about Christian sexuality. The number of times I have been told, with the best of intentions, that I would understand these things better once I was married is beyond counting. The implication, always, is that my singleness is a problem to be solved—a waiting room I have not yet left.</p>

<p>I don’t think I am alone in this experience. Single people in many evangelical churches feel this way routinely—as if their lives are incomplete, as if they are a story waiting to begin, as if the fullness of Christian experience is behind a door that can only be opened by a wedding ring.</p>

<p>This is not the New Testament’s view. And the damage done by our unexamined cultural assumptions about marriage has been severe and extensive.</p>

<h2>What Paul Actually Says</h2>

<p>In 1 Corinthians 7, Paul makes a remarkable series of claims that most evangelical churches have quietly set aside. He says that singleness is a gift (v. 7). He says it may actually be preferable, for certain purposes, to marriage (v. 38). He says that the unmarried person is “free from anxieties” about the things of the world and can be “devoted to the Lord in body and spirit” in a way that the married person, by definition, cannot (vv. 32-34).</p>

<p>Paul is not devaluing marriage. He has already affirmed its validity and goodness. But he is refusing to privilege it—insisting that singleness is not a consolation prize for those who can’t get a partner but a distinct gift with its own unique kingdom advantages.</p>

<blockquote class="pull-quote">
  <p>Jesus was single. The most fully human person who ever lived, the one who represents perfect human flourishing, was unmarried. That fact alone should unsettle our cultural assumptions about what completeness looks like.</p>
</blockquote>

<h2>The Kingdom Context</h2>

<p>The key to understanding both marriage and singleness in the New Testament is eschatology: the belief that the kingdom of God has broken into history in Jesus and is moving toward its consummation at his return. Both marriage and singleness are understood within this eschatological frame.</p>

<p>Marriage is a sign of the relationship between Christ and the church (Eph. 5:22-33). It is not merely a social institution or a romantic arrangement; it is a living parable of the gospel. When a husband loves his wife sacrificially and a wife respects her husband, they are together enacting, in their bodies and their daily choices, the drama of divine love for a wayward people.</p>

<p>Singleness is an equally potent sign—but of a different truth. The single person embodies the truth that ultimate belonging is not found in a human partnership but in Christ alone. Paul’s unmarried life was a witness to his generation that even in this age, the kingdom of God provides a community and a belonging that transcends the family unit. And it will be even more so in the next age: in the resurrection, Jesus says, “they neither marry nor are given in marriage, but are like angels in heaven” (Matt. 22:30). Singleness points forward to that reality.</p>

<h3>The Church as Family</h3>

<p>If the New Testament is to be believed, the church is not a collection of nuclear families who happen to share a belief system. It is itself a family—a new family formed not by blood or marriage but by baptism, in which “there is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus” (Gal. 3:28).</p>

<p>This means that the single person in a healthy church is not family-less. They have brothers and sisters, parents and children in the Lord. They share meals, they share resources, they share grief and joy. The household of faith, when it functions as it should, provides something that no marital arrangement can replicate: a community of belonging that extends across every human division.</p>

<p>But this requires churches to do something difficult: to build genuine community rather than merely programming. It requires married couples to open their homes and their tables to single people, not as charity but as family. It requires single people to exercise genuine hospitality in return—to offer the flexibility and availability that their season of life provides.</p>

<h2>A Better Story</h2>

<p>The church has a better story to tell than the one we have been telling. The better story does not place marriage at the center of human flourishing and singleness at the margins. It places Christ at the center, with marriage and singleness as two different but equally valid ways of bearing witness to him.</p>

<p>In that story, the single person’s life is not incomplete. It is full—full of kingdom work, full of freedom for service, full of a radical availability that marriage, by design, curtails. And the married person’s life is not a settled harbor but a demanding school of sacrifice and love, a daily death-to-self that is no less demanding than celibacy and no less spiritually formative.</p>

<p>Both states require grace. Both states bear witness. Both states are, in their own way, gifts—not to us but through us, to a world that needs to see what it looks like to organize an entire life around the kingdom of God and not around the achievement of romantic fulfillment.</p>
    `,
  },
]

// Get article by slug
export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find(a => a.slug === slug)
}

// Get articles by category
export function getArticlesByCategory(categorySlug: string): Article[] {
  return ARTICLES.filter(a => a.category.slug === categorySlug)
}

// Get featured articles
export function getFeaturedArticles(): Article[] {
  return ARTICLES.filter(a => a.isFeatured)
}

// Get editors' picks
export function getEditorsPicks(): Article[] {
  return ARTICLES.filter(a => a.isEditorsPick)
}

// Get recent articles
export function getRecentArticles(limit = 6): Article[] {
  return [...ARTICLES]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}
