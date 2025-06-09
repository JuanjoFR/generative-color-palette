# Generative Color Palette

A demo project showcasing the use of the Vercel AI SDK chat component with custom tools. This project features an AI-powered chat interface that generates color palettes using a custom tool, and leverages generative UI to render the tool's structured response data in a visually appealing way.

## Features

- **AI SDK Custom Tool:** Integrates a custom tool for generating color palettes via chat.
- **Generative UI:** Uses a React component to display the AI tool's structured responses.
- **Color Manipulation:** Utilizes [chroma.js](https://gka.github.io/chroma.js/) for advanced color processing.
- **Markdown Parsing:** Renders OpenAI responses with [react-markdown](https://github.com/remarkjs/react-markdown).

## Screenshots & Demo

<img width="821" alt="default-screen" src="https://github.com/user-attachments/assets/cb23005c-a066-4db9-86a5-8c437e658b20" />

<img width="821" alt="barcelona-palette" src="https://github.com/user-attachments/assets/c7a6c842-2f2e-4c21-a17e-d9a2f603792c" />

[demo.webm](https://github.com/user-attachments/assets/b2b78564-203e-4d08-a55d-1055447b629e)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/JuanjoFR/generative-color-palette.git
   cd generative-color-palette
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   - Create a `.env.local` file in the root directory.
   - Add your OpenAI API key:
     ```
     OPENAI_API_KEY=your-openai-api-key
     ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

## Usage

- Interact with the chat to generate different color palettes using natural language.
- For production testing:
  ```bash
  npm run build
  npm start
  ```

## Scripts

- `dev`: Start development server
- `build`: Build for production
- `start`: Start production server
- `lint`: Run ESLint
- `format`: Run Prettier

## Customization

- Users can generate a variety of color palettes by chatting with the AI.
- The generative UI component can be extended to support additional tools or response formats.

## License

Open source. You are free to use, modify, and share this project.

## Credits

Created by Juanjo Fernández ([hi@juanjofr.com](mailto:hi@juanjofr.com))
