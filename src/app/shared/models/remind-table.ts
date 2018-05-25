import { UserName } from './user-name';
import { InviteStatus } from './invite-status';

export interface RemindTableRow {
  avatar?: string;
  name: UserName;
  email: string;
  status: InviteStatus;
}

export interface RemindTableFilter {
  names: string;
  members: number;
  labels: string;
}

export interface RemindTable {
  rows: RemindTableRow[];
  filter: RemindTableFilter;
}

export const RemindTableMock: RemindTable = {
  rows: [
    {
      name: {
        firstName: 'Julie',
        lastName: 'Goff'
      },
      email: 'julie.goff@organization.com',
      status: {
        invited: new Date('2017-9-28'),
        reminders: [
          new Date('2017-9-4'),
          new Date('2017-9-10')
        ]
      }
    },
    {
      name: {
        firstName: 'Steve',
        lastName: 'Patterson'
      },
      email: 'stevepatterson@gmail.com',
      status: {
        invited: new Date('2017-9-28'),
        reminders: [
          new Date('2017-9-4')
        ]
      }
    },
    {
      name: {
        firstName: 'Julie',
        lastName: 'Patterson'
      },
      email: 'juliepatterson@gmail.com',
      status: {
        invited: new Date('2017-9-28'),
        reminders: [
          new Date('2017-9-4')
        ]
      }
    }
  ],
  filter: {
    names: '',
    members: 0,
    labels: ''
  }
};
