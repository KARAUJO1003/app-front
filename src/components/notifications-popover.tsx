"use client"

import { useState } from "react"
import { Bell } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"

// Simulação de dados - em produção, viriam do banco de dados
const notifications = [
  {
    id: "1",
    type: "SHARING_REQUEST",
    message: "Maria Silva compartilhou uma meta com você",
    read: false,
    createdAt: new Date(2025, 4, 5, 14, 30),
  },
  {
    id: "2",
    type: "DEPOSIT_REMINDER",
    message: "Lembrete: Depósito mensal para 'Economizar para viagem'",
    read: false,
    createdAt: new Date(2025, 4, 10, 9, 0),
  },
  {
    id: "3",
    type: "CONTRIBUTION_RECEIVED",
    message: "Maria Silva contribuiu com R$ 1000 para 'Reforma da casa'",
    read: true,
    createdAt: new Date(2025, 4, 3, 16, 45),
  },
]

export function NotificationsPopover() {
  const [localNotifications, setLocalNotifications] = useState(notifications)
  const [open, setOpen] = useState(false)

  const unreadCount = localNotifications.filter((n) => !n.read).length

  const handleMarkAsRead = async (id: string) => {
    try {
      // Em produção, chamaria a action real
      // await markNotificationAsRead(id);
      setLocalNotifications(localNotifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
    } catch (error) {
      console.error("Erro ao marcar notificação como lida:", error)
    }
  }

  const handleMarkAllAsRead = async () => {
    try {
      // Em produção, chamaria a action real para todas as notificações
      setLocalNotifications(localNotifications.map((n) => ({ ...n, read: true })))
    } catch (error) {
      console.error("Erro ao marcar todas notificações como lidas:", error)
    }
  }

  const formatNotificationDate = (date: Date) => {
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMins / 60)
    const diffDays = Math.floor(diffHours / 24)

    if (diffMins < 60) {
      return `${diffMins} min atrás`
    } else if (diffHours < 24) {
      return `${diffHours} h atrás`
    } else {
      return `${diffDays} d atrás`
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
              {unreadCount}
            </span>
          )}
          <span className="sr-only">Notificações</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="flex items-center justify-between">
          <h4 className="font-medium">Notificações</h4>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-0 text-xs text-muted-foreground"
              onClick={handleMarkAllAsRead}
            >
              Marcar todas como lidas
            </Button>
          )}
        </div>
        <Separator className="my-2" />
        {localNotifications.length === 0 ? (
          <div className="py-6 text-center text-sm text-muted-foreground">Nenhuma notificação</div>
        ) : (
          <div className="max-h-[300px] overflow-y-auto">
            {localNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`mb-2 cursor-pointer rounded-md p-2 ${notification.read ? "bg-background" : "bg-muted"}`}
                onClick={() => !notification.read && handleMarkAsRead(notification.id)}
              >
                <div className="flex justify-between">
                  <p className={`text-sm ${notification.read ? "font-normal" : "font-medium"}`}>
                    {notification.message}
                  </p>
                  {!notification.read && <span className="ml-2 h-2 w-2 rounded-full bg-primary"></span>}
                </div>
                <p className="text-xs text-muted-foreground">{formatNotificationDate(notification.createdAt)}</p>
              </div>
            ))}
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}
