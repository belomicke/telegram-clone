import { HTMLAttributes } from "react"
import { Button, Icon } from "./styles"

interface props extends HTMLAttributes<HTMLButtonElement> {
    icon: string
    visible?: boolean
}

export const BottomButton = ({ icon, visible = true, ...props }: props) => {
    return (
        <Button visible={visible} {...props}>
            <Icon className={`icon ${icon}`} />
        </Button>
    )
}
