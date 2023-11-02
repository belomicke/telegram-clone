import React, { useState } from 'react'
import { ModalAvatar } from './ModalAvatar'
import { TModal } from '@/shared/ui/TModal'
import { Avatar, AvatarContainer, AvatarInner, Badge, Content, Online } from './styles'

interface props {
    cover: string
    letter?: string
    size?: 'auto' | 'large' | 'medium'
    colorNumber: number
    rounded?: boolean
    canOpen?: boolean
    isOnline?: boolean
    profile?: boolean
    saved?: boolean
    children?: React.ReactNode
}

export const TAvatar = ({
    cover,
    size = 'large',
    letter = '',
    colorNumber,
    canOpen = false,
    rounded = false,
    isOnline = false,
    profile = false,
    saved = false,
    children
}: props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const openAvatarModalHandler = () => {
        if (canOpen && cover) {
            setIsOpen(true)
        }
    }

    return (
        <>
            <AvatarContainer
                canOpen={Boolean(canOpen && cover)}
                onClick={openAvatarModalHandler}
            >
                <Avatar
                    size={size}
                    path={cover}
                    no_photo={Boolean(cover)}
                    rounded={rounded}
                    color_number={colorNumber}
                    saved={saved}
                >
                    {saved &&
                        <AvatarInner
                            profile={profile}
                            size="large"
                        >
                            {saved ?
                                <i className="icon icon-avatar-saved-messages" />
                                :
                                letter.toUpperCase()
                            }
                        </AvatarInner>
                    }
                    {!cover &&
                        <AvatarInner
                            profile={profile}
                            size="large"
                        >
                            {saved ?
                                <i className="icon icon-avatar-saved-messages" />
                                :
                                letter.toUpperCase()
                            }
                        </AvatarInner>
                    }
                    <Content>
                        {children}
                    </Content>
                </Avatar>
                {isOnline &&
                    <Badge>
                        <Online />
                    </Badge>
                }
            </AvatarContainer>
            <TModal
                active={isOpen}
                close={() => setIsOpen(false)}
            >
                {isOpen &&
                    <ModalAvatar
                        avatar={cover}
                        close={() => setIsOpen(false)}
                    />
                }
            </TModal>
        </>
    )
}
