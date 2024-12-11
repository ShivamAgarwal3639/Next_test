export default function AboutPage() {
  return (
    <div className="container px-4 py-24">
      <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
      <p className="mt-6 text-xl text-muted-foreground">
        Learn more about our mission and values.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="mt-4 text-muted-foreground">
            We strive to create innovative solutions that make a positive impact on businesses and communities worldwide.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Our Vision</h2>
          <p className="mt-4 text-muted-foreground">
            To be the leading force in technological advancement and digital transformation.
          </p>
        </div>
      </div>
    </div>
  );
}