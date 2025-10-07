import { Shield, FileText, Lock, RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Security = () => {
  const { t } = useTranslation();
  
  const securityFeatures = [
    {
      title: t('security.encryption.title', 'Encrypted in transit and at rest'),
      description: t('security.encryption.desc', 'End-to-end encryption protects your data at every stage'),
      icon: Lock
    },
    {
      title: t('security.compliance.title', 'KYC/AML workflows aligned with GCC practices'),
      description: t('security.compliance.desc', 'Full compliance with regional financial regulations'),
      icon: FileText
    },
    {
      title: t('security.access.title', 'Access controls and auditability'),
      description: t('security.access.desc', 'Comprehensive logging and monitoring of all activities'),
      icon: Shield
    },
    {
      title: t('security.reviews.title', 'Independent reviews and continuous improvement'),
      description: t('security.reviews.desc', 'Regular security assessments and updates'),
      icon: RefreshCw
    }
  ];

  return (
    <section id="security" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div className="max-w-[720px]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('security.heading', 'Security by design')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
              {t('security.subheading', 'Built with enterprise-grade security from the ground up, ensuring your financial data stays protected')}
            </p>
            
            <div className="space-y-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-blue" />
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

          {/* Visualization */}
          <div className="relative fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12 shadow-xl">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-semibold text-xl">{t('security.architecture', 'Security Architecture')}</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-gray-700/50 rounded-lg px-4 py-4">
                    <span className="font-medium">{t('security.status.encryption', 'Encryption Active')}</span>
                    <div className="w-3 h-3 bg-success-400 rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-700/50 rounded-lg px-4 py-4">
                    <span className="font-medium">{t('security.status.compliance', 'Compliance Check')}</span>
                    <div className="w-3 h-3 bg-success-400 rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-700/50 rounded-lg px-4 py-4">
                    <span className="font-medium">{t('security.status.audit', 'Audit Trail')}</span>
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
