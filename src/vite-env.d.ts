/// <reference types="vite/client" />

declare module '*?width=80' {
  const content: string;
  export default content;
}

declare module '*?width=40' {
  const content: string;
  export default content;
}

declare module '*&width=80' {
  const content: string;
  export default content;
}
