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
  days?: AvailabilityDays[] | null;
  installed_apps?: InstalledApp | null;
}

export interface AvailabilityDays {
  id: string;
  enabled: boolean;
  day: number;
  start_time: number;
  end_time: number;
}

export interface InstalledApp {
  calendars?: App[] | null
  conferencing?: App[] | null
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
  isMentor: boolean
  availabilityDataExist: boolean
  calendarAppIntegration: boolean
  conferenceAppIntegration: boolean
}

export enum OAuthProvider {
  GOOGLE = "google",
  MICROSOFT = "microsoft",
}

const API_URL = "http://localhost:3000/api";

export const API_PATH = {
  PROFILE: `${API_URL}/v2/accounts/detail`,
  AVAILABILITY: `${API_URL}/v1/mentor-settings/availabilities`,
  OAUTH_WEB_CONNECT: (provider: string) =>
    `${API_URL}/v1/mentor-settings/oauth/${provider}/connect`,
};

export const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    let errorMessage: string;
    // Check if the content type is JSON
    if (response.headers.get("Content-Type")?.includes("application/json")) {
      // If JSON, parse the error message from response.json()
      const errorData = await response.json();
      errorMessage = errorData.message || JSON.stringify(errorData);
    } else {
      // Otherwise, get error message from response.text()
      errorMessage = await response.text();
    }
    // Throw an error with the HTTP status and error message
    throw new Error(`HTTP Error: ${response.status} - ${errorMessage}`);
  }
  const data: T = await response.json();
  return data;
};
