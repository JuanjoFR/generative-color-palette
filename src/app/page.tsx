import Chat from '@/components/chat';

export default function HomePage() {
  return <Chat />;
}

// import { useChat } from '@ai-sdk/react';
// import { ColorPalette } from '@/components/color-palette';
// import { Weather } from '@/components/weather';

// export default function HomePage() {
//   const { messages, input, handleInputChange, handleSubmit } = useChat();

//   return (
//     <div>
//       {/* {messages.map((message) => (
//         <div key={message.id}>
//           <div>{message.role === 'user' ? 'User: ' : 'AI: '}</div>

//           <div>
//             {Array.isArray(message.parts) &&
//               message.parts.map((part, idx) => {
//                 // Optionally handle text parts
//                 if (part.type === 'text') {
//                   return <div key={idx}>{part.text}</div>;
//                 }
//                 if (part.type === 'tool-invocation') {
//                   const { toolInvocation } = part;
//                   const { toolName, toolCallId, state } = toolInvocation;

//                   if (state === 'result') {
//                     // Only access result if state is 'result'
//                     // Use a type guard to ensure result exists
//                     console.log(
//                       `Tool invocation result for ${toolName}:`,
//                       toolInvocation.result,
//                       toolName === 'displayColorPalette'
//                     );
//                     if (toolName === 'displayColorPalette') {
//                       console.log(
//                         `Rendering color palette for tool call ID: ${toolCallId}`
//                       );
//                       return (
//                         <div key={toolCallId}>
//                           <ColorPalette {...toolInvocation.result} />
//                         </div>
//                       );
//                     } else if (toolName === 'displayWeather') {
//                       const { result } = toolInvocation;
//                       return (
//                         <div key={toolCallId}>
//                           <Weather {...result} />
//                         </div>
//                       );
//                     }
//                   } else {
//                     return (
//                       <div key={toolCallId}>
//                         {toolName === 'displayColorPalette' ? (
//                           <div>Loading color palette...</div>
//                         ) : (
//                           <div>Loading...</div>
//                         )}
//                       </div>
//                     );
//                   }
//                 }
//                 return null;
//               })}
//           </div>
//         </div>
//       ))} */}

//       {messages.map((message) => {
//         const toolPart = message.parts.find(
//           (p) =>
//             p.type === 'tool-invocation' && p.toolInvocation?.state === 'result'
//         );
//         const shouldRenderText = !toolPart;

//         return (
//           <div key={message.id}>
//             <div>{message.role === 'user' ? 'User:' : 'AI:'}</div>

//             {message.parts.map((part, idx) => {
//               if (
//                 part.type === 'tool-invocation' &&
//                 part.toolInvocation?.state === 'result'
//               ) {
//                 const { toolName, result, toolCallId } = part.toolInvocation;

//                 if (toolName === 'displayColorPalette') {
//                   return <ColorPalette key={toolCallId} {...result} />;
//                 } else if (toolName === 'displayWeather') {
//                   return <Weather key={toolCallId} {...result} />;
//                 }
//               }

//               if (part.type === 'text' && shouldRenderText) {
//                 return <div key={idx}>{part.text}</div>;
//               }

//               return null;
//             })}
//           </div>
//         );
//       })}

//       <form onSubmit={handleSubmit}>
//         <input
//           value={input}
//           onChange={handleInputChange}
//           placeholder="Type a message..."
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }
