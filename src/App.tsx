import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="h-20 w-20 drop-shadow-lg hover:scale-110 transition-transform" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="h-20 w-20 drop-shadow-lg hover:scale-110 transition-transform" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Vite + React</h1>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center">
        <button
          className="px-6 py-2 mb-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="text-gray-700 dark:text-gray-300">
          Edit <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-8 text-gray-500 dark:text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App
