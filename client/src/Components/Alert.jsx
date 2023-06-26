import { useAppContext } from "../Contexts/AppContext"

const Alert = () => {
    const {alertType, alertText} = useAppContext();
    const colorVariant = {
        danger: 'bg-colorRedLight text-colorRedDark',
        success: 'bg-colorGreenLight text-colorGreenDark'
    }
  return (
    <div className={`w-full alert ${colorVariant[alertType]} mt-[1rem]`}>{alertText}</div>
  )
}

export default Alert