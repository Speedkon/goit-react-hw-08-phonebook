import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
    return (
        <div style={{ maxWidth: 1440, height: '100vh' , margin: '0 auto', padding: '10px 16px' , background: '#E6FFFA'}}>
        <AppBar />
        <Suspense fallback={null}>
            <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};