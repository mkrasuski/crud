
type Value = string | number
type Row = Record<string,Value>

type FieldDef = {
    name: string
    heading?: string
    desc?: string
    pk?: boolean
    type?: 'number' | 'string'
    value?: (r:Row) => Value
    computed?: (r:Row) => Value
    convIn?: (r:Row) => Value
    convOut?: (r:Row) => Value 
}

class Meta {
    _fields:FieldDef[] = []
    _byName:Record<string,FieldDef> = {}
    _byHeading:Record<string,FieldDef> = {}

    constructor(fields:FieldDef[]) {
        this._fields = fields
        fields.forEach(f => {
            this._byName[f.name] = f
            this._byHeading[f.heading || f.name] = f
        })
    }

    getValue(r:Row, name:string) {
        const f = this._byName[name]
        return (typeof f?.value === 'function') ? f.value(r) : r[f.name]
    }

    pkFields() {
        return this._fields.filter(f => f.pk)
    }
    
    editableFields() {
        return this._fields
            .filter(f => !f.value && !f.computed)
    }

    field(name:string) { return this._byName[name] }
    fieldByHeading(name:string) { return this._byHeading[name] }

    convertOut(r:Row) {
        const out = {}
        this._fields.forEach( ({ name, value, convOut }) => {

            if (typeof value === 'function') return // skip computed field
            
            let value = this.getValue(r, name)
        })
        return out as Row
    }
}
