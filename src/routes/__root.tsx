import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'VindtUwAdvocaat — Vind de juiste advocaat in Nederland',
      },
      {
        name: 'description',
        content: 'VindtUwAdvocaat koppelt u aan een gecertificeerde advocaat gespecialiseerd in uw rechtsgebied. Gratis aanvragen, u betaalt pas €100 na een succesvolle match.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
