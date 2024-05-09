import { ReactNode } from "react";

interface StackRowProps{
    children?: ReactNode
}

export default function StackRow({children}: StackRowProps){

    return(
        <div className="p-2 bg-stack rounded-end rounded-bottom ps-0 shadow-sm fixed">
            <div className="px-5" style={{padding: '7.5% 0%'}}>
                {children}
            </div>
        </div>
    )
}