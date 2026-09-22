import { Header } from "@/components/shared/Header";

export default function WebinarPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Employer Webinar</h1>
        <p className="text-slate-600">
          Learn how Akazi connects German companies with vetted, B2-certified apprentices from Rwanda.
        </p>
      </main>
    </>
  );
}
