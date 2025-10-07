export const Solutions = () => {
  const solutions = [
    {
      name: "Remittance",
      description: "Cross-border transfers with transparent fees and clear timelines",
      icon: "💸",
    },
    {
      name: "Cards",
      description: "Virtual & physical cards for everyday spend and online checkout",
      icon: "💳",
    },
    {
      name: "Checkout",
      description: "Friction-light checkout that helps you convert more",
      icon: "🛒",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Built for real-world payments
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Three core products designed for the way money moves today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {solutions.map((solution, index) => (
            <div 
              key={solution.name}
              className="group cursor-pointer transition-all duration-300"
            >
              <div className="bg-white rounded-2xl p-8 lg:p-10 hover:shadow-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 h-full transform hover:-translate-y-1">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                  {solution.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.name}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg">
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
