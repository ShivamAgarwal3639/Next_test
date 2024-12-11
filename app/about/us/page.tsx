export default function TeamPage() {
  return (
    <div className="container px-4 py-24">
      <h1 className="text-4xl font-bold tracking-tight">Our Team</h1>
      <p className="mt-6 text-xl text-muted-foreground">
        Meet the passionate individuals behind our success.
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, index) => (
          <div key={index} className="rounded-lg border p-6">
            <div 
              className="h-48 w-full rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${member.image})` }}
            />
            <h3 className="mt-4 text-xl font-bold">{member.name}</h3>
            <p className="text-sm text-primary">{member.role}</p>
            <p className="mt-2 text-muted-foreground">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    bio: "Visionary leader with 15+ years of industry experience.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "Tech innovator passionate about cutting-edge solutions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    name: "Emily Rodriguez",
    role: "Design Director",
    bio: "Creative mind behind our award-winning designs.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
  }
];