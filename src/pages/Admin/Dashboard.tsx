import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User, Session } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Download, LogOut } from "lucide-react";
import { toast } from "sonner";

interface WaitlistLead {
  id: string;
  email: string;
  status: string;
  created_at: string;
  consent_ts: string | null;
  country: string;
  city: string | null;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [leads, setLeads] = useState<WaitlistLead[]>([]);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      checkAdminRole();
    } else if (user === null && !loading) {
      navigate("/admin/login");
    }
  }, [user, navigate, loading]);

  const checkAdminRole = async () => {
    try {
      console.log("Checking admin role for user:", user?.id);
      
      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user?.id)
        .eq("role", "admin")
        .maybeSingle();

      console.log("Admin role check result:", { data, error });

      if (error) {
        console.error("Error in admin role query:", error);
        throw error;
      }

      if (data) {
        console.log("Admin access granted");
        setIsAdmin(true);
        fetchLeads();
      } else {
        console.log("No admin role found for user:", user?.id);
        toast.error("Access denied: Admin role required");
        navigate("/");
      }
    } catch (error) {
      console.error("Error checking admin role:", error);
      toast.error("Error verifying permissions");
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  const fetchLeads = async () => {
    try {
      const { data, error } = await supabase
        .from("waitlist_leads")
        .select("id, email, status, created_at, consent_ts, country, city")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setLeads(data || []);
    } catch (error) {
      console.error("Error fetching leads:", error);
      toast.error("Failed to load waitlist data");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  const exportToCSV = () => {
    const headers = ["Email", "Status", "Signup Date", "Confirmed Date", "Country", "City"];
    const csvContent = [
      headers.join(","),
      ...leads.map((lead) =>
        [
          lead.email,
          lead.status,
          new Date(lead.created_at).toLocaleString(),
          lead.consent_ts ? new Date(lead.consent_ts).toLocaleString() : "Not confirmed",
          lead.country,
          lead.city || "N/A",
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `waitlist_leads_${new Date().toISOString().split("T")[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("CSV exported successfully");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  const confirmedCount = leads.filter((l) => l.status === "confirmed").length;

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">Manage waitlist signups</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Total Signups</CardTitle>
              <CardDescription>All waitlist entries</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{leads.length}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Confirmed</CardTitle>
              <CardDescription>Email confirmed</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{confirmedCount}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pending</CardTitle>
              <CardDescription>Awaiting confirmation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{leads.length - confirmedCount}</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Waitlist Leads</CardTitle>
                <CardDescription>All signups with their status</CardDescription>
              </div>
              <Button onClick={exportToCSV} variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export CSV
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Signup Date</TableHead>
                  <TableHead>Confirmed Date</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>City</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell className="font-medium">{lead.email}</TableCell>
                    <TableCell>
                      <Badge variant={lead.status === "confirmed" ? "default" : "secondary"}>
                        {lead.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(lead.created_at).toLocaleString()}</TableCell>
                    <TableCell>
                      {lead.consent_ts
                        ? new Date(lead.consent_ts).toLocaleString()
                        : "Not confirmed"}
                    </TableCell>
                    <TableCell>{lead.country}</TableCell>
                    <TableCell>{lead.city || "N/A"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
