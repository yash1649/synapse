
import LoginForm from "./login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl font-bold">
            Welcome Back
          </CardTitle>
          <CardDescription>
            Sign in to your Academic Planner
          </CardDescription>
        </CardHeader>

        <CardContent>
          <LoginForm />

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-medium text-primary hover:underline"
            >
              Create an account
            </a>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
