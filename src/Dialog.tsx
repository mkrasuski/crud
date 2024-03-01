import { PropsWithChildren, useRef } from "react"

interface Props extends PropsWithChildren {
    open?: boolean
}

export default function Dialog({ children, open = true }: Props) {

    const e = useRef<HTMLDialogElement>(null)
    console.log(children)

    return (
        <dialog ref={e} open={open} >

        <span 
            style={{
                position:'absolute',
                right:'10px',
                top:'4px', 
                cursor:'pointer',
                color:'#777',
                fontSize:'1.5em'
            }}
            onClick={() => e.current?.close()}

            >
                <>&times;</>
        </span>
        <div style={{padding:'1em 1em'}}>
            {children}
        </div>
       </dialog>
    )
}