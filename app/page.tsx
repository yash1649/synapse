import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Academic Planner</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="mb-4 text-sm text-muted-foreground">
            Manage your academics efficiently.
          </p>

          <Button className="w-full">
            Get Started
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}