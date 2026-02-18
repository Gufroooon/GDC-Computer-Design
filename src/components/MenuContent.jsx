import { motion } from 'framer-motion'
import {
  BookOpenCheck,
  CalendarCheck2,
  Clock3,
  Mail,
  MapPin,
  Paintbrush2,
  Phone,
  UserRound,
  Users,
} from 'lucide-react'

export const COURSE_NAMES = [
  'SketchUp',
  'AutoCAD',
  '3D Studio Max',
  'Graphic Design',
  'DTP',
  'Web Design',
]

const courseContent = {
  SketchUp: {
    overview:
      'Program SketchUp difokuskan pada pembuatan model 3D arsitektur, interior, dan presentasi visual yang cepat serta presisi.',
    skills: [
      'Module 1: Pengenalan Interface',
      'Module 2: Drawing Tools',
      'Module 3: Modifikasi Object',
      'Module 4: Group & Component',
      'Module 5: Material & Rendering Basic',
      'Module 6: Project Mini House',
    ],
    intermediateSkills: [
      'Module 1: Modeling Bangunan Bertingkat',
      'Module 2: Advanced Component Management',
      'Module 3: Scene Composition and Camera Angle',
      'Module 4: Material Realism Improvement',
      'Module 5: Workflow Optimization',
    ],
    advancedSkills: [
      'Module 1: Complex Interior-Exterior Project',
      'Module 2: High Detail Asset Integration',
      'Module 3: Presentation Board Professional',
      'Module 4: Client Revision Workflow',
      'Module 5: Final Portfolio Project',
    ],
    schedule: [
      'Senin & Rabu - 19:00 to 21:00',
      'Sabtu - 10:00 to 13:00',
      'Durasi program: 8 minggu',
    ],
    mentors: [
      'Mentor 1-on-1 tiap akhir pekan',
      'Review project mingguan',
      'Career consultation for portfolio preparation',
    ],
  },
  AutoCAD: {
    overview:
      'Program AutoCAD membahas teknik drafting 2D, detail kerja bangunan, dan dokumentasi teknis sesuai standar industri.',
    skills: [
      '2D drafting and annotation standards',
      'Technical drawing and layout plotting',
      'Productive command workflow and shortcuts',
    ],
    intermediateSkills: [
      'Advanced layer management and standards',
      'Dynamic block and attribute workflow',
      'Detailed construction drawing setup',
      'Layout plotting for multi-sheet projects',
    ],
    advancedSkills: [
      'Complex technical detailing project',
      'Production-ready drawing package',
      'Quality control and revision tracking',
      'Portfolio-based final CAD submission',
    ],
    schedule: [
      'Selasa & Kamis - 19:00 to 21:00',
      'Minggu - 09:00 to 12:00',
      'Durasi program: 8 minggu',
    ],
    mentors: [
      'Klinik tugas setiap Jumat',
      'Q&A langsung dengan praktisi CAD',
      'Review kesiapan untuk sertifikasi dasar',
    ],
  },
  '3D Studio Max': {
    overview:
      'Program 3D Studio Max fokus pada visualisasi arsitektur, rendering realistis, dan optimasi pipeline produksi.',
    skills: [
      'Modeling and scene optimization',
      'Realistic lighting and rendering setup',
      'Post-processing pipeline for presentation',
    ],
    intermediateSkills: [
      'Intermediate modeling topology and cleanup',
      'Photoreal material and texture setup',
      'Render pass and compositing workflow',
      'Scene optimization for faster output',
    ],
    advancedSkills: [
      'High-end architectural visualization project',
      'Lighting storytelling and art direction',
      'Advanced render tuning and noise control',
      'Final production workflow for portfolio',
    ],
    schedule: [
      'Senin & Kamis - 19:30 to 21:30',
      'Sabtu - 13:00 to 16:00',
      'Durasi program: 10 minggu',
    ],
    mentors: [
      'Mentoring technical setup rendering',
      'Project feedback per milestone',
      'Consultation for freelance workflow',
    ],
  },
  'Graphic Design': {
    overview:
      'Program Graphic Design membahas prinsip desain visual, branding, dan eksekusi materi promosi digital.',
    skills: [
      'Design principles and typography',
      'Brand identity system and guidelines',
      'Social media and campaign design assets',
    ],
    intermediateSkills: [
      'Visual hierarchy and grid system',
      'Brand collateral development',
      'Campaign asset consistency workflow',
      'Design critique and iterative improvement',
    ],
    advancedSkills: [
      'Complete brand system case study',
      'Creative direction and artboard strategy',
      'Multi-channel campaign simulation',
      'Portfolio-ready branding presentation',
    ],
    schedule: [
      'Selasa & Jumat - 19:00 to 21:00',
      'Sabtu - 09:00 to 12:00',
      'Durasi program: 8 minggu',
    ],
    mentors: [
      'Creative direction review mingguan',
      'Portfolio critique session',
      'Mentor support for case study project',
    ],
  },
  DTP: {
    overview:
      'Program DTP dirancang untuk kebutuhan layout majalah, buku, materi cetak, dan produksi pra-cetak.',
    skills: [
      'Publishing layout and grid systems',
      'Prepress preparation and print-ready files',
      'Text styles and document consistency',
    ],
    intermediateSkills: [
      'Complex long-document layout workflow',
      'Master page and style automation',
      'Image and typography refinement',
      'Preflight quality control techniques',
    ],
    advancedSkills: [
      'Magazine or catalog final production',
      'Advanced print specification handling',
      'Revision coordination for publication',
      'Professional print-ready portfolio output',
    ],
    schedule: [
      'Rabu & Jumat - 19:00 to 21:00',
      'Minggu - 10:00 to 13:00',
      'Durasi program: 6 minggu',
    ],
    mentors: [
      'Review file prepress and output',
      'Troubleshooting workflow template',
      'Consultation for print production quality',
    ],
  },
  'Web Design': {
    overview:
      'Program Web Design membahas UI fundamentals, design system, dan implementasi layout modern responsif.',
    skills: [
      'UI layout and interaction design',
      'Color system and component consistency',
      'Responsive web design workflow',
    ],
    intermediateSkills: [
      'Design system and reusable components',
      'Advanced responsive layout strategy',
      'Interaction states and usability flow',
      'Handoff-ready UI documentation',
    ],
    advancedSkills: [
      'End-to-end website redesign case study',
      'High-fidelity prototype presentation',
      'Accessibility and UX improvement audit',
      'Portfolio-level web design project',
    ],
    schedule: [
      'Senin & Rabu - 20:00 to 22:00',
      'Sabtu - 15:00 to 17:30',
      'Durasi program: 8 minggu',
    ],
    mentors: [
      'UI critique and accessibility check',
      'Design handoff best practice',
      'Portfolio and interview consultation',
    ],
  },
}

const updateContent = {
  workshop: {
    title: '2026 Design Trends Workshop: Embracing AI in Creativity',
    summary:
      'Workshop intensif untuk mengeksplorasi alur kerja AI pada visualisasi arsitektur, branding, dan presentasi desain.',
    points: [
      'Hands-on session: prompt strategy for concept generation',
      'Live demonstration: workflow from sketch to final render',
      'Networking with alumni and industry practitioners',
    ],
  },
  tips: {
    title: 'Top 5 Rendering Shortcuts for 3ds Max Users',
    summary:
      'Rangkuman shortcut dan kebiasaan kerja yang membantu percepat proses rendering tanpa menurunkan kualitas visual.',
    points: [
      'Viewport and scene optimization shortcuts',
      'Fast material assignment and layer grouping',
      'Quick lighting preset iteration workflow',
    ],
  },
  announcement: {
    title: 'New Student Enrollment for April Intake',
    summary:
      'Pendaftaran batch April sudah dibuka untuk kelas malam dan weekend dengan kuota terbatas pada tiap program.',
    points: [
      'Early-bird fee available sampai 31 Maret 2026',
      'Placement consultation tersedia untuk peserta baru',
      'Pilihan kelas hybrid: onsite dan online support',
    ],
  },
}

function ContentCard({ icon: Icon, title, items }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-md"
    >
      <div className="mb-3 flex items-center gap-2 text-blue-200">
        <Icon className="h-4 w-4" />
        <h3 className="text-sm font-semibold uppercase tracking-[0.14em]">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm text-slate-300">
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

function Banner({ label, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-blue-300/25 bg-gradient-to-r from-blue-600/20 to-slate-900/40 p-6"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-blue-200">{label}</p>
      <h2 className="mt-2 text-3xl font-bold text-white">{title}</h2>
      <p className="mt-3 max-w-3xl text-slate-300">{description}</p>
    </motion.div>
  )
}

function CoursesDirectory({ onSelectCourse }) {
  return (
    <section className="space-y-6">
      <Banner
        label="Explore Courses"
        title="All Available Courses"
        description="Pilih course yang ingin dipelajari. Setelah dipilih, kamu akan langsung masuk ke level Dasar."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {COURSE_NAMES.map((name) => (
          <motion.button
            key={name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -3, scale: 1.01 }}
            onClick={() => onSelectCourse?.(name)}
            className="rounded-2xl border border-white/10 bg-slate-900/65 p-5 text-left transition hover:border-blue-300/30 hover:bg-blue-500/10"
          >
            <p className="text-lg font-semibold text-white">{name}</p>
            <p className="mt-2 text-sm text-slate-300">
              Open level Dasar, Menengah, dan Lanjutan.
            </p>
          </motion.button>
        ))}
      </div>
    </section>
  )
}

function CourseMenuContent({ selection }) {
  const data = courseContent[selection.course]
  if (!data) return null

  const sectionLabel = selection.section || 'Dasar'
  const sectionMap = {
    Dasar: {
      title: `${selection.course} - Dasar`,
      description: `${data.overview} Level dasar fokus pada fondasi tools, workflow, dan latihan awal proyek.`,
      cards: [
        { icon: BookOpenCheck, title: 'Materi Dasar', items: data.skills },
        {
          icon: CalendarCheck2,
          title: 'Biaya Kursus',
          items: [
            'Durasi 10x pertemuan / 2 Jam',
            'Biaya Rp. 1.500.000,-',
            'Kelas Privat (1 Siswa : 1 Pengajar)',
          ],
        },
      ],
    },
    Menengah: {
      title: `${selection.course} - Menengah`,
      description:
        'Level menengah berfokus pada peningkatan kecepatan kerja, kualitas hasil, dan eksekusi project real-case.',
      cards: [
        {
          icon: BookOpenCheck,
          title: 'Materi Menengah',
          items: data.intermediateSkills,
        },
        {
          icon: Users,
          title: 'Biaya Kursus',
          items: [
            'Durasi 10x pertemuan / 2 Jam',
            'Biaya Rp. 2.750.000,-',
            'Kelas Privat (1 Siswa : 1 Pengajar)',
          ],
        },
      ],
    },
    Lanjutan: {
      title: `${selection.course} - Lanjutan`,
      description:
        'Level lanjutan menekankan output profesional, konsultasi intensif, dan persiapan portofolio industri.',
      cards: [
        {
          icon: BookOpenCheck,
          title: 'Materi Lanjutan',
          items: data.advancedSkills,
        },
        {
          icon: Users,
         title: 'Biaya Kursus',
          items: [
            'Durasi 10x pertemuan / 2 Jam',
            'Biaya Rp. 3.000.000,-',
            'Kelas Privat (1 Siswa : 1 Pengajar)',
          ],
        },
      ],
    },
  }

  const active = sectionMap[sectionLabel] || sectionMap.Dasar

  return (
    <section className="space-y-6">
      <Banner
        label="Course Menu"
        title={active.title}
        description={active.description}
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {active.cards.map((card) => (
          <ContentCard
            key={`${active.title}-${card.title}`}
            icon={card.icon}
            title={card.title}
            items={card.items}
          />
        ))}
      </div>
    </section>
  )
}

function ContactUsContent() {
  return (
    <section className="space-y-6">
      <Banner
        label="General Menu"
        title="Contact Us"
        description="Hubungi tim GDC untuk informasi pendaftaran, konsultasi kelas, atau kunjungan langsung ke kampus."
      />
      <div className="grid gap-4 lg:grid-cols-3">
        <ContentCard
          icon={Phone}
          title="Phone"
          items={['+62 (251) 888-2345', '+62 811-2233-4455 (WhatsApp)']}
        />
        <ContentCard
          icon={Mail}
          title="Email"
          items={['info@gdc-design.id', 'admission@gdc-design.id']}
        />
        <ContentCard
          icon={MapPin}
          title="Address"
          items={['Jl. Raya Pajajaran No. 123', 'Bogor Tengah, Jawa Barat']}
        />
      </div>
    </section>
  )
}

function WorksContent() {
  return (
    <section className="space-y-6">
      <Banner
        label="Portfolio"
        title="Student Works"
        description="Kumpulan karya terbaik siswa GDC dari kelas visualisasi, branding, dan web design."
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {[
          'Architectural Exterior Visualization',
          'Cafe Branding and Packaging Identity',
          'Modern Course Landing Page UI',
        ].map((project) => (
          <ContentCard
            key={project}
            icon={Paintbrush2}
            title={project}
            items={[
              'Created by final project cohort',
              'Reviewed by lead mentor',
              'Ready for portfolio showcase',
            ]}
          />
        ))}
      </div>
    </section>
  )
}

function UpdateDetailContent({ updateId }) {
  const detail = updateContent[updateId]
  if (!detail) return null

  return (
    <section className="space-y-6">
      <Banner label="Latest Updates" title={detail.title} description={detail.summary} />
      <ContentCard icon={BookOpenCheck} title="Key Points" items={detail.points} />
    </section>
  )
}

function ProfileContent() {
  return (
    <section className="space-y-6">
      <Banner
        label="General Menu"
        title="GDC Profile"
        description="Profil member GDC aktif. Kamu bisa melihat status kelas, course yang diambil, dan konsultasi terjadwal."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <ContentCard
          icon={UserRound}
          title="Current Enrollments"
          items={['SketchUp - In Progress', 'AutoCAD - Upcoming Batch']}
        />
        <ContentCard
          icon={CalendarCheck2}
          title="Upcoming Activities"
          items={['Mentor consultation - Friday 19:00', 'Workshop session - March 21, 2026']}
        />
      </div>
    </section>
  )
}

function MenuContent({ selection, onSelectCourse }) {
  if (selection?.type === 'courses') {
    return <CoursesDirectory onSelectCourse={onSelectCourse} />
  }
  if (selection?.type === 'contact') {
    return <ContactUsContent />
  }
  if (selection?.type === 'course') {
    return <CourseMenuContent selection={selection} />
  }
  if (selection?.type === 'works') {
    return <WorksContent />
  }
  if (selection?.type === 'update') {
    return <UpdateDetailContent updateId={selection.updateId} />
  }
  if (selection?.type === 'profile') {
    return <ProfileContent />
  }
  return null
}

export default MenuContent
