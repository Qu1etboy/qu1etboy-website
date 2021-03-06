import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../Theme';
import { Helmet } from 'react-helmet';
import Head from 'next/head';


const Layout = ({ children }) => {
    const [theme, toggleTheme] = useContext(ThemeContext);
    return (
        <div className={theme}>
            <Head>
                <meta charSet='UTF-8'/>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <meta name='description' content="Qu1etboy's Website"/>
                <meta name='author' content='Weerawong Vonggatunyu' />
                <title>Qu1etboy</title>
            </Head>
            <Helmet>
                <style>
                    {`body { background-color: ${theme== 'dark' ? "#171717" : "#fafafa"}; transition-duration: 200ms}`}
                </style>
            </Helmet>
            {children}
        </div>
    )
}

export default Layout;