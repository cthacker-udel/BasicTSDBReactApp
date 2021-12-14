import React from 'react';
import { Notification } from './Notification';
import { User } from './User';

export interface State{
    notifications: Notification[],
    toggleNotifications: boolean,
    users: User[]
    newUser: User
}