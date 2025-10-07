import { useState } from 'react'
import { MinecraftAccount } from '@/types/account'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  MoreVertical, 
  Copy, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff,
  User,
  Mail,
  Calendar
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface AccountCardProps {
  account: MinecraftAccount
  onEdit: (account: MinecraftAccount) => void
  onDelete: (id: string) => void
  onCopy: (text: string) => void
}

export function AccountCard({ account, onEdit, onDelete, onCopy }: AccountCardProps) {
  const [showPassword, setShowPassword] = useState(false)

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date)
  }

  const copyToClipboard = (text: string) => {
    onCopy(text)
    // You could add a toast notification here
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-200 hover:border-primary/50">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-base">{account.username}</CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <Badge 
                  variant={account.type === 'premium' ? 'default' : 'secondary'}
                  className={account.type === 'premium' ? 'bg-primary text-white' : ''}
                >
                  {account.type}
                </Badge>
                {account.lastUsed && (
                  <span className="text-xs text-muted flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(account.lastUsed)}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onEdit(account)}>
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => copyToClipboard(account.username)}>
                <Copy className="w-4 h-4 mr-2" />
                Copy Username
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => copyToClipboard(account.email)}>
                <Mail className="w-4 h-4 mr-2" />
                Copy Email
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => onDelete(account.id)}
                className="text-red-400 focus:text-red-400"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted">Email</span>
            <Button
              variant="ghost"
              size="sm"
                onClick={() => copyToClipboard(account.email)}
              className="h-auto p-1 text-xs hover:text-primary"
            >
              {account.email}
              <Copy className="w-3 h-3 ml-1" />
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted">Password</span>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(account.password)}
                className="h-auto p-1 text-xs hover:text-primary font-mono"
              >
                {showPassword ? account.password : '••••••••'}
                <Copy className="w-3 h-3 ml-1" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowPassword(!showPassword)}
                className="h-6 w-6"
              >
                {showPassword ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
              </Button>
            </div>
          </div>
        </div>
        
        {account.notes && (
          <div className="pt-2 border-t border-border">
            <p className="text-xs text-muted">{account.notes}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
