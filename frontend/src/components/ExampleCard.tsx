import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

interface ExampleCardProps {
  title: string;
  description: string;
  pdbCode: string;
  imageUrl: string;
}

export default function ExampleCard({
  title,
  description,
  pdbCode,
  imageUrl,
}: ExampleCardProps) {
  const navigate = useNavigate();

  return (
    <Card className="flex flex-col">
      <CardHeader className="">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="h-full">
        <div className="aspect-square bg-gray-100 mb-4 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="h-48 w-auto object-contain"
          />
        </div>
        <CardDescription className="text-sm text-gray-600 mb-4">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          className="w-full"
          onClick={() => navigate(`/results/${pdbCode}`)}
        >
          {title}
        </Button>
      </CardFooter>
    </Card>
  );
}
