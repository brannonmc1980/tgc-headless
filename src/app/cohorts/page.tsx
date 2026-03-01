'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const COHORTS = [
  {
    id: 'reading-psalms',
    title: 'Reading the Psalms',
    teacher: 'D.A. Carson',
    category: 'Bible & Theology',
    weeks: 6,
    startDate: 'April 7',
    seats: 48,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=700&fit=crop',
    level: 'All Levels',
  },
  {
    id: 'gospel-and-culture',
    title: 'Gospel & Culture',
    teacher: 'Brett McCracken',
    category: 'Culture',
    weeks: 5,
    startDate: 'April 14',
    seats: 36,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=700&fit=crop',
    level: 'Intermediate',
  },
  {
    id: 'preaching-old-testament',
    title: 'Preaching the Old Testament',
    teacher: 'Kevin DeYoung',
    category: 'Ministry',
    weeks: 8,
    startDate: 'April 21',
    seats: 24,
    image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=500&h=700&fit=crop',
    level: 'Advanced',
  },
  {
    id: 'apologetics-today',
    title: 'Apologetics for Today',
    teacher: 'Rebecca McLaughlin',
    category: 'Theology',
    weeks: 6,
    startDate: 'May 5',
    seats: 52,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=700&fit=crop',
    level: 'All Levels',
  },
  {
    id: 'theology-of-suffering',
    title: 'Theology of Suffering',
    teacher: 'Paul David Tripp',
    category: 'Christian Living',
    weeks: 4,
    startDate: 'May 12',
    seats: 60,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=700&fit=crop',
    level: 'All Levels',
  },
  {
    id: 'foundations-for-new-believers',
    title: 'Faith Foundations',
    teacher: 'Melissa Kruger',
    category: 'Christian Living',
    weeks: 4,
    startDate: 'May 19',
    seats: 72,
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=500&h=700&fit=crop',
    level: 'Beginner',
  },
]

const TESTIMONIALS = [
  {
    quote: "The Psalms cohort completely changed how I read Scripture. D.A. Carson's weekly sessions were dense, warm, and practical. My small group still talks about week four.",
    name: 'Sarah M.',
    location: 'Austin, TX',
  },
  {
    quote: "I've done online courses before, but this felt like a real community. The live Q&A sessions meant I could ask the questions I'd been sitting with for years.",
    name: 'James K.',
    location: 'Nashville, TN',
  },
  {
    quote: "As a pastor, I was skeptical—I don't have time for fluff. This was the opposite. Rigorous, pastoral, and the cohort peers pushed me harder than I expected.",
    name: 'David C.',
    location: 'Edinburgh, UK',
  },
  {
    quote: "I enrolled from Lagos and felt fully included. The cohort model made the time zone difference worthwhile. The certificate now hangs in my office.",
    name: 'Emmanuel A.',
    location: 'Lagos, Nigeria',
  },
  {
    quote: "The peer interaction was unexpected gold. I've stayed in touch with three people from my cohort. We're still reading together six months later.",
    name: 'Rachel P.',
    location: 'Chicago, IL',
  },
]

const TEACHERS = [
  {
    name: 'D.A. Carson',
    role: 'Research Professor of New Testament, TEDS',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    cohorts: 3,
  },
  {
    name: 'Kevin DeYoung',
    role: 'Senior Pastor, Christ Covenant Church',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    cohorts: 4,
  },
  {
    name: 'Paul David Tripp',
    role: 'Author & Conference Speaker',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
    cohorts: 2,
  },
  {
    name: 'Rebecca McLaughlin',
    role: 'Author & Apologist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    cohorts: 2,
  },
  {
    name: 'Melissa Kruger',
    role: "Director of Women's Content, TGC",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
    cohorts: 3,
  },
  {
    name: 'Sam Allberry',
    role: 'Author & TGC Council Member',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=face',
    cohorts: 2,
  },
  {
    name: 'Collin Hansen',
    role: 'Editor in Chief, TGC',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
    cohorts: 2,
  },
  {
    name: 'Andrew Wilson',
    role: "Teaching Pastor, King's Church London",
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face',
    cohorts: 1,
  },
]

const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Tight-Knit Live Cohorts',
    body: 'Join a small group led by TGC staff, Council members, and trusted teachers for 4–8 weeks of focused, live learning.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: 'Clear Learning Paths',
    body: 'Weekly live sessions, guided reading and discussion, and structured peer interaction — from beginner to seasoned in your area of study.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'A Global Community',
    body: 'Engage alongside believers from across the world — asking questions, applying Scripture, and reflecting together. Not just watching videos.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    ),
    title: 'Certificate of Completion',
    body: 'Earn a certificate signifying your commitment to growth and gospel-shaped learning, recognized across TGC\'s network.',
  },
]

export default function CohortsPage() {
  const [videoPlaying, setVideoPlaying] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  function scrollCarousel(dir: 'left' | 'right') {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === 'right' ? 340 : -340, behavior: 'smooth' })
  }

  return (
    <div className="bg-[#20272a] min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[#171d1f]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #d3cfca 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#87b575]/30 to-transparent" />

        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#87b575]/30 bg-[#87b575]/10 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#87b575]" />
            <span className="text-[#87b575] text-xs font-ui font-semibold tracking-widest uppercase">Live, Interactive, Gospel-Centered Learning</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="font-headline text-6xl sm:text-7xl lg:text-8xl xl:text-[7rem] text-[#fbfbfa] leading-[1.0] tracking-tight">
              Cohorts
            </h1>
            <p className="font-headline text-2xl sm:text-3xl lg:text-4xl text-[#87b575] mt-4 leading-snug">
              Deepen Your Faith. Equip for Life. Learn Together.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              {FEATURES.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#87b575]/10 border border-[#87b575]/20 flex items-center justify-center text-[#87b575]">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-ui font-semibold text-[#fbfbfa] text-base">{f.title}</h3>
                    <p className="text-[#d3cfca] text-sm font-ui leading-relaxed mt-1">{f.body}</p>
                  </div>
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="#upcoming"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-[#87b575] text-white font-ui font-semibold text-sm hover:bg-[#6d9960] transition-colors"
                >
                  Browse Upcoming Cohorts
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" transform="rotate(-90 12 12)" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Video */}
            <div className="relative aspect-video bg-[#0f1416] overflow-hidden group">
              {videoPlaying ? (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/?autoplay=1"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              ) : (
                <>
                  <Image
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&h=506&fit=crop"
                    alt="TGC Cohorts trailer"
                    fill
                    className="object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1416]/80 via-transparent to-transparent" />
                  <button
                    onClick={() => setVideoPlaying(true)}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                    aria-label="Play trailer"
                  >
                    <div className="w-20 h-20 rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:border-[#87b575] group-hover:bg-[#87b575]/20 transition-all duration-300">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="text-white/70 text-sm font-ui tracking-wide">Learn More</span>
                  </button>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white/50 text-xs font-ui">TGC Cohorts — Spring 2026</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Upcoming Cohorts ─────────────────────────────────────────────── */}
      <section id="upcoming" className="py-20 lg:py-24 border-t border-white/8">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[#87b575] text-xs font-ui font-bold uppercase tracking-widest mb-2">Spring 2026</p>
              <h2 className="font-headline text-4xl lg:text-5xl text-[#fbfbfa]">Upcoming Cohorts</h2>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scrollCarousel('left')}
                className="w-10 h-10 rounded-full border border-white/20 text-white/60 hover:border-white/50 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Scroll left"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                className="w-10 h-10 rounded-full border border-white/20 text-white/60 hover:border-white/50 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Scroll right"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {COHORTS.map(cohort => (
              <div
                key={cohort.id}
                className="flex-shrink-0 w-[280px] sm:w-[300px] snap-start group cursor-pointer"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                  <Image
                    src={cohort.image}
                    alt={cohort.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-75"
                    sizes="300px"
                  />
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1416] via-[#0f1416]/40 to-transparent" />

                  {/* Level badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 bg-[#87b575]/90 text-white text-[10px] font-ui font-bold uppercase tracking-widest">
                      {cohort.level}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[#87b575] text-[10px] font-ui font-bold uppercase tracking-widest mb-1.5">
                      {cohort.category}
                    </p>
                    <h3 className="font-headline text-[#fbfbfa] text-xl leading-snug mb-1">
                      {cohort.title}
                    </h3>
                    <p className="text-[#d3cfca] text-xs font-ui">
                      with {cohort.teacher}
                    </p>
                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/15 text-[11px] font-ui text-stone-400">
                      <span>{cohort.weeks} weeks</span>
                      <span className="text-white/20">·</span>
                      <span>Starts {cohort.startDate}</span>
                      <span className="text-white/20">·</span>
                      <span>{cohort.seats} seats</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <button className="w-full py-2.5 border border-white/20 text-[#d3cfca] text-xs font-ui font-semibold uppercase tracking-wide hover:border-[#87b575] hover:text-[#87b575] transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-24 border-t border-white/8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920&h=1080&fit=crop"
            alt=""
            fill
            className="object-cover opacity-[0.14]"
          />
          <div className="absolute inset-0 bg-[#171d1f]/85" />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#87b575] text-xs font-ui font-bold uppercase tracking-widest mb-2">From Cohort Alumni</p>
            <h2 className="font-headline text-4xl lg:text-5xl text-[#fbfbfa]">What Learners Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="border border-white/10 bg-[#20272a] p-7 flex flex-col gap-5"
              >
                {/* Quote mark */}
                <svg className="w-8 h-8 text-[#87b575]/40 flex-shrink-0" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.333C7.333 12.527 8.527 11.333 10 11.333V8zm18 0c-3.314 0-6 2.686-6 6v10h10V14h-6.667C25.333 12.527 26.527 11.333 28 11.333V8z" />
                </svg>
                <p className="font-body text-[#d3cfca] text-base leading-relaxed flex-1">
                  {t.quote}
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="font-ui font-semibold text-[#fbfbfa] text-sm">{t.name}</p>
                  <p className="text-stone-500 text-xs font-ui mt-0.5">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Teachers ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 border-t border-white/8">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#87b575] text-xs font-ui font-bold uppercase tracking-widest mb-2">The Faculty</p>
            <h2 className="font-headline text-4xl lg:text-5xl text-[#fbfbfa]">Past & Present Cohort Teachers</h2>
            <p className="text-[#d3cfca] text-lg font-ui mt-3 max-w-2xl">
              Every cohort is led by a trusted voice in evangelical scholarship, pastoral ministry, or gospel-centered scholarship.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
            {TEACHERS.map(teacher => (
              <div key={teacher.name} className="group">
                <div className="relative overflow-hidden aspect-square bg-[#171d1f]">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1416]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Cohort count badge */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 bg-[#87b575] text-white text-[10px] font-ui font-bold">
                    {teacher.cohorts} {teacher.cohorts === 1 ? 'cohort' : 'cohorts'}
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="font-ui font-semibold text-[#fbfbfa] text-sm">{teacher.name}</h3>
                  <p className="text-stone-500 text-xs font-ui mt-0.5 leading-snug">{teacher.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="relative py-20 border-t border-white/8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&h=1080&fit=crop"
            alt=""
            fill
            className="object-cover opacity-[0.12]"
          />
          <div className="absolute inset-0 bg-[#171d1f]/88" />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-4xl lg:text-5xl text-[#fbfbfa] mb-4">
            Ready to learn together?
          </h2>
          <p className="text-[#d3cfca] text-lg font-ui max-w-xl mx-auto mb-8">
            Seats are limited. Join a cohort this spring and grow in the gospel alongside believers from around the world.
          </p>
          <Link
            href="#upcoming"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#87b575] text-white font-ui font-semibold text-sm hover:bg-[#6d9960] transition-colors"
          >
            View Upcoming Cohorts
          </Link>
        </div>
      </section>

    </div>
  )
}
