import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "Toom",
  description: "Video Calling Application",
  icons:{
    icon:'/icons/toom.png'
  }
};

const RootLayout = ({children} :{children:ReactNode}) => {
  return (
    <main>
        <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  )
}

export default RootLayout