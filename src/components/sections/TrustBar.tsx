export default function TrustBar() {
  const securityBadges = [
    {
      icon: '🛡️',
      name: 'PCI DSS',
      description: 'Level 1 Certified',
      color: 'text-primary-blue'
    },
    {
      icon: '🏛️',
      name: 'ISO 27001',
      description: 'Information Security',
      color: 'text-success-600'
    },
    {
      icon: '📊',
      name: 'SOC 2',
      description: 'Type II Compliant',
      color: 'text-purple-600'
    },
    {
      icon: '🔒',
      name: 'AES-256',
      description: 'Encryption',
      color: 'text-warning-600'
    },
    {
      icon: '🌐',
      name: 'GDPR',
      description: 'Data Protection',
      color: 'text-primary-teal'
    },
    {
      icon: '👁️',
      name: 'KYC/AML',
      description: 'Compliance Ready',
      color: 'text-error-600'
    }
  ];

  return (
    <section className="bg-white border-t border-b border-gray-200 py-12">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-primary-navy mb-4">
            Bank-Grade Security & Compliance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built with the same security standards trusted by global financial institutions
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {securityBadges.map((badge) => (
            <div 
              key={badge.name}
              className="text-center group hover-lift"
            >
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-medium transition-shadow">
                <div className="text-3xl mb-3">{badge.icon}</div>
                <div className={`font-semibold text-gray-900 mb-1 ${badge.color}`}>
                  {badge.name}
                </div>
                <div className="text-sm text-gray-600">
                  {badge.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Regularly audited by independent third parties • Data encrypted in transit and at rest
          </p>
        </div>
      </div>
    </section>
  );
}
