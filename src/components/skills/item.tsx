interface SkillItemProps{
    icon: string,
    label: string,
}

export default function SkillItem({icon, label}: SkillItemProps){
    return <p><i className={icon}></i>{label}</p>
}