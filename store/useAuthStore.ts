import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface AuthTypes {
  mobile: string
  setMobile: (v: string) => void
}

export const useAuthStore = create(
  persist<AuthTypes>(
    set => ({
      mobile: '',
      setMobile: v => set(() => ({ mobile: v }))
    }),
    {
      name: 'authStore',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
