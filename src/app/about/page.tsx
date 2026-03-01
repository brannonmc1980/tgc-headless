import Image from 'next/image'
import Link from 'next/link'

const STATS = [
  { value: '10,000+', label: 'Articles & Resources' },
  { value: '16M+', label: 'International Visitors Annually' },
  { value: '12', label: 'Global Coalitions' },
  { value: '190+', label: 'Countries Reached' },
  { value: '6', label: 'Language Platforms' },
  { value: '38M+', label: 'Annual Resource Views' },
]

const COALITIONS = [
  'United States', 'Australia', 'Canada', 'Africa', 'Brazil',
  'France', 'India', 'Italy', 'Korea', 'Netherlands', 'Spain', 'Albania',
]

const LANGUAGE_PLATFORMS = [
  { lang: 'Arabic', region: 'Middle East & North Africa' },
  { lang: 'Chinese', region: 'Simplified & Traditional' },
  { lang: 'Farsi', region: 'Iran & Persian-Speaking World' },
  { lang: 'Russian', region: 'Eastern Europe & Central Asia' },
  { lang: 'Ukrainian', region: 'Ukraine & Diaspora' },
  { lang: 'Slovak', region: 'Central Europe' },
]

const COMMITMENTS = [
  {
    number: '01',
    title: 'The Supremacy of Scripture',
    body: 'We believe the Bible is the very Word of God — inspired, inerrant, and sufficient for all of life and faith. Every resource, sermon, and course we produce is anchored in careful, Christ-centered exposition of Scripture.',
  },
  {
    number: '02',
    title: 'The Gospel of Grace',
    body: 'We exist to help the church understand, believe, and proclaim the gospel — that God justifies sinners by grace alone, through faith alone, in Christ alone, to the glory of God alone. This is not one truth among many; it is the center of everything.',
  },
  {
    number: '03',
    title: 'The Priority of the Local Church',
    body: 'TGC is not a church, and we have no ambition to replace one. We believe the local congregation — gathered, worshiping, discipling, sending — is God\'s primary instrument for reaching the world. We serve the church.',
  },
  {
    number: '04',
    title: 'Cultural Engagement Without Compromise',
    body: 'We are called to be a counter-culture for the common good. We engage the questions of our age — sexuality, justice, work, politics, technology — with the clarity of the gospel and the humility of those who know they are saved by grace.',
  },
  {
    number: '05',
    title: 'A Global, Diverse Movement',
    body: 'The gospel is not Western. We are committed to developing gospel-centered resources and communities across languages, cultures, and continents — because the church of Jesus Christ is one body drawn from every tribe, tongue, and nation.',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-[#20272a]">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* NYC Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1499092346302-2af0f3bcfe9a?w=1920&h=1080&fit=crop"
            alt="New York City"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#20272a] via-[#20272a]/70 to-[#20272a]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#20272a]/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
          <div className="max-w-3xl">
            <p className="text-[#87b575] text-xs font-ui font-bold uppercase tracking-widest mb-6">
              The Gospel Coalition
            </p>
            <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#fbfbfa] leading-[1.02] tracking-tight">
              We exist to help the church know and love the gospel of Jesus Christ.
            </h1>
            <p className="font-body text-[#d3cfca] text-xl lg:text-2xl mt-8 leading-relaxed max-w-2xl">
              Founded in 2005, TGC is a fellowship of evangelical churches and ministers in the Reformed tradition, united by a conviction that the gospel changes everything — and that the church is the instrument through which it spreads.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="#story"
                className="px-7 py-3 bg-[#87b575] text-white font-ui font-semibold text-sm hover:bg-[#6d9960] transition-colors"
              >
                Our Story
              </Link>
              <Link
                href="/articles"
                className="px-7 py-3 border border-white/30 text-white font-ui font-semibold text-sm hover:border-white/60 transition-colors"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-white/30">
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Mission Statement ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#171d1f] border-t border-white/8">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#87b575] text-xs font-ui font-bold uppercase tracking-widest mb-6">Our Mission</p>
            <blockquote className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#fbfbfa] leading-snug">
              "A fellowship of evangelical churches in the Reformed tradition, deeply committed to renewing our faith in the gospel of Christ and to reforming our ministry practices to conform fully to the Scriptures."
            </blockquote>
            <p className="text-[#d3cfca] font-ui text-sm mt-8 tracking-wide">
              — TGC Foundation Documents, Preamble
            </p>
          </div>
        </div>
      </section>

      {/* ── Founding Story ───────────────────────────────────────────────── */}
      <section id="story" className="py-20 lg:py-28 border-t border-white/8">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-[#87b575] text-xs font-ui font-bold uppercase tracking-widest mb-3">The Beginning</p>
            <h2 className="font-headline text-4xl lg:text-6xl text-[#fbfbfa] max-w-2xl leading-tight">
              A City. A Conviction. A Coalition.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <p className="font-body text-[#d3cfca] text-lg leading-relaxed mb-6">
                In the early 2000s, a quiet unease was growing among many evangelical leaders. The church seemed to be drifting — toward consumerism, therapeutic self-help, political tribalism, and a gospel thin enough to offer comfort but not transformation. Something needed to be done.
              </p>
              <p className="font-body text-[#d3cfca] text-lg leading-relaxed mb-6">
                Two men — one a pastor in the most secular city in America, the other a scholar training the next generation of ministers — began to talk about what a new kind of coalition might look like. Not a denomination. Not a parachurch empire. A genuine fellowship of churches and leaders, bound together by the ancient gospel and committed to thinking carefully about what it means to live and minister in the modern world.
              </p>
              <p className="font-body text-[#d3cfca] text-lg leading-relaxed">
                In 2005, Timothy Keller and D.A. Carson co-founded The Gospel Coalition. What began as a gathering of a few hundred pastors in a hotel ballroom has become one of the most significant gospel-centered movements of the 21st century.
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522083165195-3424ed129620?w=900&h=675&fit=crop"
                  alt="New York City — home of Redeemer Presbyterian Church"
                  fill
                  className="object-cover brightness-75"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20272a]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[#d3cfca] text-xs font-ui">New York City — where Tim Keller planted Redeemer Presbyterian Church in 1989, one of the most influential urban church plants of the modern era</p>
                </div>
              </div>
            </div>
          </div>

          {/* Keller & Carson profiles */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tim Keller */}
            <div className="bg-[#171d1f] border border-white/10 overflow-hidden group">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=900&h=506&fit=crop"
                  alt="Manhattan — Tim Keller's city"
                  fill
                  className="object-cover brightness-50 group-hover:brightness-60 transition-all duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171d1f] via-transparent to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1 bg-[#87b575] text-white text-[10px] font-ui font-bold uppercase tracking-widest">Co-Founder</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-headline text-3xl text-[#fbfbfa] mb-1">Timothy J. Keller</h3>
                <p className="text-[#87b575] text-sm font-ui font-semibold mb-5">1950 – 2023</p>
                <p className="font-body text-[#d3cfca] text-base leading-relaxed mb-4">
                  Tim Keller planted Redeemer Presbyterian Church in Manhattan in 1989 with his wife Kathy and a small team of young professionals. What followed was extraordinary: a gospel-centered congregation in one of the most skeptical cities on earth, drawing thousands of unchurched New Yorkers and eventually planting dozens of daughter churches.
                </p>
                <p className="font-body text-[#d3cfca] text-base leading-relaxed mb-4">
                  As a preacher, author, and apologist, Keller became one of the most influential Christian voices of his generation. His books — <em className="text-[#fbfbfa]">The Reason for God</em>, <em className="text-[#fbfbfa]">The Prodigal God</em>, <em className="text-[#fbfbfa]">Prayer</em> — sold millions of copies and introduced countless skeptics and seekers to the beauty of Christ.
                </p>
                <p className="font-body text-[#d3cfca] text-base leading-relaxed">
                  Keller died of pancreatic cancer on May 19, 2023. He was 72. His legacy — of integrating intellectual rigor with pastoral warmth, of taking the city seriously, of centering everything on the grace of God — continues to shape TGC and the broader evangelical world.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-[#87b575] font-ui text-sm italic">
                    "The gospel is this: We are more sinful and flawed in ourselves than we ever dared believe, yet at the very same time we are more loved and accepted in Jesus Christ than we ever dared hope."
                  </p>
                </div>
              </div>
            </div>

            {/* D.A. Carson */}
            <div className="bg-[#171d1f] border border-white/10 overflow-hidden group">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&h=506&fit=crop"
                  alt="Scripture and scholarship — the work of D.A. Carson"
                  fill
                  className="object-cover brightness-50 group-hover:brightness-60 transition-all duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171d1f] via-transparent to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1 bg-[#87b575] text-white text-[10px] font-ui font-bold uppercase tracking-widest">Co-Founder</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-headline text-3xl text-[#fbfbfa] mb-1">D.A. Carson</h3>
                <p className="text-[#87b575] text-sm font-ui font-semibold mb-5">Research Professor of New Testament, TEDS</p>
                <p className="font-body text-[#d3cfca] text-base leading-relaxed mb-4">
                  Donald Arthur Carson is one of the most prolific and respected evangelical scholars of the last half-century. As Research Professor of New Testament at Trinity Evangelical Divinity School for over four decades, he trained generations of pastors and scholars to read the Bible carefully, think theologically, and minister faithfully.
                </p>
                <p className="font-body text-[#d3cfca] text-base leading-relaxed mb-4">
                  Carson has authored or edited more than sixty books, including <em className="text-[#fbfbfa]">The Gospel According to John</em>, <em className="text-[#fbfbfa]">Exegetical Fallacies</em>, and <em className="text-[#fbfbfa]">The Difficult Doctrine of the Love of God</em>. His scholarship is marked by meticulous engagement with the biblical text, wide-ranging theological reflection, and a deep pastoral instinct.
                </p>
                <p className="font-body text-[#d3cfca] text-base leading-relaxed">
                  As founding president of TGC, Carson has been the movement's theological architect — writing the confessional statement, shaping the Theological Vision for Ministry, and providing the scholarly grounding that has given TGC its intellectual credibility.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-[#87b575] font-ui text-sm italic">
                    "We are not a monolith; we are a coalition — united by a common commitment to the gospel and a common vision for what the church can be."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <section className="relative py-20 border-t border-white/8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1920&h=1080&fit=crop"
            alt=""
            fill
            className="object-cover opacity-[0.10]"
          />
          <div className="absolute inset-0 bg-[#171d1f]/88" />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
            {STATS.map(stat => (
              <div key={stat.label} className="text-center">
                <p className="font-headline text-4xl lg:text-5xl text-[#87b575]">{stat.value}</p>
                <p className="text-[#d3cfca] text-xs font-ui mt-2 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Believe ───────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 border-t border-white/8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1920&h=1080&fit=crop"
            alt=""
            fill
            className="object-cover opacity-[0.08]"
          />
          <div className="absolute inset-0 bg-[#20272a]/90" />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="text-[#87b575] text-xs font-ui font-bold uppercase tracking-widest mb-3">Convictions</p>
              <h2 className="font-headline text-4xl lg:text-5xl text-[#fbfbfa] leading-tight sticky top-24">
                What We Believe
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-0 divide-y divide-white/8">
              {COMMITMENTS.map(c => (
                <div key={c.number} className="py-8 first:pt-0">
                  <div className="flex gap-6">
                    <span className="text-[#87b575]/40 font-ui text-xs font-bold pt-1 flex-shrink-0">{c.number}</span>
                    <div>
                      <h3 className="font-ui font-semibold text-[#fbfbfa] text-lg mb-3">{c.title}</h3>
                      <p className="font-body text-[#d3cfca] text-base leading-relaxed">{c.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Conferences ───────────────────────────────────────────────────── */}
      <section className="border-t border-white/8 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[540px]">
            <Image
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&h=675&fit=crop"
              alt="TGC National Conference"
              fill
              className="object-cover brightness-60"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#20272a] hidden lg:block" />
          </div>
          {/* Content */}
          <div className="bg-[#20272a] px-8 py-16 lg:px-16 lg:py-20 flex items-center">
            <div>
              <p className="text-[#87b575] text-xs font-ui font-bold uppercase tracking-widest mb-4">Gathering Together</p>
              <h2 className="font-headline text-4xl lg:text-5xl text-[#fbfbfa] leading-tight mb-6">
                Conferences That Strengthen the Church
              </h2>
              <p className="font-body text-[#d3cfca] text-lg leading-relaxed mb-8">
                Every two years, tens of thousands of pastors, church leaders, and believers gather for the TGC National Conference — days of gospel preaching, theological conversation, and worshipful renewal. It is one of the largest gatherings of Reformed evangelicals in the world.
              </p>
              <div className="space-y-5">
                {[
                  { title: 'National Conference', desc: 'Biennial gathering of thousands of church leaders, featuring world-class preaching and plenary sessions.' },
                  { title: "Women's Conference", desc: 'Annual gathering equipping women through Scripture, community, and gospel-centered teaching.' },
                  { title: 'Regional Conferences', desc: 'Smaller, locally organized gatherings for pastors and leaders throughout the year.' },
                ].map(conf => (
                  <div key={conf.title} className="flex gap-4">
                    <div className="w-1 flex-shrink-0 bg-[#87b575] rounded-full" />
                    <div>
                      <h4 className="font-ui font-semibold text-[#fbfbfa] text-sm">{conf.title}</h4>
                      <p className="text-[#d3cfca] text-sm font-ui mt-1 leading-relaxed">{conf.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── International ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-t border-white/8 bg-[#171d1f]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <p className="text-[#87b575] text-xs font-ui font-bold uppercase tracking-widest mb-3">Global Reach</p>
              <h2 className="font-headline text-4xl lg:text-5xl text-[#fbfbfa] leading-tight mb-6">
                A Movement of Movements Across the World
              </h2>
              <p className="font-body text-[#d3cfca] text-lg leading-relaxed mb-6">
                The gospel is not Western, and neither is TGC. Over the past two decades, the coalition has grown into a global network — twelve independent national coalitions, six language platforms reaching billions of people, and resources freely available in 190+ countries.
              </p>
              <p className="font-body text-[#d3cfca] text-lg leading-relaxed">
                More than 16 million users outside the United States visit TGC's global network of websites each year. Pastors in Lagos, São Paulo, Seoul, and Kyiv read the same gospel-saturated resources as those in Nashville and London — because the hunger for faithful, thoughtful Christianity is everywhere.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&h=675&fit=crop"
                alt="Global Christian community"
                fill
                className="object-cover brightness-60"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171d1f]/60 to-transparent" />
            </div>
          </div>

          {/* Coalitions grid */}
          <div className="mb-12">
            <h3 className="font-ui font-semibold text-[#d3cfca] text-sm uppercase tracking-widest mb-6">12 National Coalitions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {COALITIONS.map(c => (
                <div key={c} className="border border-white/10 px-4 py-3 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#87b575] flex-shrink-0" />
                  <span className="text-[#d3cfca] text-sm font-ui">{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Language platforms */}
          <div>
            <h3 className="font-ui font-semibold text-[#d3cfca] text-sm uppercase tracking-widest mb-6">6 Language Platforms</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {LANGUAGE_PLATFORMS.map(lp => (
                <div key={lp.lang} className="bg-[#20272a] border border-white/10 px-5 py-4">
                  <p className="font-ui font-semibold text-[#fbfbfa] text-sm">{lp.lang}</p>
                  <p className="text-stone-500 text-xs font-ui mt-0.5">{lp.region}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Local Churches ────────────────────────────────────────────────── */}
      <section className="border-t border-white/8 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#20272a] px-8 py-16 lg:px-16 lg:py-20 flex items-center order-2 lg:order-1">
            <div>
              <p className="text-[#87b575] text-xs font-ui font-bold uppercase tracking-widest mb-4">Serving the Church</p>
              <h2 className="font-headline text-4xl lg:text-5xl text-[#fbfbfa] leading-tight mb-6">
                We Serve the Church. The Church Reaches the World.
              </h2>
              <p className="font-body text-[#d3cfca] text-lg leading-relaxed mb-6">
                TGC is not a church. We are a service organization, a convening body, a publishing platform — all in the service of local congregations and the pastors who lead them. We believe that the local church, gathered around Word and sacrament, is God's chosen means to extend his kingdom.
              </p>
              <p className="font-body text-[#d3cfca] text-lg leading-relaxed mb-8">
                Through city and regional chapters, we connect churches within communities — creating friendships between pastors, fostering gospel partnerships, and encouraging the kind of cross-church cooperation that makes the broader witness of Christianity credible.
              </p>
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-[#87b575] font-ui font-semibold text-sm hover:text-[#6d9960] transition-colors"
              >
                Explore our resources
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[540px] order-1 lg:order-2">
            <Image
              src="https://images.unsplash.com/photo-1438032005730-c779502df39b?w=900&h=675&fit=crop"
              alt="Local church community"
              fill
              className="object-cover brightness-60"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#20272a] hidden lg:block" />
          </div>
        </div>
      </section>

      {/* ── The Vision ────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-36 overflow-hidden border-t border-white/8">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
            alt="Vision"
            fill
            className="object-cover brightness-30"
          />
          <div className="absolute inset-0 bg-[#20272a]/70" />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#87b575] text-xs font-ui font-bold uppercase tracking-widest mb-6">The Vision</p>
          <blockquote className="font-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#fbfbfa] leading-snug max-w-4xl mx-auto">
            "We long to see a day when the church is characterized by full, integrative gospel balance — where doctrine and devotion, community and mission, culture-engagement and gospel clarity all hold together."
          </blockquote>
          <p className="text-[#d3cfca] font-ui text-sm mt-8">
            — Theological Vision for Ministry
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#171d1f] border-t border-white/8">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-4xl lg:text-5xl text-[#fbfbfa] leading-tight mb-4">
                Join millions of believers growing in the gospel.
              </h2>
              <p className="font-body text-[#d3cfca] text-lg leading-relaxed">
                Free articles, sermons, courses, and podcasts — all rooted in Scripture and produced by some of the most trusted voices in evangelical Christianity. Start exploring today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link
                href="/articles"
                className="px-8 py-3.5 bg-[#87b575] text-white font-ui font-semibold text-sm hover:bg-[#6d9960] transition-colors text-center"
              >
                Read Articles
              </Link>
              <Link
                href="/newsletters"
                className="px-8 py-3.5 border border-white/30 text-white font-ui font-semibold text-sm hover:border-white/60 transition-colors text-center"
              >
                Get the Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
