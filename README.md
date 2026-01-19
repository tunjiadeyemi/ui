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
import "@tunjiadeyemi/ui/styles.css";
```

Then use the components:

```tsx
import { Modal, Input, Skeleton } from "@tunjiadeyemi/ui";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        validate={true}
      />

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

      <Skeleton width="200px" height="20px" animation="pulse" />
    </>
  );
}
```

## Available Components

### Modal

A flexible modal component with multiple reveal animations and optional drag-to-dismiss.

**Props:**

- `showModal` (boolean): Controls modal visibility
- `onClose` (function): Callback when modal is closed
- `revealMode` ('fade' | 'slide-right' | 'slide-bottom'): Animation style - Default: `'fade'`
- `isDrag` (boolean): Enable drag to dismiss (for slide-bottom mode) - Default: `false`
- `className` (string): Custom classes for the modal content
- `children` (ReactNode): Modal content

**Example:**

```tsx
<Modal
  showModal={true}
  onClose={() => console.log("Modal closed")}
  revealMode="slide-bottom"
  isDrag={true}
  className="bg-white p-6 rounded-lg"
>
  <h2>Your Content</h2>
</Modal>
```

### Input

A customizable input component with built-in validation, password visibility toggle, and OTP support.

**Props:**

- `type` ('text' | 'email' | 'password' | 'otp' | 'number'): Input type - Default: `'text'`
- `value` (string): Input value
- `onChange` (function): Change handler
- `placeholder` (string): Placeholder text
- `validate` (boolean): Enable validation - Default: `false`
- `minLength` (number): Minimum character length
- `maxLength` (number): Maximum character length
- `errorMessage` (string): Custom error message
- `onOtpClick` (function): Callback for OTP button click (when type is 'otp')
- `className` (string): Additional CSS classes
- `width` (string): Input width - Default: `'100%'`
- `height` (string): Input height - Default: `'40px'`
- `color` (string): Accent color - Default: `'#6B2CE9'`
- `textColor` (string): Text color - Default: `'white'`
- `backgroundColor` (string): Background color - Default: `'#1F1F23'`
- `borderRadius` (string): Border radius - Default: `'10px'`

**Example:**

```tsx
<Input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Enter your email"
  validate={true}
  errorMessage="Please enter a valid email"
/>

<Input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  minLength={8}
  validate={true}
/>

<Input
  type="otp"
  value={otp}
  onChange={(e) => setOtp(e.target.value)}
  onOtpClick={() => console.log('Send OTP')}
  placeholder="Enter OTP"
/>
```

### Skeleton

A loading placeholder component with multiple variants and animations.

**Props:**

- `variant` ('text' | 'circular' | 'rectangular'): Skeleton shape - Default: `'rectangular'`
- `width` (string | number): Width of skeleton - Default: `'100%'`
- `height` (string | number): Height of skeleton - Default: `'100%'`
- `animation` ('pulse' | 'wave' | 'none'): Animation type - Default: `'pulse'`
- `className` (string): Additional CSS classes

**Example:**

```tsx
<Skeleton variant="text" width="200px" height="20px" />
<Skeleton variant="circular" width="50px" height="50px" />
<Skeleton variant="rectangular" width="100%" height="200px" animation="wave" />
```

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
