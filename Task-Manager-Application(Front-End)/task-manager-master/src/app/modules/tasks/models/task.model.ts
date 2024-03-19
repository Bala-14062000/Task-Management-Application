export interface Task {
    id?: number;
    name?: string;
    status?: boolean;
}

export class TaskDTO {
    static mapperDto(params: Task): Task {
        return {
            id: params.id,
            name: params.name,
            status: params.status
        };
    }
}
