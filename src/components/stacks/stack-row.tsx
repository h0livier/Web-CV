import { ReactNode } from "react";

interface StackRowProps{
    children?: ReactNode
}

export default function StackRow({children}: StackRowProps){

    return(
        <div className="p-2">
            {children}
        </div>
    )
}