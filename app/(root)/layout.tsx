import React from 'react'
import { ChildProps } from '@/types'
import Navbar from '@/components/shared/navbar'

function Layout({ children }: ChildProps) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	)
}

export default Layout
