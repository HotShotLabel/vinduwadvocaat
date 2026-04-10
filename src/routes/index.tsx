import { createFileRoute } from '@tanstack/react-router'
import IntakeForm from '../components/IntakeForm'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">VindtUwAdvocaat</span>
            </div>
            <a
              href="#aanvraag"
              className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Gratis aanvragen
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
              Gratis aanvragen — betaal pas na een match
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Vind de juiste advocaat in Nederland — snel en eenvoudig
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              VindtUwAdvocaat koppelt u aan een gecertificeerde advocaat die gespecialiseerd is in uw juridische situatie. Uw aanvraag is volledig gratis. Pas wanneer wij een geschikte advocaat voor u vinden, betaalt u eenmalig €100.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { icon: '✓', text: 'Gratis aanvragen' },
                { icon: '💰', text: '€100 na succesvolle match' },
                { icon: '⏱', text: 'Binnen 24 uur reactie' },
                { icon: '🎓', text: 'Gecertificeerde advocaten' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2">
                  <span>{icon}</span>
                  <span className="text-sm font-medium text-gray-700">{text}</span>
                </div>
              ))}
            </div>

            <a
              href="#aanvraag"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-base"
            >
              Start uw aanvraag →
            </a>
          </div>
        </div>
      </section>

      {/* Hoe het werkt */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Hoe het werkt
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Beschrijf uw situatie',
                desc: 'Vul het intakeformulier in en beschrijf uw juridische probleem. Dit duurt slechts een paar minuten.',
              },
              {
                step: '2',
                title: 'Wij zoeken een match',
                desc: 'VindtUwAdvocaat koppelt uw aanvraag aan een gespecialiseerde advocaat die past bij uw rechtsgebied.',
              },
              {
                step: '3',
                title: 'Match gevonden — €100',
                desc: 'Zodra wij een geschikte advocaat vinden, betaalt u eenmalig €100. De advocaat neemt binnen 24 uur contact met u op.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intake Form */}
      <section id="aanvraag" className="bg-white border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Dien uw aanvraag in
            </h2>
            <p className="text-gray-600">
              Vul het formulier in — volledig gratis. U betaalt pas €100 wanneer wij een passende advocaat voor u vinden.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <IntakeForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <span className="text-white font-bold">VindtUwAdvocaat</span>
              </div>
              <p className="text-sm">Het juridische matchingplatform voor Nederland.</p>
            </div>
            <div className="text-sm space-y-1">
              <p>📧 info@vindtuwadvocaat.nl</p>
              <p>📍 Amsterdam, Nederland</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-xs text-center">
            © {new Date().getFullYear()} VindtUwAdvocaat. Alle rechten voorbehouden.
          </div>
        </div>
      </footer>
    </div>
  )
}
