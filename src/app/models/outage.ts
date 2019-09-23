import { OutageStatus } from './enums';
import * as moment from 'moment';

// We are going to assume that this is the shape of the data as obtained from the end-point...
export interface OutageInterface {
    outageId: number;
    startDate: Date;
    messages: string[];
    endDate?: Date;
}

// ...and we will implement some read-only/calculated propoerties
export class Outage implements OutageInterface {
    outageId: number;
    startDate: Date;
    messages: string[];
    endDate?: Date;
    
    constructor (OutageInterface: OutageInterface) {
        this.outageId = OutageInterface.outageId;
        this.startDate = OutageInterface.startDate;
        this.messages = OutageInterface.messages;
        this.endDate = OutageInterface.endDate;
    }
    get status(): OutageStatus {
        if (this.endDate) {
            return OutageStatus.Closed;
        } else {
            return OutageStatus.Open;
        }
    }
    get statusStr(): string {
        if (this.status === OutageStatus.Open) {
            return 'Open';
        }
        return 'Closed';
    }
    get startDateStr(): string {
        return moment.utc(this.startDate).format('MM/DD/YYYY HH:mm');
    }
    get endDateStr(): string {
        if (this.status === OutageStatus.Closed) {
         return moment.utc(this.endDate).format('MM/DD/YYYY HH:mm');
        }
        return null;
    }
    // if this outage is still open, returns how long this outage has been open
    // if it's closed, returns how long it was opened, or null if there is an unknown status
    get durationSeconds(): number {
        switch (this.status) {
            case OutageStatus.Closed:
                return moment(this.endDate).diff(moment(this.startDate), 'seconds');
            case OutageStatus.Open:
                return moment().diff(moment(this.startDate), 'seconds');
            default:
                return null;
        }
    }
    //  moment's humanize() will display something like '2 hours', '9 months', etc
    get durationStr(): string {
        return moment.duration(this.durationSeconds, 'seconds').humanize();
    }
    // returns the last message or null if no messages
    get lastMessage(): string {
        if ((this.messages || []).length > 0) {
            return this.messages[this.messages.length -1];
        }
        return null;
    }
}