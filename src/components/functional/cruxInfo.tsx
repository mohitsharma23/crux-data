import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function CruxInfo({ data }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl text-blue-500">
          {data.value}
          <span className="text-sm">ms</span>
        </p>
      </CardContent>
    </Card>
  );
}

export default CruxInfo;
