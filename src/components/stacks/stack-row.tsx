import { ReactNode } from "react";

interface StackRowProps{
    children?: ReactNode
}

export default function StackRow({children}: StackRowProps){

    return(
        <div className="p-2 ps-0 fixed" style={{margin: '0vh 10vw'}}>
            <div className="px-5" style={{padding: '7.5% 0%'}}>
                {children}
            </div>
        </div>
    )
}