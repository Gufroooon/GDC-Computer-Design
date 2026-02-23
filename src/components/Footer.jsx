import { Mail, MapPin, Phone } from 'lucide-react'

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
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-blue-300" />
              Jl. Raya Pajajaran No. 123, Bogor Tengah
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-300" />
              +62 (251) 888-2345
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-300" />
              info@gdc-design.id
            </p>
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
