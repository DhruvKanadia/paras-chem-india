import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-surface-gray border-b border-border-subtle py-16 md:py-24">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-page grid md:grid-cols-12 gap-gutter">
          <div className="md:col-span-7">
            <h1 className="font-display text-display text-primary mb-6">
              Industrial Integrity & Chemical Distribution Excellence.
            </h1>
            <p className="text-body-lg text-on-surface-variant mb-8">
              For over three decades, Paras Chem has been the bridge connecting global chemical producers with the Indian manufacturing sector. We bring reliability, safety, and operational excellence to chemical distribution.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-surface border border-border-subtle px-4 py-2 rounded inline-flex items-center gap-2 font-label-md text-label-md text-industrial-blue">
                <span className="material-symbols-outlined">event</span>
                Established 1995
              </div>
              <div className="bg-surface border border-border-subtle px-4 py-2 rounded inline-flex items-center gap-2 font-label-md text-label-md text-industrial-blue">
                <span className="material-symbols-outlined">public</span>
                Global Partners 50+
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div 
              className="bg-cover bg-center rounded-lg min-h-[300px] border border-border-subtle h-full"
              style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuASUxkBI62iNnRtccKR-T9nETxEc0jFOhx4JTn15RX6pKUkBJNkoh5NsIc2fFc7znHJngXQPO9okFcxbYvqFXNMPM6Fknu5ROtFQIMrP5UpUNuKPYZhPSIqsL-x8ZHqS9MMrFe6Pkfk0ywMWZCEnulKrKGJoKyhKvULaZ_pChNyDF51pm2ewO_wdaxtulmTURZVfj7wuRHuDpot3KkTJAu1H5V7ZKufnrO0ABmwCiHR4jXXkZAWHtl2)' }}
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-page">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="border border-border-subtle bg-white rounded-lg p-8">
              <span className="material-symbols-outlined text-4xl text-industrial-blue mb-4">track_changes</span>
              <h3 className="font-headline-md text-headline-md mb-4">Our Mission</h3>
              <p className="text-body-md text-on-surface-variant">
                Empowering Indian manufacturing with compliant access to premium chemicals through transparent partnerships and a robust distribution network.
              </p>
            </div>
            <div className="border border-border-subtle bg-white rounded-lg p-8">
              <span className="material-symbols-outlined text-4xl text-industrial-blue mb-4">visibility</span>
              <h3 className="font-headline-md text-headline-md mb-4">Our Vision</h3>
              <p className="text-body-md text-on-surface-variant">
                Establishing benchmarks for operational excellence and quality assurance in chemical distribution across the subcontinent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface-gray">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-page">
          <h2 className="font-headline-lg text-headline-lg text-center mb-12">Our Journey</h2>
          
          <div className="max-w-3xl mx-auto space-y-8 relative">
            <div className="hidden md:block absolute left-[110px] top-0 bottom-0 w-px bg-border-subtle"></div>
            
            <div className="flex flex-col md:flex-row gap-6 relative z-10">
              <div className="font-display text-2xl text-industrial-blue md:w-28 pt-6">1995</div>
              <div className="bg-white p-6 rounded border border-border-subtle flex-1">
                <h3 className="font-headline-md mb-2">Foundation</h3>
                <p className="text-body-md text-on-surface-variant">Established in Mumbai with a focus on solvents and reagents for the pharmaceutical sector.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 relative z-10">
              <div className="font-display text-2xl text-industrial-blue md:w-28 pt-6">2005</div>
              <div className="bg-white p-6 rounded border border-border-subtle flex-1">
                <h3 className="font-headline-md mb-2">Infrastructure Expansion</h3>
                <p className="text-body-md text-on-surface-variant">Built specialized warehousing hubs with hazardous materials handling capabilities.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 relative z-10">
              <div className="font-display text-2xl text-industrial-blue md:w-28 pt-6">2018</div>
              <div className="bg-white p-6 rounded border border-border-subtle flex-1">
                <h3 className="font-headline-md mb-2">Pan-India Network</h3>
                <p className="text-body-md text-on-surface-variant">Expanded to a pan-India network with regional hubs across North, South, and East India.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
