// pages/painel/_layout.tsx
import React from 'react';
import Head from 'next/head';

export const metadata = {
    title: 'Painel',
    description: 'Descrição da pagina painel',
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </Head>
            <div>
                <br />
                {children}
                <hr />
                <footer>Exemplo de footer</footer>
            </div>
        </>
    );
};

export default DashboardLayout;
