import chroma from 'chroma-js';
import { tool as createTool } from 'ai';
import z from 'zod';

export const colorPaletteTool = createTool({
  description: 'Display a color palette',
  parameters: z.object({
    baseColor: z.string().describe('Base color to generate the palette from'),
    numColors: z.number().min(2).max(8).optional().default(5),
  }),
  execute: async function generatSortedPalette({ baseColor, numColors = 5 }) {
    const base = chroma(baseColor);
    const baseHue = base.get('hsl.h');
    const baseSaturation = base.get('hsl.s');
    const baseLightness = base.get('hsl.l');

    // 1. Darker variation (first position)
    const darkestColor = base.set('hsl.l', baseLightness * 0.5).hex(); // 50% of original luminosity

    // 2. Light variations (from dark to light)
    const lightVariations = Array(numColors - 2)
      .fill(0)
      .map((_, i) => {
        const lightness =
          baseLightness + (0.85 - baseLightness) * (i / (numColors - 2)); // Interpolation
        return base
          .set('hsl.l', lightness)
          .set('hsl.s', baseSaturation * (1 - i * 0.2))
          .hex();
      });

    // 3. Complementary color (last position)
    const complementColor = base.set('hsl.h', (baseHue + 180) % 360).hex();

    // Final order: [darker, light variations..., complementary]
    return { colors: [darkestColor, ...lightVariations, complementColor] };
  },
});

export const tools = {
  getColorPalette: colorPaletteTool,
};
