export function ColorPalette({ colors }: { colors?: string[] }) {
  const palette =
    colors && colors.length > 0
      ? colors
      : ['#FF5733', '#33FF57', '#3357FF', '#F0F0F0', '#000000'];
  return (
    <div>
      <h2>Color Palette</h2>
      <p>Here is a randomly generated color palette:</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        {palette.map((color) => (
          <div
            key={color}
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: color,
              border: '1px solid #ccc',
            }}
          />
        ))}
      </div>
    </div>
  );
}
