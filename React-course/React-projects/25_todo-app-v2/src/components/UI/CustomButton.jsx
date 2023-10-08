import styles from './CustomButton.module.css'

const CustomButton = props => {
	const { children, disabled = false } = props
	return (
		<button
			{...props}
			className={
				disabled
					? `${styles.buttonMain} ${styles.disabled_btn}`
					: styles.buttonMain
			}
		>
			{children}
		</button>
	)
}

export default CustomButton
