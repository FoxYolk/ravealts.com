import { useState, useEffect } from 'react'
import { MinecraftAccount, AccountFormData } from '@/types/account'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface AccountFormProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: AccountFormData) => void
  account?: MinecraftAccount | null
  title: string
}

export function AccountForm({ isOpen, onClose, onSubmit, account, title }: AccountFormProps) {
  const [formData, setFormData] = useState<AccountFormData>({
    username: '',
    email: '',
    password: '',
    type: 'premium',
    notes: ''
  })

  useEffect(() => {
    if (account) {
      setFormData({
        username: account.username,
        email: account.email,
        password: account.password,
        type: account.type,
        notes: account.notes || ''
      })
    } else {
      setFormData({
        username: '',
        email: '',
        password: '',
        type: 'premium',
        notes: ''
      })
    }
  }, [account, isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
    onClose()
  }

  const handleChange = (field: keyof AccountFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {account ? 'Update the account details below.' : 'Add a new Minecraft account to your collection.'}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={formData.username}
              onChange={(e) => handleChange('username', e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          
          <div className="space-y-3">
            <Label>Account Type</Label>
            <RadioGroup
              value={formData.type}
              onValueChange={(value) => handleChange('type', value as 'premium' | 'cracked')}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="premium" id="premium" />
                <Label htmlFor="premium">Premium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cracked" id="cracked" />
                <Label htmlFor="cracked">Cracked</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
              placeholder="Add any notes about this account..."
              rows={3}
            />
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {account ? 'Update Account' : 'Add Account'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
