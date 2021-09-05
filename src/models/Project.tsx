export class Project
{
    private _name: string = "";
    private _detail: string = "";
    private _skills: string[] = [];
    private _schoolYear: string = "";
    private _imageURL: string = "";
    private _githubURL: string = "";
    private _youtubeURL: string = "";

    public constructor(init?:Partial<Project>) {
        Object.assign(this, init);
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    
    public get detail(): string {
        return this._detail;
    }
    public set detail(value: string) {
        this._detail = value;
    }
    
    public get skills(): string[] {
        return this._skills;
    }
    public set skills(value: string[]) {
        this._skills = value;
    }
    
    public get schoolYear(): string {
        return this._schoolYear;
    }
    public set schoolYear(value: string) {
        this._schoolYear = value;
    }

    public get imageURL(): string {
        return this._imageURL;
    }
    public set imageURL(value: string) {
        this._imageURL = value;
    }

    public get githubURL(): string {
        return this._githubURL;
    }
    public set githubURL(value: string) {
        this._githubURL = value;
    }

    public get youtubeURL(): string {
        return this._youtubeURL;
    }
    public set youtubeURL(value: string) {
        this._youtubeURL = value;
    }
}