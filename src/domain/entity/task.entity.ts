
export interface TaskAttributes {
    id: string;
    title: string;
    description: string;
    isComplete: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export class Task {
    private _id: string
    private _title: string
    private _description: string
    private _isComplete: boolean
    private _createdAt?: Date
    private _updatedAt?: Date


    constructor(props: TaskAttributes) {
        this._id = props.id
        this._title = props.title
        this._description = props.description
        this._isComplete = props.isComplete
        this._createdAt = props.createdAt ? new Date(props.createdAt) : undefined
        this._updatedAt = props.updatedAt ? new Date(props.updatedAt) : undefined
    }

    get id(): string {
        return this._id
    }

    get title(): string {
        return this._title
    }

    get description(): string {
        return this._description
    }

    get isComplete(): boolean {
        return this._isComplete
    }
    get createdAt(): Date {
        return this._createdAt!
    }
    get updatedAt(): Date {
        return this._updatedAt!
    }

    public static create(props:TaskAttributes):Task{
        return new Task({...props})
    }

    toJSON():TaskAttributes{
        return{
            id:this._id,
            title:this._title,
            description:this._description,
            isComplete:this._isComplete,
            createdAt: this._createdAt?.toISOString(),
            updatedAt: this._updatedAt?.toISOString()

        }
    }
    
}



