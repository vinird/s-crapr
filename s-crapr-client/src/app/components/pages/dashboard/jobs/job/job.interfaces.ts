export interface JobFormValue {
  id: string;
  scrapperId: string;
  description: string;
  schedule: {
    minute: string
    hour: string
    dayOfMonth: string
    month: string
    dayOfWeek: string
  };
  enabled: boolean;
};
