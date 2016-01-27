﻿import settings = require('../settings');
import TypeConverter = require('./TypeConverter');

class ArrayConverter extends TypeConverter {
    private converter: TypeConverter;
    private static SEPARATOR = '-';
    private static SEPARATOR1 = '1-';
    private static SEPARATOR2 = '2-';

    constructor(converter: TypeConverter, key: string) {
        super(key, converter.name + 'array');
        this.converter = converter;
    }

    convertFrom(val: string | string[], separable: boolean): any {
        var arr = [];
        if (typeof val === 'string') {
            if (!separable || settings.combineArray) {
                var vals = val.split(ArrayConverter.SEPARATOR1);
                for (var i = 0; i < vals.length; i++) {
                    if (vals[i].length !== 0)
                        arr.push(this.converter.convertFrom(vals[i].replace(new RegExp(ArrayConverter.SEPARATOR2, 'g'), ArrayConverter.SEPARATOR)));
                    else
                        arr.push(null);
                }
            } else {
                arr.push(this.converter.convertFrom(val));
            }
        } else {
            for(var i = 0; i < val.length; i++) {
                if (val[i].length !== 0)
                    arr.push(this.converter.convertFrom(val[i]));
                else
                    arr.push(null);
            }
        }
        return arr;
    }

    convertTo(val: any[]): { val: string, arrayVal?: string[] } {
        var vals = [];
        var arr = [];
        for (var i = 0; i < val.length; i++) {
            if (val[i] != null && val[i].toString()) {
                var convertedValue = this.converter.convertTo(val[i]).val;
                arr.push(convertedValue);
                vals.push(convertedValue.replace(new RegExp(ArrayConverter.SEPARATOR, 'g'), ArrayConverter.SEPARATOR2));
            } else {
                arr.push('');
                vals.push('');
            }
        }
        return { val: vals.join(ArrayConverter.SEPARATOR1), arrayVal: !settings.combineArray ? arr : null };
    }
}
export = ArrayConverter;