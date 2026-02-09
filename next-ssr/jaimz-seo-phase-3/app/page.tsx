export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-background text-foreground">
      <div className="max-w-2xl w-full space-y-8 text-center">
        
     
        <header className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Jaimz SEO Experiment: Phase 3
          </h1>
          <p className="text-xl text-muted-foreground">
            Methodology: <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold">Server-Side Rendering (SSR)</code>
          </p>
        </header>

       
        <section className="rounded-xl border bg-card text-card-foreground shadow-sm p-8 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Unique Keyword: <span className="text-primary underline decoration-primary/30">ZynthoKinetix-2026</span>
          </h2>
          <p className="leading-7 text-muted-foreground">
            In this phase, <strong>ZynthoKinetix-2026</strong> is rendered on the
            server. When Googlebot visits, it will find this text immediately in
            the <strong>Page Source</strong>, even though this is a modern React-based application.
          </p>
        </section>

      
        <footer className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground italic">
            This page demonstrates the SEO advantages of Next.js SSR over standard Client-Side React.
          </p>
        </footer>
        
      </div>
    </main>
  );
}