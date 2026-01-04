import type { ButtonProps, ButtonVariant } from '../../types'
import { cn } from '../../utils'

const Button: React.FC<ButtonProps> = ({
	variant = 'primary',
	children,
	className,
	...props
}) => {
	const baseStyles =
		'py-[15px] px-[51.5px] rounded-10 bg-blue font-montserrat font-medium text-base text-white leading-[125%] transition-colors hover:bg-[#132658] active:text-blue disabled:bg-lightSilver disabled:text-grey'

	const variants: Record<ButtonVariant, string> = {
		primary:
			'px-[51.5px] bg-blue text-white hover:bg-[#132658] active:text-blue',
		secondary:
			'px-[66.5px] bg-yellow text-brown hover:bg-[#E4CB9E] active:text-yellow',
		outline:
			'px-[35.5px] bg-lightSilver text-blue hover:bg-[#D4DCF2] active:bg-[#D4DCF2] active:text-lightSilver',
	}

	return (
		<button
			className={cn(baseStyles, variants[variant as ButtonVariant], className)}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
