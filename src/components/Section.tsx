export default function Section({
  title,
  children,
}: any) {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-serif text-primary mb-6">
        {title}
      </h2>
      <div className="text-gray-600 leading-relaxed">
        {children}
      </div>
    </section>
  );
}