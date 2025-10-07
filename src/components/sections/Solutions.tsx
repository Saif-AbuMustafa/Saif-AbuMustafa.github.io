export const Solutions = () => {
  const solutions = [
    {
      name: "Remittance",
      description: "Fast, secure cross-border money transfers with competitive rates",
      icon: "💸",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Cards",
      description: "Virtual and physical cards for seamless global spending",
      icon: "💳",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Checkout",
      description: "Integrated payment solutions for merchants and businesses",
      icon: "🛒",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
            Built for real-world payments
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            مصمّم لمدفوعات العالم الحقيقي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={solution.name}
              className="group cursor-pointer fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-200 hover:shadow-large hover:border-gray-300 hover-lift h-full">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">
                  {solution.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {solution.name}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
