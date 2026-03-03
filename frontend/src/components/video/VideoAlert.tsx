import type { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface VideoAlertProps {
  icon: LucideIcon
  title: string
  description: string
  variant?: 'default' | 'destructive'
  action?: {
    label: string
    onClick: () => void
  }
}

export function VideoAlert({
  icon: Icon,
  title,
  description,
  variant = 'default',
  action,
}: VideoAlertProps) {
  return (
    <section
      className={cn(
        'flex min-h-screen w-full flex-col items-center justify-center px-8',
        variant === 'destructive'
          ? 'bg-gradient-to-b from-red-50/70 via-red-50/40 to-red-50/60'
          : 'bg-gradient-to-b from-slate-50/70 via-slate-50/40 to-slate-50/60',
      )}
    >
      <div className="flex max-w-md flex-col items-center gap-10 text-center">
        <div
          className={cn(
            'flex h-28 w-28 items-center justify-center rounded-2xl shadow-sm',
            variant === 'destructive'
              ? 'bg-red-100/90 text-red-600'
              : 'bg-slate-100/90 text-slate-600',
          )}
        >
          <Icon className="h-14 w-14" strokeWidth={1.5} />
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            {description}
          </p>
        </div>
        
        {action && (
          <Button
            size="lg"
            variant={variant === 'destructive' ? 'destructive' : 'default'}
            onClick={action.onClick}
            className="min-w-[160px] rounded-lg"
          >
            {action.label}
          </Button>
        )}
      </div>
    </section>
  )
}
