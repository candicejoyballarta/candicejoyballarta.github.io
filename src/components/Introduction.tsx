import React, { ComponentProps } from 'react';

export default function Introduction(props: ComponentProps<'section'>) {
	return (
		<section {...props}>
			<div>
				<div className='avatar'>
					<div className='w-32 rounded-full overflow-hidden'>
						<img
							src='https://imgur.com/NTFMfNF.png'
							alt='candice'
						/>
					</div>
				</div>
				<h1 className='mt-5 mb-1 text-2xl font-medium'>
					Candice Ballarta
				</h1>
				<p className='text-lg text-zinc-500'>Full Stack Developer</p>
			</div>
			<div className='my-8 max-w-[58ch] text-zinc-500'>
				<p className='my-4 intro'>
					Currently{' '}
					<a
						href='https://www.linkedin.com/in/candiceballarta/'
						className='focusable rounded-sm font-medium text-zinc-800 underline decoration-sky-500 decoration-2 underline-offset-2 transition duration-100 hover:text-sky-500 hover:decoration-sky-500/30 focus:text-sky-500 focus:ring-sky-500/40'
					>
						looking for an internship
					</a>{' '}
					to further improve my skills on Software Development. I'm a{' '}
					<a className='focusable rounded-sm font-medium text-zinc-800 underline decoration-lime-500 decoration-2 underline-offset-2 transition duration-100 hover:text-lime-500 hover:decoration-lime-500/30 focus:text-lime-500 focus:ring-lime-500/40'>
						graduating
					</a>{' '}
					student from{' '}
					<a
						href='https://www.facebook.com/tuptaguigofficial'
						target='_blank'
						className='focusable rounded-sm font-medium text-zinc-800 underline decoration-rose-500 decoration-2 underline-offset-2 transition duration-100 hover:text-rose-500 hover:decoration-rose-500/30 focus:text-rose-500 focus:ring-rose-500/40 '
					>
						Technological University of the Philippines - Taguig
					</a>{' '}
					taking a Bachelor's degree in Information Technology.
				</p>
			</div>
			<div className='mt-5 flex flex-wrap gap-2 text-center'>
				<a
					className='focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-gray-500/10 transition selection:bg-white/30 hover:bg-gray-500/80 hover:shadow-gray-500/5 focus:ring-gray-500/40'
					href='https://github.com/candicejoyballarta'
					target='_blank'
				>
					<svg
						height='24'
						role='presentation'
						width='24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							clipRule='evenodd'
							d='M12 2C6.475 2 2 6.47 2 11.988c0 4.42 2.862 8.153 6.838 9.476.5.087.687-.212.687-.474 0-.238-.013-1.024-.013-1.86C7 19.59 6.35 18.517 6.15 17.955c-.113-.287-.6-1.174-1.025-1.411-.35-.187-.85-.65-.013-.662.788-.012 1.35.724 1.538 1.024.9 1.51 2.338 1.086 2.912.824.088-.65.35-1.086.638-1.336-2.225-.25-4.55-1.111-4.55-4.931 0-1.087.387-1.986 1.025-2.685-.1-.25-.45-1.273.1-2.646 0 0 .837-.263 2.75 1.023a9.29 9.29 0 0 1 2.5-.337c.85 0 1.7.113 2.5.337 1.912-1.298 2.75-1.023 2.75-1.023.55 1.373.2 2.397.1 2.646.637.7 1.025 1.586 1.025 2.685 0 3.832-2.337 4.681-4.562 4.931.362.312.675.912.675 1.848 0 1.336-.013 2.41-.013 2.747 0 .262.188.574.688.474C19.137 20.141 22 16.395 22 11.988 22 6.47 17.525 2 12 2Z'
							fillRule='evenodd'
							fill='currentColor'
						/>
					</svg>
					<span className='hidden sm:inline'>GitHub</span>
				</a>
				<a
					className='focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-blue-500/10 transition selection:bg-white/30 hover:bg-blue-500/80 hover:shadow-blue-500/5 focus:ring-blue-500/40'
					href='https://github.com/candicejoyballarta'
					target='_blank'
				>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M4.98298 7.19701C6.19138 7.19701 7.17098 6.21741 7.17098 5.00901C7.17098 3.80062 6.19138 2.82101 4.98298 2.82101C3.77458 2.82101 2.79498 3.80062 2.79498 5.00901C2.79498 6.21741 3.77458 7.19701 4.98298 7.19701Z'
							fill='currentColor'
						/>
						<path
							d='M9.23697 8.85499V20.994H13.006V14.991C13.006 13.407 13.304 11.873 15.268 11.873C17.205 11.873 17.229 13.684 17.229 15.091V20.995H21V14.338C21 11.068 20.296 8.55499 16.474 8.55499C14.639 8.55499 13.409 9.56199 12.906 10.515H12.855V8.85499H9.23697V8.85499ZM3.09497 8.85499H6.86997V20.994H3.09497V8.85499Z'
							fill='currentColor'
						/>
					</svg>

					<span className='hidden sm:inline'>LinkedIn</span>
				</a>
				<a
					className='focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-lime-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-lime-500/10 transition selection:bg-white/30 hover:bg-lime-500/80 hover:shadow-lime-500/5 focus:ring-lime-500/40 dark:bg-lime-400 '
					href='mailto:candiceballarta@gmail.com'
				>
					<svg
						height='24'
						role='presentation'
						width='24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							clipRule='evenodd'
							d='M7.727 2.959A10 10 0 0 1 22 11.999v.9a3.7 3.7 0 0 1-6.642 2.244 4.6 4.6 0 1 1-.741-6.928A1 1 0 0 1 16.6 8.4v4.5a1.7 1.7 0 1 0 3.4 0V12a8 8 0 1 0-3.136 6.353 1 1 0 1 1 1.216 1.587A10 10 0 1 1 7.727 2.96Zm6.873 9.04a2.6 2.6 0 1 0-5.2 0 2.6 2.6 0 0 0 5.2 0Z'
							fill='currentColor'
							fillRule='evenodd'
						/>
					</svg>
					<span className='hidden sm:inline'>Email</span>
				</a>
			</div>
		</section>
	);
}
