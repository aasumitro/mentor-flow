import { Availability, Offer, ProfileStatus, User } from "@/lib/user";
import { create } from "zustand";

interface States {
  profile: User | null;
  availability: Availability | null;
  profileStatus: ProfileStatus;
  offers: Offer[] | null;
}

interface Actions {
  setUserProfile: (profile: User | null) => void;
  setUserAvailability: (availability: Availability | null) => void;
  setOffers: (offers: Offer[] | null) => void;
}

export const useUserMentorStore = create<States & Actions>((set, get) => {
  const updateProfileStatus = () => {
    const { profile, availability } = get();
    const newStatus: Partial<ProfileStatus> = {
      isMentor: profile != null,
      availabilityDataExist: availability != null,
      calendarAppIntegration: (() => {
        if (availability?.installed_apps == null) {
          return false;
        }
        if (availability?.installed_apps?.calendars == null) {
          return false;
        }
        return availability?.installed_apps?.calendars?.length > 0;
      })(),
      conferenceAppIntegration: (() => {
        if (availability?.installed_apps == null) {
          return false;
        }
        if (availability?.installed_apps?.conferencing == null) {
          return false;
        }
        return availability?.installed_apps?.conferencing?.length > 0;
      })(),
    };
    set((state) => ({
      profileStatus: { ...state.profileStatus, ...newStatus },
    }));
  };

  return {
    profile: null,
    availability: null,
    profileStatus: {
      isMentor: false,
      availabilityDataExist: false,
      calendarAppIntegration: false,
      conferenceAppIntegration: false,
    },
    offers: null,
    setUserProfile: (profile: User | null) => {
      set({ profile });
      updateProfileStatus();
    },
    setUserAvailability: (availability: Availability | null) => {
      set({ availability });
      updateProfileStatus();
    },
    setOffers: (offers: Offer[] | null) => {
      set({ offers });
    },
  };
});
