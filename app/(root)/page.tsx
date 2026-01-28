import { ButtonSmooth } from "@/components/client/ui/button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LinkComponent } from "@/components/ui/link";
import {
  ArrowRight,
  CheckCircle2,
  Handshake,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { FC } from "react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-muted">
      <LandingPageNav />

      <HeroSection />

      <HowSection />

      <ExampleSection />

      <WhySection />

      <StartSection />

      <FooterSection />
    </div>
  );
}

const LandingPageNav: FC = () => (
  <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
    <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-linear-to-br from-primary to-secondary" />

          <span className="text-lg font-bold text-foreground">SkillSwap</span>
        </div>

        <div className="flex items-center gap-4">
          <LinkComponent
            link="/authentication"
            className="hover:bg-secondary hover:text-white "
          >
            Sign In
          </LinkComponent>

          <ButtonSmooth
            id="howSection"
            className="bg-primary hover:bg-primary/90 text-white "
          >
            Get Started
          </ButtonSmooth>
        </div>
      </div>
    </div>
  </nav>
);

const HeroSection: FC = () => {
  const sampleData = [
    { icon: "🎸", label: "Guitar" },
    { icon: "👨‍🍳", label: "Cooking" },
    { icon: "💻", label: "Programming" },
    { icon: "🎨", label: "Design" },
    { icon: "📚", label: "Writing" },
    { icon: "🧘", label: "Yoga" },
    { icon: "🎭", label: "Acting" },
    { icon: "🌍", label: "Languages" },
  ];
  return (
    <section
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
      id="heroSection"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Learn Any Skill.
            <br />
            <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Teach What You Know.
            </span>
          </h1>

          <p className="text-balance mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Skip the expensive courses. Exchange skills directly with others in
            our community. You have something valuable to teach? find someone
            who wants to learn it, and learn what you need.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <LinkComponent
              link="/authentication"
              size="lg"
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Start Trading Skills <ArrowRight className="h-5 w-5" />
            </LinkComponent>

            <ButtonSmooth
              id="howSection"
              size="lg"
              className="hover:bg-secondary hover:text-white border-border border shadow-sm"
            >
              See How It Works
            </ButtonSmooth>
          </div>
        </div>

        <div className="relative mt-16 aspect-video overflow-hidden rounded-2xl border border-border bg-linear-to-br from-primary/10 to-secondary/10 p-8">
          <div className="grid h-full grid-cols-2 gap-4 md:grid-cols-4">
            {sampleData.map((skill) => (
              <div
                key={skill.label}
                className="flex flex-col items-center justify-center gap-2 rounded-lg border border-primary/20 bg-white/50 p-4 backdrop-blur-sm"
              >
                <span className="text-3xl">{skill.icon}</span>

                <span className="text-xs font-medium text-foreground">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HowSection: FC = () => {
  const sampleData = [
    {
      step: "1",
      title: "Share Your Skills",
      description:
        "Tell us what you can teach. From guitar lessons to programming, cooking to language exchange—anything you're good at counts.",
      icon: Target,
    },
    {
      step: "2",
      title: "Find Your Match",
      description:
        "Browse other learners and teachers. Find someone who wants what you offer and has what you want to learn.",
      icon: Users,
    },
    {
      step: "3",
      title: "Start Learning",
      description:
        "Connect with your skill partner and begin exchanging. No money needed—just mutual growth and learning.",
      icon: Zap,
    },
  ];

  return (
    <section
      className="border-t border-border px-4 py-20 sm:px-6 lg:px-8"
      id="howSection"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            How It Works
          </h2>

          <p className="mt-4 text-muted-foreground">
            Three simple steps to start your skill exchange journey
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {sampleData.map((item) => {
            const IconComponent = item.icon;

            return (
              <Card
                key={item.step}
                className="border-border bg-white/50 backdrop-blur-sm transition-all hover:shadow-lg hover:border-primary/30"
              >
                <div className="flex h-full flex-col gap-4 p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-primary to-secondary">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>

                    <span className="text-sm font-bold text-muted-foreground">
                      Step {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ExampleSection: FC = () => {
  const sampleData = [
    {
      name: "Sarah",
      toLearn: "Guitar",
      desc: "Sarah loves music and wants to learn guitar, but can't afford expensive lessons. She's an excellent cook with family recipes passed down for generations.",
      logoStyle: "bg-linear-to-br from-primary to-secondary",
    },
    {
      name: "Marco",
      toLearn: "Cooking",
      desc: "Marco is a professional guitarist teaching in a local music school. He's always wanted to improve his cooking skills but doesn't have time for paid classes.",
      logoStyle: "bg-linear-to-tr from-primary to-secondary",
    },
  ];

  return (
    <section className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl border border-primary/20 bg-linear-to-br from-primary/5 to-secondary/5 p-8 md:p-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            A Real Example
          </h2>

          <div className="grid gap-16 md:grid-cols-2">
            {sampleData.map((data) => (
              <div key={data.name}>
                <div className="mb-4 flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-full ${data.logoStyle}`} />

                  <div>
                    <p className="font-semibold text-foreground">{data.name}</p>

                    <p className="text-sm text-muted-foreground">
                      Wants to learn: {data.toLearn}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground">{data.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-4 text-center">
              <div className="text-right">
                <p className="font-semibold text-foreground">
                  Sarah teaches Marco
                </p>

                <p className="text-sm text-muted-foreground">Cooking Lessons</p>
              </div>

              <div className="h-12 w-12 rounded-full bg-linear-to-r from-primary to-secondary flex items-center justify-center">
                <Handshake className="h-6 w-6 text-white" />
              </div>

              <div className="text-left">
                <p className="font-semibold text-foreground">
                  Marco teaches Sarah
                </p>

                <p className="text-sm text-muted-foreground">Guitar Lessons</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhySection: FC = () => {
  const sampelData = [
    "Learn from real professionals in your community",
    "Share your expertise and help others grow",
    "No subscription fees or hidden costs",
    "Build meaningful connections through learning",
    "Flexible scheduling that works for you",
    "Safe and verified community members",
  ];

  return (
    <section className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl">
          Why Join SkillSwap?
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {sampelData.map((benefit) => (
            <div key={benefit} className="flex gap-4 group">
              <CheckCircle2 className="h-6 w-6 shrink-0 text-accent group-hover:scale-110 smooth-transition" />

              <p className="text-muted-foreground group-hover:text-foreground group-hover:scale-103 smooth-transition">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StartSection: FC = () => {
  return (
    <section className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          Ready to Transform Your Learning?
        </h2>

        <p className="mt-4 text-lg text-muted-foreground">
          Join thousands of learners and teachers exchanging skills. Start your
          free profile today.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <LinkComponent
            link="/authentication"
            size="lg"
            className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Create Your Profile <ArrowRight className="h-5 w-5" />
          </LinkComponent>

          <Button
            size="lg"
            className="bg-background hover:bg-secondary hover:text-white border-border border shadow-sm"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

const FooterSection: FC = () => {
  const sampleData = [
    {
      title: "Product",
      links: ["How It Works", "Features", "Pricing"],
    },
    {
      title: "Community",
      links: ["Browse Skills", "Success Stories", "Blog"],
    },
    { title: "Company", links: ["About", "Contact", "Safety"] },
  ];

  return (
    <footer className="border-t border-border bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-6 rounded-lg bg-linear-to-br from-primary to-secondary" />

              <span className="font-bold text-foreground">SkillSwap</span>
            </div>

            <p className="text-sm text-muted-foreground">
              Exchange skills, grow together.
            </p>
          </div>

          {sampleData.map((column) => (
            <div key={column.title}>
              <p className="font-semibold text-foreground mb-3">
                {column.title}
              </p>

              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <ButtonSmooth
                      id=""
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link}
                    </ButtonSmooth>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 SecretCoding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
