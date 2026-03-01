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
    name: ‘Melissa Kruger’,
    slug: ‘melissa-kruger’,
    avatar: ‘https://picsum.photos/seed/author7/80/80’,
    bio: "Melissa Kruger is The Gospel Coalition’s director of women’s initiatives and the author of several books on Christian womanhood.",
    role: "Director of Women’s Initiatives, TGC",
  },
  {
    id: 8,
    name: ‘Joshua Chatraw’,
    slug: ‘joshua-chatraw’,
    avatar: ‘https://picsum.photos/seed/author8/80/80’,
    bio: ‘Joshua Chatraw holds the Billy Graham chair for evangelism at Samford University and is a fellow of the Keller Center for Cultural Apologetics. He is the author of several books on apologetics, doubt, and reaching secular people with the gospel.’,
    role: ‘Billy Graham Chair for Evangelism, Samford University’,
  },
  {
    id: 9,
    name: ‘Rebecca McLaughlin’,
    slug: ‘rebecca-mclaughlin’,
    avatar: ‘https://picsum.photos/seed/author9/80/80’,
    bio: ‘Rebecca McLaughlin holds a PhD from Cambridge and a theology degree from Oak Hill College. She is a fellow of the Keller Center and the author of several books addressing contemporary objections to Christian faith.’,
    role: ‘Author & Keller Center Fellow’,
  },
  {
    id: 10,
    name: ‘Andrew Wilson’,
    slug: ‘andrew-wilson’,
    avatar: ‘https://picsum.photos/seed/author10/80/80’,
    bio: "Andrew Wilson is the teaching pastor of King’s Church London and a fellow of the Keller Center for Cultural Apologetics. He is a contributing editor at Christianity Today and the author of multiple books on theology and culture.",
    role: "Teaching Pastor, King’s Church London",
  },
  {
    id: 11,
    name: ‘Chris Watkin’,
    slug: ‘chris-watkin’,
    avatar: ‘https://picsum.photos/seed/author11/80/80’,
    bio: ‘Chris Watkin is an associate professor at Monash University in Australia and a fellow of the Keller Center. He is the author of Biblical Critical Theory and writes at the intersection of philosophy, culture, and Christian thought.’,
    role: ‘Associate Professor, Monash University’,
  },
  {
    id: 12,
    name: ‘Alan Noble’,
    slug: ‘alan-noble’,
    avatar: ‘https://picsum.photos/seed/author12/80/80’,
    bio: ‘Alan Noble is an associate professor of English at Oklahoma Baptist University and a fellow of the Keller Center. He is the author of Disruptive Witness and On Getting Out of Bed, and a co-founder of Christ and Pop Culture.’,
    role: ‘Associate Professor of English, Oklahoma Baptist University’,
  },
  {
    id: 13,
    name: ‘Gavin Ortlund’,
    slug: ‘gavin-ortlund’,
    avatar: ‘https://picsum.photos/seed/author13/80/80’,
    bio: ‘Gavin Ortlund is the president of Truth Unites, a ministry of gospel clarity and theological triage, and a visiting professor at Phoenix Seminary. He is a fellow of the Keller Center and the author of Finding the Right Hills to Die On.’,
    role: ‘President, Truth Unites’,
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
      alt: "A craftsman\'s hands working at a wooden workbench",
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
  {
    id: 8,
    slug: 'augustine-was-right-about-the-restless-heart',
    title: 'Augustine Was Right About the Restless Heart',
    subheading: "Fifteen hundred years after his Confessions, the bishop of Hippo's diagnosis of the human condition has never been more urgent.",
    excerpt: "In an age of infinite distraction and curated identity, Augustine's restless heart remains the most accurate diagnosis of the human condition ever penned.",
    author: AUTHORS[0],
    category: CATEGORIES[1],
    tags: ['Augustine', 'Confessions', 'desire', 'rest', 'the heart'],
    publishedAt: '2025-03-12T09:00:00Z',
    updatedAt: '2025-03-12T09:00:00Z',
    readingTime: 7,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/augustine/1920/1080',
      alt: 'Ancient stone archway at dusk',
      caption: '',
    },
    isFeatured: false,
    isEditorsPick: true,
    content: `
<p class="article-lead">You have made us for yourself, O Lord, and our heart is restless until it rests in you." Augustine wrote those words in the opening pages of his <em>Confessions</em> around the year 397. Fifteen centuries later, they remain the most precise diagnosis of the human condition ever committed to parchment.</p>

<p>We are not merely thinking animals or social creatures or even moral agents. We are, at the most fundamental level, creatures of desire—made for a love we cannot manufacture, aimed at a rest we cannot earn, haunted by a belonging that no earthly arrangement can supply.</p>

<h2>The Architecture of Longing</h2>

<p>Augustine understood that the heart is not simply a muscle. It is the seat of love, the center of will, the organizing principle of the whole person. What we love orders everything else. "Thou madest us for thyself," he wrote, not in a moment of pious sentiment, but as a structural claim about human nature. The restlessness is not a bug; it is a feature—a God-installed homing signal that will not be satisfied until it finds its proper object.</p>

<p>This is why the pursuit of satisfaction through created things is not merely unsuccessful but structurally futile. It is not that pleasure is bad, or that beauty is false, or that human love is worthless. It is that none of these things were designed to bear the weight of ultimate longing. When we ask them to, they collapse—and we are left more hungry than before.</p>

<blockquote class="pull-quote">
  <p>The restlessness is not a bug in human nature. It is a feature—a God-installed homing signal that will not be satisfied until it finds its proper object.</p>
</blockquote>

<h2>What Augustine Saw That We Have Forgotten</h2>

<p>The great bishop saw something that our therapeutic culture has systematically obscured: the problem with the human heart is not primarily psychological but theological. We are not restless because of childhood wounds or social conditioning or neurological imbalance—though all of these are real. We are restless because we were made for God and we have turned away from him.</p>

<p>This means that the cure is also theological. You cannot rest a restless heart with better habits, more mindfulness, or a more curated life. These things may quiet the symptoms for a season. But the ache returns—because the ache is structural. It is the form of a creature waiting to be filled by its Creator.</p>

<h3>A Word for the Scrolling Generation</h3>

<p>Augustine lived in a world of relatively limited distraction. He had rhetoric, philosophy, theater, and a social life in the salons of Milan. We live in a world of infinite distraction—an entire civilization organized around the proposition that the next experience, the next click, the next relationship will finally satisfy. Augustine would recognize the mechanism immediately, even if he would be astonished by the scale. He spent his early life pursuing exactly this kind of restless satisfaction, and he documented its failure with unflinching honesty. "Late have I loved you," he wrote—not with self-pity but with wonder. The love that had been available all along had finally arrived. And it was enough.</p>
    `,
  },
  {
    id: 9,
    slug: 'how-to-talk-with-your-children-about-death',
    title: 'How to Talk with Your Children About Death',
    subheading: 'Christian parents have a unique opportunity—and responsibility—to help their children grieve with hope rather than terror.',
    excerpt: 'Most parents dread the question. But children who learn to speak honestly about death within a framework of resurrection hope are better equipped for life than those who are shielded from it.',
    author: AUTHORS[6],
    category: CATEGORIES[2],
    tags: ['parenting', 'death', 'grief', 'children', 'resurrection'],
    publishedAt: '2025-03-10T09:00:00Z',
    updatedAt: '2025-03-10T09:00:00Z',
    readingTime: 6,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/children-death/1920/1080',
      alt: 'A parent and child walking hand in hand through autumn leaves',
      caption: '',
    },
    isFeatured: false,
    isEditorsPick: true,
    content: `
<p class="article-lead">The question arrives without warning. A goldfish floats to the surface. A grandparent's chair sits empty at Christmas. A child in the backseat asks, quietly, "Mommy, are you going to die?" Most parents freeze. Some deflect. Some reach for euphemisms—"passed away," "went to sleep," "went to be with the angels"—that protect no one and confuse everyone.</p>

<p>But Christian parents have a profound opportunity in these moments that secular parenting literature almost never recognizes: we have something true and beautiful and specific to say.</p>

<h2>Why Honesty Matters</h2>

<p>Child development research consistently shows that children who are given honest, age-appropriate explanations of death fare better emotionally than those who are shielded from it. They grieve more healthily, process loss more effectively, and develop a more integrated sense of reality. The instinct to protect children from death is understandable. But death is not something we can protect them from—only something we can prepare them for, or fail to.</p>

<p>Christian honesty about death goes one step further: we acknowledge its reality and its horror while refusing to grant it the final word. "Jesus wept" at Lazarus's tomb—and then raised him. The tears and the resurrection belong together. Our children need to see both.</p>

<blockquote class="pull-quote">
  <p>We do not need to protect our children from death. We need to prepare them for it—with truth, with tears, and with the hope that defeats it.</p>
</blockquote>

<h2>Language That Helps</h2>

<p>Use direct language. "Died" and "death" are not cruel words—they are honest ones. Euphemisms like "passed away" or "went to sleep" confuse young children and can create unhelpful associations (sleep becomes frightening; "passing" has no concrete meaning). Directness paired with warmth is the goal.</p>

<p>Explain what you believe. "We believe that people who love Jesus go to be with him when they die, and that one day he will give them back their bodies, better than before." This is not too complicated for a six-year-old. Children understand more than we give them credit for, especially when the framework is given consistently over time.</p>

<h3>When a Pet Dies</h3>

<p>Pet deaths are often a child's first encounter with loss, and they should be taken seriously rather than minimized. A goldfish flush accompanied by "we'll get another one" teaches a child that death is trivial and grief is a problem to be solved quickly. A small, honest acknowledgment of sadness—"It's okay to feel sad. Nemo was your fish, and you loved him"—teaches something far more valuable: that love matters, loss is real, and we can face both with grace.</p>

<p>You do not need a perfect theology of pet resurrection to handle this moment well. What you need is honesty about the loss, permission for the grief, and confidence that the God who made your child also made goldfish—and that all things are held in his hands.</p>
    `,
  },
  {
    id: 10,
    slug: 'the-case-for-classical-christian-education',
    title: 'The Case for Classical Christian Education',
    subheading: 'Why more evangelical families are rediscovering the trivium—and what it means for the church.',
    excerpt: 'Classical Christian education is no mere educational trend. It is a deliberate recovery of a vision of human formation rooted in truth, goodness, and beauty.',
    author: AUTHORS[3],
    category: CATEGORIES[5],
    tags: ['education', 'classical education', 'church', 'culture', 'formation'],
    publishedAt: '2025-03-08T09:00:00Z',
    updatedAt: '2025-03-08T09:00:00Z',
    readingTime: 8,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/classical-ed/1920/1080',
      alt: 'Books stacked on a wooden desk in warm afternoon light',
      caption: '',
    },
    isFeatured: false,
    isEditorsPick: false,
    content: `
<p class="article-lead">Something unusual is happening in evangelical families across the country. Parents who were educated in public schools, who sent their children to public schools, who never thought much about pedagogy or Latin or the trivium, are pulling their children out and enrolling them in classical Christian schools—or founding co-ops, or converting spare rooms into grammar classrooms. The movement is growing faster than any single institution can track.</p>

<p>What is drawing them? And what does it mean for the church?</p>

<h2>What Classical Education Actually Is</h2>

<p>Classical education is not simply difficult education, or old-fashioned education, or education with Latin. It is a comprehensive vision of human formation organized around the belief that there is a body of truth worth knowing, a set of intellectual virtues worth cultivating, and a tradition of wisdom worth inheriting. The medieval trivium—grammar, logic, rhetoric—is not a curriculum so much as a developmental theory: first you learn to receive (grammar), then you learn to reason (logic), then you learn to persuade (rhetoric).</p>

<p>The "Christian" in classical Christian education matters as much as the "classical." It means that the entire enterprise is conducted within a teleological framework: human beings are made in the image of God, are being formed for eternity, and the purpose of education is not merely to produce successful graduates but to shape persons who love what is true, good, and beautiful—because these things reflect the nature of God himself.</p>

<blockquote class="pull-quote">
  <p>The purpose of classical Christian education is not to produce successful graduates but to shape persons who love what is true, good, and beautiful.</p>
</blockquote>

<h2>Why Now?</h2>

<p>Several forces have converged to drive the current revival. The first is disillusionment with progressive education's outcomes—not only academic outcomes (test scores, literacy rates) but formational ones. Parents who have watched their children graduate from college intellectually unmoored, unable to engage with a challenging idea, or incapable of constructing a sustained argument, are searching for an alternative.</p>

<p>The second is a deeper hunger for rootedness. Classical education offers students something that modern education rarely provides: a sense of participation in a great conversation that stretches back to Homer, flows through Augustine and Aquinas, and remains alive today. Students are not isolated individuals making meaning from scratch; they are heirs of a tradition.</p>

<h3>The Church's Stake</h3>

<p>The classical renewal matters for the church because the church needs formed minds, not merely sincere hearts. The creeds were written by people trained in logic. The great hymns were composed by people steeped in rhetoric. The theological tradition that sustains evangelical faith was built by people who knew Latin and Greek and could argue about prepositions.</p>

<p>Classical Christian education is not the only faithful path for Christian families. But it is a serious one—and the churches that engage it thoughtfully will find themselves with congregants who can think, argue, and bear witness with unusual depth.</p>
    `,
  },
  {
    id: 11,
    slug: 'praying-the-psalms-when-the-world-is-on-fire',
    title: 'Praying the Psalms When the World Is on Fire',
    subheading: 'In an era of perpetual crisis, the ancient hymnal of Israel teaches us how to bring our full selves before God.',
    excerpt: "The Psalms were not written for comfortable people in comfortable times. They were written for exactly the moment we are living in—and they show us how to pray when we don't know how.",
    author: AUTHORS[4],
    category: CATEGORIES[1],
    tags: ['Psalms', 'prayer', 'lament', 'worship', 'Scripture'],
    publishedAt: '2025-03-06T09:00:00Z',
    updatedAt: '2025-03-06T09:00:00Z',
    readingTime: 6,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/psalms-fire/1920/1080',
      alt: 'Open Bible with soft natural light',
      caption: '',
    },
    isFeatured: true,
    isEditorsPick: false,
    content: `
<p class="article-lead">In times of crisis, our prayers tend to shrink. We become afraid of saying the wrong thing to God, so we say very little. Or we say very cheerful things that don't match the fear in our chest. Or we stop praying altogether, because the gap between what we feel and what we think we're allowed to feel before God has grown too wide to bridge.</p>

<p>The Psalms were written for this exact problem. They are, as Athanasius famously said, a mirror of the soul—a book in which every movement of the human heart finds its voice and is brought into the presence of God.</p>

<h2>The Permission to Lament</h2>

<p>More than a third of the 150 psalms are laments—poems of anguish, complaint, confusion, and protest addressed directly to God. This is not accidental. The ancient Israelites understood something that contemporary worship culture has largely forgotten: bringing your grief to God is an act of faith, not faithlessness.</p>

<p>Psalm 88 ends with the word "darkness." There is no resolution, no turn to praise, no silver lining. The psalm ends in the dark, and it ends with God. This is not spiritual failure. It is spiritual maturity—the willingness to stay in the presence of God even when the presence of God feels like absence.</p>

<blockquote class="pull-quote">
  <p>The Psalms give us permission to bring our full selves into the presence of God—not the self we think God wants to see, but the self we actually are.</p>
</blockquote>

<h2>How to Begin</h2>

<p>If you have not prayed the Psalms, the simplest way to begin is to read one each morning before you check your phone. Don't filter it. Don't apologize for the parts that feel too angry or too desperate. Let the words do their work. The Psalms will teach you to pray by giving you words to pray, and those words have been formed over three thousand years of human beings bringing their whole lives before the God who made them.</p>

<p>Eugene Peterson, who spent his life translating and teaching the Psalms, said that they are "a school of prayer." You don't study the Psalms the way you study a textbook. You are apprenticed to them. You let them form the shape of your prayer over years, until their vocabulary becomes your vocabulary and their movements become your movements.</p>

<h3>Psalms for Particular Seasons</h3>

<p>When you are afraid: Psalm 46. When you have sinned: Psalm 51. When you feel abandoned: Psalm 22. When you are overwhelmed by suffering: Psalm 88. When you need to remember what is true: Psalm 103. When the world seems out of control: Psalm 2. These are not magic formulas—they are addresses, the kind of prayer that locates you in a tradition of people who have felt what you feel and brought it before the same God you are bringing it before now. You are never the first. You are never alone.</p>
    `,
  },
  {
    id: 12,
    slug: 'when-your-church-disappoints-you',
    title: 'When Your Church Disappoints You',
    subheading: 'Every church is made of people who will fail you. The question is not whether that will happen, but what you will do when it does.',
    excerpt: 'Disillusionment with the local church is at epidemic levels. But the solution is not a more perfect church—it is a more honest understanding of what the church is and what Jesus promised it would be.',
    author: AUTHORS[2],
    category: CATEGORIES[5],
    tags: ['church', 'community', 'disappointment', 'forgiveness', 'pastoral'],
    publishedAt: '2025-03-04T09:00:00Z',
    updatedAt: '2025-03-04T09:00:00Z',
    readingTime: 7,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/church-disappoint/1920/1080',
      alt: 'Empty church pews in soft morning light',
      caption: '',
    },
    isFeatured: false,
    isEditorsPick: false,
    content: `
<p class="article-lead">She had been attending the same church for eleven years. She had served in children's ministry, sat with grieving families, given faithfully to the benevolence fund. Then something happened—a decision made by the elders without explanation, a friendship that ended badly, a pastoral response to her crisis that felt cold and scripted. And now she sat across from me and said the words I have heard too many times: "I don't know if I can go back."</p>

<p>I have sat with enough people in this exact chair to know that her pain is real. I also know that what she does next will shape her spiritual life for decades.</p>

<h2>What You Were Promised and What You Weren't</h2>

<p>Jesus promised that the gates of hell would not prevail against his church. He promised to be present where two or three are gathered in his name. He promised to build his church. He never promised that his church would be made of people who would not hurt you, lead you poorly, make decisions you disagreed with, or fail you in your most vulnerable moments.</p>

<p>We come to the local church carrying expectations that the church was never designed to meet. We want a community of people who are already transformed rather than a community of people who are in the process of being transformed—which is to say, still sinning, still struggling, still getting things wrong. The church is not a community of the already-arrived. It is a community of the forgiven.</p>

<blockquote class="pull-quote">
  <p>You are not looking for a church without sinners. You are looking for a church where sinners are being genuinely changed—and where you are willing to be one of them.</p>
</blockquote>

<h2>The Grace You Have Received</h2>

<p>The most stabilizing question I know for a person considering leaving a church is this: Have you been forgiven by God for things as serious as what has been done to you? If you are a Christian, the answer is yes. This is not a guilt trip. It is an orientation. We extend grace not because people deserve it but because we have received what we did not deserve, and that reception has changed the calculus of our obligations to one another.</p>

<h3>When to Stay and When to Go</h3>

<p>Not every church is worth staying in. There are churches marked by spiritual abuse, persistent false teaching, or leadership so broken that the congregation cannot be served. In those situations, leaving is not abandonment—it is wisdom. But most church disappointments are not in this category. Most are the ordinary friction of fallen people trying to love one another across their differences, and failing sometimes. In those situations, staying—with open eyes, honest conversation, and extended grace—is almost always the more Christlike path. The church you find on the other side of disappointment, if you stay and work through it, will be a church you know more deeply, love more honestly, and serve more faithfully than the idealized church you were defending in the first place.</p>
    `,
  },
  {
    id: 13,
    slug: 'the-problem-with-follow-your-heart',
    title: "The Problem with 'Follow Your Heart'",
    subheading: "Everywhere you look, the culture tells you that authentic selfhood means acting on your deepest desires. Scripture tells a different story.",
    excerpt: "\"Follow your heart\" sounds like wisdom, but Scripture consistently warns that the heart is the last place you should look for moral guidance without redemption.",
    author: AUTHORS[1],
    category: CATEGORIES[0],
    tags: ['culture', 'the heart', 'authenticity', 'desire', 'identity'],
    publishedAt: '2025-03-02T09:00:00Z',
    updatedAt: '2025-03-02T09:00:00Z',
    readingTime: 7,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/follow-heart/1920/1080',
      alt: 'Neon sign reading "Be True to Yourself" in warm pink light',
      caption: '',
    },
    isFeatured: true,
    isEditorsPick: false,
    content: `
<p class="article-lead">The phrase is everywhere. Graduation speeches. Animated films. Wellness retreats. Therapy-speak. "Follow your heart." It sounds obvious and even liberating. Who would argue against following your heart? What kind of monster tells you to override your deepest feelings? But the more carefully you examine the philosophy behind this phrase, the more clearly you see that it is not wisdom. It is, at best, a half-truth. At worst, it is a recipe for moral catastrophe.</p>

<h2>The Cultural Story</h2>

<p>The "follow your heart" ethic is the dominant moral philosophy of our moment, and it rests on a specific set of assumptions: that the authentic self is the inner self, that authenticity is achieved by acting in accordance with your desires, and that external constraints on those desires—from family, community, religion, or tradition—are inherently suspect and probably harmful.</p>

<p>This story is coherent, and it has enormous cultural momentum behind it. But it requires you to believe something about the heart that the data, and more importantly the Scripture, does not support.</p>

<h2>What the Bible Says About the Heart</h2>

<p>The biblical portrait of the unredeemed heart is not flattering. Jeremiah 17:9 is blunt: "The heart is deceitful above all things, and desperately sick; who can understand it?" Jesus, in Mark 7, locates the source of moral evil not in external forces but in the heart: "From within, out of the heart of man, come evil thoughts, sexual immorality, theft, murder, adultery, coveting, wickedness, deceit, sensuality, envy, slander, pride, foolishness."</p>

<p>This does not mean that every desire is evil or that the heart has no role in moral discernment. The redeemed heart, shaped by the Spirit and formed by Scripture, is a genuinely trustworthy guide. "Delight yourself in the Lord," the psalmist writes, "and he will give you the desires of your heart" (Ps. 37:4)—not because God will give you whatever you want, but because the heart that delights in God will want what is genuinely good.</p>

<blockquote class="pull-quote">
  <p>The question is not whether to follow your heart. The question is whose shaping your heart has received—and whether you trust that shaper.</p>
</blockquote>

<h3>The Shape of True Authenticity</h3>

<p>The Christian alternative to "follow your heart" is not "suppress your desires" or "be defined by rules." It is something more demanding and more liberating than either: "be transformed by the renewing of your mind" (Rom. 12:2), so that what you desire and what is genuinely good converge over time. This is sanctification—the slow, Spirit-driven process by which the heart itself is reshaped to love what is lovely, to want what is worth wanting.</p>

<p>The fully formed Christian is not someone who has crushed desire but someone whose desires have been healed. And that person—with redeemed desires, formed affections, a conscience shaped by Scripture—can follow their heart. Not because the heart is automatically trustworthy, but because it has been entrusted to a Shepherd who is.</p>
    `,
  },
  {
    id: 14,
    slug: 'loneliness-is-not-a-sin',
    title: 'Loneliness Is Not a Sin',
    subheading: 'We treat loneliness as something to be fixed or overcome. But Scripture treats it as a condition to be carried faithfully—and brought to God.',
    excerpt: 'Loneliness has become a public health crisis. The church has something profound to offer—not the elimination of loneliness, but the transformation of it.',
    author: AUTHORS[5],
    category: CATEGORIES[2],
    tags: ['loneliness', 'community', 'singleness', 'friendship', 'suffering'],
    publishedAt: '2025-02-28T09:00:00Z',
    updatedAt: '2025-02-28T09:00:00Z',
    readingTime: 6,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/loneliness/1920/1080',
      alt: 'A single figure seated at a window in winter light',
      caption: '',
    },
    isFeatured: false,
    isEditorsPick: true,
    content: `
<p class="article-lead">The Surgeon General of the United States has declared loneliness a public health crisis. Studies suggest that chronic loneliness carries health risks comparable to smoking fifteen cigarettes a day. And yet in the church, we often treat loneliness as a symptom of spiritual failure—evidence that someone is too withdrawn, too picky about friendships, or insufficiently invested in community. We treat it as a problem to be solved rather than a condition to be carried.</p>

<p>But loneliness is not a sin. Jesus was lonely. The Psalms are full of loneliness. The prophets experienced the particular anguish of speaking to people who would not listen. Loneliness is part of the texture of fallen human experience, and the church's task is not to pretend otherwise.</p>

<h2>The Loneliness Jesus Knew</h2>

<p>Consider Gethsemane. Jesus asked his three closest friends to stay awake with him during the most anguished night of his life. He returned and found them sleeping—not once, but three times. There is a loneliness in that scene that is palpable and unreduced. The Son of God, fully human, faced the cup of God's wrath in the company of sleeping disciples. "Could you not watch with me one hour?"</p>

<p>This matters because it means that when we bring our loneliness to Christ, we are not bringing something foreign to him. We are bringing something he has carried. He is not a High Priest who is unable to sympathize with our weakness—he is one who has been tested in every way we are (Heb. 4:15), including in the failure of community to show up when it was most needed.</p>

<blockquote class="pull-quote">
  <p>When we bring our loneliness to Christ, we are not bringing something foreign to him. We are bringing something he has carried.</p>
</blockquote>

<h2>What Faithful Loneliness Looks Like</h2>

<p>Faithful loneliness is not the absence of effort toward community. It is the refusal to treat community as an idol that, when withheld, licenses despair. It is the willingness to continue reaching out, serving others, and remaining present in the body of Christ even when the body of Christ has not yet provided the belonging you need. It is the patient, sometimes anguished practice of waiting on God to meet the need that people have not yet met.</p>

<h3>What the Church Can Do</h3>

<p>The most important thing the church can do for lonely people is stop pretending that everyone is fine. The greeting "how are you?" has become so thoroughly emptied of meaning that it functions as an instruction: perform wellness. When churches create genuine space for honest disclosure—in small groups, in pastoral conversations, in the liturgical acknowledgment of suffering—they create the conditions in which loneliness can be named, shared, and sometimes relieved. No church can eliminate loneliness. But every church can refuse to make it worse by demanding that suffering people perform happiness they do not feel.</p>
    `,
  },
  {
    id: 15,
    slug: 'how-cs-lewis-would-think-about-social-media',
    title: 'How C. S. Lewis Would Think About Social Media',
    subheading: 'Lewis never saw a smartphone, but his writings on attention, community, and the deformation of desire tell us almost everything we need to know.',
    excerpt: 'What would the author of The Screwtape Letters make of the attention economy? His diagnosis of the demonic is more useful than almost anything written after the invention of the algorithm.',
    author: AUTHORS[1],
    category: CATEGORIES[0],
    tags: ['C.S. Lewis', 'technology', 'social media', 'attention', 'Screwtape'],
    publishedAt: '2025-02-25T09:00:00Z',
    updatedAt: '2025-02-25T09:00:00Z',
    readingTime: 14,
    format: 'longread',
    featuredImage: {
      src: 'https://picsum.photos/seed/lewis-social/1920/1080',
      alt: 'Vintage typewriter beside a glowing smartphone screen',
      caption: '',
    },
    isFeatured: false,
    isEditorsPick: true,
    content: `
<p class="article-lead">In Letter VI of <em>The Screwtape Letters</em>, the senior demon Screwtape advises his nephew Wormwood on how to exploit the distraction economy of wartime England. "You will say that these are very small sins," Screwtape writes, "and doubtless, like all young tempters, you are anxious to be able to report spectacular wickedness. But do remember, the only thing that matters is the extent to which you separate the man from the Enemy. It does not matter how small the sins are, provided that their cumulative effect is to edge the man away from the Light and out into the Nothing."</p>

<p>Lewis wrote that in 1942. He had never seen a smartphone, an algorithm, or a social media feed engineered to maximize engagement. And yet his diagnosis of the spiritual mechanics of distraction is more precise than almost anything written since the invention of the scroll button.</p>

<h2>The Screwtape Playbook and the Attention Economy</h2>

<p>Screwtape's strategy for damning Wormwood's patient is remarkably consistent throughout the letters: prevent sustained attention. Interrupt contemplation. Fill the mind with a "stream of immediate sense experiences" so that the patient never has a quiet moment in which to confront what he actually believes, wants, or is becoming. "The real trouble about the set your patient is living in," Screwtape explains, "is that it is merely Christian and superficially intellectual, though it does not contain many people of real spiritual understanding." The cure? Noise. Business. The perpetual now.</p>

<p>This is, with uncanny precision, the design philosophy of every major social media platform. The goal is not to inform you, or to connect you, or even to entertain you. The goal is to capture your attention and hold it—because captured attention is the product that is sold to advertisers. Everything else is incidental. The algorithm that serves you content has no interest in your flourishing. It has an interest in your engagement. These are not the same thing.</p>

<blockquote class="pull-quote">
  <p>The algorithm that serves you content has no interest in your flourishing. It has an interest in your engagement. These are not the same thing.</p>
</blockquote>

<h2>Lewis on the Corruption of Pleasure</h2>

<p>One of Lewis's most important insights—developed across <em>The Screwtape Letters</em>, <em>The Weight of Glory</em>, and <em>Surprised by Joy</em>—is that demonic strategy rarely involves making things bad. It involves making them empty. Screwtape tells Wormwood: "Never forget that when we are dealing with any pleasure in its healthy and satisfying form, we are, in a sense, on the Enemy's ground. I know we have won many a soul through pleasure. All the same, it is His invention, not ours. He made the pleasures: all our research so far has not enabled us to produce one."</p>

<p>The demonic strategy, then, is not to replace genuine pleasure with obvious vice. It is to replace genuine pleasure with an imitation so close to the real thing that the consumer never notices the difference—until, over years of ingestion, they find they have lost the capacity for the real thing altogether.</p>

<p>This is precisely what social media does to human connection. We are social creatures. We were made for belonging, for recognition, for the experience of being known. Social media offers an imitation of all these things that is close enough to feel satisfying in the moment but hollow enough to leave us hungrier than before. The dopamine hit of a like is not the same as the experience of being genuinely seen by a friend who has known you for twenty years. But if you spend enough time pursuing the former, you will find the capacity for the latter has quietly atrophied.</p>

<h2>What Lewis Would Prescribe</h2>

<p>In <em>The Weight of Glory</em>, Lewis writes about the "inconsolable longing"—the <em>Sehnsucht</em>—that he believed was hardwired into human experience: a longing for something that no earthly thing satisfies, pointing toward the One who made us for himself. His counsel for the spiritual life was not primarily to avoid bad things but to cultivate good ones: deep friendship, long books, sustained prayer, the pleasures that grow rather than diminish with repetition.</p>

<p>"Friendship is unnecessary," he wrote in <em>The Four Loves</em>, "like philosophy, like art, like the universe itself (for God did not need to create). It has no survival value; rather it is one of those things which give value to survival." This is the kind of thing you cannot build in a comments section. It is built in the slow accumulation of shared time, honest conversation, and the willingness to be present to another person without an audience.</p>

<h3>A Practical Lewisian Audit</h3>

<p>If Lewis were counseling a contemporary Christian on their relationship to social media, I suspect he would ask something like this: Does your use of these platforms increase your capacity for genuine attention, real friendship, and honest self-knowledge? Or does it diminish those capacities? If the latter, it is not merely a waste of time. It is a spiritual formation tool—one that is forming you, slowly and reliably, away from the life you were made for.</p>

<p>The question is not whether social media is intrinsically evil. Lewis was far too sophisticated a thinker to traffic in such simplicities. The question is what it is doing to the texture of your inner life—to your ability to be still, to be present, to desire deeply, to love concretely. These are the questions he would want us to take seriously. And the answers, if we are honest, are not comfortable.</p>
    `,
  },
  {
    id: 16,
    slug: 'the-theology-of-rest-why-sabbath-still-matters',
    title: 'The Theology of Rest: Why Sabbath Still Matters',
    subheading: 'In a culture that treats productivity as a virtue and busyness as a badge of honor, the commandment to rest is more radical—and more necessary—than ever.',
    excerpt: 'Sabbath is not a lifestyle suggestion. It is a theological statement about who God is, who we are, and what work is ultimately for.',
    author: AUTHORS[0],
    category: CATEGORIES[4],
    tags: ['Sabbath', 'rest', 'work', 'faith and work', 'Ten Commandments'],
    publishedAt: '2025-02-22T09:00:00Z',
    updatedAt: '2025-02-22T09:00:00Z',
    readingTime: 8,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/sabbath-rest/1920/1080',
      alt: 'A hammock strung between two trees at golden hour',
      caption: '',
    },
    isFeatured: false,
    isEditorsPick: false,
    content: `
<p class="article-lead">Of the Ten Commandments, the fourth is the one most evangelical Christians feel most comfortable ignoring. We do not murder. We do not steal. We do not bow to idols. But "remember the Sabbath day, to keep it holy" (Exod. 20:8)—this one we treat as culturally conditioned, spiritually optional, or simply impractical in the face of modern demands. We are wrong on all three counts.</p>

<h2>Sabbath as Theological Protest</h2>

<p>The Sabbath is not primarily a productivity strategy, a wellness practice, or a weekly recharge cycle. It is a theological statement. To rest on the seventh day is to declare, with your body and your calendar, that you are not the source of your own sustenance. It is to act out the belief that the world will not fall apart if you stop working for a day—because you were not holding it together in the first place.</p>

<p>In the ancient Near East, where Israel received this commandment, to rest was an act of defiance. In Egypt, there was no Sabbath. Pharaoh's economy ran on uninterrupted labor, extracted from a people who were valued for their productivity and discarded when they could no longer produce. The Sabbath commandment was given to a people fresh out of slavery, and it said to them: you are not slaves anymore. Your worth is not your output. God rested; now you rest. This is what freedom looks like.</p>

<blockquote class="pull-quote">
  <p>To rest on the Sabbath is to declare that you are not the source of your own sustenance—and that the world will not fall apart if you stop working for a day.</p>
</blockquote>

<h2>Why the New Testament Doesn't Eliminate It</h2>

<p>Christians sometimes point to Colossians 2:16-17—where Paul says that the Sabbath is a "shadow" of Christ—as a license to ignore the day entirely. But Paul's point is not that rest no longer matters; it is that the Sabbath finds its fulfillment in Christ. Jesus is our rest. And yet Hebrews 4 holds both things in tension: "there remains a Sabbath rest for the people of God" (v. 9). The rest Christ provides is both a present reality and a future hope—and the weekly practice of Sabbath points toward both.</p>

<p>Many faithful Christians through church history have observed one day in seven as a day of rest and worship, not as a legal requirement but as a spiritual discipline—a structured way of practicing dependence on God, reorienting desire toward the eternal, and resisting the cultural pressure to justify their existence through productivity.</p>

<h3>What Sabbath Looks Like in Practice</h3>

<p>The Sabbath is less about a strict list of prohibitions and more about a posture of reception. It is a day for things that cannot be monetized: worship, long meals, unhurried conversation, the reading of things that will not make you more efficient. It is a day to remember that you are a creature made in the image of a God who rested—and that the image you bear is the image of One who found creation good and called it enough.</p>

<p>In a culture that treats busyness as virtue and rest as weakness, this is a countercultural act. It may, in fact, be one of the most prophetic things a Christian family can do: to stop one day a week and declare, by their rest, that there is a God who is working even when they are not, and that this God can be trusted.</p>
    `,
  },
  {
    id: 17,
    slug: 'what-the-early-church-knew-about-suffering',
    title: 'What the Early Church Knew About Suffering That We Have Forgotten',
    subheading: 'The first Christians did not explain away suffering. They entered it—and emerged from it with a theology that sustained martyrs.',
    excerpt: "The early church's theology of suffering was not a cope or a rationalization. It was a hard-won, deeply biblical account of why pain matters and what it is for.",
    author: AUTHORS[2],
    category: CATEGORIES[1],
    tags: ['suffering', 'early church', 'persecution', 'theology', 'faith'],
    publishedAt: '2025-02-18T09:00:00Z',
    updatedAt: '2025-02-18T09:00:00Z',
    readingTime: 9,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/early-church/1920/1080',
      alt: 'Ancient Roman catacomb with flickering candle light',
      caption: '',
    },
    isFeatured: true,
    isEditorsPick: false,
    content: `
<p class="article-lead">When Polycarp, bishop of Smyrna, was brought before the Roman proconsul and offered his life in exchange for cursing Christ, he declined with a sentence that has echoed across twenty centuries: "Eighty-six years have I served him, and he has done me no wrong. How can I blaspheme my King who saved me?" He was burned alive in the stadium. He was eighty-six years old. He had spent his entire adult life preparing for this moment—not because he knew it was coming, but because he had spent his entire adult life learning to hold the things of this world loosely.</p>

<p>The early church produced Polycarps the way the contemporary church produces podcasters. Not because they were braver than we are, but because they had a theology of suffering that we have largely abandoned.</p>

<h2>Suffering as Participation</h2>

<p>The early Christian understanding of suffering was shaped at every point by the crucifixion. The death of Jesus was not a tragedy to be explained away or a scandal to be minimized. It was the central fact of history—and it reframed every subsequent experience of pain. To suffer, for the early Christian, was to participate in something. It was to be drawn into the shape of Jesus's own life: "I have been crucified with Christ," Paul writes (Gal. 2:20), using the perfect tense—a past action with ongoing present effects.</p>

<p>This participation language runs throughout the New Testament. Paul speaks of "sharing in Christ's sufferings" (Phil. 3:10). Peter addresses scattered, persecuted Christians by telling them they are "partakers of Christ's sufferings" (1 Pet. 4:13). James opens his letter by telling persecuted believers to count their trials as "pure joy" (1:2). None of these writers is minimizing the pain. They are locating it—giving it a context that transforms its meaning without erasing its weight.</p>

<blockquote class="pull-quote">
  <p>The early church did not explain away suffering. It located suffering—inside the story of a crucified and risen Lord—and found that the location changed everything.</p>
</blockquote>

<h2>What the Martyrs Understood</h2>

<p>The martyrdom accounts of the early church—Polycarp, Perpetua, Felicitas, Ignatius of Antioch—share a striking feature: the martyrs do not appear to be suffering despite their faith but because of it, and within it. Perpetua, a young mother facing execution in the Carthage arena, recorded her dreams and thoughts in the days before her death. What is remarkable is not her courage but her peace—a peace she attributes not to emotional detachment but to a vivid sense of being held by God in the midst of horror.</p>

<p>Ignatius of Antioch, en route to Rome to be thrown to the lions, wrote letters to the churches he passed that are incandescent with a strange joy. He did not want to be rescued. He wanted to arrive at his destination—which was not Rome but Christ. "Now I begin to be a disciple," he wrote. "I care for nothing, of visible or invisible things, so that I may but win Christ."</p>

<h3>What We Have Lost</h3>

<p>Contemporary Christianity, especially in the prosperous West, has largely lost this theology. We have replaced the theology of participation with a theology of exemption—the belief, sometimes explicit and often implicit, that faith should protect us from suffering rather than accompany us through it. The prosperity gospel is only the most garish version of this error. Its respectable cousin shows up whenever we treat suffering primarily as a problem to be solved rather than a reality to be inhabited.</p>

<p>The recovery of the early church's theology of suffering is not morbid. It is liberating. It frees us from the exhausting project of explaining why bad things happen to good people and invites us instead into the more demanding and more honest project of remaining faithful in the darkness, trusting that the darkness is not the end of the story—because we have read the end of the story, and it begins with an empty tomb.</p>
    `,
  },

  // ─── Faith & Work ────────────────────────────────────────────────────────
  {
    id: 18,
    slug: 'the-myth-of-the-secular-job',
    title: 'The Myth of the Secular Job',
    subheading: 'The sacred-secular divide is one of the most damaging ideas to enter the modern church. Scripture knows nothing of it.',
    excerpt: "Most Christians think their work matters to God only if it involves ministry. The Bible tells a very different story about what it means to work faithfully in the world.",
    author: AUTHORS[0],
    category: CATEGORIES[4],
    tags: ['faith and work', 'vocation', 'calling', 'theology of work'],
    publishedAt: '2025-02-15T09:00:00Z',
    updatedAt: '2025-02-15T09:00:00Z',
    readingTime: 6,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/secular-job/1920/1080',
      alt: 'A craftsman working at a wooden bench in warm light',
      caption: '',
    },
    isFeatured: false,
    isEditorsPick: false,
    content: `
<p class="article-lead">Somewhere along the way, evangelical Christianity developed a two-tier view of work. On the top tier: ministry, missions, pastoral work—things that count for eternity. On the lower tier: everything else. Accounting. Construction. Medicine. Teaching. These things are fine, but they are not quite sacred. They are the secular work Christians do to pay the bills while they serve God on evenings and weekends.</p>

<p>This divide is one of the most theologically confused ideas in contemporary Christianity, and it has done enormous damage—to how Christians understand their vocations, to how they show up in their workplaces, and to how they relate to a God who, according to Scripture, cares very much about what happens Monday through Friday.</p>

<h2>The Biblical Vision of Work</h2>

<p>Work precedes the fall. Before sin entered the world, before the curse, God placed Adam in the garden "to work it and keep it" (Gen. 2:15). Work is not punishment. It is not the result of sin. It is the God-given means by which image-bearers participate in the ongoing care of creation. This is the foundational fact about work that most Christians have never fully absorbed.</p>

<p>After the fall, work becomes harder. Thorns and thistles appear. Sweat enters the picture. But the fallenness of work does not change its nature. It is still the means by which God's creatures tend the world he made. The farmer who grows food, the engineer who builds bridges, the nurse who tends the sick—all are participating in God's own ongoing care for his creation. Their work is, in a very real sense, an extension of the work God himself does in sustaining the world.</p>

<blockquote class="pull-quote">
  <p>Work is not where Christians go before they get to do something meaningful. Work is one of the primary places where a Christian life is actually lived.</p>
</blockquote>

<h2>What Luther Got Right</h2>

<p>The Protestant Reformers recovered this vision and gave it a name: vocation. Martin Luther, in particular, argued that the cobbler who makes shoes, if he makes them well and honestly, glorifies God as surely as the monk who sings matins. Every honest vocation is a site of genuine service to God and neighbor. The idea that only ministry workers serve God in their work is, Luther insisted, a remnant of medieval Catholic clericalism that the Reformation should sweep away.</p>

<p>That sweeping has not been thorough enough. The sacred-secular divide persists, sometimes in subtle forms. We praise missionaries while treating accountants as second-class kingdom citizens. We urge college students toward "ministry" as if engineering or law were somehow less God-honoring. We talk about bringing faith into the workplace as though faith were a briefcase attachment rather than the very air a Christian breathes.</p>

<h3>Faithful Presence</h3>

<p>The alternative is not a theology that sacralizes ambition or baptizes workaholism. It is a theology of faithful presence—showing up fully in the places God has put us, doing excellent work for the love of God and neighbor, and allowing the character of Christ to shape the manner of our working as much as the content. This is not a lesser calling than ministry. It is the calling of every Christian who has ever had a job.</p>
    `,
  },
  {
    id: 19,
    slug: 'when-ambition-becomes-an-idol',
    title: 'When Ambition Becomes an Idol',
    subheading: "Christian ambition and worldly ambition can look identical on the outside. The difference lies entirely in what you are willing to sacrifice.",
    excerpt: 'Ambition is not a sin. But unchecked ambition—ambition that swallows relationships, integrity, and rest—is idolatry wearing a productive disguise.',
    author: AUTHORS[3],
    category: CATEGORIES[4],
    tags: ['ambition', 'idolatry', 'faith and work', 'character', 'success'],
    publishedAt: '2025-02-12T09:00:00Z',
    updatedAt: '2025-02-12T09:00:00Z',
    readingTime: 7,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/ambition-idol/1920/1080',
      alt: 'A lone figure climbing a steep mountain ridge at sunrise',
      caption: '',
    },
    isFeatured: false,
    isEditorsPick: true,
    content: `
<p class="article-lead">Christians are often suspicious of ambition. The word carries connotations of pride, self-promotion, and the willingness to step on others to get ahead. And sometimes those connotations are accurate. But the answer to disordered ambition is not the absence of ambition—it is ambition rightly ordered. The question is not whether you want to excel but why, and at what cost.</p>

<h2>Ambition Has a Good Pedigree</h2>

<p>Paul, the most prolific missionary in the history of Christianity, was a deeply ambitious man. He wanted to preach where no one had preached before (Rom. 15:20). He pressed on toward the goal (Phil. 3:14). He competed, strained, ran—the athletic metaphors in his letters are not accidental. He was a man of extraordinary drive, and he understood that drive as a gift oriented toward the glory of God and the good of others.</p>

<p>The same is true of the Proverbs tradition, which has little patience for sloth and much praise for the diligent hand. "Do you see a man skillful in his work? He will stand before kings" (Prov. 22:29). The Bible is not an ode to mediocrity. It invites excellence, diligence, and the desire to do important things well.</p>

<blockquote class="pull-quote">
  <p>The test of your ambition is not what you are reaching for, but what you are willing to let go of to get there.</p>
</blockquote>

<h2>When Ambition Crosses the Line</h2>

<p>Ambition becomes idolatrous when it claims what belongs to God alone: ultimate worth, security, and identity. You can identify idolatrous ambition by what it demands as sacrifice. If your career requires the neglect of your children, the compromise of your integrity, the sacrifice of your health, or the erosion of your character, it has stopped being a vocation and become a master.</p>

<p>The idol of professional success is particularly dangerous because it is culturally celebrated. Nobody holds an intervention for the workaholic the way they might for the alcoholic, even though both are in the grip of a compulsion that is destroying them. The workaholic is just destroying things that are harder to see—marriage, presence, rest, the inner life—and doing it in a way that earns applause.</p>

<h3>Reordering the Drive</h3>

<p>The gospel reorders ambition without extinguishing it. You are not ultimately valued by your output, so you do not have to produce your way to significance. You are not ultimately secured by your career, so you do not have to protect it at all costs. And you are not ultimately defined by what you have built, so you can hold it loosely when it is threatened or taken. This is not the end of ambition. It is ambition set free from the desperate grip of self-justification—and that is a much better kind of drive.</p>
    `,
  },
  {
    id: 20,
    slug: 'a-theology-of-hard-work',
    title: 'A Theology of Hard Work and the Grace of Difficulty',
    subheading: 'Why the hardest parts of your work may be its most spiritually significant moments.',
    excerpt: "We want work to be easy. But God uses the resistance, the failure, and the grind to form the character he intends. Difficulty is not a malfunction—it is the curriculum.",
    author: AUTHORS[2],
    category: CATEGORIES[4],
    tags: ['work', 'suffering', 'character', 'perseverance', 'faith and work'],
    publishedAt: '2025-02-08T09:00:00Z',
    updatedAt: '2025-02-08T09:00:00Z',
    readingTime: 6,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/hard-work/1920/1080',
      alt: 'Hands worn from physical labor resting on rough wood',
      caption: '',
    },
    isFeatured: false,
    isEditorsPick: false,
    content: `
<p class="article-lead">Nobody brochures the hard parts of a career. We celebrate the promotions, the accomplishments, the moments where the work paid off. We rarely talk about the decade of grinding before the breakthrough, the project that failed publicly, the boss who didn't see what we were doing, or the season when we wondered whether we were in the wrong field entirely. And yet those hard parts may be the most spiritually significant parts of the whole story.</p>

<h2>Resistance as Formation</h2>

<p>God uses difficulty to form character in ways that ease cannot. This is not a peripheral observation in Scripture—it is a structural feature of the biblical narrative. Joseph's story does not move from the coat of many colors to the throne of Egypt in a straight line. It passes through the pit, through slavery, through false accusation, through years of unjust imprisonment. Every stage of resistance is simultaneously a stage of formation. The man who emerges to save Egypt and his brothers is not the same young man who was thrown into the pit. He has been changed by difficulty into someone capable of the task that awaits him.</p>

<p>James opens his letter with a command that is almost offensive in its directness: "Count it all joy, my brothers, when you meet trials of various kinds" (1:2). This is not a call to perform happiness. It is a call to a radically different way of interpreting resistance—to see it as the means by which "the testing of your faith produces steadfastness" (v. 3). Steadfastness is not a quality you can acquire any other way. It requires the thing you are trying to avoid.</p>

<blockquote class="pull-quote">
  <p>The hard parts of your work are not detours from the life God intends. They are the road.</p>
</blockquote>

<h2>Working Through, Not Around</h2>

<p>The Christian response to professional difficulty is not stoicism—the gritted-teeth determination to push through by willpower alone. It is something more like attentiveness. What is this difficulty trying to teach me? Where is my pride being exposed? Where am I relying on my own competence rather than God's provision? The grind is not something to be endured in silence. It is something to be brought to God with questions.</p>

<p>This does not make the difficulty less real or the grind less hard. But it changes the orientation. Work that is only evaluated by outcomes—did the project succeed, did I get the promotion, did the numbers improve—is work that can only ever produce anxiety or pride. Work that is also evaluated by formation—what did this season make of me, how did difficulty shape my character, where did I encounter God in the resistance—is work that has resources for meaning even when the outcomes are not what we hoped.</p>
    `,
  },

  // ─── Current Events ───────────────────────────────────────────────────────
  {
    id: 21,
    slug: 'what-artificial-intelligence-cannot-do',
    title: 'What Artificial Intelligence Cannot Do',
    subheading: 'The AI revolution is real and its implications are vast. But it cannot do the one thing the human person most deeply needs.',
    excerpt: "AI can generate sermons, write poetry, and diagnose cancer. What it cannot do is love, grieve, forgive, or bear witness. And those limitations matter more than any capability.",
    author: AUTHORS[1],
    category: CATEGORIES[3],
    tags: ['artificial intelligence', 'technology', 'human dignity', 'culture'],
    publishedAt: '2025-02-05T09:00:00Z',
    updatedAt: '2025-02-05T09:00:00Z',
    readingTime: 8,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/ai-limits/1920/1080',
      alt: 'A human hand and a robotic hand reaching toward each other',
      caption: '',
    },
    isFeatured: true,
    isEditorsPick: false,
    content: `
<p class="article-lead">It is difficult to write about artificial intelligence without either panicking or boosterizing. The technology is genuinely extraordinary, and its implications for work, creativity, education, and social life are real and significant. But amid the noise, Christians have resources for a more measured assessment—one that begins not with what AI can do but with what human beings are, and what that implies about what AI cannot do.</p>

<h2>The Impressive Part</h2>

<p>Large language models can produce fluent, well-organized text on almost any topic. They can generate code, analyze medical images, summarize legal documents, and write hymns in the style of Isaac Watts. These capabilities are expanding rapidly and will continue to expand. The economic and professional disruptions they are causing are real. Many jobs that currently exist will look very different in a decade, and some will not exist at all. Christians who work in fields affected by AI need to think carefully and practically about what that means for their vocations.</p>

<p>But there is a category error lurking behind much of the conversation about AI, and it is one that Christians are unusually positioned to identify. The error is to treat the production of human-like output as equivalent to the exercise of human capacities. AI can produce text that resembles thought. It cannot think. It can produce text that resembles care. It cannot care.</p>

<blockquote class="pull-quote">
  <p>AI can simulate the outputs of human relationship. It cannot be in one. And that distinction matters more than any benchmark.</p>
</blockquote>

<h2>What Image-Bearing Requires</h2>

<p>The Christian doctrine of the imago dei is not a claim about cognitive capacity. It is a claim about ontological status, relational depth, and moral accountability. Human beings are made in the image of God—not because they can process information, but because they are made to know and be known, to love and be loved, to bear responsibility and give account. These are not capacities that can be simulated in silico, however impressive the simulation becomes.</p>

<p>The pastor who sits with a dying parishioner is not providing a service that an AI hospice bot could replicate if it were sophisticated enough. The presence, the grief, the shared mortality, the prayer of one creature to the Creator on behalf of another creature—these things depend on the humanness of the pastor. The mother who forgives her child is doing something that requires her to have been wronged, to feel it, and to choose otherwise. The witness who testifies to the risen Christ is staking their life on what they know. None of these acts can be automated.</p>

<h3>The Question We Should Be Asking</h3>

<p>The question Christians need to be asking about AI is not "can it do this?" but "should we use it for this?" A technology can be capable of producing something without that thing being worth producing that way. AI-generated sermons may be grammatically coherent and theologically orthodox. They are still not the word of the Lord mediated through a particular human life, formed by particular struggles, aimed at a particular congregation. That particularity is not inefficiency. It is the point.</p>
    `,
  },
  {
    id: 22,
    slug: 'the-church-and-political-polarization',
    title: 'The Church in an Age of Political Polarization',
    subheading: 'Political tribalism has infiltrated the church in ways that should alarm every pastor and trouble every pew.',
    excerpt: "When Christians sort themselves politically before they sort themselves theologically, the gospel is not the organizing principle of the church. Something else is.",
    author: AUTHORS[3],
    category: CATEGORIES[3],
    tags: ['politics', 'polarization', 'church', 'unity', 'current events'],
    publishedAt: '2025-02-01T09:00:00Z',
    updatedAt: '2025-02-01T09:00:00Z',
    readingTime: 7,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/polarization/1920/1080',
      alt: 'Empty church pews with American and Christian flags on opposite sides',
      caption: '',
    },
    isFeatured: false,
    isEditorsPick: true,
    content: `
<p class="article-lead">The data is now undeniable: Americans are sorting themselves into political tribes with increasing intensity, and those tribes are shaping every dimension of social life—including, and perhaps especially, church life. Christians attend different churches based on political affiliation as much as theological conviction. They read different Bibles, it sometimes seems—or at least find very different things there. And they are losing the capacity to share communion with people who pull the other lever in the voting booth.</p>

<h2>How We Got Here</h2>

<p>Political polarization is not simply an external phenomenon that has infected the church from outside. The church has participated in its own polarization, often eagerly. When pastors treat partisan political positions as tests of orthodoxy, they teach their congregations to do the same. When churches function as affinity communities for people who share a political aesthetic, they surrender the scandalous cross-social unity that the New Testament treats as one of the primary evidences of the gospel's power.</p>

<p>Paul's letter to the Ephesians describes the church as the place where the "dividing wall of hostility" between Jew and Gentile has been abolished (2:14). This is not a metaphor for emotional warmth across demographic difference. It is a claim about a new social reality created by the gospel—a community in which the deepest human divisions are transcended by a shared allegiance to Christ. The political divide in contemporary America is not as fundamental as the Jew-Gentile divide of the first century. If the gospel could bridge that, it can bridge this. But the church has to want to.</p>

<blockquote class="pull-quote">
  <p>When Christians sort themselves politically before they sort themselves theologically, something other than the gospel is organizing the church.</p>
</blockquote>

<h2>What Faithful Engagement Looks Like</h2>

<p>Christians are not called to be apolitical. The prophets were not apolitical. Jesus was not apolitical. The New Testament's insistence that Jesus is Lord is, among other things, a political claim—one that relativizes every other political claim, including the ones we find most congenial.</p>

<p>But there is a difference between political engagement shaped by theological conviction and political identity that has swallowed theological conviction. The former can produce a Christian who holds surprising combinations of political positions, serves across the aisle, and maintains genuine relationships with people who vote differently. The latter produces a Christian who is, essentially, a partisan who goes to church.</p>

<h3>The Pastor's Responsibility</h3>

<p>Pastors have an outsized role in this. A pastor who uses the pulpit to shore up partisan political positions is not serving their congregation—they are feeding a hunger that the gospel is not designed to satisfy. The congregation leaves politically confirmed rather than spiritually formed. The pastor who refuses to be used that way, who insists that the pulpit belongs to the whole counsel of God and not to any party platform, will face resistance. But they will also, over time, produce a congregation with something rarer and more valuable than political consensus: the capacity to disagree about politics while remaining genuinely united around Christ.</p>
    `,
  },
  {
    id: 23,
    slug: 'a-christian-framework-for-thinking-about-immigration',
    title: 'A Christian Framework for Thinking About Immigration',
    subheading: 'The immigration debate is among the most politically charged conversations in America. The Bible is not silent, but it is more nuanced than either side admits.',
    excerpt: "Scripture speaks clearly about the stranger and the sojourner. What it does not do is resolve every policy question for us—and pretending otherwise is a disservice to both the Bible and our neighbors.",
    author: AUTHORS[4],
    category: CATEGORIES[3],
    tags: ['immigration', 'current events', 'justice', 'policy', 'stranger'],
    publishedAt: '2025-01-28T09:00:00Z',
    updatedAt: '2025-01-28T09:00:00Z',
    readingTime: 8,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/immigration/1920/1080',
      alt: 'Families walking along a road at dusk carrying their belongings',
      caption: '',
    },
    isFeatured: false,
    isEditorsPick: false,
    content: `
<p class="article-lead">Few political topics produce more heat and less light than immigration. On the left, the conversation is often framed as simple compassion: open hearts and open borders. On the right, it is often framed as simple security: rule of law and national sovereignty. Christians who try to navigate between these framings will find that both sides are willing to accuse them of bad faith. But the biblical vision of justice and mercy does not map cleanly onto either political position, and pretending that it does is a disservice to Scripture, to politics, and to the millions of real people whose lives are shaped by these policies.</p>

<h2>What the Bible Actually Says</h2>

<p>The Old Testament's concern for the "stranger" (ger) who lives among Israel is extensive and serious. Leviticus 19:34 commands: "The stranger who sojourns with you shall be to you as the native among you, and you shall love him as yourself, for you were strangers in the land of Egypt." The prophets list mistreatment of the sojourner alongside injustice to the poor and the widow as marks of covenant unfaithfulness.</p>

<p>This is not a marginal theme. It is a structural feature of the covenant community's obligations. And it is rooted in Israel's own history—they were aliens and slaves in Egypt, and God delivered them. The memory of vulnerability is supposed to generate compassion for the vulnerable.</p>

<blockquote class="pull-quote">
  <p>Scripture is clear about the obligation to the stranger. It does not resolve every question of modern immigration policy—but it determines the moral register in which those questions must be asked.</p>
</blockquote>

<h2>What the Bible Does Not Settle</h2>

<p>What the Bible does not do is adjudicate between different systems of border policy in a modern nation-state context. The ger of ancient Israel was not navigating a welfare state, a labor market distorted by wage differentials, or a refugee system with specific legal categories. The biblical principles—welcome the stranger, do justice, love mercy, remember your own vulnerability—are real and binding. But they do not determine whether any particular policy is the wisest means of honoring those principles.</p>

<p>This matters because Christians on both sides of the political debate often overreach. Progressives imply that open borders are the obvious biblical position, ignoring the real complexities of state authority, ordered society, and the effects of rapid demographic change on existing communities. Conservatives imply that strict enforcement is the obvious biblical position, ignoring the human cost of enforcement policies and the church's specific obligations to the vulnerable.</p>

<h3>The Posture We Need</h3>

<p>Christians are not exempt from doing the hard analytical work of immigration policy. The biblical mandate to love the stranger does not translate automatically into any particular set of visa caps or enforcement mechanisms. It does mean that Christians should engage the policy question with a strong presumption toward the dignity and welfare of immigrant persons—documented or not—and a willingness to accept political costs in the service of that commitment. That is a harder position than either partisan pole, and it is the one the gospel demands.</p>
    `,
  },

  // ─── Bible & Theology ─────────────────────────────────────────────────────
  {
    id: 24,
    slug: 'why-the-doctrine-of-hell-makes-sense',
    title: 'Why the Doctrine of Hell Makes Sense',
    subheading: "Hell is the doctrine modern people most want to eliminate from Christianity. It is also, properly understood, one of its most morally serious teachings.",
    excerpt: "The objection to hell is almost always framed as compassion. But a God who cannot condemn evil is not a God who can be trusted to vindicate the victims of it.",
    author: AUTHORS[0],
    category: CATEGORIES[1],
    tags: ['hell', 'judgment', 'justice', 'doctrine', 'theology'],
    publishedAt: '2025-01-25T09:00:00Z',
    updatedAt: '2025-01-25T09:00:00Z',
    readingTime: 8,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/doctrine-hell/1920/1080',
      alt: 'Storm clouds gathering over an open landscape at dusk',
      caption: '',
    },
    isFeatured: false,
    isEditorsPick: false,
    content: `
<p class="article-lead">No Christian doctrine is more unpopular in contemporary culture than the doctrine of hell. It strikes modern people as cruel, disproportionate, and incompatible with a loving God. Pastors who preach it openly risk alienating their congregations. Many simply do not preach it at all. But the doctrine deserves more serious treatment than a polite silence, because the objections to hell are less compelling than they initially appear—and the reasons for holding the doctrine are more morally serious than its critics acknowledge.</p>

<h2>The Moral Case for Judgment</h2>

<p>The objection to hell is usually framed as a compassion argument: How could a loving God condemn anyone to eternal suffering? But the argument cuts both ways. The same moral intuition that rebels against hell also demands that evil not go unanswered. We feel this viscerally when we think about history's worst crimes—genocide, systematic abuse, the destruction of innocents. The victims of those crimes are owed more than a universe in which the perpetrators simply cease to exist at death, morally equivalent in the end to their victims.</p>

<p>The biblical doctrine of hell is, at its core, a doctrine of cosmic justice. It is the affirmation that evil will not have the last word—that God will vindicate the victims of injustice and hold their oppressors accountable. This is not the angry God of caricature. This is the God of Psalm 9: "He does not forget the cry of the afflicted." A God who cannot condemn is a God who cannot vindicate, and a God who cannot vindicate is not the God the Bible reveals.</p>

<blockquote class="pull-quote">
  <p>The same moral seriousness that makes hell repellent is the seriousness that demands it. A universe without ultimate justice is not a kind universe—it is an indifferent one.</p>
</blockquote>

<h2>What Hell Is Not</h2>

<p>Much of the popular objection to hell is directed at a caricature. Hell in the Christian tradition is not God torturing people for the pleasure of it. It is the condition of those who have definitively and finally refused the love of God—the state of a soul that has sealed its own rejection of the only source of life and joy. C.S. Lewis put it memorably: "The door of hell is locked on the inside." Whether that is the best formulation is debatable. But it captures something important: that God does not send people to hell against their deepest desires. He honors, finally and permanently, the choice they have made.</p>

<h3>Preaching It Faithfully</h3>

<p>Pastors who avoid the doctrine of hell in the name of compassion are, in fact, doing their congregations a disservice. They are withholding one of the most powerful motivations for evangelism, one of the most clarifying lenses on the seriousness of sin, and one of the most urgent reasons to flee to Christ. Jesus spoke of hell more than any other figure in the New Testament. If we are to take his teaching seriously, we cannot simply edit out the parts that make us uncomfortable. We can preach them with gentleness, with tears, with the full weight of the gospel as the alternative. But we cannot not preach them.</p>
    `,
  },
  {
    id: 25,
    slug: 'reading-the-old-testament-as-christian-scripture',
    title: 'Reading the Old Testament as Christian Scripture',
    subheading: 'For many Christians, the Old Testament is a confusing collection of laws, genealogies, and violent stories. It is also the soil in which the entire New Testament grows.',
    excerpt: "The church that neglects the Old Testament will eventually misunderstand the New. Here is why the first three-quarters of your Bible deserve more than you are giving them.",
    author: AUTHORS[6],
    category: CATEGORIES[1],
    tags: ['Old Testament', 'Bible', 'Scripture', 'hermeneutics', 'theology'],
    publishedAt: '2025-01-22T09:00:00Z',
    updatedAt: '2025-01-22T09:00:00Z',
    readingTime: 7,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/old-testament/1920/1080',
      alt: 'Ancient scrolls of parchment in warm candlelight',
      caption: '',
    },
    isFeatured: false,
    isEditorsPick: false,
    content: `
<p class="article-lead">A quiet Marcionism has settled over much of the evangelical church. We do not formally reject the Old Testament as the product of an inferior God. We simply ignore most of it. Our preaching cycles through Paul and the Gospels. Our Sunday school material touches the familiar stories—Noah, Moses, David—and then moves quickly on. The prophets are visited mainly to find predictions of Jesus. The law is mined for devotional nuggets and then set aside. The result is a Christianity that grows increasingly thin, because the root system it depends on is being neglected.</p>

<h2>The Old Testament Is Not Optional</h2>

<p>When Paul tells Timothy that "all Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness" (2 Tim. 3:16), the Scripture he has in mind is almost entirely what we call the Old Testament. The New Testament canon was not yet assembled. Paul is making a claim about the Psalms, the Torah, the Prophets—about Leviticus and Numbers and Ezekiel and Zephaniah. These texts, he insists, are profitable. Not just historically interesting. Profitable—for the formation of the person of God.</p>

<p>Jesus himself treats the Old Testament as the living word of God. "Have you not read?" is one of his most frequent rhetorical questions, and it is always pointing his interlocutors back to texts they thought they knew but had not understood. He tells the disciples on the Emmaus road that the entire Hebrew canon—"Moses and all the Prophets"—speaks about him (Luke 24:27). The Old Testament is not the prelude to the real story. It is the same story, told from an earlier vantage point.</p>

<blockquote class="pull-quote">
  <p>A church that neglects the Old Testament will not merely miss half the Bible. It will misunderstand the half it keeps.</p>
</blockquote>

<h2>How to Read It</h2>

<p>The challenge is not that the Old Testament is unimportant. The challenge is that it requires more work. You need to know something about ancient Near Eastern culture to understand why the dietary laws functioned the way they did. You need to know something about the structure of the covenant to understand why the psalms of lament are addressed the way they are. You need to understand the typological relationship between the temple and Christ's body before Ezekiel's vision of the restored temple makes sense in a Christian reading.</p>

<p>This is not a counsel of despair. It is an invitation. The Old Testament rewards the reader who brings patience, curiosity, and a willingness to read slowly. There is a reason the greatest theologians of the church—Augustine, Calvin, Luther, Edwards—spent enormous energy on the Old Testament. They knew that you cannot understand grace, covenant, justice, kingship, sacrifice, or the nature of God without reading it carefully. Neither can we.</p>
    `,
  },

  // ─── Christian Living ──────────────────────────────────────────────────────
  {
    id: 26,
    slug: 'how-to-disagree-well',
    title: 'How to Disagree Well: A Biblical Framework for Conflict',
    subheading: 'Disagreement is inevitable. Destructive conflict is not. The Bible gives us the tools to do the former without the latter.',
    excerpt: "Most Christians are bad at disagreement—either avoiding it entirely or handling it in ways that damage relationships and witness. Scripture offers a better way.",
    author: AUTHORS[5],
    category: CATEGORIES[2],
    tags: ['conflict', 'disagreement', 'community', 'reconciliation', 'peacemaking'],
    publishedAt: '2025-01-18T09:00:00Z',
    updatedAt: '2025-01-18T09:00:00Z',
    readingTime: 6,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/disagree-well/1920/1080',
      alt: 'Two people sitting across a table in conversation',
      caption: '',
    },
    isFeatured: false,
    isEditorsPick: false,
    content: `
<p class="article-lead">Most Christians are bad at disagreement. Some avoid it entirely, smoothing over differences with a superficial peace that resolves nothing and stores up resentment for later. Others engage it destructively—turning every disagreement into a referendum on the other person's character, their intelligence, or their faith. Neither approach serves the body of Christ, and both cause damage that takes years to repair.</p>

<p>But there is a third way, modeled in Scripture and demonstrated by Christians across the centuries, that takes disagreement seriously without letting it become warfare.</p>

<h2>Distinguish the Issue from the Person</h2>

<p>The first discipline of healthy disagreement is the discipline of distinction: keeping clear in your mind the difference between the position you are challenging and the person who holds it. This sounds obvious. In practice, it is remarkably hard. When someone disagrees with us on something we care about, we almost automatically begin to question their motives, their intelligence, or their character. This is a cognitive error as well as a moral one.</p>

<p>Proverbs is full of instruction about the kind of person who can receive a well-aimed rebuke and grow from it rather than retaliate. "A wise son hears his father's instruction" (13:1). "Reprove a wise man, and he will love you" (9:8). The wise person has learned to separate the challenge to their position from a challenge to their personhood. The fool has not. Disagreement with a fool is dangerous not because the fool is unintelligent but because they take every challenge to their position as a personal attack and respond accordingly.</p>

<blockquote class="pull-quote">
  <p>You can be completely right about the issue and completely wrong about how you handle the person. Both things matter.</p>
</blockquote>

<h2>Assume Good Faith Until Proven Otherwise</h2>

<p>One of the most important disciplines in productive disagreement is the practice of charitable interpretation. Before you decide why someone holds a position you find wrong, give them the most generous plausible reading. Ask yourself: what would a reasonable, well-intentioned person have to believe to hold this view? You may still conclude they are wrong. But you will understand them better, and your disagreement will be more accurate—targeted at the actual position rather than a caricature.</p>

<h3>The Goal Is Understanding, Not Winning</h3>

<p>Perhaps the most fundamental reorientation required for good disagreement is a change of goal. If you enter disagreement to win—to have your position vindicated and the other person's position defeated—you have already made an error that will corrupt everything that follows. The goal of disagreement in the body of Christ is understanding: to find truth together, to correct one another in love, and to emerge with a relationship that is more honest and more durable than the one that entered the room. You can win an argument and lose a brother. The math is never worth it.</p>
    `,
  },
  {
    id: 27,
    slug: 'why-christians-should-read-more-fiction',
    title: 'Why Christians Should Read More Fiction',
    subheading: "Reading novels is not an escape from reality. It is one of the most reliable means of entering it more deeply.",
    excerpt: "The novel trains a capacity that the digital age is systematically destroying: the ability to inhabit another person's experience long enough to be changed by it.",
    author: AUTHORS[1],
    category: CATEGORIES[2],
    tags: ['fiction', 'reading', 'formation', 'imagination', 'literature'],
    publishedAt: '2025-01-15T09:00:00Z',
    updatedAt: '2025-01-15T09:00:00Z',
    readingTime: 6,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/read-fiction/1920/1080',
      alt: 'A stack of well-read novels on a windowsill with afternoon light',
      caption: '',
    },
    isFeatured: false,
    isEditorsPick: true,
    content: `
<p class="article-lead">There is a type of Christian who regards fiction with mild suspicion—not exactly sinful, but not quite serious either. A guilty pleasure, perhaps. Something for vacation or illness. Nonfiction is where the real spiritual formation happens: theology, biography, commentary. Fiction is what you read when you have already read the important things. This view is mistaken, and it is costing the church more than it realizes.</p>

<h2>What Novels Do</h2>

<p>A great novel does something no other form of communication quite accomplishes: it gives you sustained, interior access to a person who is not you. Not a summary of their beliefs or a report on their experiences—actual interiority. You inhabit their consciousness as events unfold, feel what they feel, misunderstand what they misunderstand, and gradually come to see what they see. This is an exercise of the imagination that is not merely entertaining. It is morally formative.</p>

<p>Psychologists have studied this and found what readers have always known: consistent novel-reading is correlated with greater capacity for empathy, stronger theory of mind (the ability to attribute mental states to others), and more nuanced moral reasoning. You become better at people by reading about people—even fictional ones. Perhaps especially fictional ones, because the novelist has complete access to the interiority that real social encounters never reveal.</p>

<blockquote class="pull-quote">
  <p>A great novel does not take you away from the world. It teaches you to see the one you are already in.</p>
</blockquote>

<h2>The Imagination as a Moral Faculty</h2>

<p>C.S. Lewis argued that the imagination is not the faculty of unreality—it is the faculty of reality-extension. Through imagination, you can hold in mind things that are not immediately present: the suffering of a person you have not met, the consequences of an action not yet taken, the shape of a world organized by different values than yours. This is not escapism. It is a prerequisite for the kind of other-centered attention that Christian love requires.</p>

<p>A Christian who reads Tolstoy, or Marilynne Robinson, or Dostoevsky, or Flannery O'Connor is not wasting time. They are training a capacity for attentiveness, for sitting with complexity, for understanding how the human heart works in its fallen and redeemed dimensions. They are also engaging with some of the most serious theological thinking of the last two centuries—because the greatest novelists have always been essentially theological writers, wrestling with questions about meaning, grace, death, and what human beings are for.</p>

<h3>What to Read</h3>

<p>If you do not know where to begin, begin with the canon. Tolstoy's <em>Anna Karenina</em> or <em>The Death of Ivan Ilyich</em>. Dostoevsky's <em>The Brothers Karamazov</em>. Marilynne Robinson's <em>Gilead</em>. Flannery O'Connor's short stories. Graham Greene's <em>The Power and the Glory</em>. These are not merely literary classics. They are sustained meditations on sin, grace, suffering, and the nature of the good life—written by people who took these questions seriously and committed their best artistic work to them. Read them slowly. Reread them. Allow them to do what they are designed to do.</p>
    `,
  },

  // ─── Keller Center ────────────────────────────────────────────────────────
  {
    id: 28,
    slug: 'meeting-the-secular-person-where-they-are',
    title: 'Meeting the Secular Person Where They Are',
    subheading: "Effective apologetics in a secular age begins not with arguments but with listening—understanding what people actually believe before you challenge it.",
    excerpt: "Most apologetic encounters fail not because the Christian runs out of arguments but because they never understood the actual objection they were answering.",
    author: AUTHORS[7],
    category: CATEGORIES[7],
    tags: ['apologetics', 'evangelism', 'secular', 'Keller Center', 'cultural engagement'],
    publishedAt: '2025-01-12T09:00:00Z',
    updatedAt: '2025-01-12T09:00:00Z',
    readingTime: 8,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/secular-meeting/1920/1080',
      alt: 'Two people in genuine conversation over coffee in a cafe',
      caption: '',
    },
    isFeatured: false,
    isEditorsPick: false,
    content: `
<p class="article-lead">Most Christians who engage in apologetics prepare for the wrong conversation. They bone up on the cosmological argument, memorize the evidence for the resurrection, and develop crisp responses to Dawkins and Hitchens. Then they sit down with their secular friend and discover that the actual conversation is somewhere else entirely. Their friend is not troubled by the fine-tuning argument. They are troubled by the church's historic complicity in injustice, or the existence of their gay nephew, or the feeling that religion is simply a coping mechanism for people who cannot face reality. The prepared argument does not fit the actual question.</p>

<h2>The Listening Gap</h2>

<p>Apologetics in a secular age requires, above all else, the discipline of listening. This is not a strategic concession—it is theologically grounded. If we believe that every human being is made in the image of God, then every human being's questions, doubts, and objections deserve to be taken seriously on their own terms. The objection "religion is just wish fulfillment" is not a dumb question asked in bad faith. It is a real concern with a real pedigree (Feuerbach, Freud, Marx) that many thoughtful people find compelling. Dismissing it as a mere rationalization insults the person asking it and guarantees that the conversation goes nowhere.</p>

<p>The first move in effective apologetic engagement is not to answer but to understand. What is the person actually worried about? What story about the world makes Christianity seem implausible to them? What would have to be true for Christianity to be worth considering? These questions are not tactical delay. They are the precondition of genuine dialogue.</p>

<blockquote class="pull-quote">
  <p>Before you can answer the objection, you have to understand the person raising it. Those are not the same task.</p>
</blockquote>

<h2>The Inside-Out Method</h2>

<p>Tim Keller often spoke of "inside-out" apologetics: beginning with the secular person's own deepest commitments and showing how Christianity makes better sense of them than secularism does. Every secular worldview has a set of values it cannot fully account for on its own terms—justice, human dignity, moral progress, the meaningfulness of love and sacrifice. The Christian is not trying to convince the secular person to accept alien values. They are trying to show that the values the secular person already holds most deeply point toward a Christian account of reality.</p>

<p>This approach requires intellectual generosity. It requires being genuinely curious about what the secular person believes and why, finding the real truth in their concerns before pointing to where the secular framework fails to sustain them. It is a longer conversation than the argument-and-rebuttal model. But it is more honest, more relational, and far more likely to produce genuine movement.</p>

<h3>What the Keller Center Exists to Do</h3>

<p>The mission of the Keller Center for Cultural Apologetics is not to win debates. It is to equip Christians for the kind of deep, generous, intellectually serious engagement with secular culture that the moment demands. The secular person in your neighborhood, your family, or your office is not an opponent to be defeated. They are an image-bearer in whom God is already at work—and the Christian who learns to see them that way, and to listen well before they speak, will have more conversations that matter.</p>
    `,
  },
  {
    id: 29,
    slug: 'ten-objections-to-christianity-answered',
    title: 'Ten Common Objections to Christianity — And What They Get Right',
    subheading: "The best response to an objection is not a refutation. It is an honest engagement that takes the objection more seriously than the objector expected.",
    excerpt: "Christianity's most thoughtful defenders have always acknowledged that the objections have weight. The question is whether the gospel has more.",
    author: AUTHORS[8],
    category: CATEGORIES[7],
    tags: ['apologetics', 'objections', 'doubt', 'faith', 'Keller Center'],
    publishedAt: '2025-01-08T09:00:00Z',
    updatedAt: '2025-01-08T09:00:00Z',
    readingTime: 10,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/objections-answered/1920/1080',
      alt: 'A library wall of philosophy and theology books',
      caption: '',
    },
    isFeatured: false,
    isEditorsPick: true,
    content: `
<p class="article-lead">The objections to Christian faith are not new. The claim that religion is wish fulfillment is at least as old as Feuerbach. The problem of evil has occupied philosophers since at least the time of Epicurus. The accusation that Christianity is bad for women, bad for science, or bad for minorities has been leveled in various forms for centuries. Christians who are surprised by these objections have not been paying attention. Christians who are afraid of them have not thought them through carefully enough.</p>

<p>The best response to a serious objection is not a quick rebuttal. It is an engagement that takes the objection more seriously than the objector expected—that acknowledges what is true in it, traces where it goes wrong, and shows why the gospel addresses the real concern more adequately than the objection assumed.</p>

<h2>"Christianity Is Just a Crutch"</h2>

<p>The objection assumes that needing help is a disqualification. But this is a strange premise. Medicine is a crutch for the sick; that does not make medicine false. The question is not whether Christianity provides comfort and support—of course it does—but whether the reality it describes is true. If it is, then the comfort it provides is appropriate, not suspect. If it is false, then the objection still needs to grapple with the historical resurrection, not merely the psychological benefits of belief.</p>

<h2>"Science Has Disproven God"</h2>

<p>Science has done no such thing. Science is a method for investigating the natural world through observation, hypothesis, and testing. It is extraordinarily powerful within its domain. But it is not equipped to adjudicate claims about what lies outside that domain. The existence of God is a metaphysical claim, not a scientific one—and metaphysical claims are not refuted by scientific discoveries, any more than the discovery of the structure of DNA refutes the claim that Hamlet is a great play. Scientism—the view that science is the only valid form of knowledge—is itself not a scientific claim. It is a philosophical one, and a poorly supported one at that.</p>

<blockquote class="pull-quote">
  <p>The Christian does not need to be afraid of hard questions. They need to take them more seriously than the person asking expects.</p>
</blockquote>

<h2>"Christianity Is Homophobic"</h2>

<p>This objection requires honest engagement. The church has too often treated gay and lesbian people with contempt rather than compassion. That is a real failure, and it deserves real acknowledgment. But the church's failures do not determine whether its teaching is true. The Christian sexual ethic—that sex is designed for marriage between a man and a woman—is not rooted in contempt for gay people. It is rooted in a theology of embodiment, covenant, and eschatology. One can disagree with that theology, but dismissing it as mere bigotry avoids the actual argument. The Christian who is willing to sit with this objection honestly—acknowledging the hurt the church has caused while also explaining the theological framework—will have a more credible and more productive conversation than the one who simply denies the charge.</p>

<h3>The Posture Beneath the Answers</h3>

<p>What unites all of these responses is not a set of arguments but a posture: intellectual honesty, genuine compassion for the person asking, and confidence that truth has nothing to fear from inquiry. The Christian apologist is not defending a position that is too fragile to be questioned. They are articulating a faith that has been questioned for two thousand years and has not yet been defeated by the questioning—because the questioning, when done well, keeps running into the same stubborn facts: an empty tomb, a transformed community, and a gospel that keeps making sense of the human condition.</p>
    `,
  },
  {
    id: 30,
    slug: 'the-gospel-and-the-cry-for-justice',
    title: "The Gospel's Answer to the Cry for Justice",
    subheading: "The hunger for justice that animates our cultural moment is not a rival to the gospel. It is one of the places where the gospel is most urgently needed.",
    excerpt: "Every generation that cries out for justice is, whether it knows it or not, testifying to a moral order it did not create and cannot explain without recourse to something like God.",
    author: AUTHORS[9],
    category: CATEGORIES[7],
    tags: ['justice', 'gospel', 'culture', 'apologetics', 'Keller Center'],
    publishedAt: '2025-01-05T09:00:00Z',
    updatedAt: '2025-01-05T09:00:00Z',
    readingTime: 7,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/gospel-justice/1920/1080',
      alt: 'A sunrise breaking over city rooftops with golden light',
      caption: '',
    },
    isFeatured: false,
    isEditorsPick: false,
    content: `
<p class="article-lead">One of the most striking features of secular culture in the twenty-first century is its intense moral passion. Whatever one thinks of the particular causes, the hunger for justice—for the vulnerable to be protected, the powerful to be held accountable, the historical record to be set right—is a genuine and deep feature of contemporary life. Many Christians experience this cultural moment primarily as a threat, as a set of ideological claims to be resisted. But there is another way to see it: as an apologetic opportunity of the first order.</p>

<h2>The Moral Testimony of the Secular Age</h2>

<p>Every person who cries out against injustice is, at some level, making a claim about moral reality. They are not merely expressing a preference—they are asserting that something wrong has been done, that there is a standard that has been violated, that the victims are owed something that has been withheld from them. This is, at its core, a moral realist claim. And moral realism is very difficult to ground on a naturalistic account of reality.</p>

<p>If the universe is fundamentally material and morality is simply the product of evolutionary pressures and social convention, then "this was unjust" means something like "I strongly dislike this, and so do enough people that we can enforce consequences." That is not what justice activists mean, and most of them know it. They mean something more—that a real wrong has been done, that it matters cosmically, that it deserves redress that may not be fully available in this life. These are intuitions that point beyond naturalism.</p>

<blockquote class="pull-quote">
  <p>The hunger for justice is not a rival to the gospel. It is one of the places where the gospel is most urgently needed—because it is one of the deepest longings the gospel is designed to address.</p>
</blockquote>

<h2>Where Only the Gospel Goes</h2>

<p>The gospel addresses the cry for justice in ways that secular frameworks cannot. It provides a ground for moral realism: there is a God who is just, who has built justice into the structure of reality, and whose character is the ultimate standard against which human conduct is measured. It provides hope that historical injustices will not go unaddressed: the God of Scripture is the one who "executes justice for the oppressed" (Ps. 146:7) and before whom all will give account. And it provides resources for the perpetrators of injustice that purely retributive frameworks cannot: not merely punishment but repentance, not merely consequences but forgiveness, not merely accountability but transformation.</p>

<h3>The Conversation Christians Should Be Seeking</h3>

<p>The Christian who engages the justice-hungry secularist not as an opponent but as someone whose deepest intuitions are pointing, however confusedly, toward truth, will find a conversation worth having. You do not need to agree with every political conclusion drawn from the cry for justice to affirm the reality of what is being pointed at. You do not need to validate every particular claim to take seriously the underlying hunger. And you may find that the person who came to the conversation prepared to argue is actually searching for something the gospel is the only adequate answer to.</p>
    `,
  },
  {
    id: 31,
    slug: 'why-there-is-no-neutral-worldview',
    title: 'Why There Is No Neutral Worldview',
    subheading: "Secularism presents itself as the absence of a worldview—the neutral starting point from which other positions deviate. This is one of the great intellectual illusions of our age.",
    excerpt: "The secular person does not hold no worldview. They hold a worldview that claims to be none. The Christian thinker's task is to make that visible.",
    author: AUTHORS[10],
    category: CATEGORIES[7],
    tags: ['worldview', 'secularism', 'philosophy', 'apologetics', 'Keller Center'],
    publishedAt: '2025-01-02T09:00:00Z',
    updatedAt: '2025-01-02T09:00:00Z',
    readingTime: 9,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/neutral-worldview/1920/1080',
      alt: 'A prism splitting white light into a spectrum on a dark background',
      caption: '',
    },
    isFeatured: true,
    isEditorsPick: false,
    content: `
<p class="article-lead">One of the most effective rhetorical moves in the modern secular playbook is the claim to neutrality. The secular person does not have a worldview—they simply accept the deliverances of science and reason, while religious people add a layer of unprovable metaphysical commitments on top. On this account, secularism is the default position, and religion is the deviation. Christians who accept this framing before the conversation begins have already conceded too much.</p>

<h2>There Is No View from Nowhere</h2>

<p>The philosopher Thomas Nagel titled one of his most important books <em>The View from Nowhere</em>—and his point was that no one has access to such a view. Every perspective is a perspective from somewhere. Every account of reality is built on prior commitments about what counts as evidence, what kinds of explanations are admissible, what questions are worth asking. These are not scientific questions. They are philosophical ones, and the secular thinker answers them just as much as the religious one—they simply answer them less consciously.</p>

<p>The secular worldview holds, among other things, that material reality is all there is, that consciousness is a product of physical processes, that moral values are constructed rather than discovered, and that meaning is something humans create rather than find. These are not scientific findings. They are metaphysical commitments, held on the basis of philosophical argument and personal conviction. They are, in the relevant sense, a faith—a set of prior commitments that cannot themselves be verified by the methods they privilege.</p>

<blockquote class="pull-quote">
  <p>Secularism does not occupy the neutral ground between worldviews. It is a worldview—with its own metaphysics, its own anthropology, its own account of the good life. The Christian's task is to make that visible.</p>
</blockquote>

<h2>What This Means for Apologetics</h2>

<p>Recognizing that secularism is a worldview rather than a default position changes the terms of apologetic engagement. The Christian is not asking a secular person to add unprovable claims to a neutral foundation. They are proposing that a Christian account of reality is more coherent, more comprehensive, and more honest about the full range of human experience than the secular alternative. This is a genuine intellectual contest between two comprehensive views of reality—not between a view and the absence of a view.</p>

<p>This matters because it levels the epistemic playing field. Both the Christian and the secular person are making commitments that cannot be fully verified by neutral means. Both are operating on faith in some meaningful sense. The question is which faith is better supported, which account of reality is more adequate to the evidence of human experience, history, consciousness, and moral intuition. That is a conversation worth having—and one that Christianity, properly understood, has every reason to welcome.</p>

<h3>Reading the Signs</h3>

<p>Chris Watkin's method of "biblical critical theory"—engaging secular thought by showing how biblical categories both illuminate and transcend secular ones—offers a model for this kind of engagement. Rather than simply opposing secular ideas, the Christian thinker can show how the deepest insights of secular philosophy are better explained, more fully honored, and more safely grounded within a Christian account of reality. This is not intellectual surrender. It is the confidence of a tradition that has been doing serious intellectual work for two thousand years and expects to keep doing it.</p>
    `,
  },
  {
    id: 32,
    slug: 'bearing-witness-in-a-distracted-age',
    title: 'Bearing Witness in a Distracted Age',
    subheading: "The witness of a Christian life requires the kind of sustained attention and unhurried presence that the digital age is systematically dismantling.",
    excerpt: "You cannot bear witness to a person you have never truly attended to. And attention—deep, patient, unhurried attention—is becoming one of the rarest things in the world.",
    author: AUTHORS[11],
    category: CATEGORIES[7],
    tags: ['witness', 'attention', 'technology', 'apologetics', 'Keller Center'],
    publishedAt: '2024-12-28T09:00:00Z',
    updatedAt: '2024-12-28T09:00:00Z',
    readingTime: 8,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/witness-distracted/1920/1080',
      alt: 'A person sitting still looking out a rain-streaked window',
      caption: '',
    },
    isFeatured: false,
    isEditorsPick: false,
    content: `
<p class="article-lead">Christian witness has always required the capacity to attend—to pay the kind of deep, patient, particular attention to a person that says, without words, <em>you matter, I am here, I am not going anywhere</em>. This is not a communication strategy. It is the baseline of any genuine relationship. And it is precisely this capacity that the attention economy has spent the last two decades systematically eroding.</p>

<h2>What Attention Is</h2>

<p>Simone Weil, the French philosopher and mystic, wrote that "attention is the rarest and purest form of generosity." She meant that truly attending to a person—setting aside your own agenda, your own next thought, your own phone—is one of the most costly and most valuable things you can give. It is costly because attention is scarce. We have only so much of it, and we are being pressured from every direction to disperse it across a thousand surfaces rather than concentrate it on any one thing or person.</p>

<p>The economics of the internet are built on the capture and monetization of attention. Every notification, every scroll, every algorithmically curated feed is designed to keep your attention moving—because moving attention is attention that can be sold. The consequence is a culture in which sustained attention is becoming genuinely rare, and in which the capacity for the kind of deep engagement that meaningful relationships require is quietly degrading.</p>

<blockquote class="pull-quote">
  <p>Attention is not just a cognitive resource. It is a moral act. To truly attend to a person is to tell them, with your whole self, that they matter.</p>
</blockquote>

<h2>Why This Matters for Witness</h2>

<p>Christian witness depends on relationships. Not on arguments alone, though arguments matter. Not on programs, though programs have their place. On the lived reality of a Christian life encountered in close enough proximity to be seen clearly. And that requires presence—the willingness to be with a person long enough, attentively enough, unhurriedly enough, that something real passes between you.</p>

<p>The person who is half-present, perpetually available to their phone, incapable of a conversation that is not interrupted every eight minutes, cannot be this kind of witness. Not because they lack the right beliefs, but because they have not cultivated the capacity for the kind of presence in which those beliefs become visible in a life.</p>

<h3>Recovering Attention as a Spiritual Practice</h3>

<p>Alan Noble's work on disruptive witness argues that the recovery of attention is itself an apologetic act—that a Christian who is genuinely present, genuinely still, genuinely attending to the people around them, is offering something that the distracted world around them recognizes as extraordinary and does not know how to account for. The capacity to be unhurried is a form of countercultural witness. The discipline of undivided presence is a form of love. And love, in a distracted age, is conspicuous.</p>
    `,
  },
  {
    id: 33,
    slug: 'the-historical-evidence-for-the-resurrection',
    title: 'The Historical Evidence for the Resurrection',
    subheading: "The resurrection of Jesus is not a matter of private faith. It is a historical claim, and the historical evidence for it is stronger than most people realize.",
    excerpt: "Most people assume that believing in the resurrection requires you to check your historical-critical faculties at the door. The evidence suggests otherwise.",
    author: AUTHORS[12],
    category: CATEGORIES[7],
    tags: ['resurrection', 'history', 'apologetics', 'evidence', 'Keller Center'],
    publishedAt: '2024-12-22T09:00:00Z',
    updatedAt: '2024-12-22T09:00:00Z',
    readingTime: 9,
    format: 'standard',
    featuredImage: {
      src: 'https://picsum.photos/seed/resurrection-evidence/1920/1080',
      alt: 'An ancient stone tomb entrance in warm morning light',
      caption: '',
    },
    isFeatured: false,
    isEditorsPick: true,
    content: `
<p class="article-lead">The claim that Jesus rose from the dead is the central claim of Christianity. Paul says as much: "If Christ has not been raised, your faith is futile and you are still in your sins" (1 Cor. 15:17). Everything hangs on this. And yet many Christians treat it as a matter of pure faith—something believed in despite the absence of evidence, by the exercise of a religious will that suspends historical inquiry. This is a mistake, and a costly one. The historical evidence for the resurrection is more robust than most people—including most Christians—realize.</p>

<h2>The Minimal Facts Approach</h2>

<p>Historians Gary Habermas and Michael Licona have developed what they call the "minimal facts" approach to the resurrection—working only from facts that are accepted by a broad majority of critical New Testament scholars, including those who are skeptical of Christianity. These minimal facts include: Jesus died by crucifixion; his tomb was found empty shortly after his death; the disciples claimed to have seen him alive after his death and were transformed by this experience; Paul, a persecutor of Christians, was suddenly converted, claiming to have encountered the risen Christ; and James, the brother of Jesus, who was skeptical during Jesus's ministry, became a leader in the early church.</p>

<p>These are not disputed by serious historians. The question is what best accounts for them. The resurrection hypothesis—that Jesus actually rose from the dead—provides a singularly coherent explanation of all of these facts together. The alternatives—hallucination, legendary development, body theft—each fail to account for some or several of the facts, and none accounts for all of them as well as the resurrection does.</p>

<blockquote class="pull-quote">
  <p>The question is not whether the resurrection is possible. The question is whether it is the best explanation of the evidence that every historian accepts. The case that it is has never been adequately answered.</p>
</blockquote>

<h2>The Transformation of the Disciples</h2>

<p>Perhaps the most historically powerful evidence for the resurrection is the transformation of the disciples. These were men who, at the moment of Jesus's arrest, fled. Peter denied knowing him three times. They locked themselves in a room "for fear of the Jews" (John 20:19). And then, within weeks, they were publicly proclaiming his resurrection in Jerusalem—the very city where he had been crucified—at personal risk to themselves, and with a boldness that got most of them eventually killed.</p>

<p>The hallucination hypothesis cannot account for this transformation, because hallucinations do not produce the kind of cohesive, consistent, socially shared experience across hundreds of people that Paul describes in 1 Corinthians 15. The legendary development hypothesis cannot account for it because the proclamation begins immediately, in the first weeks after the crucifixion, not in a later generation when memories had faded and legends could grow.</p>

<h3>Faith and Evidence</h3>

<p>None of this proves the resurrection with mathematical certainty. Historical inquiry cannot do that for any event. What it can do is establish which explanation of the evidence is most probable, given everything we know. And the honest historian, willing to follow the evidence where it leads without imposing prior philosophical commitments about what is or is not possible, will find that the resurrection is a remarkably well-attested historical event. The Christian does not believe in spite of the evidence. They believe because of it—and because of the cumulative testimony of twenty centuries of transformed lives that the living Christ continues to produce.</p>
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
