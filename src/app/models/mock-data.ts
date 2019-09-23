import { OutageInterface } from '.';

export const mockLoadData: OutageInterface[] = [
    {
        outageId: 1,
        messages: ['Closed outage'],
        startDate: new Date('2019-09-20 18:00:00'),
        endDate: new Date()
    },
    {
        outageId: 2,
        messages: ['Open outage', '2nd message!!', 'Last message'],
        startDate: new Date('2019-09-22 10:00:00')
    }
]