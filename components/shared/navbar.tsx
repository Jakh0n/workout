import React from 'react'
import Logo from './logo'
import { navLinks } from '@/constants'
import { Button } from '../ui/button'

function Navbar() {
	return (
		<div className='fixed inset-0 z-50 bg-background/50 backdrop-blur-sm h-[10vh] border-b'>
			<div className='container mx-auto flex items-center justify-between h-full '>
				<Logo />
				<div className='flex items-center gap-3'>
					{navLinks.map(link => (
						<a href={link.path} key={link.label}>
							{link.label}
						</a>
					))}
					<Button variant={'secondary'}>Get Started</Button>
				</div>
			</div>
		</div>
	)
}

export default Navbar
