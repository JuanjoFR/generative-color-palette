import { Card, CardContent } from './ui/card';

export function ColorPalette({ colors }: { colors: string[] }) {
  // Function to determine if text should be light or dark based on background color
  const getTextColor = (hexColor: string) => {
    const r = Number.parseInt(hexColor.slice(1, 3), 16);
    const g = Number.parseInt(hexColor.slice(3, 5), 16);
    const b = Number.parseInt(hexColor.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? '#000000' : '#FFFFFF';
  };

  return (
    <div className="mx-auto w-full max-w-4xl">
      <Card className="overflow-hidden py-0">
        <CardContent className="flex h-32 px-0">
          {colors.map((color, index) => (
            <div
              key={index}
              className="group relative flex-1 cursor-pointer transition-all duration-200 hover:flex-[2]"
              style={{ backgroundColor: color }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <div
                  className="flex items-center gap-2 rounded-md px-3 py-2 backdrop-blur-sm"
                  style={{
                    backgroundColor: `${color}80`,
                    color: getTextColor(color),
                  }}
                >
                  <span className="font-mono text-sm font-medium">
                    {color.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
