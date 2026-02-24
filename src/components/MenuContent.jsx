import { motion } from 'framer-motion'
import {
  BookOpenCheck,
  CalendarCheck2,
  Clock3,
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

const TWO_LEVEL_COURSES = ['SketchUp', 'AutoCAD', '3D Studio Max']
const SINGLE_LEVEL_COURSES = ['Graphic Design']

const courseContent = {
  SketchUp: {
    overview:
      '2D, 3D, V-RAY.',
    skills: [
      'Peserta program ini akan diberikan teknik pembuatan gambar 2 Dimensi (2D) dan 3 Dimensi (3D), Layout dan Basic Vray untuk kasus-kasus Interior, Architecture, Landscape, Furniture dan lainnya.',
      'Diharapkan kasus tersebut peserta akan mengetahui dan menguasai secara luas tentang program ini.',
    ],
    intermediateSkills: [
      'Peserta program ini akan diberikan teknik pembuatan gambar 2 Dimensi (2D) dan 3 Dimensi (3D), Layout dan Basic Vray untuk kasus-kasus Interior, Architecture, Landscape, Furniture dan lainnya.',
      'Diharapkan kasus tersebut peserta akan mengetahui dan menguasai secara luas tentang program ini.',
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
      '2D, 3D, MATERIAL, LIGHT, RENDER.',
    skills: [
      'Peserta program ini akan diberikan teknik pembuatan gambar 2 dimensi (2D) dan 3 dimensi (3D).',
      'Bidang keahlian Interior, Architecture, Furniture, Engineering, dan lainnya.',
      'Diharapkan peserta kursus akan cepat mengetahui dan menguasai secara luas tentang program AutoCAD.',
    ],
    intermediateSkills: [
      'Peserta program ini akan diberikan teknik pembuatan gambar 2 dimensi (2D) dan 3 dimensi (3D).',
      'Bidang keahlian Interior, Architecture, Furniture, Engineering, dan lainnya.',
      'Diharapkan peserta kursus akan cepat mengetahui dan menguasai secara luas tentang program AutoCAD.',
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
      '2D, 3D, MAT, LIGHT, RENDER, ANIMATIONS.',
    skills: [
      'Peserta program ini akan diberikan teknik pembuatan gambar 2D, 3D, Animasi bidang Interior, Architecture, Landscape, Furniture dan lainnya.',
      'Diharapkan peserta kursus akan cepat mengetahui dan menguasai secara luas tentang program 3D Studio MAX.',
    ],
    intermediateSkills: [
      'Peserta program ini akan diberikan teknik pembuatan gambar 2D, 3D, Animasi bidang Interior, Architecture, Landscape, Furniture dan lainnya.',
      'Diharapkan peserta kursus akan cepat mengetahui dan menguasai secara luas tentang program 3D Studio MAX.',
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
      'Program yang tepat akan menjadikan anda menjadi ahli dibidang ini.',
    skills: [
      'Program yang tepat akan menjadikan anda menjadi ahli dibidang ini, anda akan dilatih untuk terbiasa dengan pembuatan gambar mudah sampai yang tersulit, semuanya akan dikerjakan dengan menyenangkan.',
      'Materi: Adobe Photoshop, Adobe Illustrator, Adobe InDesign dan Corel Draw',
    ],
    intermediateSkills: [
      'Program yang tepat akan menjadikan anda menjadi ahli dibidang ini, anda akan dilatih untuk terbiasa dengan pembuatan gambar mudah sampai yang tersulit, semuanya akan dikerjakan dengan menyenangkan.',
      'Materi: Adobe Photoshop, Adobe Illustrator, Adobe InDesign dan Corel Draw',
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

function ContentCard({ icon: Icon, title, items, className = '' }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3 }}
      className={`rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-md ${className}`}
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
        description="Pilih course yang ingin dipelajari. Setelah dipilih, kamu akan langsung masuk ke level pertama yang tersedia."
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
              Klik untuk melihat level dan materi kursus.
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

  const hasTwoLevels = TWO_LEVEL_COURSES.includes(selection.course)
  const hasSingleLevel = SINGLE_LEVEL_COURSES.includes(selection.course)
  const sectionLabel = selection.section || (hasSingleLevel ? 'Program' : hasTwoLevels ? 'Level 1' : 'Dasar')
  const sectionMap = {
    ...(hasSingleLevel
      ? {
          Program: {
            title: selection.course,
            description: data.overview,
            cards: [
              { icon: BookOpenCheck, title: 'Materi', items: data.skills },
              {
                icon: CalendarCheck2,
                title: 'Biaya Kursus',
                items: [
                  'Durasi 10x pertemuan / 2 Jam',
                  'Biaya Rp. 1.250.000,-',
                  'Kelas Privat (1 Siswa : 1 Pengajar)',
                ],
              },
            ],
          },
        }
      : hasTwoLevels
      ? {
          'Level 1': {
            title: `${selection.course} - Level 1`,
            description: data.overview,
            cards: [
              { icon: BookOpenCheck, title: 'Materi Level 1', items: data.skills },
              {
                icon: CalendarCheck2,
                title: 'Biaya Kursus',
                items: [
                  'Durasi 10x pertemuan / 2 Jam',
                  'Biaya Rp. 1.350.000,-',
                  'Kelas Privat (1 Siswa : 1 Pengajar)',
                ],
              },
            ],
          },
          'Level 2': {
            title: `${selection.course} - Level 2`,
            description: `Pendalaman materi ${selection.course} dari Level 1 ke studi kasus lanjutan.`,
            cards: [
              {
                icon: BookOpenCheck,
                title: 'Materi Level 2',
                items: data.intermediateSkills,
              },
              {
                icon: Users,
                title: 'Biaya Kursus',
                items: [
                  'Durasi 10x pertemuan / 2 Jam',
                  'Biaya Rp. 1.450.000,-',
                  'Kelas Privat (1 Siswa : 1 Pengajar)',
                ],
              },
            ],
          },
        }
      : {
          Dasar: {
            title: `${selection.course} - Dasar`,
            description: `${data.overview} `,
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
        }),
  }

  const active =
    sectionMap[sectionLabel] ||
    sectionMap.Program ||
    sectionMap['Level 1'] ||
    sectionMap.Dasar

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
  const addressText =
    'Workshop GDC, Jl. Komp. Villa Ciomas Indah Blok O-5 No.3 Kel. Ciomas Rahayu Kec. Ciomas Bogor, Jawa Barat'
  const phoneText = '+6287870025212 (WhatsApp)'

  return (
    <section className="space-y-6">
      <Banner
        label="General Menu"
        title="Contact Us"
        description="Hubungi GDC untuk pendaftaran, konsultasi kelas, dan kunjungan kampus."
      />
      <motion.article
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-md"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-300">
              Jika kamu tertarik bergabung di program GDC, kamu bisa langsung menghubungi kontak kami
              untuk konsultasi kelas, jadwal belajar, dan informasi pendaftaran. Kamu juga bisa datang
              langsung ke workshop kami untuk melihat suasana belajar dan berdiskusi program yang paling
              sesuai.
            </p>
            <div>
              <div className="mb-2 flex items-center gap-2 text-blue-200">
                <Phone className="h-4 w-4" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em]">Phone</h3>
              </div>
              <p className="text-sm text-slate-300">{phoneText}</p>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2 text-blue-200">
                <MapPin className="h-4 w-4" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em]">Address</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">{addressText}</p>
            </div>
          </div>
          <div className="w-full max-w-[340px] overflow-hidden rounded-xl border border-white/10 lg:justify-self-end">
            <iframe
              title="Workshop GDC Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.43840467028!2d106.76417479999999!3d-6.5923059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c503e73de0e5%3A0x1c25768c917d21cd!2sJl.%20Komp.%20Villa%20Ciomas%20Indah%2C%20Ciomas%20Rahayu%2C%20Kec.%20Ciomas%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat%2016610!5e0!3m2!1sen!2sid!4v1771909507578!5m2!1sen!2sid"
              className="aspect-square w-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </motion.article>
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
