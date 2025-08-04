# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Vite HMR
- `npm run build` - Build for production using Vite
- `npm run lint` - Run ESLint on the codebase
- `npm run preview` - Preview the production build locally

## Project Architecture

This is a React accordion component exercise built with Vite and Tailwind CSS. The project structure is:

- **Main Entry**: `src/main.jsx` renders the Accordion component (App.jsx is available but currently commented out)
- **Primary Component**: `src/components/accordion.jsx` - Implements expandable FAQ-style accordion with single-selection state management
- **Data Source**: `src/assets/data.js` - Contains accordion content as an array of objects with id, title, and content
- **Styling**: Tailwind CSS v4 with custom global styles in `src/index.css`

### Component Architecture

The Accordion component uses:
- `useState` for managing which accordion item is currently expanded (`selectIndex`)
- Single selection pattern - only one item can be expanded at a time
- Toggle functionality - clicking an expanded item closes it
- Conditional rendering for content display with CSS transitions

### Data Structure

Accordion data follows this pattern:
```javascript
{
  id: number,
  title: string,
  content: string
}
```

### Styling Notes

- Uses Tailwind CSS v4 (imported via `@import "tailwindcss"`)
- Custom amber color scheme for accordion headers
- Responsive design with flexbox layout
- Hover effects and smooth transitions

## Current State

The main.jsx currently renders the Accordion component, with the original counter App component commented out. The accordion includes a non-functional "Enable multiselection" button placeholder.