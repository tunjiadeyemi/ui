# @tunjiadeyemi/ui

A collection of reusable React UI components built with TypeScript.

## Installation

```bash
npm install @tunjiadeyemi/ui framer-motion lucide-react
```

or

```bash
yarn add @tunjiadeyemi/ui framer-motion lucide-react
```

## Usage

First, import the styles in your app's entry point (e.g., `App.tsx` or `main.tsx`):

```tsx
import '@tunjiadeyemi/ui/styles.css';
```

Then use the components:

```tsx
import { Modal } from '@tunjiadeyemi/ui';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      
      <Modal 
        showModal={showModal} 
        onClose={() => setShowModal(false)}
        revealMode="fade"
        className="bg-white p-8 rounded-lg max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
        <p>Modal content goes here</p>
      </Modal>
    </>
  );
}
```

### Available Components

#### Modal

A flexible modal component with multiple reveal animations.

**Props:**
- `showModal` (boolean): Controls modal visibility
- `onClose` (function): Callback when modal is closed
- `revealMode` ('fade' | 'slide-right' | 'slide-bottom'): Animation style
- `className` (string): Custom classes for the modal content
- `children` (ReactNode): Modal content

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Watch mode for development
npm run dev
```

## License

MIT © Tunji Adeyemi
