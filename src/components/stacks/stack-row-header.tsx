interface StackRowHeaderProps{
    icon: string,
    name: string,
    title: string,
}

export function StackRowHeader({icon, name, title}: StackRowHeaderProps){
    return(
        <>
            <p><span><i className={icon}></i></span>{name}</p>
            <p>{title}</p>
        </>
    )
}