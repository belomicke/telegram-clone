import { useRef, useState } from "react"
import { useViewer } from "@/entities/viewer"
import { Container, Icon, Image } from "./styles"

interface props {
    onChange: (file: File) => void
}

export const AvatarChanger = ({ onChange }: props) => {
    const { viewer } = useViewer()
    const input = useRef<HTMLInputElement>(null)

    const [background, setBackground] = useState<string>(viewer.avatar || '')

    const avatarChangeHandler = (e) => {
        setBackground(URL.createObjectURL(e.target.files[0]))
        onChange(e.target.files[0])
    }

    return (
        <Container
            className={background ? `filled` : ''}
            onClick={() => input.current.click()}
        >
            <input
                type="file"
                accept="image/png, image/jpeg"
                style={{
                    display: 'none'
                }}
                onChange={avatarChangeHandler}
                ref={input}
            />
            <Icon className="icon icon-camera-add" />
            {background &&
                <Image src={background} />
            }
        </Container>
    )
}
