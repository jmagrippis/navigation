﻿import Crumb from './config/Crumb';
import State from './config/State';

class StateContext {
    oldState: State = null;
    oldData: any = {};
    oldUrl: string = null;
    previousState: State = null;
    previousData: any = {};
    previousUrl: string = null;
    state: State = null;
    data: any = {};
    url: string = null;
    title: string = null;
    crumbs: Crumb[] = [];
    nextCrumb: Crumb = null;

    clear() {
        this.oldState = null;
        this.oldData = {};
        this.oldUrl = null;
        this.previousState = null;
        this.previousData = {};
        this.previousUrl = null;
        this.state = null;
        this.data = {};
        this.url = null;
        this.title = null;
        this.crumbs = [];
        this.nextCrumb = null;
    }

    includeCurrentData(data: any, keys?: string[]): any {
        if (!keys) {
            keys = [];
            for (var key in this.data)
                keys.push(key);
        }
        var newData: any = {};
        for (var i = 0; i < keys.length; i++)
            newData[keys[i]] = this.data[keys[i]];
        for (var key in data)
            newData[key] = data[key];
        return newData;
    }
}
export default StateContext;
