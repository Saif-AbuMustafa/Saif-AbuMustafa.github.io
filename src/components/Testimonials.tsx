import { Star } from 'lucide-react';
import { ModernCard, ModernCardContent } from '@/components/ui/ModernCard';
import { ModernGrid } from '@/components/ui/ModernSection';

interface Testimonial {
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    title: "CFO",
    company: "TechCorp International",
    content: "AI KEYS saved us 3+ hours daily on payment processing. The automation reduced our transaction errors by 80% and improved our workflow efficiency dramatically.",
    rating: 5,
    avatar: "SM"
  },
  {
    name: "Ahmed Al-Rashid",
    title: "Operations Director",
    company: "Global Logistics Ltd",
    content: "2x increase in productivity across our logistics operations. The AI-powered features are intuitive and the security measures give us complete peace of mind.",
    rating: 5,
    avatar: "AA"
  },
  {
    name: "Maria Rodriguez",
    title: "Travel Manager",
    company: "Horizon Travel Group",
    content: "Streamlined our entire booking process, saving 2.5 hours per day. The integrated payment system is seamless and our customers love the convenience.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "James Chen",
    title: "Education Director",
    company: "Future Academy",
    content: "Reduced administrative overhead by 75%. The platform's reliability and ease of use made it simple for our entire team to adopt without extensive training.",
    rating: 5,
    avatar: "JC"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-[hsl(36,30%,92%)]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[hsl(217,91%,60%)]/10 rounded-full mb-6">
            <span className="text-[hsl(217,91%,60%)] font-semibold text-sm">
              TRUSTED BY PROFESSIONALS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[hsl(220,13%,23%)]">
            What Our Users Say
          </h2>
          <p className="text-xl md:text-2xl text-[hsl(220,9%,46%)] max-w-3xl mx-auto">
            Join 2,500+ professionals who have transformed their workflow with AI KEYS
          </p>
        </div>

        {/* Testimonials Grid */}
        <ModernGrid cols={2} gap="xl" className="mb-12">
          {testimonials.map((testimonial, index) => (
            <ModernCard 
              key={index} 
              variant="glass" 
              hover="lift"
              className="h-full"
            >
              <ModernCardContent className="p-8 flex flex-col h-full">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 fill-[hsl(45,93%,58%)] text-[hsl(45,93%,58%)]" 
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-[hsl(220,13%,23%)] text-lg mb-8 leading-relaxed flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-[hsl(36,20%,85%)]">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-[hsl(220,13%,23%)]">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-[hsl(220,9%,46%)]">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </ModernCardContent>
            </ModernCard>
          ))}
        </ModernGrid>

        {/* Social Proof Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          <div>
            <div className="text-4xl font-black text-[hsl(217,91%,60%)] mb-2">2,500+</div>
            <div className="text-[hsl(220,9%,46%)] font-medium">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-black text-[hsl(217,91%,60%)] mb-2">4.9/5</div>
            <div className="text-[hsl(220,9%,46%)] font-medium">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-black text-[hsl(217,91%,60%)] mb-2">45+</div>
            <div className="text-[hsl(220,9%,46%)] font-medium">Countries</div>
          </div>
          <div>
            <div className="text-4xl font-black text-[hsl(217,91%,60%)] mb-2">99.9%</div>
            <div className="text-[hsl(220,9%,46%)] font-medium">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};
