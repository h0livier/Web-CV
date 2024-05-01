import StackRow from "@components/stacks/stack-row";
import { StackRowHeader } from "@components/stacks/stack-row-header";
import Values from "@assets/resume.json"
import SkillItem from "./skills/item";

export function SkillsStack(){
    return(
        <StackRow>
            <StackRowHeader icon="fa fa-linkedin" name="Skills" title="My main Skills" />
            <div>
                {Values.skills.map(item => <SkillItem icon={item.icon} label={item.label} />)}
            </div>
        </StackRow>
    )
}