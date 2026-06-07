import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Df-OS | Book a Digital Factory Operating System Demo",
  description: "Get in touch with the Df-OS team. Schedule a live platform demo to see how we digitize shopfloor workflows, connect machinery, and run Vish AI decision models.",
  alternates: {
    canonical: "https://df-os.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
