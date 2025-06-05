import chroma from 'chroma-js';
import { tool as createTool } from 'ai';
import z from 'zod';

export const weatherTool = createTool({
  description: 'Display the weather for a location',
  parameters: z.object({
    location: z.string().describe('The location to get the weather for'),
  }),
  execute: async function ({ location }) {
    console.log(`Fetching weather for location: ${location}`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return {
      latitude: 37.763283,
      longitude: -122.41286,
      generationtime_ms: 0.027894973754882812,
      utc_offset_seconds: 0,
      timezone: 'GMT',
      timezone_abbreviation: 'GMT',
      elevation: 18,
      current_units: {
        time: 'iso8601',
        interval: 'seconds',
        temperature_2m: '°C',
      },
      current: {
        time: '2024-10-07T19:30',
        interval: 900,
        temperature_2m: 29.3,
      },
      hourly_units: { time: 'iso8601', temperature_2m: '°C' },
      hourly: {
        time: [
          '2024-10-07T00:00',
          '2024-10-07T01:00',
          '2024-10-07T02:00',
          '2024-10-07T03:00',
          '2024-10-07T04:00',
          '2024-10-07T05:00',
          '2024-10-07T06:00',
          '2024-10-07T07:00',
          '2024-10-07T08:00',
          '2024-10-07T09:00',
          '2024-10-07T10:00',
          '2024-10-07T11:00',
          '2024-10-07T12:00',
          '2024-10-07T13:00',
          '2024-10-07T14:00',
          '2024-10-07T15:00',
          '2024-10-07T16:00',
          '2024-10-07T17:00',
          '2024-10-07T18:00',
          '2024-10-07T19:00',
          '2024-10-07T20:00',
          '2024-10-07T21:00',
          '2024-10-07T22:00',
          '2024-10-07T23:00',
          '2024-10-08T00:00',
          '2024-10-08T01:00',
          '2024-10-08T02:00',
          '2024-10-08T03:00',
          '2024-10-08T04:00',
          '2024-10-08T05:00',
          '2024-10-08T06:00',
          '2024-10-08T07:00',
          '2024-10-08T08:00',
          '2024-10-08T09:00',
          '2024-10-08T10:00',
          '2024-10-08T11:00',
          '2024-10-08T12:00',
          '2024-10-08T13:00',
          '2024-10-08T14:00',
          '2024-10-08T15:00',
          '2024-10-08T16:00',
          '2024-10-08T17:00',
          '2024-10-08T18:00',
          '2024-10-08T19:00',
          '2024-10-08T20:00',
          '2024-10-08T21:00',
          '2024-10-08T22:00',
          '2024-10-08T23:00',
          '2024-10-09T00:00',
          '2024-10-09T01:00',
          '2024-10-09T02:00',
          '2024-10-09T03:00',
          '2024-10-09T04:00',
          '2024-10-09T05:00',
          '2024-10-09T06:00',
          '2024-10-09T07:00',
          '2024-10-09T08:00',
          '2024-10-09T09:00',
          '2024-10-09T10:00',
          '2024-10-09T11:00',
          '2024-10-09T12:00',
          '2024-10-09T13:00',
          '2024-10-09T14:00',
          '2024-10-09T15:00',
          '2024-10-09T16:00',
          '2024-10-09T17:00',
          '2024-10-09T18:00',
          '2024-10-09T19:00',
          '2024-10-09T20:00',
          '2024-10-09T21:00',
          '2024-10-09T22:00',
          '2024-10-09T23:00',
          '2024-10-10T00:00',
          '2024-10-10T01:00',
          '2024-10-10T02:00',
          '2024-10-10T03:00',
          '2024-10-10T04:00',
          '2024-10-10T05:00',
          '2024-10-10T06:00',
          '2024-10-10T07:00',
          '2024-10-10T08:00',
          '2024-10-10T09:00',
          '2024-10-10T10:00',
          '2024-10-10T11:00',
          '2024-10-10T12:00',
          '2024-10-10T13:00',
          '2024-10-10T14:00',
          '2024-10-10T15:00',
          '2024-10-10T16:00',
          '2024-10-10T17:00',
          '2024-10-10T18:00',
          '2024-10-10T19:00',
          '2024-10-10T20:00',
          '2024-10-10T21:00',
          '2024-10-10T22:00',
          '2024-10-10T23:00',
          '2024-10-11T00:00',
          '2024-10-11T01:00',
          '2024-10-11T02:00',
          '2024-10-11T03:00',
        ],
        temperature_2m: [
          36.6, 32.8, 29.5, 28.6, 29.2, 28.2, 27.5, 26.6, 26.5, 26, 25, 23.5,
          23.9, 24.2, 22.9, 21, 24, 28.1, 31.4, 33.9, 32.1, 28.9, 26.9, 25.2,
          23, 21.1, 19.6, 18.6, 17.7, 16.8, 16.2, 15.5, 14.9, 14.4, 14.2, 13.7,
          13.3, 12.9, 12.5, 13.5, 15.8, 17.7, 19.6, 21, 21.9, 22.3, 22, 20.7,
          18.9, 17.9, 17.3, 17, 16.7, 16.2, 15.6, 15.2, 15, 15, 15.1, 14.8,
          14.8, 14.9, 14.7, 14.8, 15.3, 16.2, 17.9, 19.6, 20.5, 21.6, 21, 20.7,
          19.3, 18.7, 18.4, 17.9, 17.3, 17, 17, 16.8, 16.4, 16.2, 16, 15.8,
          15.7, 15.4, 15.4, 16.1, 16.7, 17, 18.6, 19, 19.5, 19.4, 18.5, 17.9,
          17.5, 16.7, 16.3, 16.1,
        ],
      },
      daily_units: {
        time: 'iso8601',
        sunrise: 'iso8601',
        sunset: 'iso8601',
      },
      daily: {
        time: [
          '2024-10-07',
          '2024-10-08',
          '2024-10-09',
          '2024-10-10',
          '2024-10-11',
        ],
        sunrise: [
          '2024-10-07T07:15',
          '2024-10-08T07:16',
          '2024-10-09T07:17',
          '2024-10-10T07:18',
          '2024-10-11T07:19',
        ],
        sunset: [
          '2024-10-07T19:00',
          '2024-10-08T18:58',
          '2024-10-09T18:57',
          '2024-10-10T18:55',
          '2024-10-11T18:54',
        ],
      },
    };
  },
});

function generateCoolPalette(
  count: number = 5,
  minDistance: number = 30
): string[] {
  const palette: string[] = [];

  while (palette.length < count) {
    const color = chroma.random();
    const isDistinct = palette.every(
      (existing) => chroma.distance(existing, color, 'lab') >= minDistance
    );

    if (isDistinct) {
      palette.push(color.hex());
    }
  }

  return palette;
}

export const colorPaletteTool = createTool({
  // description: 'Generate a color palette',
  description: 'Display a color palette',
  parameters: z.object({
    count: z.number().min(2).max(8).optional().default(5),
    minDistance: z.number().min(0).max(100).optional().default(30),
  }),
  execute: async function ({ count, minDistance }) {
    const colorPalette = generateCoolPalette(count, minDistance);
    console.log(
      `Generated color palette with ${count} colors and min distance ${minDistance}: ${colorPalette.join(', ')}`
    );
    // return {
    //   // content: [
    //   //   {
    //   //     type: 'text',
    //   //     text: `Colors: ${colorPalette.join(', ')}`,
    //   //   },
    //   // ],
    //   structuredContent: {
    //     colors: colorPalette,
    //   },
    // };
    return {
      colors: colorPalette,
    };
  },
});

export const tools = {
  getWeather: weatherTool,
  getColorPalette: colorPaletteTool,
};
