export const Security = () => {
  const securityFeatures = [
    {
      title: "Encrypted in transit and at rest",
      description: "End-to-end encryption protects your data at every stage",
      icon: "🔒"
    },
    {
      title: "KYC/AML workflows aligned with GCC practices",
      description: "Full compliance with regional financial regulations",
      icon: "📋"
    },
    {
      title: "Access controls and auditability",
      description: "Comprehensive logging and monitoring of all activities",
      icon: "🛡️"
    },
    {
      title: "Independent reviews and continuous improvement",
      description: "Regular security assessments and updates",
      icon: "🔍"
    }
  ];

  return (
    <section id="security" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Security by design
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
              Built with enterprise-grade security from the ground up, ensuring your financial data stays protected
            </p>
            
            <div className="space-y-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual - Abstract representation */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12 shadow-xl">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                <div className="text-center mb-8">
                  <div className="text-4xl mb-4">🔐</div>
                  <div className="font-semibold text-xl">Security Architecture</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-gray-700/50 rounded-lg px-4 py-4">
                    <span className="font-medium">Encryption Active</span>
                    <div className="w-3 h-3 bg-success-400 rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-700/50 rounded-lg px-4 py-4">
                    <span className="font-medium">Compliance Check</span>
                    <div className="w-3 h-3 bg-success-400 rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-700/50 rounded-lg px-4 py-4">
                    <span className="font-medium">Audit Trail</span>
                    <div className="w-3 h-3 bg-success-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
