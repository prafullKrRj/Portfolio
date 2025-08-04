import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Loading component
const LoadingSpinner = () => (
    <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#60a5fa',
        fontSize: '18px',
        zIndex: 9999,
        textAlign: 'center'
    }}>
        <div style={{
            border: '2px solid #1e293b',
            borderTop: '2px solid #60a5fa',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
        }}></div>
        Loading Portfolio...
        <style>
            {`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}
        </style>
    </div>
);

// Error boundary component
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Portfolio App Error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#ef4444',
                    textAlign: 'center',
                    padding: '2rem'
                }}>
                    <h2>Something went wrong</h2>
                    <p>Please refresh the page or try again later.</p>
                    <button 
                        onClick={() => window.location.reload()}
                        style={{
                            background: '#60a5fa',
                            color: 'white',
                            border: 'none',
                            padding: '0.5rem 1rem',
                            borderRadius: '0.5rem',
                            cursor: 'pointer',
                            marginTop: '1rem'
                        }}
                    >
                        Refresh Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

// Main app wrapper with loading state
const AppWrapper = () => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        // Simulate loading time and ensure all assets are loaded
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }

    return <App />;
};

// Initialize the app
const root = ReactDOM.createRoot(document.getElementById('root'));

try {
    root.render(
        <React.StrictMode>
            <ErrorBoundary>
                <AppWrapper />
            </ErrorBoundary>
        </React.StrictMode>
    );
} catch (error) {
    console.error('Failed to render app:', error);
    // Fallback rendering
    document.getElementById('root').innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #ef4444;
            text-align: center;
            padding: 2rem;
        ">
            <h2>Failed to load portfolio</h2>
            <p>Please check your internet connection and refresh the page.</p>
        </div>
    `;
}
