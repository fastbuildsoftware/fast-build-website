export default function SectionLabel({ label }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-px bg-primary" />
      <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase font-mono">{label}</span>
    </div>
  );
}