import { ReactNode } from "react";

interface StackRowProps{
    children?: ReactNode
}

export default function StackRow({children}: StackRowProps){

    return(
        <div className="p-2 bg-stack ps-0 shadow-sm fixed" style={{margin: '0vh 10vw'}}>
            <div className="px-5" style={{padding: '7.5% 0%'}}>
                {children}
            </div>
        </div>
    )
}