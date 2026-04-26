import { NextRequest, NextResponse } from "next/server";

// In a real app, connect to a database (e.g. Prisma, Supabase, MongoDB)
// For now we store in-memory and log to console
const leads: Lead[] = [];

interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  teamSize: string;
  message: string;
  createdAt: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, phone, teamSize, message } = body;

    // Basic validation
    if (!name || !email || !company) {
      return NextResponse.json(
        { success: false, error: "Name, email and company are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    const lead: Lead = {
      id: crypto.randomUUID(),
      name,
      email,
      company,
      phone: phone || "",
      teamSize: teamSize || "",
      message: message || "",
      createdAt: new Date().toISOString(),
    };

    leads.push(lead);
    console.log("New enterprise lead captured:", lead);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Our team will reach out within 24 hours.",
        leadId: lead.id,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Lead capture error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function GET() {
  // In production, protect this with auth middleware
  return NextResponse.json({ leads, total: leads.length });
}
