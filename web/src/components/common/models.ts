export interface User {
  id: number;
  email: string;
  password: string;
}

export enum SliceStatus {
  Idle = 'idle',
  Loading = 'loading',
  Succeeded = 'succeeded',
  Failed = 'failed',
}
