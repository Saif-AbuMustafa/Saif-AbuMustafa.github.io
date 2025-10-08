import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

export const WaitlistStats = () => {
  const [stats, setStats] = useState({
    total: 0,
    confirmed: 0,
    pending: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Get total count
        const { count: totalCount } = await supabase
          .from('waitlist_leads')
          .select('*', { count: 'exact', head: true });

        // Get confirmed count
        const { count: confirmedCount } = await supabase
          .from('waitlist_leads')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'confirmed');

        setStats({
          total: totalCount || 0,
          confirmed: confirmedCount || 0,
          pending: (totalCount || 0) - (confirmedCount || 0)
        });
      } catch (error) {
        console.error('Error fetching waitlist stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();

    // Set up realtime subscription
    const channel = supabase
      .channel('waitlist_changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'waitlist_leads' },
        () => {
          fetchStats();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (loading || stats.total === 0) {
    return null;
  }

  return (
    <div className="py-12 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center fade-up">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              <AnimatedCounter end={stats.total} duration={600} />
            </div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Total Signups</div>
          </div>
          <div className="text-center fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl md:text-5xl font-bold text-success mb-2">
              <AnimatedCounter end={stats.confirmed} duration={600} />
            </div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Confirmed</div>
          </div>
          <div className="text-center fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl md:text-5xl font-bold text-gray-600 mb-2">
              <AnimatedCounter end={stats.pending} duration={600} />
            </div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Pending</div>
          </div>
        </div>
      </div>
    </div>
  );
};
