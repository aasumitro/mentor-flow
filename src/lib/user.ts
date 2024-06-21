export interface User {
  id: string;
  nick_name: string;
  email: string;
}

export interface Availability {
  id: string;
  user_id: string;
  label: string;
  timezone: string;
  connected_with_google: boolean;
  connected_with_microsoft: boolean;
  days?: AvailabilityDay[] | null;
  installed_apps?: InstalledApp | null;
}

export interface AvailabilityDay {
  id: string;
  enabled: boolean;
  day: number;
  start_time: number;
  end_time: number;
  extend_times?: ExtendTime[] | null;
}

export interface ExtendTime {
  id: string;
  start_time: number;
  end_time: number;
}

export interface InstalledApp {
  calendars?: App[] | null;
  conferencing?: App[] | null;
}

export interface App {
  provider: string;
  name: string;
  logo: string;
  description: string;
  is_default: string;
  email?: string;
}

export interface ProfileStatus {
  isMentor: boolean;
  availabilityDataExist: boolean;
  calendarAppIntegration: boolean;
  conferenceAppIntegration: boolean;
}
