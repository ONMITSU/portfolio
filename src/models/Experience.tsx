export class Experience
{
    private _companyName : string = "";
    private _position : string = "";
    private _detail : string = "";
    private _skills : string[] = [];
    private _startDate : Date = new Date();
    private _endDate : Date = new Date();

    public constructor(init?:Partial<Experience>) {
        Object.assign(this, init);
    }

    get companyName() : string
    {
        return this._companyName;
    }
    set companyName(value : string)
    {
        this._companyName = value;
    }

    get position() : string
    {
        return this._position;
    }
    set position(value : string)
    {
        this._position = value;
    }

    get detail() : string
    {
        return this._detail;
    }
    set detail(value : string)
    {
        this._detail = value;
    }

    get skills() : string[]
    {
        return this._skills;
    }
    set skills(value : string[])
    {
        this._skills = value;
    }

    get startDate() : Date
    {
        return this._startDate;
    }
    set startDate(value : Date)
    {
        if (value <= new Date())
        {
            this._startDate = value;
        }
    }

    get endDate() : Date
    {
        return this._endDate;
    }
    set endDate(value : Date)
    {
        if (value <= new Date())
        {
            this._endDate = value;
        }
    }

    totalWorkedMonth() : number {
        let timeDifference : number = this.endDate.getTime() - this.startDate.getTime()
        return Math.round(timeDifference / (1000 * 60 * 60 * 24 * 30));
    }
}