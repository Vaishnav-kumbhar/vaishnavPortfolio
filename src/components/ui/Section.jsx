// Page section: mono uppercase label + content.
// scroll-mt offsets anchor jumps below the fixed header.
export default function Section({ id, label, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8">
        {label}
      </h2>
      {children}
    </section>
  );
}
