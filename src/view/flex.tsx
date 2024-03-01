import { PropsWithChildren } from "react"


export function Row({ children }: PropsWithChildren) {
    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0.5em'
    }}>
        {children}
    </div>
}

export function Column({ children }: PropsWithChildren) {

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5em'
    }}>
        {children}
    </div>
}