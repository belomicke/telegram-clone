import { VirtualItem } from '@tanstack/virtual-core'
import { CSSProperties } from 'react'

interface props {
    virtualRow: VirtualItem
    isSticky: boolean
    isActiveSticky: boolean
}

export const getVirtualItemStyles = ({
    virtualRow,
    isSticky,
    isActiveSticky
}: props): CSSProperties => {
    if (isActiveSticky) {
        return {
            top: 10,
            left: 0,
            width: '100%',
            height: 56.25,
            zIndex: 10001,
            position: 'sticky',
        }
    } else if (isSticky) {
        return {
            top: 0,
            left: 0,
            width: '100%',
            height: 56.25,
            position: 'absolute',
            transform: `translateY(${virtualRow.start}px)`,
        }
    } else {
        return {
            top: 0,
            left: 0,
            width: '100%',
            position: 'absolute',
            transform: `translateY(${virtualRow.start}px)`,
        }
    }
}
