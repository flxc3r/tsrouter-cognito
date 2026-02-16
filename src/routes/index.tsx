import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

const TITLE_TEXT = `
  _______ _____ _____             _                    _____                  _ _        
 |__   __/ ____|  __ \\           | |                  / ____|                (_) |       
    | | | (___ | |__) |___  _   _| |_ ___ _ __ ______| |     ___   __ _ _ __  _| |_ ___  
    | |  \\___ \\|  _  // _ \\| | | | __/ _ \\ '__|______| |    / _ \\ / _\` | '_ \\| | __/ _ \\ 
    | |  ____) | | \\ \\ (_) | |_| | ||  __/ |         | |___| (_) | (_| | | | | | || (_) |
    |_| |_____/|_|  \\_\\___/ \\__,_|\\__\\___|_|          \\_____\\___/ \\__, |_| |_|_|\\__\\___/ 
                                                                   __/ |                 
                                                                  |___/                  
`

function App() {
  return (
    <div className="h-full flex flex-col">
      <header className="flex-1 flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <pre className="overflow-x-auto font-mono text-sm">{TITLE_TEXT}</pre>
      </header>
    </div>
  )
}
