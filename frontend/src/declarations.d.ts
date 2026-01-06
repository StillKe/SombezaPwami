// src/declarations.d.ts
declare module '*.jsx' {
  import React from 'react';
  const content: React.ComponentType<any>;
  export default content;
}

declare module '*.js' {
  const content: any;
  export default content;
}
