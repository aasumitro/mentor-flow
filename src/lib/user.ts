export interface User {
  id: string;
  nick_name?: string;
  name?: string;
  email?: string;
  avatar?: string;
  full_name?: string;
  username?: string;
  location?: string;
}

export interface Availability {
  id: string;
  user_id: string;
  label: string;
  timezone: string;
  connected_with_google: boolean;
  connected_with_microsoft: boolean;
  days?: AvailabilityDay[] | null;
  day_overrides?: AvailabilityDayOverride | null;
  installed_apps?: InstalledApp | null;
  limit: Limit | null;
}

export interface AvailabilityDay {
  id: string;
  enabled: boolean;
  day: number;
  start_time: number;
  end_time: number;
  extend_times?: ExtendTime[] | null;
}


export interface AvailabilityDayOverride {
  [date: string]: DayOverride[];
}

export interface DayOverride {
  start_date: string;
  end_date: string;
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
  id: string;
  provider: string;
  name: string;
  logo: string;
  description: string;
  is_default: boolean;
  must_sync: boolean;
  email?: string;
}

export interface Limit {
  future_booking: number;
  booking_lead_time: number;
  // booking_duration: number;
}

export interface ProfileStatus {
  isMentor: boolean;
  availabilityDataExist: boolean;
  calendarAppIntegration: boolean;
  conferenceAppIntegration: boolean;
}

export interface MentorAvailabilitySlot {
  availability?: Availability | null;
  slots?: Slots | null;
  interval?: number | null;
}

export interface Slots {
  [date: string]: SlotTime[];
}

export interface SlotTime {
  time: string;
}

export interface Booking {
  id: string;
  mentor_data: User;
  mentee_data: User;
  datetime_string: string;
  session_interval: number;
  summary: string;
  description: string;
  meeting_url: string;
  additional_notes: string;
}


export interface Offer {
  id: string;
  enabled: boolean;
  profile_type_id: string;
  mentorship_areas_id: string[];
  type: string;
  description: string;
  session_durations: SessionDuration
}

export interface SessionDuration {
  id: string;
  number_of_sessions: number;
  duration_minute: number;
  coin_price: number;
}
