export default function ClientLogos() {
  const clients = [
    { name: 'Bank of Dubai', logo: '🏦', sector: 'Banking' },
    { name: 'Qatar Financial', logo: '💼', sector: 'Investment' },
    { name: 'Saudi Investment Bank', logo: '📈', sector: 'Commercial Banking' },
    { name: 'Kuwait Finance', logo: '🏢', sector: 'Financial Services' },
    { name: 'Abu Dhabi Capital', logo: '💰', sector: 'Asset Management' },
    { name: 'Emirates NBD', logo: '🌍', sector: 'International Banking' },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-primary-navy mb-4">
            Trusted by Financial Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join institutions across GCC and MENA regions transforming their financial operations
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client) => (
            <div 
              key={client.name}
              className="flex flex-col items-center group hover-lift"
            >
              <div className="w-20 h-20 bg-white rounded-2xl shadow-soft flex items-center justify-center text-2xl mb-3 group-hover:shadow-medium transition-shadow">
                {client.logo}
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900 text-sm mb-1">
                  {client.name}
                </div>
                <div className="text-xs text-gray-500">
                  {client.sector}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-navy mb-2">250+</div>
            <div className="text-gray-600">Financial Institutions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-navy mb-2">15+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-navy mb-2">99.95%</div>
            <div className="text-gray-600">Platform Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-navy mb-2">24/7</div>
            <div className="text-gray-600">Security Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
}
