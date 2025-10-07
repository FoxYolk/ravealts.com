export interface MinecraftAccount {
  id: string
  username: string
  email: string
  password: string
  type: 'premium' | 'cracked'
  lastUsed?: Date
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export interface AccountFormData {
  username: string
  email: string
  password: string
  type: 'premium' | 'cracked'
  notes?: string
}
