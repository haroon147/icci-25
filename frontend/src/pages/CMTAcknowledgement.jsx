import PageHero from '../components/PageHero';

export default function CMTAcknowledgement() {
  return (
    <div className="bg-background-white">
      <PageHero
        eyebrow="Acknowledgement"
        title="CMT Acknowledgement"
        subtitle="Recognizing the tools and services that support the peer-review process for ICCI-2026."
      />

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-900/5 md:p-14">
            {/* Signature accent bar — subtle nod to the four Microsoft brand hues */}
            <div className="absolute inset-x-0 top-0 flex h-1.5">
              <span className="flex-1 bg-[#F25022]" />
              <span className="flex-1 bg-[#7FBA00]" />
              <span className="flex-1 bg-[#00A4EF]" />
              <span className="flex-1 bg-[#FFB900]" />
            </div>

            <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
              {/* Badge mark */}
              <div className="flex-shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#00A4EF]/10 ring-1 ring-[#00A4EF]/20">
                  <svg
                    className="h-7 w-7 text-[#00A4EF]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  >
                    <path
                      d="M9 12.5l2 2 4-4.5M12 3l7 3.2v5.1c0 4.6-2.9 8.7-7 10.2-4.1-1.5-7-5.6-7-10.2V6.2L12 3z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div>

                <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                  CMT Acknowledgement
                </h2>

                <p className="text-lg leading-8 text-gray-600">
                  The Microsoft CMT Service was used to manage the peer-reviewing process for this conference. This service was provided free of charge by Microsoft, which covered all associated expenses, including the costs of Azure cloud services, software development, and technical support.
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
                  <span className="h-px w-8 bg-gray-300" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
