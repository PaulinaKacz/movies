"use client";
import React from "react";
import {ReactNode} from "react";
import { Montserrat } from 'next/font/google';
import styled, {createGlobalStyle} from "styled-components";
import StyledComponentsRegistry from "../../src/lib/registry";

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
  }
  
  body {
    background: #232323;
  }
`;

export const StyledAppWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
`;

const montserrat = Montserrat({
    weight: ['300', '400', '500'],
    style: ['normal'],

    subsets: ['latin', 'latin-ext'],
    display: 'swap',
});


export default function RootLayout({
   children,
}: {
    children: ReactNode
}) {

    return (
        <html lang="en">
        <body className={montserrat.className}>
          <StyledComponentsRegistry>
              {children}
              <GlobalStyle />
          </StyledComponentsRegistry>
        </body>
        </html>
    );
};