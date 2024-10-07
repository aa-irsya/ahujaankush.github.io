export default function Section({ className = '', children }: { className?: string; children?: React.ReactNode }) {
  return (
    <section className={`w-full sm:w-4/5 lg:w-2/5 py-16 ${className}`}>
      {children}
    </section>
  )
}
