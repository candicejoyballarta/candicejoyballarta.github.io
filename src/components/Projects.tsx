import React, { ComponentProps } from 'react';

interface ProjectProps extends ComponentProps<'div'> {
	repository: string;
}

function Project({ children, repository, className, ...props }: ProjectProps) {}

export default function Projects(props: ComponentProps<'section'>) {
	return <div>Projects</div>;
}
