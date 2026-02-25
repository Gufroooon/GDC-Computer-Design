import { MapPin, Phone } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-white/10 pt-10">
      <div className="grid gap-8 lg:grid-cols-3">
        <div>
          <h3 className="text-2xl font-semibold text-white">GDC Computer Design</h3>
          <p className="mt-3 text-slate-300">
            Bogor&apos;s leading training center for creative technology and design
            excellence since 2010.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
            Contact Detail
          </h4>
          <div className="mt-4 space-y-3 text-slate-200">
            <a className="flex items-start gap-2"
            href="https://www.google.com/maps/search/?api=1&query=-6.59281,106.764137">
              <MapPin className="mt-0.5 h-4 w-4 text-blue-300" />
             Workshop GDC, Vila Ciomas Indah Blok O-5 No.3 Kel.Ciomas Rahayu Kec Ciomas
            </a>
            <a className="flex items-center gap-2"
            href="https://wa.me/6287870025212">
              <Phone className="h-4 w-4 text-blue-300" />
              +6287870025212
            </a >
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
            Location
          </h4>
          <div className="mt-4 text-slate-200">
            Find us in Bogor, West Java. Campus access is available for weekday
            and weekend classes.
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-white/10 py-5 text-center text-sm text-slate-400">
        Copyright 2026 GDC Computer Design. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
