import { useState } from 'react'

const rechtsgebieden = [
  'Strafrecht',
  'Bestuursrecht',
  'Arbeidsrecht',
  'Familierecht',
  'Civiel recht',
  'Ondernemingsrecht',
  'Belastingrecht',
  'Huurrecht',
  'Immigratierecht',
  'Anders',
]

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

export default function IntakeForm() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    rechtsgebied: '',
    beschrijving: '',
    'bot-field': '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      await fetch('/rechtconnect-intake.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'rechtconnect-intake', ...fields }),
      })
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Aanvraag ontvangen!</h2>
        <p className="text-gray-600 max-w-sm mx-auto">
          Bedankt voor uw aanvraag. Wij gaan nu een geschikte advocaat voor u zoeken. U hoort binnen 24 uur van ons via {fields.email}. U betaalt pas €100 wanneer wij een match hebben gevonden.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="form-name" value="rechtconnect-intake" />
      <p className="hidden" aria-hidden="true">
        <label>
          Niet invullen: <input name="bot-field" value={fields['bot-field']} onChange={handleChange} />
        </label>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Naam <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={fields.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            placeholder="Uw volledige naam"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mailadres <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={fields.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            placeholder="uw@email.nl"
          />
        </div>
      </div>

      <div>
        <label htmlFor="rechtsgebied" className="block text-sm font-medium text-gray-700 mb-1">
          Rechtsgebied <span className="text-red-500">*</span>
        </label>
        <select
          id="rechtsgebied"
          name="rechtsgebied"
          required
          value={fields.rechtsgebied}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
        >
          <option value="">Selecteer een rechtsgebied...</option>
          {rechtsgebieden.map((gebied) => (
            <option key={gebied} value={gebied}>{gebied}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="beschrijving" className="block text-sm font-medium text-gray-700 mb-1">
          Beschrijving van uw probleem <span className="text-red-500">*</span>
        </label>
        <textarea
          id="beschrijving"
          name="beschrijving"
          required
          rows={5}
          value={fields.beschrijving}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 resize-none"
          placeholder="Beschrijf uw juridische situatie zo gedetailleerd mogelijk..."
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm">
          Er is iets misgegaan. Probeer het opnieuw of neem contact op via info@vindtuwadvocaat.nl.
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-6 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors duration-200 text-base"
      >
        {loading ? 'Versturen...' : 'Aanvraag indienen'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Uw gegevens worden vertrouwelijk behandeld en alleen gedeeld met de voor u geselecteerde advocaat. Het indienen van uw aanvraag is gratis — u betaalt pas €100 na een succesvolle match.
      </p>
    </form>
  )
}
