import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('PROMPT WAR ERROR CAUGHT:', error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          backgroundColor: '#050508',
          color: '#f43f5e',
          fontFamily: 'monospace',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            maxWidth: '800px',
            width: '100%',
            backgroundColor: '#0f0f15',
            border: '1px solid #f43f5e55',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 0 50px rgba(244,63,94,0.2)'
          }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#fb7185' }}>
              ⚠️ Prompt War Runtime Diagnostics
            </h1>
            <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>
              An error occurred during application initialization:
            </p>
            <div style={{
              backgroundColor: '#000',
              padding: '1rem',
              borderRadius: '0.5rem',
              overflowX: 'auto',
              marginBottom: '1rem',
              color: '#fda4af',
              fontSize: '0.85rem',
              whiteSpace: 'pre-wrap'
            }}>
              {this.state.error?.toString()}
              {'\n\n'}
              {this.state.errorInfo?.componentStack}
            </div>
            <button
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
              style={{
                backgroundColor: '#f43f5e',
                color: '#fff',
                fontWeight: 'bold',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Reset Arena Cache & Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
