import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type Info = {
  ip: string
  country: string
  region: string
  city: string
  lat: string
  lng: string
}

interface InfoTypes {
  history: Info[]
  addToHistory: (v: Info) => void
}

export const useInformationStore = create(
  persist<InfoTypes>(
    (set, get) => ({
      history: [],
      addToHistory: (v: Info) => set(() => ({ history: [v, ...get().history] }))
    }),
    {
      name: 'InformationStore',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
