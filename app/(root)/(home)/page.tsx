import { Button } from '@/components/ui/button'
import { featuredItems } from '@/constants'
import Image from 'next/image'
import React from 'react'

function HomePage() {
	return (
		<div className='h-screen w-full flex items-center '>
			<div className='max-w-xl ml-60 flex h-full flex-col justify-center'>
				<h1 className='text-9xl font-semibold uppercase'>Workout with me</h1>
				<p className='text-muted-foreground'>
					Join our vibrant fitness community where we support and motivate each
					other. Whether you&apos;re just starting out or an experienced
					athlete, we&apos;ll help you reach your fitness goals through
					personalized workouts, expert guidance, and a supportive environment.
					Let&apos;s transform together.
				</p>
				<Button className='mt-6 w-fit  h-12 ' size={'lg'}>
					Get Started
				</Button>
				<div className='mt-24'>
					<p className='text-muted-foreground'>AS FEATURED IN</p>
					<div className='flex items-center gap-4 mt-2'>
						{featuredItems.map((Icon, index) => (
							<Icon key={index} className='w-12 h-12' />
						))}
					</div>
				</div>
			</div>

			<div className='w-1/4'>
				<Image src={'/men.png'} alt='hero' width={500} height={500} />
			</div>
		</div>
	)
}

export default HomePage
