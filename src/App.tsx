import "./App.css";

function App() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-teal-50 to-cyan-100 px-4">
            <div className="mx-auto w-full max-w-md rounded-lg border border-teal-200 bg-white p-8 shadow-lg">
                <h1 className="text-center text-4xl font-bold text-teal-800 sm:text-5xl">
                    Hello Emily
                </h1>
                <p className="mt-4 text-center text-lg text-teal-600 sm:text-xl">
                    Coming soon
                </p>
                <div className="mt-6 h-1 w-16 mx-auto rounded-full bg-teal-300" />
                <p className="mt-4 text-center text-sm text-teal-500">
                    We’re working hard to bring you something amazing. Stay tuned!
                </p>
            </div>
        </div>
    );
}

export default App;
