import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { exams } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Choose Your Exam
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Select an exam to start your preparation journey.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {exams.map((exam) => (
          <Link href={`/tests/${exam.id}`} key={exam.id} className="group">
            <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:bg-card/80 hover:shadow-primary/20 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">{exam.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exam.description}</p>
                <div className="mt-4 flex items-center justify-between text-primary">
                  <span>Start Preparing</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
