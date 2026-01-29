import { LinkComponent } from "@/components/ui/link";
import { SignIn } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";

export default function Authentication() {
  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-muted flex flex-col p-4 sm:p-6 lg:p-8 relative">
      <div className="absolute top-4 left-8">
        <LinkComponent
          link="/"
          className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />

          <span className="text-sm font-medium">Back to home</span>
        </LinkComponent>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md grid place-items-center">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>

            <p className="mt-2 text-muted-foreground">
              Sign in to your SkillSwap account
            </p>
          </div>

          <SignIn />

          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground">
              By signing in, you agree to our{" "}
              <span className="text-primary hover:text-primary/80 transition-colors">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-primary hover:text-primary/80 transition-colors">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
