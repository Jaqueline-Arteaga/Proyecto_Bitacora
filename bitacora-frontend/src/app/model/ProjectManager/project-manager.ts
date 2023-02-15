import { Activity } from "../Activity/activity";
import { Project } from "../Project/project";
import { Role } from "../Role/role";
import { User } from "../User/user";

export class ProjectManager {
    id?:number;
    user?:User;
    project?:Project;
    role?:Role;
    activities?:Set<Activity>;
}
